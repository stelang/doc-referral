export default function SearchFilters({
  searchTerm,
  setSearchTerm,
  selectedSpecialization,
  setSelectedSpecialization,
  selectedArea,
  setSelectedArea,
  specializations,
  areas
}) {
  return (
    <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-2xl p-8 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Search Input */}
        <div>
          <label htmlFor="search" className="block text-sm font-medium text-slate-300 mb-3">
            Search by Name or Hospital
          </label>
          <input
            id="search"
            type="text"
            placeholder="Type to search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3.5 bg-slate-900/50 border border-slate-600 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition text-slate-100 placeholder-slate-500"
          />
        </div>

        {/* Specialization Filter */}
        <div>
          <label htmlFor="specialization" className="block text-sm font-medium text-slate-300 mb-3">
            Specialization
          </label>
          <select
            id="specialization"
            value={selectedSpecialization}
            onChange={(e) => setSelectedSpecialization(e.target.value)}
            className="w-full px-4 py-3.5 bg-slate-900/50 border border-slate-600 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition text-slate-100"
          >
            <option value="">All Specializations</option>
            {specializations.map((spec) => (
              <option key={spec} value={spec}>
                {spec}
              </option>
            ))}
          </select>
        </div>

        {/* Area Filter */}
        <div>
          <label htmlFor="area" className="block text-sm font-medium text-slate-300 mb-3">
            Area
          </label>
          <select
            id="area"
            value={selectedArea}
            onChange={(e) => setSelectedArea(e.target.value)}
            className="w-full px-4 py-3.5 bg-slate-900/50 border border-slate-600 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition text-slate-100"
          >
            <option value="">All Areas</option>
            {areas.map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Clear Filters Button */}
      {(searchTerm || selectedSpecialization || selectedArea) && (
        <div className="mt-6">
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedSpecialization('');
              setSelectedArea('');
            }}
            className="text-sm text-cyan-400 hover:text-cyan-300 font-medium transition"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}
