export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center text-center p-8"
    >
      <h2 className="text-4xl font-bold mb-6">
        Contact Me
      </h2>

      <p className="text-lg text-gray-600 mb-6">
        Feel free to reach out if you'd like to connect or work together!
      </p>

      <div className="flex flex-col gap-4">
        <a
          href="mailto:sreyak3210@gmail.com"
          className="text-lg underline"
        >
          Email Me
        </a>

        <a
          href="https://github.com/sreya86"
          target="_blank"
          className="text-lg underline"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/sreya-kunisetty-427088237/"
          target="_blank"
          className="text-lg underline"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}