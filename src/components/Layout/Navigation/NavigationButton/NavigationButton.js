import React from "react";
import { NavLink } from "react-router-dom";
import scrollToComponent from "react-scroll-to-component";

function NavigationButton({ to, children, exact, scrollComponent }) {
  const handleClick = () => {
    // The timeout fixes the scroll happening before view rerender
    // It's an arbitrary number, maybe there's a way to do it in some promise/callback way
    setTimeout(() => {
      scrollToComponent(scrollComponent, { align: "top", duration: 250 });
    }, 100);
  };
  
  return (
    <NavLink
      exact={exact}
      className="text-sm md:text-base inline-block m-2 p-1 hover:p-2 hover:px-4 px-4 transition-all duration-100 rounded"
      activeClassName="p-2 bg-black text-white"
      to={to}
      onClick={handleClick}
    >
      {children}
    </NavLink>
  );
}

export default NavigationButton;
