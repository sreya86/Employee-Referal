export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center px-6 py-20"
    >
      <div className="max-w-4xl mx-auto w-full text-center">
        <p className="text-blue-600 font-medium mb-3">
          GET IN TOUCH
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Let's Connect
        </h2>

        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10">
          Feel free to reach out if you'd like to connect, collaborate,
          or discuss an interesting opportunity.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6">
          <a
            href="mailto:sreyak3210@gmail.com"
            className="border border-gray-200 rounded-xl px-8 py-5 hover:shadow-md hover:-translate-y-1 transition"
          >
            <p className="font-bold text-lg">Email</p>
            <p className="text-gray-600 text-sm mt-1">
              Get in touch with me
            </p>
          </a>

          <a
            href="https://github.com/sreya86"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-200 rounded-xl px-8 py-5 hover:shadow-md hover:-translate-y-1 transition"
          >
            <p className="font-bold text-lg">GitHub</p>
            <p className="text-gray-600 text-sm mt-1">
              Check out my projects
            </p>
          </a>

          <a
            href="https://www.linkedin.com/in/sreya-kunisetty-427088237/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-200 rounded-xl px-8 py-5 hover:shadow-md hover:-translate-y-1 transition"
          >
            <p className="font-bold text-lg">LinkedIn</p>
            <p className="text-gray-600 text-sm mt-1">
              Let's connect professionally
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}