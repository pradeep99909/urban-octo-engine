import "./App.css";
import { useState } from "react";
import AppContext from "./context/app.context";
import Header from "./components/header";
import Products from "./components/products";
import Cart from "./components/cart";
import Orders from "./components/order";
import OrderList from "./components/order.list";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function Main() {
  return (
    <>
      <Header />
      <Products />
      <Cart />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/orders",
    element: <OrderList />,
  },
]);

<Cart />;
function App() {
  const [isCartOpen, setCartOpen] = useState(false);
  const [carts, setCarts] = useState([]);
  const [orders, setOrders] = useState([]);
  return (
    <AppContext.Provider
      value={{ isCartOpen, setCartOpen, carts, setCarts, orders, setOrders }}
    >
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </AppContext.Provider>
  );
}

export default App;
