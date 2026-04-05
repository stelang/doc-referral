import { useState, useMemo, useEffect } from 'react';
import SearchFilters from './components/SearchFilters';
import DoctorTable from './components/DoctorTable';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import { sampleDoctors } from './data/sampleDoctors';
import { fetchDoctorsFromSheet, getSpecializations, getAreas } from './utils/googleSheets';
import { config } from './config';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialization, setSelectedSpecialization] = useState('');
  const [selectedArea, setSelectedArea] = useState('');
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch doctors data on mount
  useEffect(() => {
    loadDoctors();
  }, []);

  const loadDoctors = async () => {
    setLoading(true);
    setError(null);

    try {
      // If Google Sheets URL is configured, fetch from there
      if (config.GOOGLE_SHEET_URL && !config.USE_SAMPLE_DATA) {
        const fetchedDoctors = await fetchDoctorsFromSheet(config.GOOGLE_SHEET_URL);
        setDoctors(fetchedDoctors);
      } else {
        // Otherwise use sample data
        setDoctors(sampleDoctors);
      }
    } catch (err) {
      console.error('Error loading doctors:', err);
      setError(err.message);
      // Fallback to sample data on error
      setDoctors(sampleDoctors);
    } finally {
      setLoading(false);
    }
  };

  // Get filter options
  const specializations = useMemo(() => getSpecializations(doctors), [doctors]);
  const areas = useMemo(() => getAreas(doctors), [doctors]);

  // Filter doctors based on search and filters
  const filteredDoctors = useMemo(() => {
    return doctors.filter((doctor) => {
      // Search filter
      const matchesSearch = searchTerm === '' ||
        doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doctor.hospital.toLowerCase().includes(searchTerm.toLowerCase());

      // Specialization filter
      const matchesSpecialization = selectedSpecialization === '' ||
        doctor.specialization === selectedSpecialization;

      // Area filter
      const matchesArea = selectedArea === '' ||
        doctor.area === selectedArea;

      return matchesSearch && matchesSpecialization && matchesArea;
    });
  }, [doctors, searchTerm, selectedSpecialization, selectedArea]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="bg-slate-900/50 backdrop-blur-xl border-b border-slate-700/50 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent mb-4">
              {config.APP_TITLE}
            </h1>
            <p className="text-slate-300 text-base md:text-lg">
              {config.CITY_NAME} - {config.APP_SUBTITLE}
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {loading ? (
          <LoadingSpinner />
        ) : error && doctors.length === 0 ? (
          <ErrorMessage message={error} onRetry={loadDoctors} />
        ) : (
          <>
            {/* Show warning if using sample data */}
            {config.USE_SAMPLE_DATA && (
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mb-6">
                <p className="text-yellow-300 text-sm">
                  <strong>Note:</strong> Currently showing sample data. Configure Google Sheets URL in{' '}
                  <code className="bg-slate-900/50 px-2 py-1 rounded">src/config.js</code> to use real data.
                </p>
              </div>
            )}

            {/* Search and Filters */}
            <SearchFilters
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              selectedSpecialization={selectedSpecialization}
              setSelectedSpecialization={setSelectedSpecialization}
              selectedArea={selectedArea}
              setSelectedArea={setSelectedArea}
              specializations={specializations}
              areas={areas}
            />

            {/* Results Count */}
            <div className="mb-6">
              <p className="text-base text-slate-400">
                Showing <span className="font-semibold text-cyan-400">{filteredDoctors.length}</span> of{' '}
                <span className="font-semibold text-cyan-400">{doctors.length}</span> doctors
              </p>
            </div>

            {/* Doctor Table */}
            <DoctorTable doctors={filteredDoctors} />
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-sm text-slate-400 space-y-2">
            <p>
              This directory is maintained by our community for our community.
            </p>
            <p>
              For updates or corrections, please contact the administrator.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
