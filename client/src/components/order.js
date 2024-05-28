import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function OrderPrice() {
  return (
    <div className="space-y-4 bg-gray-50 p-6 dark:bg-gray-800">
      <div className="space-y-2">
        <dl className="flex items-center justify-between gap-4">
          <dt className="font-normal text-gray-500 dark:text-gray-400">
            Original price
          </dt>
          <dd className="font-medium text-gray-900 dark:text-white">
            $6,592.00
          </dd>
        </dl>

        <dl className="flex items-center justify-between gap-4">
          <dt className="font-normal text-gray-500 dark:text-gray-400">
            Savings
          </dt>
          <dd className="text-base font-medium text-green-500">-$299.00</dd>
        </dl>

        <dl className="flex items-center justify-between gap-4">
          <dt className="font-normal text-gray-500 dark:text-gray-400">
            Store Pickup
          </dt>
          <dd className="font-medium text-gray-900 dark:text-white">$99</dd>
        </dl>

        <dl className="flex items-center justify-between gap-4">
          <dt className="font-normal text-gray-500 dark:text-gray-400">Tax</dt>
          <dd className="font-medium text-gray-900 dark:text-white">$799</dd>
        </dl>
      </div>

      <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
        <dt className="text-lg font-bold text-gray-900 dark:text-white">
          Total
        </dt>
        <dd className="text-lg font-bold text-gray-900 dark:text-white">
          $7,191.00
        </dd>
      </dl>
    </div>
  );
}

function Product({ product }) {
  console.log("🚀 ~ Product ~ product:", product);
  // id: 1716917431220;
  // imageSrc: "https://cdn.dummyjson.com/products/images/smartphones/iPhone%205s/1.png";
  // name: "iPhone 5s";
  // price: 199.99;
  // quantity: 1;
  return (
    <div className="space-y-4 p-6">
      <div className="flex items-center gap-6">
        <a href="#" className="h-14 w-14 shrink-0">
          <img
            className="hidden h-full w-full dark:block"
            src={product.imageSrc}
            alt="imac image"
          />
        </a>

        <a
          href="#"
          className="min-w-0 flex-1 font-medium text-gray-900 hover:underline dark:text-white"
        >
          {" "}
          {product.name}{" "}
        </a>
      </div>

      <div className="flex items-center justify-between gap-4">
        <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
          <span className="font-medium text-gray-900 dark:text-white">
            Product ID:
          </span>{" "}
          BJ8364850
        </p>

        <div className="flex items-center justify-end gap-4">
          <p className="text-base font-normal text-gray-900 dark:text-white">
            x{product.quantity}
          </p>

          <p className="text-xl font-bold leading-tight text-gray-900 dark:text-white">
            ${product.price}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Orders() {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
          Track the delivery of order {location.state.id}
        </h2>

        <div className="mt-6 sm:mt-8 lg:flex lg:gap-8">
          <div className="w-full divide-y divide-gray-200 overflow-hidden rounded-lg border border-gray-200 dark:divide-gray-700 dark:border-gray-700 lg:max-w-xl xl:max-w-2xl">
            {location.state.orders.map((product) => (
              <Product product={product} />
            ))}
            <OrderPrice />
          </div>

          <div className="mt-6 grow sm:mt-8 lg:mt-0">
            <div className="space-y-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Congratulations you have got a coupon code gift from this order
              </h3>
              <p className="text-lg font-bold text-gray-900 dark:text-white">
                {location.state.new_coupon_code}
              </p>
              <p className="text-gray-900 dark:text-white">
                You can use for your next order to claim % discount
              </p>
              <button
                className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                onClick={() => navigate("/")}
              >
                Main Menu
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
