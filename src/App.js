import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
const [cartIsShown, setcartIsShown] = useState(false);

const setCart=()=>{setcartIsShown(true);}

const hideCart=()=>{setcartIsShown(false);}
  return (
    <CartProvider>
      <Header onSetCart={setCart}/>
      {cartIsShown && <Cart onHide={hideCart}/>}
      <main>

      <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
