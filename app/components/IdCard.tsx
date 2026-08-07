"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Mail } from "lucide-react";

function BadgeReel() {
  return (
    <svg
      width="28"
      height="86"
      viewBox="0 0 40 122"
      fill="none"
      className="pointer-events-none block select-none"
    >
      <rect x="4" y="0" width="32" height="80" rx="16" fill="#18181b" />
      <rect x="16" y="4" width="4" height="72" rx="2" fill="#3f3f46" opacity="0.6" />
      <rect x="12" y="76" width="16" height="14" rx="2" fill="#18181b" />
      <circle cx="20" cy="96" r="5" fill="none" stroke="#18181b" strokeWidth="3" />
      <path
        d="M20 101 C20 101 12 103 12 111 C12 118 18 121 23 118 C27 115.5 26 110 22 110"
        fill="none"
        stroke="#18181b"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Barcode() {
  const widths = [2, 1, 3, 1, 1, 2, 1, 3, 2, 1, 1, 2, 3, 1, 2, 1, 1, 3, 2, 1];
  return (
    <div className="flex h-4 items-end gap-[1px]">
      {widths.map((w, i) => (
        <div
          key={i}
          className="bg-slate-800"
          style={{ width: `${w}px`, height: "100%" }}
        />
      ))}
    </div>
  );
}

export default function IdCard() {
  return (
    <div className="relative w-44 mx-auto">
      <div className="origin-top [animation-play-state:running] animate-[idswing_4.5s_ease-in-out_infinite] hover:[animation-play-state:paused]">
        <div
          className="pointer-events-none absolute left-1/2 z-10 -translate-x-1/2"
          style={{ bottom: "calc(100% - 14px)" }}
        >
          <BadgeReel />
        </div>

        <motion.div
          drag
          dragElastic={0.15}
          dragMomentum={false}
          dragSnapToOrigin
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          whileDrag={{ scale: 1.05, rotate: 2, cursor: "grabbing" }}
          className="relative cursor-grab select-none rounded-xl bg-gradient-to-b from-slate-700 to-slate-900 p-2 shadow-2xl active:cursor-grabbing"
        >
          <div className="overflow-hidden rounded-lg bg-white ring-1 ring-black/5">
            <div className="flex items-center justify-between bg-slate-900 px-2.5 py-1.5">
              <span className="text-[8px] font-semibold uppercase tracking-wider text-white">
                PROFILE CARD
              </span>
              <span className="rounded-sm bg-blue-600 px-1 py-0.5 text-[7px] font-bold uppercase tracking-wide text-white">
                VERIFIED
              </span>
            </div>

            <div className="flex flex-col items-center bg-slate-50 pb-1.5 pt-3">
  <div className="relative h-14 w-14 overflow-hidden rounded-full ring-2 ring-white shadow-md">
    <Image
      src="/Photo.png"
      alt="Profile photo"
      fill
      sizes="56px"
      className="object-cover"
      draggable={false}
    />
  </div>
</div>

            <div className="flex flex-col items-center px-2.5 pb-1 pt-1 text-center">
              <p className="text-xs font-bold leading-tight tracking-tight text-slate-900">
                Vibinson Raj G
              </p>
              <p className="text-[10px] font-medium text-blue-600">
                Security Analyst / Software Development
              </p>

              <div className="my-1.5 h-px w-full bg-slate-100" />

              <div className="flex items-center gap-1 text-[9px] text-slate-500">
                <MapPin className="h-2.5 w-2.5 shrink-0 text-slate-400" />
                <span>Bengaluru, India</span>
              </div>

              <div className="mt-0.5 flex items-center gap-1 text-[9px] text-slate-500">
                <Mail className="h-2.5 w-2.5 shrink-0 text-slate-400" />
                <span className="truncate">vibinsonrajg03@gmail.com</span>
              </div>
            </div>

            <div className="mt-1.5 flex items-center justify-between border-t border-slate-100 bg-slate-50 px-2.5 py-1.5">
              <div className="text-left">
                <p className="text-[7px] uppercase tracking-wide text-slate-400">
                  Employee ID
                </p>
                <p className="text-[9px] font-semibold text-slate-700">00001</p>
              </div>
              <Barcode />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}