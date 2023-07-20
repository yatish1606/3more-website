import { ButtonHTMLAttributes, FC } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  leftIcon?: JSX.Element
  rightIcon?: JSX.Element
}

const Button: FC<ButtonProps> = ({
  variant = 'primary',
  leftIcon = null,
  rightIcon = null,
  ...props
}) => {
  return (
    <button {...props} className={`${variant} ${props.className}`}>
      {leftIcon && <div className='icon-spacer'></div>}
      {props.children}
      {<div className='icon-spacer'></div> && rightIcon}
    </button>
  )
}

export default Button
