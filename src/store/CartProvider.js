import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState={
    items:[],
    totalAmount:0
}
const CartReducer=(state,action)=>{
    if(action.type==='ADD'){

        const updatedTotalAmount=state.totalAmount+action.item.amount* action.item.price;

        const existingItemIndex=state.items.findIndex((item)=>item.id===action.item.id)

        const existingItem=state.items[existingItemIndex];
        let updatedItems;

        if(existingItem){
            const updatedItem = {
                ...existingItem,
                amount: existingItem.amount + action.item.amount,
              };
              updatedItems=[...state.items];

              updatedItems[existingItemIndex]=updatedItem;

        }
        else{

             //we are using concat rather than push becuase push modifies in place whereas concat returns a new cpy
        updatedItems=state.items.concat(action.item);

        }

        return {
            items:updatedItems,
            totalAmount:updatedTotalAmount
        };
    }
    if(action.type==='REMOVE'){
        const existingItemIndex=state.items.findIndex((item)=>item.id===action.id);

        const existingItem=state.items[existingItemIndex];

        const updatedTotalAmount=state.totalAmount-existingItem.price;
        let updatedItems;
        if(existingItem.amount===1){
            updatedItems=[...state.items];
            updatedItems=updatedItems.filter((item)=>item.id!==action.id);
        }
        else{
            const updatedItem={...existingItem, amount:existingItem.amount-1}

            updatedItems=[...state.items];
            updatedItems[existingItemIndex]=updatedItem;
        }
        return {
            items:updatedItems,
            totalAmount:updatedTotalAmount
        }
    }
return defaultCartState;
}
const CartProvider=props=>{
    
    //use reducer returns 2 things current state , action handler

    const [cartState,dispatchCartAction]=useReducer(CartReducer,defaultCartState);


    const addItemToCartHandler = (item) => {
        dispatchCartAction({type:'ADD' , item:item});
    };

    const removeItemFromCartHandler=(id)=>{
        dispatchCartAction({type:'REMOVE', id:id})
    };


    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
      };
     
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;