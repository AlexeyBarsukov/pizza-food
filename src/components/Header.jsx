import ResponsiveMenu from './Menu.jsx'
import styles from './Header.module.scss'

export function Header() {
  return (
    <div className={styles.containerHeader}>
      <ResponsiveMenu />
    </div>
  )
}
