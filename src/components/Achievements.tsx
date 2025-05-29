'use client'

import { Award, Users, Code, Presentation } from 'lucide-react'

export default function Achievements() {
  const achievements = [
    {
      icon: <Presentation className="h-8 w-8" />,
      title: "Thailand Flutter Meetup Speaker",
      description: "Delivered presentations at Thailand Flutter Meetup events, sharing knowledge and best practices with the Flutter developer community.",
      category: "Speaking",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "JavaScript Bangkok 2.0 Showcase",
      description: "Showcased development of a simple shooting game in XR using Three.js, demonstrating expertise in web-based XR development.",
      category: "Conference",
      gradient: "from-purple-500 to-pink-500"
    }
  ]

  return (
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Achievements & Recognition
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Highlights of my contributions to the tech community and professional accomplishments
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="card group hover:scale-105 transition-transform duration-300">
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${achievement.gradient} text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  {achievement.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-3">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mr-3">
                      {achievement.title}
                    </h3>
                    <span className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${achievement.gradient} text-white`}>
                      {achievement.category}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-1 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">2</div>
            <div className="text-gray-600 dark:text-gray-300">Speaking Events</div>
          </div>
        </div>
      </div>
    </section>
  )
}
