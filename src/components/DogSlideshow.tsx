'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react'
import { supabase, getDogLikes, incrementDogLikes } from '../lib/supabase'

interface Slide {
  src: string;
  alt: string;
  caption: string;
}

const slides: Slide[] = [
  {
    src: '/images/paopao.jpg',
    alt: 'Paopao the Japanese Spitz',
    caption: 'Paopao the Japanese Spitz'
  },
  {
    src: '/images/paopao&pepo.jpeg',
    alt: 'Paopao and Pepo together',
    caption: 'Paopao and Pepo together'
  }
]

export default function DogSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [showHeart, setShowHeart] = useState(false)
  const [likeCount, setLikeCount] = useState(0)
  const [hasLikedToday, setHasLikedToday] = useState(false)
  const [isLiking, setIsLiking] = useState(false)
  const slideshowRef = useRef<HTMLDivElement>(null)
  // Load like count from Supabase and check if user has already liked today
  useEffect(() => {
    const fetchLikes = async () => {
      const count = await getDogLikes()
      setLikeCount(count)
    }
    
    fetchLikes()

    // Check if user has already liked today
    const lastLikeDate = localStorage.getItem('dogSlideshowLastLike')
    const today = new Date().toDateString()
    if (lastLikeDate === today) {
      setHasLikedToday(true)
    }    // Subscribe to realtime updates
    const channel = supabase
      .channel('like_count_changes')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'like_count' },
        (payload) => {
          console.log('New like detected:', payload.new)
          setLikeCount(payload.new.count)
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [])

  // Handle autoplay
  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 4000) // Change slide every 4 seconds
    
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  // Handle navigation
  const goToPrevSlide = () => {
    setIsAutoPlaying(false)
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }
  
  const goToNextSlide = () => {
    setIsAutoPlaying(false)
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentSlide(index)
  }
  const handleLike = async () => {
    // Show heart animation
    setShowHeart(true)
    setTimeout(() => setShowHeart(false), 1000)
    
    // Prevent multiple simultaneous clicks
    if (isLiking) {
      return
    }
    
    setIsLiking(true)
    
    try {
      // Update like count in Supabase
      const newCount = await incrementDogLikes()
      console.log('New like count:', newCount)
      setLikeCount(newCount)
      
      // For animation purposes, let's still show the "you liked" indicator
      // But no longer limit to once per day
      setHasLikedToday(true)
      localStorage.setItem('dogSlideshowLastLike', new Date().toDateString())
    } catch (error) {
      console.error('Error liking:', error)
    } finally {
      setIsLiking(false)
    }
  }

  return (
    <div className="animate-slide-up">
      <div className="mb-6">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white text-center mb-4">
          Meet My Furry Co-Pilots
        </h3>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
          Paopao the Japanese Spitz and Pepo the Chihuahua who bring endless joy to my life.
        </p>
      </div>      <div className="relative overflow-hidden rounded-2xl shadow-2xl">
        {/* Slideshow container */}
        <div 
          ref={slideshowRef}
          className="relative aspect-[4/3] w-full bg-gray-100 dark:bg-gray-800 overflow-hidden"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}          onDoubleClick={handleLike}
        >
          {/* Heart animation on double-click */}
          {showHeart && (
            <div className="absolute inset-0 z-50 flex items-center justify-center animate-heartbeat">
              <Heart className="w-24 h-24 text-red-500 fill-red-500" />
            </div>
          )}
          
          {/* Slides */}
          {slides.map((slide, index) => (
            <div 
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ${
                currentSlide === index 
                  ? 'opacity-100 z-10 scale-100' 
                  : 'opacity-0 z-0 scale-105'
              }`}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover object-center"
                priority={index === 0}
                onLoad={() => index === currentSlide && setIsLoaded(true)}
              />
              
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white text-center">
                <p className="font-medium">{slide.caption}</p>
              </div>
            </div>
          ))}

          {/* Navigation arrows */}
          <button 
            onClick={goToPrevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 dark:bg-black/20 dark:hover:bg-black/40 backdrop-blur-sm p-2 rounded-full text-white shadow-lg transition-all duration-300"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button 
            onClick={goToNextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 dark:bg-black/20 dark:hover:bg-black/40 backdrop-blur-sm p-2 rounded-full text-white shadow-lg transition-all duration-300"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center space-x-2 mt-4 pb-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? 'bg-primary-600 w-6'
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-primary-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>      </div>      {/* Like counter display */}
      <div className="flex items-center justify-center space-x-2 mt-4">
        <Heart className={`w-5 h-5 ${hasLikedToday ? 'text-red-500 fill-red-500' : 'text-gray-400'}`} />
        <span className="text-gray-700 dark:text-gray-300 font-medium">
          {likeCount.toLocaleString()} {likeCount === 1 ? 'tail wag' : 'tail wags'} of happiness
        </span>
        {hasLikedToday && (
          <span className="text-primary-600 dark:text-primary-400 text-sm">
            (woof! thank you! 🐾)
          </span>
        )}
      </div>

      {/* Custom message */}
      <div className="mt-6 p-4 bg-primary-50 dark:bg-gray-800 border border-primary-100 dark:border-gray-700 rounded-lg text-center">
        <p className="text-gray-700 dark:text-gray-300">
          <span className="font-medium">Double-click to like!</span> Hope this little dose of cuteness brightens your day! Have a good one! 😊
        </p>
      </div>
    </div>
  )
}
