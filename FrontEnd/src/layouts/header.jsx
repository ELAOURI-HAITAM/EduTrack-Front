
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import React from "react";
import {Link} from "react-router-dom";
const Header = () => {
  return (
    <Navbar fluid rounded>
      <NavbarBrand href="https://flowbite-react.com">
        <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">EduTrack</span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <Link to={"/login"}><Button>Get started</Button></Link>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <Link className="text-white" to={"/"}>Home</Link>
        <NavbarLink href="#">About</NavbarLink>
        <NavbarLink href="#">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
export default Header;