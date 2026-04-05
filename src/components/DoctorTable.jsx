export default function DoctorTable({ doctors }) {
  if (doctors.length === 0) {
    return (
      <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-2xl p-12 text-center">
        <svg
          className="mx-auto h-16 w-16 text-slate-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h3 className="mt-4 text-lg font-medium text-slate-300">No doctors found</h3>
        <p className="mt-2 text-sm text-slate-500">
          Try adjusting your search or filter criteria
        </p>
      </div>
    );
  }

  return (
    <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-2xl overflow-hidden">
      {/* Mobile View - Cards */}
      <div className="md:hidden">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="border-b border-slate-700/50 p-6 hover:bg-slate-700/30 transition">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-semibold text-lg text-slate-100 mb-2">{doctor.name}</h3>
                <span className="inline-block bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-400 text-xs px-3 py-1.5 rounded-full font-medium">
                  {doctor.specialization}
                </span>
              </div>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex items-start">
                <span className="text-slate-500 w-24 flex-shrink-0">Hospital:</span>
                <span className="text-slate-300">{doctor.hospital}</span>
              </div>
              <div className="flex items-start">
                <span className="text-slate-500 w-24 flex-shrink-0">Phone:</span>
                <a href={`tel:${doctor.phone}`} className="text-cyan-400 hover:text-cyan-300 transition">
                  {doctor.phone}
                </a>
              </div>
              <div className="flex items-start">
                <span className="text-slate-500 w-24 flex-shrink-0">Area:</span>
                <span className="text-slate-300">{doctor.area}</span>
              </div>
              {doctor.notes && (
                <div className="flex items-start mt-4 pt-4 border-t border-slate-700/50">
                  <span className="text-slate-500 w-24 flex-shrink-0">Notes:</span>
                  <span className="text-slate-400 text-xs leading-relaxed">{doctor.notes}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Desktop View - Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-700/50">
          <thead className="bg-slate-900/50">
            <tr>
              <th className="px-8 py-5 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                Name
              </th>
              <th className="px-8 py-5 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                Specialization
              </th>
              <th className="px-8 py-5 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                Hospital/Clinic
              </th>
              <th className="px-8 py-5 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                Phone
              </th>
              <th className="px-8 py-5 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                Area
              </th>
              <th className="px-8 py-5 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                Notes
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-700/50">
            {doctors.map((doctor) => (
              <tr key={doctor.id} className="hover:bg-slate-700/30 transition">
                <td className="px-8 py-6 whitespace-nowrap">
                  <div className="text-sm font-medium text-slate-100">{doctor.name}</div>
                </td>
                <td className="px-8 py-6 whitespace-nowrap">
                  <span className="inline-flex px-3 py-1.5 text-xs font-semibold rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-400">
                    {doctor.specialization}
                  </span>
                </td>
                <td className="px-8 py-6">
                  <div className="text-sm text-slate-300">{doctor.hospital}</div>
                </td>
                <td className="px-8 py-6 whitespace-nowrap">
                  <a
                    href={`tel:${doctor.phone}`}
                    className="text-sm text-cyan-400 hover:text-cyan-300 transition"
                  >
                    {doctor.phone}
                  </a>
                </td>
                <td className="px-8 py-6 whitespace-nowrap">
                  <div className="text-sm text-slate-300">{doctor.area}</div>
                </td>
                <td className="px-8 py-6">
                  <div className="text-sm text-slate-400 max-w-xs leading-relaxed">{doctor.notes}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
