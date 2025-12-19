import { RevealOnScroll } from "../RevealOnScroll";


export const About = () => {
  const languages = [
    "Java",
    "C#",
    "Python",
    "PL/SQL",
    "JavaScript",
    "HTML",
    "CSS",
  ];
  const frameworks = [".NET", "React", "Node.js", "Express"];
  const developerTools = [
    "MongoDB",
    "Git",
    "GitHub",
    "Visual Studio Code",
    "Postman",
    "Oracle",
    "Jira",
  ];
  const operatingSystems = ["Windows", "Linux", "Unix"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          {" "}
          About Me
        </h2>
        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all mb-5">
          <p className="text-gray-300 mb-6">
            I am a student at Centennial College who has experience in C#, Java,
            Python, C++, Web Development (HTML/CSS/JavaScript), SQL and
            Unix/Linux. I am passionate about learning how to code and exploring
            coding as a whole. As well as to be able to build diverse
            applications.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {languages.map((skill, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover: bg-blue-500/20
                        hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl p6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                {frameworks.map((skill, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover: bg-blue-500/20
                        hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl p6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Developer Tools</h3>
              <div className="flex flex-wrap gap-2">
                {developerTools.map((skill, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover: bg-blue-500/20
                        hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl p6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Operating Systems</h3>
              <div className="flex flex-wrap gap-2">
                {operatingSystems.map((skill, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover: bg-blue-500/20
                        hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
          <h3 className="text-xl font-bold mb-4">Education</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>
              <strong>
                Centennial College | Software Engineering Technology - Advanced
                Diploma
              </strong>{" "}
              (2024-Present)
            </li>
            <li>
              <strong>Relevant Coursework:</strong> Data Structures and
              Algorithms, Database Systems, Web Development, C# Programming,
              Java Programming, Software Project Management
            </li>
          </ul>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};
