'use client'

import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import { useEffect, useState } from 'react'
import ProfilePicture from './ProfilePicture'

export default function Hero() {
  const [offsetX, setOffsetX] = useState(0)
  const [offsetY, setOffsetY] = useState(0)

  // Track mouse movement for parallax effect on text
  const handleMouseMove = (e: MouseEvent) => {
    const centerX = window.innerWidth / 2
    const centerY = window.innerHeight / 2
    const moveX = (e.clientX - centerX) / centerX
    const moveY = (e.clientY - centerY) / centerY
    setOffsetX(moveX * 5)
    setOffsetY(moveY * 5)
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="pt-16 min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto section-padding py-20">
        <div className="text-center animate-fade-in">
          {/* Profile Picture with depth effect */}
          <ProfilePicture />
          
          {/* Name with iOS-style depth effect */}
          <div className="mb-4 relative">
            <h1 
              className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-2 relative z-10"
              style={{
                textShadow: `${-offsetX*0.5}px ${-offsetY*0.5}px 4px rgba(0,0,0,0.2)`,
                transform: `translateZ(20px)`,
                transition: 'text-shadow 0.2s ease-out'
              }}
            >
              Natthanun Puntanee
            </h1>
            {/* Colored text behind for depth effect */}
            <h1 
              className="text-5xl md:text-7xl font-bold gradient-text absolute top-0 left-0 right-0 z-0 opacity-70 blur-[1px]"
              style={{
                transform: `translateX(${offsetX*0.8}px) translateY(${offsetY*0.8}px)`,
                transition: 'transform 0.2s ease-out',
              }}
            >
              Natthanun Puntanee
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto mb-6"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Software Engineer
          </h2>
          <div className="text-xl md:text-2xl gradient-text font-semibold mb-8">
            Building Large-Scale Applications with Modern Technologies
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            An experienced software engineer bringing more than six years of expertise to large-scale software development initiatives. 
            I am a dependable team player with strong critical thinking abilities.
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="#contact"
              className="p-3 rounded-full bg-primary-600 hover:bg-primary-700 text-white transition-colors duration-200"
              aria-label="Contact me"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-900 text-white transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <a href="#about" className="inline-block">
              <ArrowDown className="h-8 w-8 text-primary-600 dark:text-primary-400" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
