'use client'

export default function Logo({ className = '', size = 'md' }) {
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
      {/* Arabic Text with Orange Accent */}
      <div className="relative inline-block" style={{ fontFamily: 'Tajawal, sans-serif' }}>
        {/* Orange flame/leaf shape above the rightmost part of Arabic text */}
        <div className="absolute -top-3 right-0 w-5 h-4 bg-warm-orange transform rotate-12 rounded-t-full opacity-100"></div>
        
        {/* Arabic Text: شرارة with orange accent on ra character */}
        <span className={`font-bold ${sizeClasses[size]} text-royal-blue inline-block leading-tight`}>
          ش
          <span className="text-warm-orange relative inline-block">
            ر
            {/* Vertical orange stroke accent on ra character */}
            <span className="absolute left-1/2 -translate-x-1/2 top-0 w-0.5 h-full bg-warm-orange"></span>
          </span>
          ارة
        </span>
      </div>
      
      {/* English Text: SHARARA with orange on second A */}
      <div className={`mt-1 font-bold ${englishSizeClasses[size]} text-royal-blue uppercase tracking-wider`}>
        SH<span className="text-warm-orange">A</span>RARA
      </div>
    </div>
  )
}

