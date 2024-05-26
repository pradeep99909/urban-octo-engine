import "./App.css";
import { useState } from "react";
import AppContext from "./context/app.context";
import Header from "./components/header";
import Products from "./components/products";
import Cart from "./components/cart";
import Orders from "./components/order";
import OrderList from "./components/order.list";
function App() {
  const [isCartOpen, setCartOpen] = useState(false);
  return (
    <AppContext.Provider value={{ isCartOpen, setCartOpen }}>
      <div className="App">
        <Header />
        <Products />
        <Cart />
      </div>
    </AppContext.Provider>
  );
}

export default App;
