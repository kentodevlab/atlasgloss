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
  const cls = `inline-flex items-center justify-center gap-2 font-semibold tracking-[0.01em] border transition-all duration-150 active:translate-y-px no-underline ${variants[variant]} ${sizes[size]} ${arrow ? 'group' : ''} ${className}`

  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
        {arrow && <span className="inline-block transition-transform duration-150 group-hover:translate-x-0.5">→</span>}
      </a>
    )
  }

  return (
    <button className={cls} {...props}>
      {children}
    </button>
  )
}
