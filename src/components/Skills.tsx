'use client'

export default function Skills() {  const skillCategories = [
    {
      title: "Mobile Development",
      skills: [
        { name: "Flutter" },
        { name: "React Native" },
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "Vue.js/Nuxt.js" },
        { name: "React.js/Next.js" },
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js" },
        { name: "Spring Boot (Kotlin/Java)" },
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { name: "Amazon Web Services" },
        { name: "Google Cloud" },
        { name: "CI/CD Pipelines" }
      ],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Testing & Quality",
      skills: [
        { name: "E2E Testing" },
        { name: "Cucumber" },
        { name: "Flutter Integration Test" },
      ],
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Analytics & Tools",
      skills: [
        { name: "Google Analytics 4" },
        { name: "Firebase Cloud Messaging Analytics" },
      ],
      color: "from-teal-500 to-blue-500"
    }
  ]

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Technologies and frameworks I work with to bring ideas to life
          </p>
        </div>        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="card animate-slide-up group hover:scale-105 transition-transform duration-300">
              <div className={`h-2 bg-gradient-to-r ${category.color} rounded-full mb-6`}></div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className={`px-4 py-3 rounded-lg bg-gradient-to-r ${category.color} bg-opacity-10 hover:bg-opacity-20 transition-all duration-200 text-center border border-gray-200 dark:border-gray-700`}
                  >
                    <span className="text-white dark:text-gray-200 font-medium">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
            Additional Interests
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Agile/Scrum", "CI/CD", "E2E Testing", "Test-driven development", "Performance Optimization", "Github Copilot", "XR Development", "MarTech", "Gamification"
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
