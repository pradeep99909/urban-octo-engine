// import React from "react";

import React from "react";
import { Link } from "react-router-dom";
import {
  Disclosure,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";

function BrandName() {
  return (
    <div className="flex-shrink-0">
      <img
        className="h-8 w-8"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
        alt="Your Company"
      />
    </div>
  );
}
class Options extends React.Component {
  render() {
    return (
      <div className="hidden md:block">
        <div className="ml-10 flex items-baseline space-x-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "rounded-md px-3 py-2 text-sm font-medium"
              )}
              aria-current={item.current ? "page" : undefined}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

function Avatar() {
  return (
    <div className="ml-4 flex items-center md:ml-6">
      {/* Profile dropdown */}
      <Menu as="div" className="relative ml-3">
        <div>
          <MenuButton className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
            <span className="absolute -inset-1.5" />
            <span className="sr-only">Open user menu</span>
            <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
          </MenuButton>
        </div>
      </Menu>
    </div>
  );
}

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Products", href: "/", current: true },
  { name: "Orders", href: "/orders", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default class Header extends React.Component {
  render() {
    return (
      <>
        <div className="min-h-full">
          <Disclosure as="nav" className="bg-gray-800">
            {({ open }) => (
              <>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                  <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                      <BrandName />
                      <Options />
                    </div>
                    <div className="hidden md:block">
                      <Avatar />
                    </div>
                  </div>
                </div>
              </>
            )}
          </Disclosure>
        </div>
      </>
    );
  }
}
