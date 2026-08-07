import { ArrowUpRight } from "lucide-react"; // or react-icons, whichever you're using
import IdCard from "./IdCard";

export default function Hero() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center gap-16 px-10 py-20 md:flex-row md:justify-between">
      
      <div className="max-w-xl">
        <div className="mb-4 flex items-center gap-2 text-sm font-semibold tracking-widest text-blue-600">
          <span className="h-2 w-2 rounded-full bg-blue-600" />
          SECURITY ANALYST / SOFTWARE DEVELOPMENT
        </div>

        <h1 className="text-7xl font-black leading-[0.95] tracking-tight text-slate-900 md:text-6xl">
          DESIGN.
          <br />
          <span className="text-transparent [-webkit-text-stroke:2px_#2563eb]">
             DEVELOP. DEFEND.
          </span>
        </h1>

        <p className="mt-6 text-lg text-slate-500">
          Building secure software and continuously expanding expertise in cybersecurity and cloud technologies.
        </p>

        
         <a href="#projects"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition-colors hover:bg-blue-700"
        >
          Explore My Work
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>

      
      <div className="flex w-64 shrink-0 justify-center pt-10">
        
             <IdCard />
        
      </div>
      
    </section>
  );
}