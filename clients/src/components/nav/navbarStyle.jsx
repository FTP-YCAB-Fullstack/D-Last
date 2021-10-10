import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'

export const Nav = styled.nav`
    background: #023A42;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1000px)/2);
    z-index: 10
`
export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active{
        color: #15cdfc;
    }
`

export const Bars = styled(FaBars)`
display: none;
color: #fff;

  span {
    height: 2px;
    width: 25px;
    background: #7b7fda;
    margin-bottom: 4px;
    border-radius: 5px;
  }

@media screen and (max-width: 768px){
    display: flex;
    position: absolute;
    top: 1.5rem;
    right: 20px;
    transform: translate(-100, 75%);
    font-size: 2rem;
    cursor: pointer
}
`
export const Menu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;

@media screen and (max-width: 768px){
    display: none;
    flex-direction: column;
}
`
export const NavBtn = styled.nav`
display: flex;
align-items: center;
margin-right: 24px;
`
export const BtnLink = styled(Link)`
border-radius: 4px;
background: #3A9CA3;
padding: 10px 22px;
margin-right: 50px;
color: #fff;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover{
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #0110606
}
`