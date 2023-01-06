import 'xtendui/src/mousefollow';
import 'xtendui';

function MouseFollow({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="min-h-screen text-black bg-clight dark:bg-black dark:text-white "
      data-xt-mousefollow
    >
      <span
        className="fixed xt-mousefollow xt-loader group"
        data-xt-mousefollow-target
      >
        <span className="absolute inset-0 w-6 h-6 m-auto ml-4 -mt-1 text-pink-500 transition opacity-0 xt-spinner group-in:opacity-100">
          <svg
            viewBox="0 0 240 240"
            className="absolute"
            preserveAspectRatio="xMinYMin meet"
          >
            <circle
              className="origin-center opacity-25 stroke-current"
              fill="none"
              strokeWidth="30"
              cx="120"
              cy="120"
              r="100"
              strokeDasharray="628"
              strokeDashoffset="0"
              pathLength="628"
            />
          </svg>
          <svg viewBox="0 0 240 240">
            <circle
              className="origin-center stroke-current relativext-icon animate-xt-spinner"
              fill="none"
              strokeWidth="30"
              cx="120"
              cy="120"
              r="100"
              strokeDasharray="628"
              strokeDashoffset="628"
              pathLength="628"
            />
          </svg>
        </span>
      </span>
      {children}
      {/* used to include the rest of the page here in app.tsx */}
    </div>
  );
};

export default MouseFollow;