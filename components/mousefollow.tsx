import 'xtendui/src/mousefollow';
import 'xtendui';
import React from 'react';

function MouseFollow({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="min-h-screen text-black bg-clight dark:bg-black dark:text-white "
      data-xt-mousefollow
    >
      {/* problem getting error here */}
      <span
        className="fixed xt-mousefollow xt-loader group"
        data-xt-mousefollow-target
      >
        <span className="absolute w-8 h-8 transition opacity-0 group-in:opacity-100">
          <svg viewBox="0 0 240 240">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              fillOpacity="0"
              className="w-3 h-3"
              xmlns="http://www.w3.org/2000/svg"
              color="#c800f0"
            >
              <path
                clipRule="evenodd"
                d="M19.503 9.97c1.204.489 1.112 2.224-.137 2.583l-6.306 1.813-2.88 5.895c-.57 1.168-2.295.957-2.568-.314L4.677 6.257A1.369 1.369 0 016.53 4.7L19.503 9.97z"
                stroke="#c800f0"
                strokeWidth="3"
              ></path>
            </svg>
          </svg>
        </span>
      </span>
      {children}
      {/* used to include the rest of the page here in app.tsx */}
    </div>
  );
}

export default MouseFollow;
