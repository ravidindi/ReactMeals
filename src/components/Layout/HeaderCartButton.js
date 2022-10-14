import CartIcon from "../Cart/CartIcon";

import styles from './HeaderCartButton.module.css';
import { useState } from "react";
import { useEffect } from "react";

import { useContext } from "react";

import cartContext from "../../store/cart-context";
const HeaderCartButton=props=>{

    const cartCtx=useContext(cartContext);

    const [btnIsHighlighted, setbtnIsHighlighted] = useState(false);

    const btnClasses = `${styles.button} ${btnIsHighlighted ? styles.bump : ''}`;

    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
      }, 0);
    let items=cartCtx.items;
      useEffect(() => {
        if (items.length === 0) {
          return;
        }
        setbtnIsHighlighted(true);
    
        const timer = setTimeout(() => {
          setbtnIsHighlighted(false);
        }, 300);
    
        return () => {
          clearTimeout(timer);
        };
      }, [items]);
      
    return <button className={btnClasses} onClick={props.onClick}>
        <span className={styles.icon}>
            <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className={styles.badge}>
            {numberOfCartItems}
        </span>
    </button>
}
export default HeaderCartButton;