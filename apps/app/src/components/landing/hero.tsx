import { ChevronRight } from "lucide-react";
import { Link } from "react-router";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center relative">
      <div
        className="absolute inset-0 blur-xl z-10"
        style={{
          background:
            "linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(232, 121, 249, 0.26) 40.92%, rgba(204, 171, 238, 0) 70.35%)",
        }}
      ></div>
      <section className="max-w-full mx-auto z-20 h-screen">
        <div className="max-w-screen-xl z-10 mx-auto px-4 py-28 gap-12 text-gray-600 md:px-8">
          <div className="space-y-5 max-w-3xl leading-0  lg:leading-5 mx-auto text-center">
            <h1 className="text-sm group font-geist mx-auto px-5 py-2 bg-gradient-to-tr dark:from-zinc-300/5 dark:via-gray-400/5 from-purple-500/30 text-foreground to-transparent  border-[2px] border-white/5 rounded-3xl w-fit">
              Build your dream projects with QuickPortfolio
              <ChevronRight className="inline w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" />
            </h1>

            <h2 className="text-4xl tracking-tighter font-geist  bg-clip-text dark:bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)] text-transparent bg-[linear-gradient(180deg,_#370e35_0%,_rgba(255,_255,_255,_0.00)_202.08%)]  mx-auto md:text-6xl">
              Bring your design visions to life with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r dark:from-purple-300 dark:to-orange-200 from-purple-700 to-orange-700">
                QuickPortfolio with ease
              </span>
            </h2>

            <p className="max-w-2xl mx-auto text-foreground/45">
              QuickPortfolio offers everything you need to craft responsive,
              modern designs—faster than ever.
            </p>
            <div className="items-center  justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
              <span className="relative inline-block overflow-hidden rounded-full p-[1.5px]">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950  text-xs font-medium text-gray-50 backdrop-blur-3xl">
                  <Link
                    to="/auth/register"
                    className="inline-flex rounded-full text-center group items-center w-full justify-center   bg-gradient-to-tr from-zinc-300/5 via-purple-400/20 to-transparent    text-white border-input border-[1px] hover:bg-transparent/90 transition-colors sm:w-auto py-4 px-10"
                  >
                    Build Your Dream Project
                  </Link>
                </div>
              </span>
            </div>
          </div>
          <div className="mt-32 mx-10">
            <img
              src="https://farmui.vercel.app/dashboard.png"
              className="w-full shadow-lg rounded-lg border dark:invert-0 invert"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
}
