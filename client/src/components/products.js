import React, { useContext } from "react";
import AppContext from "../context/app.context";
import Network from "../network";
import { PRODUCTS } from "../constants";

function Product(props) {
  const { setCartOpen, setCarts } = useContext(AppContext);
  return (
    <a href="#" className="group">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <img
          src={props.image}
          alt={props.title}
          style={{
            width: "250px",
            height: "200px",
            bakgroundSize: "content",
            objectFit: "contain",
          }}
          className="object-cover object-center group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{props.title}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">${props.price}</p>
      <button
        onClick={async () => {
          const api = new Network.cartNetwork.default("pradeep");
          const cart = {
            id: props.id,
            price: props.price,
            quantity: 1,
            imageSrc: props.image,
            name: props.title,
          };
          await api.addNewCart(cart);
          const usersCart = await api.getUserCart();
          console.log("🚀 ~ onClick={ ~ usersCart:", usersCart);
          setCarts(usersCart);
          setCartOpen(true);
        }}
        type="button"
        className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Add To Cart
      </button>
    </a>
  );
}

const ProductList = ({ products }) => {
  return (
    <>
      {products.length > 0
        ? products.map((product) => (
            <Product
              id={product.id}
              key={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
            />
          ))
        : "No Products Available"}
    </>
  );
};

class Products extends React.Component {
  render() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            <ProductList products={PRODUCTS} />;
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
