function Portfolio() {
  const githubProfile = 'https://github.com/M-Ali379';

  const projects = [
    {
      name: 'Food Ordering System',
      tech: 'React, PHP, MySQL',
      summary: 'A responsive ordering flow with database-backed menu and order handling.',
      link: githubProfile,
    },
    {
      name: 'Developer Portfolio',
      tech: 'React, Vite, Tailwind CSS',
      summary: 'A clean personal portfolio with a restrained palette and clear section hierarchy.',
      link: githubProfile,
    },
    {
      name: 'Database Management App',
      tech: 'SQL, Node.js',
      summary: 'A practical tool for working with structured records and basic admin workflows.',
      link: githubProfile,
    },
  ];

  return (
    <section id="Portfolio" className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
            Projects
          </p>
          <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Selected work
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            A short selection of projects that show my approach to usability,
            structure, and front-end implementation.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-slate-300 hover:bg-white hover:shadow-lg"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
              Project {index + 1}
            </p>
            <h3 className="mt-4 font-serif text-2xl font-semibold tracking-tight text-slate-900">
              {project.name}
            </h3>
            <p className="mt-3 text-sm font-medium text-slate-500">{project.tech}</p>
            <p className="mt-4 flex-1 text-base leading-7 text-slate-600">
              {project.summary}
            </p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
              View project
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </span>
          </a>
        ))}
        </div>
      </div>

    </section>
  );
}

export default Portfolio;