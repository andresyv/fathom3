import clsx from 'clsx'
import { ButtonHTMLAttributes, FC } from 'react'

const variants = {
  color: {
    primary: 'bg-indigo-500 hover:bg-indigo-600 border text-white',
    neutral: 'bg-white hover:bg-gray-100 border'
  },
  block: '!w-full justify-center',
  ghost: 'bg-transparent border-none hover:bg-gray-200',
  sm: 'px-2 py-2'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'neutral'
  block?: boolean
  ghost?: boolean
  sm?: boolean
}

const Button: FC<ButtonProps> = ({ variant = 'primary', className, children, block, ghost, sm, ...rest }) => {
  return (
    <button
      className={clsx('rounded-lg w-fit font-semibold flex gap-2 items-center', !ghost && variants.color[variant], {
        [variants.block]: block,
        [variants.ghost]: ghost,
        [variants.sm]: sm,
        'px-6 py-4': !sm
      })}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
