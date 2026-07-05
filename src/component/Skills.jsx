function Skills() {
  const skills = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'React',
    'Tailwind CSS',
    'Vite',
    'Responsive Design',
    'Node.js',
    'Express.js',
    'MySQL',
  ];

  return (
    <section id="Skills" className="border-b border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
            Skills
          </p>
          <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Technical skills
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            A concise toolkit for building responsive, maintainable interfaces and
            practical full-stack features.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-medium text-slate-700 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
