import { Button, ButtonGroup } from '@mui/material'
import { useState } from 'react'
import styles from './OrangeButton.module.scss'

export function ActiveButtonGroup({
  buttons = ['To order', 'Pizza-Menu'],
  defaultActive,
}) {
  const [activeBtn, setActiveBtn] = useState(defaultActive || buttons[0])

  return (
    <ButtonGroup className={styles.buttonsGroup}>
      {buttons.map((variant) => (
        <Button
          key={variant}
          variant={activeBtn === variant ? 'contained' : 'outlined'}
          onClick={() => setActiveBtn(variant)}
          sx={{
            background:
              activeBtn === variant
                ? 'linear-gradient(261.48deg, #FE9C1C -17.13%, #FF5E2A 86.76%)'
                : 'transparent',
            color: activeBtn === variant ? '#fff' : '#FF8548',
            borderRadius: '100px',
            textTransform: 'none',
            borderTopRightRadius: '100px !important',
            borderBottomRightRadius: '100px !important',
            borderTopLeftRadius: '100px !important',
            borderBottomLeftRadius: '100px !important',
            border: 'none !important',
            fontWeight: '500 !important',
            fontFamily: '"Nunito Sans", sans-serif',
            fontSize: '22px',
            whiteSpace: 'nowrap',
          }}
        >
          {variant}
        </Button>
      ))}
    </ButtonGroup>
  )
}
