'use client'

import { Calendar, MapPin, Building } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      company: "Palo IT Thailand",
      position: "Intermediate Software Engineer",
      duration: "Sep 2021 - Present",
      location: "Thailand",
      achievements: [
        "Led the full-stack development of a mobile application and its Backend for Frontend (BFF) using React Native for a top 3 insurance company",
        "Spearheaded the development of a mobile application for a high-traffic loyalty platform in Thailand using Flutter, with a strong focus on E2E testing using Flutter integration tests and Cucumber",
        "Integrated GA4 analytics for user insights",
        "Designed and implemented gamification services delivering diverse user outcomes (Points, Coupons, Message Notifications) triggered by real-time transaction events",
        "Architected and developed a messaging service, replacing a legacy system with Firebase for push notifications and AWS SES for email",
        "Implemented bulk communication capabilities for large user audiences",
        "Developed an intuitive email editor enabling users to design custom email templates",
        "Built a corporate web portal empowering users to design, create, and update their item entities",
        "Developed a transaction service to manage point adjustments, including voiding and burning customer points"
      ],
      current: true
    },
    {
      company: "Sertis",
      position: "Software Engineer",
      duration: "Nov 2019 - Aug 2021",
      location: "Thailand",
      achievements: [
        "Designed and developed several large scale products for clients such as e-KYC and chatbot gateway with a performance in mind",
        "Worked closely with Machine Learning Engineering and Data Engineering team",
        "Focused on building scalable and performant solutions"
      ],
      current: false
    },
    {
      company: "Refinitiv",
      position: "Associate Software Engineer",
      duration: "February 2019 - September 2019",
      location: "Thailand",
      achievements: [
        "Developed, integrated, and supported Elektron Tick History web service which handle 9 TB data per day",
        "Automated testing with Robot Framework and Selenium",
        "Worked closely with Amazon Web Services"
      ],
      current: false
    }
  ]

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="card animate-slide-up">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <Building className="h-5 w-5 text-primary-600 mr-2" />
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {exp.position}
                    </h3>
                    {exp.current && (
                      <span className="ml-3 px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm font-medium rounded-full">
                        Current
                      </span>
                    )}
                  </div>
                  <h4 className="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-3">
                    {exp.company}
                  </h4>
                </div>
                <div className="flex flex-col lg:text-right space-y-2">
                  <div className="flex items-center lg:justify-end text-gray-600 dark:text-gray-300">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="font-medium">{exp.duration}</span>
                  </div>
                  <div className="flex items-center lg:justify-end text-gray-600 dark:text-gray-300">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-primary-600 pl-6">
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
