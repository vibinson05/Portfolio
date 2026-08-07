export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-4 md:py-6">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="text-xs text-slate-500 md:text-sm">
          © {new Date().getFullYear()} Vibinson Raj G. All rights reserved.
        </p>
      </div>
    </footer>
  );
}