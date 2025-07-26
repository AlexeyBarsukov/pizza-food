import React from 'react'
import styles from './OrangeButton.module.scss'

export function OrangeButton({
  children,
  onClick,
  disabled = false,
  type = 'button',
  className = '',
  ...props
}) {
  return (
    <button
      type={type}
      className={`${styles.orangeButton} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}
