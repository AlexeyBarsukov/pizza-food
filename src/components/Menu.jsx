import React, { useState } from 'react'
import {
  AppBar,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import MenuIcon from '../assets/menuIcon.svg'
import logoPizzaShop from '../assets/pizzashop.svg'
import styles from './Header.module.scss'
import { OrangeButton } from './OrangeButton.jsx'
import basket from '../assets/basket.png'

export default function ResponsiveMenu() {
  const [open, setOpen] = React.useState(false)
  const theme = useTheme()
  const isTablet = useMediaQuery('(max-width: 992px)')

  const [activeItem, setActiveItem] = useState(null)
  const menuItems = ['Home', 'Menu', 'Events', 'About us']

  const toggleDrawer = (open) => () => {
    setOpen(open)
  }

  return (
    <>
      <AppBar position="static" className={styles.appbar}>
        <Toolbar className={styles.toolbar}>
          {isTablet ? (
            <>
              <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
                <List>
                  {menuItems.map((text) => (
                    <ListItem button key={text}>
                      <ListItemText primary={text} />
                    </ListItem>
                  ))}
                </List>
              </Drawer>
              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                <img src={logoPizzaShop} alt="PizzaShop Logo" />
              </Typography>
              <OrangeButton className="p-2 me-4">
                <img src={basket} alt="Basket" />
              </OrangeButton>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
              >
                <img src={MenuIcon} alt="menu icon" />
              </IconButton>
            </>
          ) : (
            <div className={styles.wrapperMenu}>
              <Typography
                className={styles.list}
                variant="h6"
                sx={{ flexGrow: 1 }}
              >
                <img src={logoPizzaShop} alt="PizzaShop Logo" />
              </Typography>
              <div className={styles.headerMenu}>
                <ul className={styles.list}>
                  {menuItems.map((item, index) => (
                    <li
                      key={index}
                      className={activeItem === index ? styles.active : ''}
                      onClick={() => setActiveItem(index)}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="d-flex gap-4">
                <OrangeButton
                  className={styles.buttonLogin}
                  onClick={() => console.log('Clicked!')}
                >
                  Log in
                </OrangeButton>
                <OrangeButton className="p-3">
                  <img src={basket} alt="Basket" />
                </OrangeButton>
              </div>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  )
}
