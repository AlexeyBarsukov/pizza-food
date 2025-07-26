import classes from './MainLayout.module.scss'
import { Outlet } from 'react-router-dom'

export function MainLayout() {
  return (
    <div className={classes.mainLayout}>
      <Outlet />
    </div>
  )
}
