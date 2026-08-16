export default function Hero() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20">
      <p className="text-lg text-blue-600 font-medium">
        Hello, I'm
      </p>

      <h1 className="text-5xl md:text-7xl font-bold mt-3">
        Sreya 👋
      </h1>

      <h2 className="text-xl md:text-3xl font-semibold mt-5 text-gray-700">
        Big Data Developer | Python Enthusiast
      </h2>

      <p className="max-w-xl text-gray-600 mt-6 leading-relaxed">
        I build data-driven applications and enjoy solving real-world
        problems using Python, Big Data technologies, and cloud platforms.
      </p>

      <div className="flex gap-4 mt-8">
        <a
          href="#projects"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          View My Projects
        </a>

        <a
          href="#contact"
          className="border border-gray-400 px-6 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          Contact Me
        </a>
      </div>
    </main>
  );
}