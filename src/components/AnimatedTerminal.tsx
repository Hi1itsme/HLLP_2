import React from "react";

export const AnimatedTerminal: React.FC = () => {
  return (
    <div className="relative aspect-video rounded-2xl bg-gray-900 px-5 py-3 shadow-xl before:pointer-events-none before:absolute before:-inset-5 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/80),transparent)1] after:absolute after:-inset-5 after:-z-10 after:border-x after:[border-image:linear-gradient(to_bottom,transparent,theme(colors.slate.300/80),transparent)1]">
      <div className="relative mb-8 flex items-center justify-between before:block before:h-[9px] before:w-[41px] before:bg-[length:16px_9px] before:[background-image:radial-gradient(circle_at_4.5px_4.5px,var(--tw-prose-invert-body)_4.5px,transparent_0)] after:w-[41px]">
        <span className="text-[13px] font-medium text-white">HodLotto</span>
      </div>
      <div className="font-mono text-gray-200">
        <span className="animate-[code-1_10s_infinite] text-gray-200">npm login</span>{" "}
        <span className="animate-[code-2_10s_infinite]">--registry=https://npm.pkg.github.com</span>
        <br />
        <span className="animate-[code-3_10s_infinite]">--scope=@phanatic</span>{" "}
        <span className="animate-[code-4_10s_infinite]">Successfully logged-in.</span>
        <br />
        <br />
        <span className="animate-[code-5_10s_infinite] text-gray-200">npm publish</span>
        <br />
        <span className="animate-[code-6_10s_infinite]">Package published.</span>
      </div>
    </div>
  );
};
