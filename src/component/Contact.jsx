import { Github, Linkedin, Mail } from 'lucide-react';

function Contact() {
  return (
    <section id="Contact" className="bg-slate-900 text-white">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/10 backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-300">
              Contact
            </p>
            <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Let’s talk about your next project
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
              If you want a clean portfolio, a reliable front-end build, or help
              shaping a product idea into a polished interface, I’m open to
              connecting.
            </p>

            <div className="mt-8 space-y-4 text-sm text-slate-300">
              <p>
                Email:{' '}
                <a className="font-medium text-white hover:text-slate-200" href="mailto:muhammadsiddiqui1214@gmail.com">
                  muhammadsiddiqui1214@gmail.com
                </a>
              </p>
              <p>Phone: +92 310 6213737</p>
              <p>Location: Lahore, Pakistan</p>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 text-slate-900 shadow-xl">
            <h3 className="font-serif text-2xl font-semibold tracking-tight text-slate-900">
              Find me online
            </h3>
            <p className="mt-3 text-base leading-7 text-slate-600">
              A few places where you can view my work and connect directly.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <a
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
                href="https://github.com/M-Ali379"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
                href="https://www.linkedin.com/in/aliwebdev1/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
                href="mailto:muhammadsiddiqui1214@gmail.com"
                aria-label="Send email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>

            <p className="mt-8 text-sm text-slate-500">© 2025 Muhammad Ali</p>
          </div>
        </div>
      </div>
    </section>
  );
}


export default Contact;
