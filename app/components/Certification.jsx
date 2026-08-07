"use client";

import { FiExternalLink, FiCalendar, FiAward } from "react-icons/fi";
import { FaAws } from "react-icons/fa";


/*
const CERTIFICATIONS = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    icon: FaAws,
    iconClass: "text-orange-500 bg-orange-50",
    issueDate: "Nov 2025",
    expiryDate: "Nov 2028",
    credentialId: "AWS-CCP-XXXXXX", // Replace with your actual Credential ID
    credentialUrl: "https://www.linkedin.com/in/your-profile", // Replace with LinkedIn/Credly link
    verified: true,
  },
  
  {
    title: "Security Certification Placeholder",
    issuer: "Security Organization",
    icon: FaAws, 
    iconClass: "text-blue-500 bg-blue-50",
    issueDate: "Coming Soon",
    expiryDate: "—",
    credentialId: "PENDING",
    credentialUrl: "#",
    verified: false,
  }
];
*/

export default function Certifications() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="space-y-8">
        {/* TOP: Intro copy */}
        <div className="max-w-2xl">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400">
            Credentials
          </h2>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 leading-tight">
            CERTIFIED & VERIFIED.
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-500">
            Licenses & certifications earned  with verified credentials 
          </p>
        </div>

        
        <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50/50 p-16 text-center shadow-sm">
          <div className="flex flex-col items-center justify-center space-y-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-400">
              <FiAward className="h-6 w-6" />
            </span>
            <div className="space-y-1.5">
              <h3 className="text-sm font-semibold text-slate-700">Certifications Under Progress</h3>
              <p className="mx-auto max-w-xs text-xs text-slate-400 leading-relaxed">
                Certification verification and details are currently being updated. Please check back later.
              </p>
            </div>
          </div>
        </div>

        
        {/*
        <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-6 shadow-sm">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {CERTIFICATIONS.map((cert, idx) => (
              <div 
                key={idx}
                className="group flex flex-col justify-between rounded-xl border border-slate-200/60 bg-white p-4 shadow-sm transition-all hover:border-slate-300 hover:shadow-md"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-lg ${cert.iconClass}`}>
                      <cert.icon className="h-5 w-5" />
                    </span>
                    {cert.verified && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[9px] font-semibold text-emerald-600">
                        <span className="h-1 w-1 rounded-full bg-emerald-500" />
                        Verified
                      </span>
                    )}
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      {cert.issuer}
                    </span>
                    <h3 className="mt-1 text-sm font-semibold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
                      {cert.title}
                    </h3>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 space-y-2">
                  <div className="flex items-center gap-1 text-[11px] text-slate-400">
                    <FiCalendar className="h-3 w-3" />
                    <span>{cert.issueDate}</span>
                  </div>
                  {cert.credentialUrl && cert.credentialUrl !== "#" && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-600 hover:text-blue-700 hover:underline"
                    >
                      Verify
                      <FiExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        */}
      </div>
    </section>
  );
}