const skills = [
  "Python",
  "PySpark",
  "SQL",
  "Snowflake",
  "Databricks",
  "Azure",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center items-center text-center p-8"
    >
      <h2 className="text-4xl font-bold mb-10">
        My Skills
      </h2>

      <div className="flex flex-wrap justify-center gap-4 max-w-2xl">
        {skills.map((skill) => (
          <div
            key={skill}
            className="border border-gray-300 rounded-lg px-6 py-3 text-lg"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}