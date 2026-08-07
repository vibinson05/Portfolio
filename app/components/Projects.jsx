"use client";

// import { useState } from "react";
import { FiExternalLink, FiFolder } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";


/*
const PROJECTS = [
  {
    title: "Security Automation Scripts",
    description: "A collection of PowerShell and Python scripts designed to automate log parsing, phishing analysis, and endpoint checkups.",
    tech: ["PowerShell", "Python", "Security"],
    status: "completed", // 'completed' or 'development'
    githubUrl: "https://github.com/your-username/security-scripts",
    demoUrl: "#",
  },
  {
    title: "Incident Response Playbook",
    description: "An interactive digital response workbook for triage, host isolation, and root cause analysis across endpoint networks.",
    tech: ["React", "Tailwind CSS", "Security Operations"],
    status: "development", // 'completed' or 'development'
    githubUrl: "https://github.com/your-username/ir-playbook",
    demoUrl: "#",
  },
  {
    title: "Network Packet Analyzer",
    description: "A lightweight utility developed in Python to analyze network packets and identify potential anomalies or unauthorized scans.",
    tech: ["Python", "Networking", "Wireshark"],
    status: "completed", // 'completed' or 'development'
    githubUrl: "https://github.com/your-username/packet-analyzer",
    demoUrl: "#",
  },
  {
    title: "SIEM Dashboard Integration",
    description: "A customized visualization interface designed to aggregate and monitor events parsed from Wazuh and Splunk feeds.",
    tech: ["Splunk", "Wazuh", "Webhooks"],
    status: "development", // 'completed' or 'development'
    githubUrl: "https://github.com/your-username/siem-integration",
    demoUrl: "#",
  },
];
*/

export default function Projects() {
  // const [filter, setFilter] = useState("all");
  // const filteredProjects = PROJECTS.filter((project) => {
  //   if (filter === "all") return true;
  //   return project.status === filter;
  // });

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="space-y-8">
        
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400">
              My Work
            </h2>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 leading-tight">
              Projects
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-slate-500">
              Projects

              A collection of hands-on projects that demonstrate my expertise in cybersecurity, cloud security, 
              and software development through practical, real-world solutions.
            </p>
          </div>
          <div className="shrink-0">
            <a
              href="https://github.com/your-username" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:bg-slate-50 hover:text-slate-900"
            >
              <FaGithub className="h-4 w-4" />
              View all projects
              <FiExternalLink className="h-3 w-3 text-slate-400" />
            </a>
          </div>
        </div>

        
        {/*
        <div className="flex items-center gap-2 border-b border-slate-100 pb-4">
          <button
            onClick={() => setFilter("all")}
            className={`rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide transition-colors ${
              filter === "all"
                ? "bg-slate-900 text-white"
                : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("completed")}
            className={`rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide transition-colors ${
              filter === "completed"
                ? "bg-slate-900 text-white"
                : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
            }`}
          >
            Completed
          </button>
          <button
            onClick={() => setFilter("development")}
            className={`rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide transition-colors ${
              filter === "development"
                ? "bg-slate-900 text-white"
                : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
            }`}
          >
            In Development
          </button>
        </div>
        */}

        
        <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50/50 p-16 text-center shadow-sm">
          <div className="flex flex-col items-center justify-center space-y-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-400">
              <FiFolder className="h-6 w-6" />
            </span>
            <div className="space-y-1.5">
              <h3 className="text-sm font-semibold text-slate-700">Projects Under Progress</h3>
              <p className="mx-auto max-w-xs text-xs text-slate-400 leading-relaxed">
                Development is currently active. Please check back later or visit my GitHub profile to explore my active repositories.
              </p>
            </div>
          </div>
        </div>

        
        {/*
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className="group flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:border-slate-200 hover:shadow-md"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-slate-600">
                    <FiFolder className="h-5 w-5" />
                  </span>
                  
                  {project.status === "completed" ? (
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      Completed
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-semibold text-amber-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
                      In Progress
                    </span>
                  )}
                </div>
                <div className="space-y-2">
                  <h3 className="text-base font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-slate-500">
                    {project.description}
                  </p>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-slate-50 px-2 py-1 text-[10px] font-semibold text-slate-500"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-slate-950"
                  >
                    <FiGithub className="h-3.5 w-3.5" />
                    Source Code
                  </a>
                  {project.demoUrl && project.demoUrl !== "#" && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700"
                    >
                      Live Demo
                      <FiExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        */}
      </div>
    </section>
  );
}