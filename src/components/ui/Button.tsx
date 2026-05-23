import { type ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'houston' | 'ghost'

interface ButtonProps {
  variant?: Variant
  size?: 'md' | 'lg'
  href?: string
  arrow?: boolean
  className?: string
  children: ReactNode
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
}

const variants: Record<Variant, string> = {
  primary: 'bg-blue-bright text-white border-blue-bright hover:bg-blue-deep hover:shadow-[0_12px_28px_rgba(30,91,198,0.30)]',
  secondary: 'bg-transparent text-white border-[rgba(255,255,255,0.3)] hover:border-white',
  houston: 'bg-houston text-white border-houston hover:bg-[#D45A15] hover:shadow-[0_8px_28px_rgba(242,107,31,0.35)]',
  ghost: 'bg-transparent text-fg border-transparent hover:text-blue-bright',
}

const sizes: Record<string, string> = {
  md: 'px-6 py-3 text-[15px] rounded-[10px]',
  lg: 'px-9 py-4 text-[17px] rounded-[16px]',
}

export default function Button({ variant = 'primary', size = 'md', href, arrow, className = '', children, ...props }: ButtonProps) {
  const cls = `inline-flex items-center justify-center gap-3 font-semibold tracking-[0.01em] border transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-bright focus-visible:ring-offset-2 ${variants[variant]} ${sizes[size]} ${arrow ? 'group' : ''} ${className}`

  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
        {arrow && (
          <span className="w-8 h-8 rounded-full bg-black/10 dark:bg-white/10 flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:scale-105">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </span>
        )}
      </a>
    )
  }

  return (
    <button className={cls} {...props}>
      {children}
    </button>
  )
}
