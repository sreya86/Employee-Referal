export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-5 bg-white border-b border-gray-200">
      <h1 className="text-2xl font-bold">
        Sreya.
      </h1>

      <div className="flex gap-6">
        <a
          href="#about"
          className="hover:text-blue-600 transition"
        >
          About
        </a>

        <a
          href="#skills"
          className="hover:text-blue-600 transition"
        >
          Skills
        </a>

        <a
          href="#projects"
          className="hover:text-blue-600 transition"
        >
          Projects
        </a>

        <a
          href="#contact"
          className="hover:text-blue-600 transition"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}