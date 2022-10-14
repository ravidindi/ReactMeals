import Card from '../UI/Card';
import styles from './AvailableMeals.module.css';
import MealItem from './MealItem';
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Chicken Lollipop',
      description: 'Finest chicken and Mayonnaise',
      price: 140.56,
    },
    {
      id: 'm2',
      name: 'Fish Biryani + Fry Combo',
      description: 'A deadly  specialty!',
      price: 220.15,
    },
    {
      id: 'm3',
      name: 'Hyderabadi Chicken Biryani',
      description: 'The Royal taste of Hyd enriched with spices',
      price: 160.34,
    },
    {
      id: 'm4',
      name: 'Garlic Naan',
      description: 'Healthy...and tasty...',
      price: 40,
    },
    {
      id: 'm5',
      name: 'Kadai panner',
      description: 'amazingly flavorful paneer dish...',
      price: 120,
    },
    {
      id: 'm6',
      name: 'Coco Cola(500ml)',
      description: 'Chilled!!',
      price: 35,
    },
  ];
  const AvailableMeals=()=>{
    const mealsList=DUMMY_MEALS.map((meal)=><MealItem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price}/>);
    return <section className={styles.meals}>
      <Card>
      <ul>
        {mealsList}
    </ul>
      </Card>
        
        </section>
  }
        
export default AvailableMeals;