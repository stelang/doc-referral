export default function ErrorMessage({ message, onRetry }) {
  return (
    <div className="bg-slate-800/50 backdrop-blur-xl border border-red-500/50 rounded-2xl shadow-2xl p-12 text-center">
      <svg
        className="mx-auto h-16 w-16 text-red-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
      <h3 className="mt-4 text-lg font-medium text-red-300">Failed to Load Data</h3>
      <p className="mt-2 text-sm text-slate-400 max-w-md mx-auto">
        {message || 'Unable to fetch doctor information. Please check your internet connection and try again.'}
      </p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-6 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-lg transition"
        >
          Try Again
        </button>
      )}
    </div>
  );
}
