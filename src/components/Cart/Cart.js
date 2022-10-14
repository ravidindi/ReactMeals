import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';

import { useContext } from 'react';
import cartContext from '../../store/cart-context';
const Cart=props=>{
const cartCtx=useContext(cartContext);


const cartItemAddHandler=item=>{
  item={...item , amount:1}
cartCtx.addItem(item);
}
const cartItemRemoveHandler=(id)=>{
cartCtx.removeItem(id);
}
    const cartItems = (
        <ul className={classes['cart-items']}>
          {cartCtx.items.map((item) => (
            <CartItem key={item.id+(Math.random() + 1).toString(36).substring(7)} price={item.price} name={item.name} amount={item.amount}
            onAdd={cartItemAddHandler.bind(null,item)} onRemove={cartItemRemoveHandler.bind(null,item.id)}
            >{item.name}</CartItem>
          ))}
        </ul>
      );

      const totalAmt=cartCtx.totalAmount.toFixed(2);

      const hasItems=cartCtx.items.length >0;
      return <Modal onHide={props.onHide}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>&#8377;{totalAmt}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onHide}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
}
export default Cart;