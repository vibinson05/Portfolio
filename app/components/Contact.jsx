import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ArrowUpRight, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-4xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm md:p-12">

        
        <div className="text-center">
          <h1 className="text-2xl md:text-4xl font-black leading-tight text-slate-900">
            GET IN TOUCH
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Have an idea, project, or opportunity in mind? I&apos;d love to hear from you. Let&apos;s build something impactful together.
          </p>
        </div>

        <div className="mx-auto mt-16 h-px w-16 bg-slate-200" />

        
        <div className="mt-5 grid grid-cols-1 gap-12 md:grid-cols-2">

          
          <div className="text-center md:text-left">
            <div className="mb-3 flex items-center justify-center gap-2 text-sm font-semibold tracking-widest text-blue-600 md:justify-start">
              <span className="h-2 w-2 rounded-full bg-blue-600" />
              REACH OUT
            </div>
            <p className="text-slate-600 leading-7">
            Have a project in mind or want to discuss opportunities?
            I&apos;m always open to exploring new opportunities and exciting projects. 
            Whether you&apos;re looking to hire, collaborate, or simply connect, 
            I&apos;d be happy to hear from you. Let&apos;s discuss how we can build something meaningful together.
            </p>

            <h3 className="mt-8 text-sm font-semibold uppercase tracking-wide text-slate-900">
              Connect with me
            </h3>

            <div className="mt-4 flex items-center justify-center gap-6 md:justify-start">
              
               <a href="https://github.com/vibinson05"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-slate-500 transition hover:-translate-y-0.5 hover:text-slate-900"
              >
                <FaGithub size={26} />
              </a>

              
              <a  href="https://linkedin.com/in/vibinson-raj-g"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-slate-500 transition hover:-translate-y-0.5 hover:text-[#0077B5]"
              >
                <FaLinkedin size={26} />
              </a>
            </div>

            
             <a href="mailto:vibinsonrajg03@gmail.com"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-4 font-semibold text-white shadow-lg shadow-slate-900/20 transition duration-300 hover:bg-slate-800"
            >
              Get In Touch
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          
          <div className="text-center md:text-left">
            <div className="mb-3 flex items-center justify-center gap-2 text-sm font-semibold tracking-widest text-blue-600 md:justify-start">
              <MapPin className="h-5 w-5" />
              LOCATION
            </div>
            <p className="text-slate-600 leading-7">
              
            </p>

            <div className="mt-6 overflow-hidden rounded-xl shadow-lg ring-1 ring-slate-200">
              <iframe
                title="Bengaluru, India map"
                src="https://www.google.com/maps?q=Bengaluru,India&output=embed"
                width="100%"
                height="220"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}