"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  FiUser,
  FiBriefcase,
  FiAward,
  FiFolder,
  FiCode,
  FiEdit3,
  FiHome,
  FiGrid,
} from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

type MobileSheetKey = "more" | null;
type ActiveTab = "home" | "about" | "experience" | "contact" | "more";

type NavLink = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  id: string;
};

const NAV_LINKS: NavLink[] = [
  { icon: FiUser, title: "About", id: "about" },
  { icon: FiBriefcase, title: "Experience", id: "experience" },
];

const CONTACT_LINK: NavLink = { icon: HiOutlineMail, title: "Contact", id: "contact" };

const MORE_ITEMS: (NavLink & { subtitle: string })[] = [
  { icon: FiFolder, title: "Projects", subtitle: "Things I've built", id: "projects" },
  { icon: FiCode, title: "Practice", subtitle: "Labs & CTFs", id: "practice" },
  { icon: FiAward, title: "Certifications", subtitle: "Credentials earned", id: "certifications" },
  { icon: FiEdit3, title: "Blog", subtitle: "Writing & notes", id: "blog" },
];

const SOCIAL_LINKS = [
  { icon: FaGithub, label: "GitHub", href: "https://github.com/vibinson05" },
  { icon: FaLinkedin, label: "LinkedIn", href: "https://linkedin.com/in/vibinson-raj-g" },
  { icon: HiOutlineMail, label: "Email", href: "mailto:vibinsonrajg03@gmail.com" },
];

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [moreOpen, setMoreOpen] = useState(false); // desktop "More" dropdown
  const [mobileSheet, setMobileSheet] = useState<MobileSheetKey>(null);
  const [activeTab, setActiveTab] = useState<ActiveTab>("home");
  const navRef = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMoreOpen(false);
      }
      if (mobileRef.current && !mobileRef.current.contains(event.target as Node)) {
        setMobileSheet(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function goToSection(id: string, tab: ActiveTab) {
    setMoreOpen(false);
    setMobileSheet(null);
    setActiveTab(tab);

    if (pathname === "/") {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", `#${id}`);
      }
    } else {
      router.push(`/#${id}`);
    }
  }

  return (
    <header className="w-full">
      {/* DESKTOP / TABLET NAV */}
      <nav
        ref={navRef}
        className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-6"
      >
        <button
          onClick={() => goToSection("home", "home")}
          className="text-lg font-bold tracking-tight text-slate-900"
        >
          Vibinson Raj<span className="ml-1">G</span>
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <button
              key={link.title}
              onClick={() => goToSection(link.id, link.title.toLowerCase() as ActiveTab)}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-500 transition-colors hover:text-slate-900"
            >
              {link.title.toUpperCase()}
            </button>
          ))}

          {/* MORE (desktop dropdown) */}
          <div className="relative">
            <button
              onClick={() => setMoreOpen((prev) => !prev)}
              className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                moreOpen ? "bg-blue-50 text-blue-600" : "text-slate-500 hover:text-slate-900"
              }`}
            >
              MORE
            </button>

            {moreOpen && (
              <div className="absolute left-0 top-full z-20 mt-3 w-72 rounded-2xl bg-white p-3 shadow-xl ring-1 ring-black/5">
                {MORE_ITEMS.map((item) => (
                  <button
                    key={item.title}
                    onClick={() => goToSection(item.id, "more")}
                    className="flex w-full items-start gap-3 rounded-xl p-3 text-left transition-colors hover:bg-slate-50"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600">
                      <item.icon className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-slate-900">
                        {item.title}
                      </span>
                      <span className="block text-sm text-slate-400">{item.subtitle}</span>
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => goToSection(CONTACT_LINK.id, "contact")}
            className="rounded-full bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
          >
            CONTACT
          </button>
        </div>

        {/* Social icons */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://github.com/vibinson05"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-colors hover:border-slate-400 hover:text-slate-900"
          >
            <FaGithub className="h-4 w-4" />
          </a>

          <a
            href="https://linkedin.com/in/vibinson-raj-g"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-colors hover:border-slate-400 hover:text-slate-900"
          >
            <FaLinkedin className="h-4 w-4" />
          </a>

          <a
            href="mailto:vibinsonrajg03@gmail.com"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-colors hover:border-slate-400 hover:text-slate-900"
          >
            <HiOutlineMail className="h-4 w-4" />
          </a>
        </div>
      </nav>

      {/* MOBILE FLOATING TAB BAR */}
      <div ref={mobileRef} className="md:hidden">
        {/* Backdrop for the More sheet */}
        {mobileSheet && (
          <div
            className="fixed inset-0 z-30 bg-black/20"
            onClick={() => setMobileSheet(null)}
          />
        )}

        {/* Sliding sheet — sits just above the floating bar */}
        <div
          className={`fixed inset-x-0 bottom-24 z-40 mx-4 rounded-2xl bg-white/90 p-3 shadow-2xl ring-1 ring-black/5 backdrop-blur-md transition-all duration-200 ${
            mobileSheet
              ? "translate-y-0 opacity-100"
              : "pointer-events-none translate-y-3 opacity-0"
          }`}
        >
          {mobileSheet === "more" && (
            <>
              <div className="max-h-64 overflow-y-auto">
                {MORE_ITEMS.map((item) => (
                  <button
                    key={item.title}
                    onClick={() => goToSection(item.id, "more")}
                    className="flex w-full items-start gap-3 rounded-xl p-3 text-left transition-colors hover:bg-slate-50 active:bg-slate-100"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600">
                      <item.icon className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-slate-900">
                        {item.title}
                      </span>
                      <span className="block text-sm text-slate-400">{item.subtitle}</span>
                    </span>
                  </button>
                ))}
              </div>
              <div className="mt-1 flex items-center justify-center gap-3 border-t border-slate-100 pt-3">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-colors hover:border-slate-400 hover:text-slate-900"
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Floating pill tab bar — detached from the screen edge, translucent + blurred */}
        <nav
          className="fixed inset-x-0 z-40 flex justify-center px-4"
          style={{ bottom: "calc(1rem + env(safe-area-inset-bottom))" }}
        >
          <div className="flex w-full max-w-md items-center justify-around rounded-full border border-white/40 bg-white/60 px-2 py-2 shadow-xl shadow-black/10 backdrop-blur-lg">
            {/* ABOUT */}
            <button
              onClick={() => goToSection("about", "about")}
              className="flex flex-col items-center gap-1 px-3 py-1.5"
            >
              <FiUser
                className={`h-5 w-5 ${
                  activeTab === "about" ? "text-blue-600" : "text-slate-500"
                }`}
              />
              {activeTab === "about" && <span className="h-1 w-5 rounded-full bg-blue-600/40" />}
            </button>

            {/* EXPERIENCE */}
            <button
              onClick={() => goToSection("experience", "experience")}
              className="flex flex-col items-center gap-1 px-3 py-1.5"
            >
              <FiBriefcase
                className={`h-5 w-5 ${
                  activeTab === "experience" ? "text-blue-600" : "text-slate-500"
                }`}
              />
              {activeTab === "experience" && (
                <span className="h-1 w-5 rounded-full bg-blue-600/40" />
              )}
            </button>

            {/* HOME */}
            <button
              onClick={() => goToSection("home", "home")}
              className="flex flex-col items-center gap-1 px-3 py-1.5"
            >
              <FiHome
                className={`h-5 w-5 ${
                  activeTab === "home" ? "text-blue-600" : "text-slate-500"
                }`}
              />
              {activeTab === "home" && <span className="h-1 w-5 rounded-full bg-blue-600/40" />}
            </button>

            {/* CONTACT */}
            <button
              onClick={() => goToSection("contact", "contact")}
              className="flex flex-col items-center gap-1 px-3 py-1.5"
            >
              <HiOutlineMail
                className={`h-5 w-5 ${
                  activeTab === "contact" ? "text-blue-600" : "text-slate-500"
                }`}
              />
              {activeTab === "contact" && (
                <span className="h-1 w-5 rounded-full bg-blue-600/40" />
              )}
            </button>

            {/* MORE */}
            <button
              onClick={() => {
                setMobileSheet((prev) => (prev === "more" ? null : "more"));
                setActiveTab("more");
              }}
              className="flex flex-col items-center gap-1 px-3 py-1.5"
            >
              <FiGrid
                className={`h-5 w-5 ${
                  activeTab === "more" && mobileSheet === "more"
                    ? "text-blue-600"
                    : "text-slate-500"
                }`}
              />
              {activeTab === "more" && mobileSheet === "more" && (
                <span className="h-1 w-5 rounded-full bg-blue-600/40" />
              )}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}