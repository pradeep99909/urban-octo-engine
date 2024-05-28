import React, { useContext, useEffect } from "react";
import Network from "../network";
import AppContext from "../context/app.context";

function Order({ order }) {
  console.log("🚀 ~ Order ~ order:", order);
  return (
    <div class="flex flex-wrap items-center gap-y-4 py-6">
      <dl class="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
        <dt class="text-base font-medium text-gray-500 dark:text-gray-400">
          Order ID:
        </dt>
        <dd class="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
          <a href="#" class="hover:underline">
            {order.id}
          </a>
        </dd>
      </dl>

      <dl class="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
        <dt class="text-base font-medium text-gray-500 dark:text-gray-400">
          Date:
        </dt>
        <dd class="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
          {new Date(order.id).toDateString()}
        </dd>
      </dl>

      <dl class="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
        <dt class="text-base font-medium text-gray-500 dark:text-gray-400">
          Price:
        </dt>
        <dd class="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
          $100
        </dd>
      </dl>

      <dl class="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
        <dt class="text-base font-medium text-gray-500 dark:text-gray-400">
          Gift:
        </dt>
        <dd class="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
          {order.new_coupon_code}
        </dd>
      </dl>

      <dl class="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
        <dt class="text-base font-medium text-gray-500 dark:text-gray-400">
          Status:
        </dt>
        <dd class="me-2 mt-1.5 inline-flex items-center rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
          <svg
            class="me-1 h-3 w-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M18.5 4h-13m13 16h-13M8 20v-3.333a2 2 0 0 1 .4-1.2L10 12.6a1 1 0 0 0 0-1.2L8.4 8.533a2 2 0 0 1-.4-1.2V4h8v3.333a2 2 0 0 1-.4 1.2L13.957 11.4a1 1 0 0 0 0 1.2l1.643 2.867a2 2 0 0 1 .4 1.2V20H8Z"
            />
          </svg>
          d
        </dd>
      </dl>

      <div class="w-full grid sm:grid-cols-2 lg:flex lg:w-64 lg:items-center lg:justify-end gap-4">
        <button
          type="button"
          class="w-full rounded-lg border border-red-700 px-3 py-2 text-center text-sm font-medium text-red-700 hover:bg-red-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-red-300 dark:border-red-500 dark:text-red-500 dark:hover:bg-red-600 dark:hover:text-white dark:focus:ring-red-900 lg:w-auto"
        >
          Cancel order
        </button>
        <a
          href="#"
          class="w-full inline-flex justify-center rounded-lg  border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 lg:w-auto"
        >
          View details
        </a>
      </div>
    </div>
  );
}

export default function OrderList() {
  const { orders, setOrders } = useContext(AppContext);
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const orderApi = new Network.ordersNetwork.default();
        const fetchedOrders = await orderApi.getUserOrder();
        console.log("🚀 ~ fetchData ~ orders:", fetchedOrders);
        setOrders(fetchedOrders);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, [setOrders]);

  return (
    <section class="bg-white py-8 antialiased dark:bg-gray-900 md:py-16 h-full">
      <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div class="mx-auto max-w-5xl">
          <div class="gap-4 sm:flex sm:items-center sm:justify-between">
            <h2 class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
              My orders
            </h2>
          </div>

          <div class="mt-6 flow-root sm:mt-8">
            <div class="divide-y divide-gray-200 dark:divide-gray-700">
              {orders && Object.values(orders).length > 0 ? (
                Object.values(orders).map((order) => {
                  console.log("🚀 ~ OrderList ~ order:", order);
                  return <Order key={order.id} order={order} />;
                })
              ) : (
                <p>No Orders found!</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
