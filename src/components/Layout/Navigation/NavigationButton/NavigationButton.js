import React from "react";
import { NavLink } from "react-router-dom";
import scrollToComponent from "react-scroll-to-component";

function NavigationButton({ to, children, exact, scrollComponent }) {
  const handleClick = () => {
    // The timeout fixes the scroll happening before view rerender
    // It's an arbitrary number, maybe there's a way to do it in some promise/callback way
    setTimeout(() => {
      scrollToComponent(scrollComponent, { align: "top" });
    }, 100);
  };
  
  return (
    <NavLink
      exact={exact}
      className="text-sm md:text-base inline-block text-white bg-black m-2 p-1 hover:p-2 px-4 transition duration-500"
      activeClassName="p-2"
      to={to}
      onClick={handleClick}
    >
      {children}
    </NavLink>
  );
}

export default NavigationButton;
