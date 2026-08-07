"use client";

import {
  FiBriefcase,
  FiAward,
  FiEdit3,
  FiArrowRight,
  FiTool,
  FiMonitor,
  FiShare2,
  FiActivity,
  FiUsers,
  FiShield,
  FiFileText,
  FiLock,
  FiTerminal,
  FiEye,
  FiTarget,
  FiGlobe,
  FiServer,
  FiKey,
  FiBox,
  FiDatabase,
} from "react-icons/fi";

import {
  FaAws,
  FaWindows,
  FaLinux,
  FaEnvelope,
  FaTable,
  FaNetworkWired,
  FaClipboardList,
  FaPython,
  FaJava,
  FaTerminal,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaReact,
} from "react-icons/fa";

import {
  SiSpring,
  SiMysql,
  SiHibernate,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";

const SUMMARY_CARDS = [
  {
    icon: FiBriefcase,
    title: "Experience",
    subtitle: "Where I've worked",
    id: "experience",
  },
  {
    icon: FiAward,
    title: "Certifications",
    subtitle: "Credentials earned",
    id: "certifications",
  },
  {
    icon: FiEdit3,
    title: "Blog",
    subtitle: "Writing & notes",
    id: "blog",
  },
];

const TOOLKIT = [
  {
    category: "Operating Systems & Devices",
    items: [
      { icon: FaWindows, label: "Windows", iconClass: "text-sky-500" },
      { icon: FaLinux, label: "Linux", iconClass: "text-orange-500" },
      { icon: FiTool, label: "Hardware & Software Troubleshoot", iconClass: "text-slate-500" },
      { icon: FiMonitor, label: "Remote Desktop (RDP)", iconClass: "text-blue-600" },
      { icon: FiShare2, label: "AnyDesk", iconClass: "text-red-500" },
    ],
  },
  {
    category: "Networking & Security",
    items: [
      { icon: FaNetworkWired, label: "Wireshark", iconClass: "text-blue-500" },
      { icon: FaNetworkWired, label: "Cisco VPN", iconClass: "text-sky-600" },
      { icon: FiTerminal, label: "PuTTY", iconClass: "text-slate-700" },
      { icon: FiUsers, label: "Active Directory", iconClass: "text-blue-500" },
      { icon: FiGlobe, label: "Nmap", iconClass: "text-green-600" },
      { icon: FiTarget, label: "Burp Suite", iconClass: "text-orange-600" },
      { icon: FiLock, label: "OpenVPN", iconClass: "text-emerald-600" },
      { icon: FiServer, label: "TCP/IP", iconClass: "text-indigo-500" },
      { icon: FiGlobe, label: "DNS", iconClass: "text-blue-500" },
      { icon: FiFileText, label: "HTTP/HTTPS", iconClass: "text-slate-600" },
    ],
  },
  {
    category: "ITSM & Ticketing",
    items: [
      { icon: FaClipboardList, label: "ServiceNow", iconClass: "text-emerald-600" },
      { icon: FiActivity, label: "ITIL Processes", iconClass: "text-violet-500" },
    ],
  },
  {
    category: "Productivity & Collaboration",
    items: [
      { icon: FaEnvelope, label: "Outlook", iconClass: "text-sky-600" },
      { icon: FiUsers, label: "Teams", iconClass: "text-indigo-600" },
      { icon: FaTable, label: "Excel", iconClass: "text-emerald-600" },
    ],
  },
  {
    category: "Security & Monitoring",
    items: [
      { icon: FiEye, label: "Splunk", iconClass: "text-orange-500" },
      { icon: FiShield, label: "Wazuh", iconClass: "text-blue-600" },
      { icon: FiLock, label: "Antivirus", iconClass: "text-rose-500" },
      { icon: FiFileText, label: "Log Analysis", iconClass: "text-slate-500" },
      { icon: FiEye, label: "SIEM", iconClass: "text-purple-600" },
      { icon: FiShield, label: "EDR", iconClass: "text-red-600" },
      { icon: FiActivity, label: "Incident Response", iconClass: "text-rose-600" },
      { icon: FiTarget, label: "Threat Hunting", iconClass: "text-orange-600" },
      { icon: FiUsers, label: "IAM", iconClass: "text-blue-600" },
      { icon: FiKey, label: "MFA", iconClass: "text-emerald-600" },
    ],
  },
  {
    category: "Cloud & Scripting",
    items: [
      { icon: FaAws, label: "AWS", iconClass: "text-orange-500" },
      { icon: FaTerminal, label: "PowerShell", iconClass: "text-blue-600" },
      { icon: FaTerminal, label: "Bash", iconClass: "text-slate-800" },
      { icon: FaPython, label: "Python", iconClass: "text-yellow-500" },
      { icon: FaJava, label: "Java", iconClass: "text-red-500" },
      { icon: FaDocker, label: "Docker", iconClass: "text-blue-500" },
      { icon: FaGitAlt, label: "Git", iconClass: "text-orange-600" },
      { icon: FaGithub, label: "GitHub", iconClass: "text-slate-800" },
      { icon: FiBox, label: "Maven", iconClass: "text-red-600" },
      { icon: SiSpring, label: "Spring Boot", iconClass: "text-green-600" },
      { icon: FiShare2, label: "REST APIs", iconClass: "text-sky-600" },
      { icon: SiMysql, label: "MySQL", iconClass: "text-blue-600" },
      { icon: FiKey, label: "JWT", iconClass: "text-purple-500" },
      { icon: FaTerminal, label: "Linux Shell", iconClass: "text-slate-700" },
    ],
  },
  {
    category: " Java Full Stack",
    items: [
      { icon: FaJava, label: "Java", iconClass: "text-red-500" },
      { icon: SiSpring, label: "Spring Boot", iconClass: "text-green-600" },
      { icon: FiShare2, label: "REST API", iconClass: "text-sky-600" },
      { icon: SiHibernate, label: "Hibernate", iconClass: "text-amber-700" },
      { icon: SiMysql, label: "MySQL", iconClass: "text-blue-600" },
      { icon: SiHtml5, label: "HTML5", iconClass: "text-orange-600" },
      { icon: SiCss, label: "CSS3", iconClass: "text-blue-600" },
      { icon: SiJavascript, label: "JavaScript", iconClass: "text-yellow-500" },
      { icon: SiTypescript, label: "TypeScript", iconClass: "text-blue-600" },
      { icon: FaReact, label: "React", iconClass: "text-cyan-500" },
      { icon: SiNextdotjs, label: "Next.js", iconClass: "text-slate-900" },
      { icon: SiTailwindcss, label: "Tailwind CSS", iconClass: "text-sky-500" },
      { icon: FaGitAlt, label: "Git", iconClass: "text-orange-600" },
      { icon: FaGithub, label: "GitHub", iconClass: "text-slate-800" },
      { icon: FiBox, label: "Maven", iconClass: "text-red-600" },
    ],
  },
  {
    category: " Cloud Security",
    items: [
      { icon: FaAws, label: "AWS", iconClass: "text-orange-500" },
      { icon: FiUsers, label: "IAM", iconClass: "text-blue-600" },
      { icon: FiServer, label: "EC2", iconClass: "text-orange-500" },
      { icon: FiDatabase, label: "S3", iconClass: "text-emerald-600" },
      { icon: FiGlobe, label: "VPC", iconClass: "text-indigo-500" },
      { icon: FiShield, label: "Security Groups", iconClass: "text-red-500" },
      { icon: FiActivity, label: "CloudWatch", iconClass: "text-purple-500" },
      { icon: FiFileText, label: "CloudTrail", iconClass: "text-slate-500" },
      { icon: FiTerminal, label: "AWS CLI", iconClass: "text-slate-700" },
      { icon: FaLinux, label: "Linux", iconClass: "text-orange-500" },
      { icon: FaTerminal, label: "Bash", iconClass: "text-slate-800" },
      { icon: FaPython, label: "Python", iconClass: "text-yellow-500" },
      { icon: FiEye, label: "Splunk", iconClass: "text-orange-500" },
      { icon: FiShield, label: "Wazuh", iconClass: "text-blue-600" },
    ],
  },
];

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
    window.history.pushState(null, "", `#${id}`);
  }
}

