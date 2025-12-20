import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 
          hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all"
          >
            <h3 className="text-xl font-bold mb-2">Player Finder</h3>
            <p className="text-gray-400 mb-4">
              Created a GUI player and game where users can store their game
              information through a intuitive interface. Users are able to add user inforomation 
              and their results on the games they have played such as their records. 
              Utilizes CRUD operations for data management.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["Java", "JavaFX", "SQL", "JDBC"].map((tech, key) => (
                <span
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover: bg-blue-500/20
                        hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <a
                href="https://github.com/Haris444-coder/Java/tree/main/PlayerLink/HarisMaleji_RamikaDinan_COMP228_Lab5"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
              >
                {" "}
                View Project → GitHub Repo{" "}
              </a>
            </div>
          </div>
          <div
            className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 
          hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all"
          >
            <h3 className="text-xl font-bold mb-2">ShelfSync</h3>
            <p className="text-gray-400 mb-4">
              Created a web application for managing and checking out books.
              Users are able to browse, check out, and return books. Utilizes
              CRUD operations for data management and MongoDB to store the users
              and books within a database.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["React", "Express", "JavaScript", "Node", "MongoDB", "CSS"].map(
                (tech, key) => (
                  <span
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover: bg-blue-500/20
                        hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>

            <div className="flex justify-between items-center">
              <a
                href="https://github.com/Haris444-coder/ShelfSync"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
              >
                {" "}
                View Project → GitHub Repo{" "}
              </a>
            </div>
          </div>
          <div
            className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 
          hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all"
          >
            <h3 className="text-xl font-bold mb-2">
              Insurance Management System
            </h3>
            <p className="text-gray-400 mb-4">
              Created a C# console system using OOP principles to load, validate
              and process insurance applicant data. Delivered a fully functional
              application with clear documentation.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["C#", ".NET"].map((tech, key) => (
                <span
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover: bg-blue-500/20
                        hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <a
                href="https://github.com/Haris444-coder/C-Sharp/tree/main/InsuranceManagementSystem"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
              >
                {" "}
                View Project → GitHub Repo{" "}
              </a>
            </div>
          </div>
          <div
            className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 
          hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all"
          >
            <h3 className="text-xl font-bold mb-2">HR Management System</h3>
            <p className="text-gray-400 mb-4">
              Created a web application where a manager can track and view
              employee information through an intuitive interface. Utilizes CRUD
              operations for data management.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["Express", "React", "SQL", "Node"].map((tech, key) => (
                <span
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover: bg-blue-500/20
                        hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <a
                href="https://github.com/Haris444-coder/HR-Management-System"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
              >
                {" "}
                View Project → GitHub Repo{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};
