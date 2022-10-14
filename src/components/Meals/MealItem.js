import styles from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import { useContext } from 'react';
import cartContext from '../../store/cart-context';
const MealItem=props=>{
    //using the cart context 
    const cartCtx=useContext(cartContext);

    
    const price=props.price.toFixed(2);

    const addToCartHandler=(amount)=>{
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price,
          });
    }
    return <li className={styles.meal} key={props.id}>
        <div>
            <h3>{props.name}</h3>
            <div className={styles.description}>
                {props.description}
            </div>
            <div className={styles.price}>
                {price}
            </div>
        </div>
        <div>
            <MealItemForm id={props.id} onAddToCart={addToCartHandler}/>
        </div>
    </li>
}
export default MealItem;