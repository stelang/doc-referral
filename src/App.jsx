import { useState, useMemo } from 'react';
import SearchFilters from './components/SearchFilters';
import DoctorTable from './components/DoctorTable';
import { sampleDoctors, getSpecializations, getAreas } from './data/sampleDoctors';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialization, setSelectedSpecialization] = useState('');
  const [selectedArea, setSelectedArea] = useState('');

  // Get filter options
  const specializations = useMemo(() => getSpecializations(sampleDoctors), []);
  const areas = useMemo(() => getAreas(sampleDoctors), []);

  // Filter doctors based on search and filters
  const filteredDoctors = useMemo(() => {
    return sampleDoctors.filter((doctor) => {
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
  }, [searchTerm, selectedSpecialization, selectedArea]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="bg-slate-900/50 backdrop-blur-xl border-b border-slate-700/50 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent mb-4">
              Doctor Referral Directory
            </h1>
            <p className="text-slate-300 text-base md:text-lg">
              Mumbai - Trusted doctor references from your community
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
            <span className="font-semibold text-cyan-400">{sampleDoctors.length}</span> doctors
          </p>
        </div>

        {/* Doctor Table */}
        <DoctorTable doctors={filteredDoctors} />
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
