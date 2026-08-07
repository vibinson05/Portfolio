"use client";

import { FiCalendar, FiMapPin, FiBriefcase } from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";

const EDUCATION = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "PES University ",
    duration: "2025 - Present",
    location: "Bengaluru, India",
    
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "T.John college",
    duration: "2021 - 2024",
    location: "Bengaluru, India",
    
  },
];

export default function Experience() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400">
            History
          </h2>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            Work Experience
          </h1>
          
          <div className="mt-8 flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-slate-50/50 p-10 text-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-400">
              <FiBriefcase className="h-6 w-6" />
            </span>
            <h3 className="mt-4 text-sm font-semibold text-slate-700">No experience added yet</h3>
            <p className="mt-1 max-w-xs text-xs text-slate-400 leading-relaxed">
              Work experience details will be displayed here soon. Stay tuned for updates!
            </p>
          </div>
        </div>

     
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400">
            Qualifications
          </h2>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            Education
          </h1>

          <div className="mt-8 space-y-6">
            {EDUCATION.map((edu, idx) => (
              <div 
                key={idx}
                className="relative rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <FaGraduationCap className="h-5 w-5" />
                  </span>
                  <div className="space-y-1.5">
                    <h3 className="text-base font-semibold text-slate-900 leading-snug">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-medium text-slate-600">
                      {edu.institution}
                    </p>
                    
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-400">
                      <span className="flex items-center gap-1">
                        <FiCalendar className="h-3.5 w-3.5" />
                        {edu.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <FiMapPin className="h-3.5 w-3.5" />
                        {edu.location}
                      </span>
                    </div>

                   
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}