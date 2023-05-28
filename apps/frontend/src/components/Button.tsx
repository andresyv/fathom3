import clsx from 'clsx'
import { ButtonHTMLAttributes, FC } from 'react'

const variants = {
  color: {
    primary: 'bg-indigo-500 hover:bg-indigo-600 border text-white',
    neutral: 'bg-white hover:bg-gray-100 border'
  },
  block: '!w-full',
  ghost: 'bg-transparent border-none hover:bg-gray-200'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'neutral'
  block?: boolean
  ghost?: boolean
}

const Button: FC<ButtonProps> = ({ variant = 'primary', className, children, block, ghost, ...rest }) => {
  return (
    <button
      className={clsx('px-6 py-4 rounded-lg w-fit font-semibold', !ghost && variants.color[variant], {
        [variants.block]: block,
        [variants.ghost]: ghost
      })}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
