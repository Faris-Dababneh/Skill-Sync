import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
import { NavItem } from 'react-bootstrap';
import pnglogo from "./pnglogo.png";
import logo2 from './logo2.png'

const Navbar = () => {
  return (
    <>
      <Nav>
            <NavBtnLink to='/'><img src={logo2} alt='SkillSync' className='h-10 mr-28'/></NavBtnLink>
        <NavBtn>
            <NavBtnLink to='/dashboard' className='other'>DASHBOARD</NavBtnLink>
          </NavBtn>
        <NavBtn>
          <NavBtnLink to='/login' className='other'>LOGIN</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;