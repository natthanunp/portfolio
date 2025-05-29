'use client'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Passionate About Technology & Innovation
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
              With over 6 years of experience in software development, I specialize in building 
              scalable, high-performance applications using modern technologies. My expertise spans 
              across mobile development with Flutter and React Native, web development with Vue/Nuxt, 
              and backend services with Node.js and Spring Boot.
            </p>            <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
              I&apos;m passionate about creating solutions that make a real impact, whether it&apos;s handling 
              9TB of data per day or building mobile applications for millions of users. I believe 
              in writing clean, maintainable code and implementing robust testing strategies.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">6+</div>
                <div className="text-gray-600 dark:text-gray-300">Years Experience</div>
              </div>              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">10+</div>
                <div className="text-gray-600 dark:text-gray-300">Projects Delivered</div>
              </div>
            </div>
          </div>

          <div className="animate-slide-up">
            <div className="bg-gradient-to-r from-primary-600 to-purple-600 p-8 rounded-2xl text-white">
              <h4 className="text-xl font-semibold mb-6">Core Competencies</h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                  <span>Large-scale software development</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                  <span>Mobile & Web Application Development</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                  <span>Cloud Services & AWS Integration</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                  <span>Automated Testing & QA</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                  <span>Team Leadership & Collaboration</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
