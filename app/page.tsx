import Navbar from "@/components/Navbar";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen flex flex-col justify-center items-center text-center p-6">
        <p className="text-lg text-gray-500">
          Hello, I'm
        </p>

        <h1 className="text-5xl font-bold mt-2">
          Sreya 👋
        </h1>

        <h2 className="text-2xl font-semibold mt-4">
          Big Data Developer | Python Enthusiast
        </h2>

        <p className="max-w-xl text-gray-600 mt-4">
          I build data-driven applications and enjoy solving real-world
          problems using technology.
        </p>

        <div className="flex gap-4 mt-6">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
            View My Projects
          </button>

          <button className="border border-gray-400 px-6 py-3 rounded-lg">
            Contact Me
          </button>
        </div>
      </main>

      <About />
    </>
  );
}