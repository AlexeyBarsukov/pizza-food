import styles from './CardMenu.module.scss'
import { Button } from './Button.jsx'
import { useCallback, useState } from 'react'
export function CardMenu({imageSrc, title, price}){
  const [count, setCount] = useState(1);
  const [currentPrice, setCurrentPrice] = useState(price);
  const [radiusPizza, setRadiusPizza] = useState(28)

  const handleIncrementPizza = useCallback(() => {
    setCount(prev => prev + 1);
    setCurrentPrice((prevPrice) => prevPrice * 2);
  }, [])

  const handleDecrementPizza = useCallback(() => {
    if(count > 1){
      setCount((prev) => prev - 1);
      setCurrentPrice((prevPrice) => prevPrice / 2);
    }
  }, [count])

  const handleRadiusChange = (radius) => {
    setRadiusPizza(radius);
  };

  return(
    <div className={styles.cardWrapper}>
      <div className={styles.image}>
        <img src={imageSrc} alt="Пицца" />
      </div>
      <div className={styles.marginBottom20}>
        <h1 className={styles.title}>
          {title}
        </h1>
      </div>
      <div className={styles.marginBottom20}>
        <p className={styles.descriptionPizza}>Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...</p>
      </div>
      <div className={styles.radiusPizzaContainer}>
        <Button
          className={`${styles.circleButton} ${radiusPizza === 22 ? styles.active : ''}`}
          onClick={() => handleRadiusChange(22)}>22</Button>
        <Button
          className={`${styles.circleButton} ${radiusPizza === 28 ? styles.active : ''}`}
          onClick={() => handleRadiusChange(28)}>28</Button>
        <Button className={`${styles.circleButton} ${radiusPizza === 33 ? styles.active : ''}`}
                onClick={() => handleRadiusChange(33)}>33</Button>
      </div>
      <div className={styles.marginBottom20}>
        <Button className={styles.ingridients}>+ Ingridients</Button>
      </div>
      <div className={styles.addPizzaContainer}>
        <div className={styles.price}>{currentPrice}<sup>$</sup></div>
        <div className={styles.addPizza}>
          <Button className={styles.decrement} onClick={handleDecrementPizza}>-</Button>
          <span className={styles.count}>{count}</span>
          <Button className={styles.increment} onClick={handleIncrementPizza}>+</Button>
        </div>
      </div>
      <div>
        <Button className={styles.orderButton}>Order Now</Button>
      </div>
    </div>
  )
}