export default function About() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16">
      <div className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 md:gap-12">
        
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400">
            About
          </h2>
          <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Who I am
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-500">
            I'm Vibinson Raj G, an aspiring Security Analyst focused on
            cybersecurity, Security Operations (SecOps), and cloud security.
            I build practical skills through hands-on projects in network security,
            Linux, scripting, vulnerability assessment, and secure software development
            while continuously expanding my knowledge of modern security practices.
          </p>

          <div className="mt-6 space-y-3 sm:mt-8">
            {SUMMARY_CARDS.map((card) => (
              <button
                key={card.title}
                onClick={() => scrollToSection(card.id)}
                className="group flex w-full items-center justify-between rounded-2xl border border-slate-100 bg-white p-3.5 text-left shadow-sm transition-colors hover:border-slate-200 hover:bg-slate-50 active:bg-slate-100 sm:p-4"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 sm:h-10 sm:w-10">
                    <card.icon className="h-4 w-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-semibold text-slate-900">
                      {card.title}
                    </span>
                    <span className="block truncate text-xs text-slate-400">
                      {card.subtitle}
                    </span>
                  </span>
                </div>
                <FiArrowRight className="h-4 w-4 shrink-0 text-slate-300 transition-transform group-hover:translate-x-0.5 group-hover:text-slate-500" />
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-4 shadow-sm sm:p-6">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400">
            My Toolkit
          </h2>

          <div className="mt-4 space-y-4 sm:mt-5 sm:space-y-5">
            {TOOLKIT.map((group) => (
              <div key={group.category}>
                <div className="mb-2 flex items-center gap-2 sm:mb-2.5">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                  <h3 className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                    {group.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item.label}
                      className="flex items-center gap-1.5 rounded-lg border border-slate-200/60 bg-white px-2 py-1 text-[11px] font-medium text-slate-600 shadow-sm sm:px-2.5 sm:py-1.5 sm:text-xs"
                    >
                      <item.icon className={`h-3.5 w-3.5 shrink-0 ${item.iconClass}`} />
                      {item.label}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}