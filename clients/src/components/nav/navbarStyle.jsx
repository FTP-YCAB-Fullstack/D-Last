import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'

export const Nav = styled.nav`
    background: #023A42;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
`
export const NavLink = styled(Link)`
padding: 1rem 2rem;
cursor: pointer;
align-items: center;
text-align: center;
text-decoration: none;
color: #fff;
transition: all 0.3s ease-in;
font-size: 0.9rem;
&:hover {
  color: #73B8BE;
}
`;

export const Bars = styled(FaBars)`
display: none;
color: #fff;
flex-direction: column;


@media screen and (max-width: 768px){
    display: flex;
    position: absolute;
    top: 1rem;
    right: 20px;
    transform: translate(-100, 75%);
    font-size: 2rem;
    cursor: pointer
}
`
export const NavBtn = styled.nav`
display: flex;
align-items: center;
margin-right: 24px;
color: #fff;
`
export const BtnLink = styled(Link)`
border-radius: 4px;
background: #3A9CA3;
padding: 5px 15px;
margin-right: 60px;
color: #fff;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;


&:hover{
    transition: all 0.2s ease-in-out;
    background: #9EECF3;
    color: #0110606
}
`

export const BtnOut = styled.button`
border-radius: 4px;
background: #3A9CA3;
padding: 5px 15px;
margin-right: 50px;
color: #fff;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
margin-left : 2rem;

&:hover{
    transition: all 0.2s ease-in-out;
    background: #73B8BE;
    color: #73B8BE;
}
`