'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function ProfilePicture() {
  const [offsetX, setOffsetX] = useState(0)
  const [offsetY, setOffsetY] = useState(0)

  // Track mouse movement for parallax effect
  const handleMouseMove = (e: MouseEvent) => {
    // Calculate mouse position relative to center of viewport
    const centerX = window.innerWidth / 2
    const centerY = window.innerHeight / 2
    
    // Get distance from center (normalized between -1 and 1)
    const moveX = (e.clientX - centerX) / centerX
    const moveY = (e.clientY - centerY) / centerY
    
    // Set the offset (limit the movement range)
    setOffsetX(moveX * 15)
    setOffsetY(moveY * 15)
  }

  // Handle device orientation for mobile parallax
  const handleDeviceOrientation = (e: DeviceOrientationEvent) => {
    if (e.beta && e.gamma) {
      const moveX = (e.gamma || 0) / 15
      const moveY = (e.beta || 0) / 15
      setOffsetX(moveX)
      setOffsetY(moveY)
    }
  }

  useEffect(() => {
    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('deviceorientation', handleDeviceOrientation as any)

    // Clean up
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('deviceorientation', handleDeviceOrientation as any)
    }
  }, [])

  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto mb-12 select-none">
      {/* Shadow layer (fixed) */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/30 to-purple-500/30 rounded-full blur-xl" />

      {/* Image container with parallax effect */}
      <div 
        className="relative w-full h-full overflow-hidden rounded-full border-4 border-white dark:border-gray-800 shadow-xl"
        style={{
          transformStyle: 'preserve-3d',
          perspective: '1000px'
        }}
      >
        {/* Actual image with movement */}
        <div
          className="absolute inset-0 transition-transform duration-200 ease-out"
          style={{
            transform: `translateX(${offsetX}px) translateY(${offsetY}px) scale(1.1)`,
          }}
        >
          <Image
            src="/images/earth.jpg"
            alt="Natthanun Puntanee"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Shine overlay for depth effect */}
      <div 
        className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/0 via-white/30 to-white/0 dark:from-white/0 dark:via-white/10 dark:to-white/0 opacity-70 pointer-events-none"
        style={{
          transform: `translateX(${-offsetX/2}px) translateY(${-offsetY/2}px)`,
          transition: 'transform 400ms ease-out',
        }}
      />
    </div>
  )
}
