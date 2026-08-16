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
      className="min-h-screen flex flex-col justify-center items-center px-6 py-20"
    >
      <p className="text-blue-600 font-medium mb-3">
        WHAT I WORK WITH
      </p>

      <h2 className="text-4xl md:text-5xl font-bold mb-12">
        My Skills
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl w-full">
        {skills.map((skill) => (
          <div
            key={skill}
            className="border border-gray-200 rounded-xl p-6 text-center font-semibold shadow-sm hover:shadow-md hover:-translate-y-1 transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}