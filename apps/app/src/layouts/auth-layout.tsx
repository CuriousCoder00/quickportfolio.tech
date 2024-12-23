import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-screen min-h-dvh flex items-center justify-center md:pt-10 pt-16 relative">
      <div className="absolute top-0 -right-60 bottom-0 -left-96 glare-image opacity-20 blur-md dark:hue-rotate-0 hue-rotate-180" />
      <div className="absolute top-1 -right-96 bottom-0 -left-48 bg-opacity-40 dark:mix-blend-color-dodge mix-blend-screen blur-md light-rays animate-rays" />
      <div className="w-full h-full no-scrollbar z-50 flex items-center">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
