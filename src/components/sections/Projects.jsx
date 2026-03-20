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
              hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
            >
              <h3 className="text-xl font-bold mb-2">MarketPulse Stock Tracker</h3>
              <p className="text-gray-400 mb-4">
                Built a stock tracking application that integrates real-time
                financial APIs to retrieve market data and visualize price
                trends. Features dynamic bullish and bearish indicators with
                interactive charts for analyzing stock performance.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {["JavaScript", "Chart.js", "API", "HTML", "CSS"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Haris444-coder/StockTrackerApp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  GitHub →
                </a>

                <a
                  href="https://haris444-coder.github.io/StockTrackerApp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 transition-colors"
                >
                  Live Demo →
                </a>
              </div>
            </div>

            <div
              className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
              hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
            >
              <h3 className="text-xl font-bold mb-2">LoanWise Calculator</h3>
              <p className="text-gray-400 mb-4">
                Developed a financial calculator to model loan repayment,
                interest accumulation, and amortization schedules. Includes data
                visualization to track balance changes and better understand
                long-term financial impact.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {["JavaScript", "Chart.js", "HTML", "CSS"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Haris444-coder/Loan-Calculator-App"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  GitHub →
                </a>

                <a
                  href="https://chic-arithmetic-2399fa.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 transition-colors"
                >
                  Live Demo →
                </a>
              </div>
            </div>

            <div
              className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
              hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
            >
              <h3 className="text-xl font-bold mb-2">Player Finder</h3>
              <p className="text-gray-400 mb-4">
                Created a GUI player and game manager where users can store game
                information through an intuitive interface. Users can add player
                information and results from games played, including records,
                while using CRUD operations for data management.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {["Java", "JavaFX", "SQL", "JDBC"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Haris444-coder/Java/tree/main/PlayerLink/HarisMaleji_RamikaDinan_COMP228_Lab5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  GitHub →
                </a>
              </div>
            </div>

            <div
              className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
              hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
            >
              <h3 className="text-xl font-bold mb-2">ShelfSync</h3>
              <p className="text-gray-400 mb-4">
                Created a web application for managing and checking out books.
                Users can browse, check out, and return books. Utilizes CRUD
                operations for data management and MongoDB to store users and
                books within a database.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Express", "JavaScript", "Node", "MongoDB", "CSS"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Haris444-coder/ShelfSync"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  GitHub →
                </a>
              </div>
            </div>

            <div
              className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
              hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
            >
              <h3 className="text-xl font-bold mb-2">
                Insurance Management System
              </h3>
              <p className="text-gray-400 mb-4">
                Created a C# console system using OOP principles to load,
                validate, and process insurance applicant data. Delivered a
                fully functional application with clear documentation.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {["C#", ".NET"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Haris444-coder/C-Sharp/tree/main/InsuranceManagementSystem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  GitHub →
                </a>
              </div>
            </div>

            <div
              className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
              hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
            >
              <h3 className="text-xl font-bold mb-2">HR Management System</h3>
              <p className="text-gray-400 mb-4">
                Created a web application where a manager can track and view
                employee information through an intuitive interface. Utilizes
                CRUD operations for data management.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {["Express", "React", "SQL", "Node"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Haris444-coder/HR-Management-System"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  GitHub →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};