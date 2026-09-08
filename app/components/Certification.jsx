"use client";

import { FiExternalLink, FiCalendar, FiAward } from "react-icons/fi";
import { FaAws, FaBrain, FaPython, FaShieldAlt } from "react-icons/fa";



const CERTIFICATIONS = [
  {
    title: "Python Programming",
    issuer: "Guvi",
    icon: FaPython,
    iconClass: "text-orange-500 bg-orange-50",
    issueDate: "Aug 2023",
    expiryDate: "Aug 2023",
    credentialId: "aq9M0C62h46073Ryf1", 
    credentialUrl: "https://www.guvi.in/certificate?id=aq9M0C62h46073Ryf1", 
    verified: true,
  },
  
  {
    title: "AI For India 2.0",
    issuer: "Guvi",
    icon: FaBrain, 
    iconClass: "text-blue-500 bg-blue-50",
    issueDate: "Aug 2023",
    expiryDate: "Aug 2023",
    credentialId: "041p0356858eQ2k9u1",
    credentialUrl: "https://www.guvi.in/certificate?id=041p0356858eQ2k9u1",
    verified: true,
  },
   {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Academy",
    icon: FaShieldAlt, 
    iconClass: "text-blue-500 bg-blue-50",
    issueDate: "Mar 2026",
    expiryDate: "Mar 2026",
    credentialId: "041p0356858eQ2k9u1",
    credentialUrl: "https://www.credly.com/badges/45b31100-2144-4e16-a694-41c63d45497c/public_url",
    verified: true,
  }
];


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

        <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-4 shadow-sm">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {CERTIFICATIONS.map((cert, idx) => (
              <div
                key={idx}
                className="group flex flex-col justify-between rounded-lg border border-slate-200/60 bg-white p-3 shadow-sm transition-all hover:border-slate-300 hover:shadow-md"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-1.5">
                    <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-base ${cert.iconClass}`}>
                      <cert.icon className="h-3.5 w-3.5" />
                    </span>
                    {cert.verified && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-1.5 py-0.5 text-[8px] font-semibold text-emerald-600">
                        <span className="h-1 w-1 rounded-full bg-emerald-500" />
                        Verified
                      </span>
                    )}
                  </div>
                  <div>
                    <span className="block text-[9px] font-bold text-slate-400 uppercase tracking-wider">
                      {cert.issuer}
                    </span>
                    <h3 className="mt-0.5 text-xs font-semibold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
                      {cert.title}
                    </h3>
                  </div>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-100 space-y-1.5">
                  <div className="flex items-center gap-1 text-[10px] text-slate-400">
                    <FiCalendar className="h-2.5 w-2.5" />
                    <span>{cert.issueDate}</span>
                  </div>
                  {cert.credentialUrl && cert.credentialUrl !== "#" && (
                    
                    <a href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[10px] font-semibold text-blue-600 hover:text-blue-700 hover:underline"
                    >
                      Verify
                      <FiExternalLink className="h-2.5 w-2.5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}