import styled from 'styled-components'
import logo from "./logo.svg";
import { NavLink as Link } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'

export const Nav = styled.nav`
    background: #212426;
    height: 30px;
    display: flex;
    padding: 30px;
    justify-content: center;
    align-items: center;
    padding: 0.5rem (calc(100vw - 1000px) / 2);
    z-index: 10;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    position: fixed;
    top: 0;
    width: 100%;
    
`;

export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        color: #15cdfc;
    }
`;

export const Bars = styled(FaBars)`
    display: none;
    color: #fff;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtn = styled.nav`
    margin-right: 8rem;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtnLink = styled(Link)`
    .other {
        margin: 4px;
    
        padding: 20px 22px;
        align-items: center;
        height: 100px;
        
        color: #fff;
        border: none;
        outline: none;
        cursor: pointer;
        
        text-decoration: none;
    }
    .other:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
    
`;

