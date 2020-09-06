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
      className="text-sm md:text-base inline-block hover:underline mx-2"
      activeClassName="underline"
      to={to}
      onClick={handleClick}
    >
      {children}
    </NavLink>
  );
}

export default SubNavigationButton;
