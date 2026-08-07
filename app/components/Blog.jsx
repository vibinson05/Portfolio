"use client";

import { FiCalendar, FiClock, FiArrowRight, FiBookOpen } from "react-icons/fi";


/*
const POSTS = [
  {
    title: "Understanding EDR: CrowdStrike Falcon Triage Guide",
    description: "A quick walkthrough on parsing endpoint events, isolating hosts, and investigating standard alerts using EDR telemetry.",
    date: "Aug 2026",
    readTime: "5 min read",
    link: "#",
  },
  {
    title: "Writing Secure PowerShell Automation Scripts",
    description: "Best practices for writing automation scripts for security administration without hardcoding credentials.",
    date: "Jul 2026",
    readTime: "8 min read",
    link: "#",
  },
];
*/

export default function Blog() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="space-y-8">
        {/* TOP: Header */}
        <div className="max-w-2xl">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400">
            Writing & Notes
          </h2>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 leading-tight">
            Blog
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-500">
            Articles, write-ups, and documentation on cybersecurity and Software Development.
          </p>
        </div>

        
        <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50/50 p-16 text-center shadow-sm">
          <div className="flex flex-col items-center justify-center space-y-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-400">
              <FiBookOpen className="h-6 w-6" />
            </span>
            <div className="space-y-1.5">
              <h3 className="text-sm font-semibold text-slate-700">Writing Under Progress</h3>
              <p className="mx-auto max-w-xs text-xs text-slate-400 leading-relaxed">
                Articles and notes are currently being drafted. Stay tuned for future cybersecurity and software Development write-ups and scripts!
              </p>
            </div>
          </div>
        </div>

        
        {/*
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {POSTS.map((post, idx) => (
            <article 
              key={idx}
              className="group flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:border-slate-200 hover:shadow-md"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <FiCalendar className="h-3 w-3" />
                    {post.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <FiClock className="h-3 w-3" />
                    {post.readTime}
                  </span>
                </div>
                
                <h3 className="text-base font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-xs leading-relaxed text-slate-500">
                  {post.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <a 
                  href={post.link}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 group-hover:text-blue-700"
                >
                  Read Article
                  <FiArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
        */}
      </div>
    </section>
  );
}