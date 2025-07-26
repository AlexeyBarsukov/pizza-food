import styles from './Menu.module.scss'
import { Button } from '../components/Button.jsx'
import { CardMenu } from '../components/CardMenu.jsx'
import italianPizza from '../assets/italian.png'
import veneciaPizza from '../assets/venecia.png'
import meat from '../assets/meat.png'
import cheese from '../assets/cheese.png'
import argentica from '../assets/argentina.png'
import gribnaya from '../assets/gribnaya.png'
import tomato from '../assets/tomato.png'
import italianx2 from '../assets/italianx2.png'

const pizzaDatas = [
  {
    id: 1,
    title: 'Italian',
    photoPizza: italianPizza,
    price: 8.35
  },
  {
    id: 2,
    title: 'Venecia',
    photoPizza: veneciaPizza,
    price: 7.35
  },
  {
    id: 3,
    title: 'Meat',
    photoPizza: meat,
    price: 9.35
  },
  {
    id:4,
    title: 'Cheese',
    photoPizza: cheese,
    price: 8.35
  }
]

const pizzaSecondDatas = [
  {
    id: 5,
    title: 'Argentina',
    photoPizza: argentica,
    price: 7.35
  },
  {
    id: 6,
    title: 'Gribnaya',
    photoPizza: gribnaya,
    price: 6.35
  },
  {
    id: 7,
    title: 'Tomato',
    photoPizza: tomato,
    price: 7.35
  },
  {
    id:8,
    title: 'Italian x2',
    photoPizza: italianx2,
    price: 8.35
  }
]

export function Menu() {

  return (
    <>
      <div className="d-flex justify-content-center">
        <h1 className={styles.titleMenu}>Menu</h1>
      </div>
      <div className={styles.buttonsContainer}>
        <Button>
          Show all
        </Button>
        <Button>
          Meat
        </Button>
        <Button>
          Vegetarian
        </Button>
        <Button>
          Sea products
        </Button>
        <Button>
          Mushroom
        </Button>
      </div>
      <div className={styles.containerCards}>
        {pizzaDatas.map((item) => (
          <CardMenu
            key={item.id}
            imageSrc={item.photoPizza}
            title={item.title}
            price={item.price}
          />
        ))}

      </div>
      <div className={styles.banner}>
        MOST POPULAR PIZZA
      </div>
      <div className={styles.containerCards}>
        {pizzaSecondDatas.map((item) => (
          <CardMenu
            key={item.id}
            imageSrc={item.photoPizza}
            title={item.title}
            price={item.price}
          />
        ))}
      </div>

    </>
  )
}