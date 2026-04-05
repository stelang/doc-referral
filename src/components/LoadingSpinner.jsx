export default function LoadingSpinner() {
  return (
    <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-2xl p-12 text-center">
      <div className="flex flex-col items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-t-2 border-cyan-400"></div>
        <h3 className="mt-6 text-lg font-medium text-slate-300">Loading doctors...</h3>
        <p className="mt-2 text-sm text-slate-500">Fetching latest data from Google Sheets</p>
      </div>
    </div>
  );
}
