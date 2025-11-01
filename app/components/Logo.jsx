'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Logo({ className = '', size = 'md' }) {
  const [imgError, setImgError] = useState(false)
  
  const sizeMap = {
    sm: { width: 120, height: 72 },
    md: { width: 160, height: 96 },
    lg: { width: 200, height: 120 },
    xl: { width: 250, height: 150 },
  }

  const dimensions = sizeMap[size] || sizeMap.md

  // If image fails to load, show text fallback
  if (imgError) {
    const sizeClasses = {
      sm: 'text-xl',
      md: 'text-3xl',
      lg: 'text-4xl',
      xl: 'text-5xl',
    }
    const englishSizeClasses = {
      sm: 'text-sm',
      md: 'text-lg',
      lg: 'text-xl',
      xl: 'text-2xl',
    }
    
    return (
      <div className={`flex flex-col items-center justify-center ${className}`}>
        <div className="relative inline-block" style={{ fontFamily: 'Tajawal, sans-serif' }}>
          <div className="absolute -top-3 right-0 w-5 h-4 bg-warm-orange transform rotate-12 rounded-t-full opacity-100"></div>
          <span className={`font-bold ${sizeClasses[size]} text-royal-blue inline-block leading-tight`}>
            ش<span className="text-warm-orange relative inline-block">ر<span className="absolute left-1/2 -translate-x-1/2 top-0 w-0.5 h-full bg-warm-orange"></span></span>ارة
          </span>
        </div>
        <div className={`mt-1 font-bold ${englishSizeClasses[size]} text-royal-blue uppercase tracking-wider`}>
          SH<span className="text-warm-orange">A</span>RARA
        </div>
      </div>
    )
  }

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <Image
        src="/logo.PNG"
        alt="Sharara Logo"
        width={dimensions.width}
        height={dimensions.height}
        className="object-contain"
        priority
        unoptimized
        onError={() => {
          console.error('Logo image failed to load')
          setImgError(true)
        }}
      />
    </div>
  )
}

