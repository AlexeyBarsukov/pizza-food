import React from 'react'
import styles from './Button.module.scss'

export function Button({ children, onClick, disabled = false, type = 'button', className = '', ...props }) {
  return (
    <button
      type={type}
      className={`${styles.button} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}
