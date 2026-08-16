const projects = [
  {
    title: "AI Employee Referral Portal",
    description:
      "A platform designed to help users submit and manage employee referral applications.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/sreya86/Employee-Referal",
    demo: "#",
  },
  {
    title: "Data Migration Project",
    description:
      "A data engineering project focused on processing and migrating data using Big Data technologies.",
    technologies: ["Python", "PySpark", "Snowflake"],
    github: "#",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <p className="text-blue-600 font-medium mb-3">
          MY WORK
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition"
            >
              <h3 className="text-2xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  className="text-blue-600 font-medium hover:underline"
                >
                  GitHub →
                </a>

                <a
                  href={project.demo}
                  className="text-blue-600 font-medium hover:underline"
                >
                  Live Demo →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}