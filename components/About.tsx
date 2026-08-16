export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center px-6 py-20"
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left side */}
        <div>
          <p className="text-blue-600 font-medium mb-3">
            GET TO KNOW ME
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About Me
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            I am a Big Data Developer passionate about building data-driven
            applications and solving real-world problems using technology.
          </p>

          <p className="text-gray-600 leading-relaxed">
            I enjoy working with Python, PySpark, SQL, Snowflake, and cloud
            technologies. I am continuously learning and building projects
            to grow as a developer.
          </p>
        </div>

        {/* Right side */}
        <div className="border border-gray-200 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6">
            Quick Facts
          </h3>

          <div className="space-y-4 text-gray-600">
            <p>
              💼 <span className="font-medium">Role:</span> Big Data Developer
            </p>

            <p>
              🐍 <span className="font-medium">Favorite Language:</span> Python
            </p>

            <p>
              ☁️ <span className="font-medium">Interest:</span> Cloud & Data Engineering
            </p>

            <p>
              🚀 <span className="font-medium">Currently:</span> Building and learning
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}