const projects = [
  {
    title: "AI Employee Referral Portal",
    description:
      "A platform where employees can submit and manage referral applications.",
    technologies: "Next.js, TypeScript, Tailwind CSS",
  },
  {
    title: "Data Migration Project",
    description:
      "Worked on migrating and processing data using Big Data technologies.",
    technologies: "Python, PySpark, Snowflake",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center p-8"
    >
      <h2 className="text-4xl font-bold mb-10">
        My Projects
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="border border-gray-300 rounded-xl p-6 w-80"
          >
            <h3 className="text-2xl font-bold mb-3">
              {project.title}
            </h3>

            <p className="text-gray-600 mb-4">
              {project.description}
            </p>

            <p className="font-medium">
              {project.technologies}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}