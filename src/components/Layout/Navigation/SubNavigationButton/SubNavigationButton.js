import React from "react";
import { NavLink } from "react-router-dom";
import scrollToComponent from "react-scroll-to-component";

function SubNavigationButton({ to, children, exact, scrollComponent, isActive }) {
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
      isActive={isActive}
      className="inline-block text-sm md:text-base bg-white transition duration-100 transform hover:-translate-y-1 shadow-xs hover:shadow-lg mx-2 border-1 border-black border rounded p-1"
      activeClassName="shadow-lg -translate-y-1"
      to={to}
      onClick={handleClick}
    >
      {children}
    </NavLink>
  );
}

export default SubNavigationButton;
