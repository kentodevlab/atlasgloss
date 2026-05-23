'use client'

import { useRef, type ReactNode } from 'react'
import { useInView } from '@/lib/useInView'

interface SectionAnimatorProps {
  children: ReactNode
  className?: string
  as?: 'section' | 'div'
  delay?: number
}

export default function SectionAnimator({ children, className = '', as: Tag = 'section', delay = 0 }: SectionAnimatorProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { threshold: 0.1 })

  return (
    <Tag
      ref={ref}
      className={`transition-all duration-800 ease-[cubic-bezier(0.32,0.72,0,1)] ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}
