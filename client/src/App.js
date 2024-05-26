import "./App.css";
import Header from "./components/header";
import Products from "./components/products";
import Cart from "./components/cart";
import Orders from "./components/order";
import OrderList from "./components/order.list";
function App() {
  return (
    <div className="App">
      <Header />
      <OrderList />
    </div>
  );
}

export default App;
