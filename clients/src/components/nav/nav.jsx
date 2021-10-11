import React, { useState } from 'react'
import {Nav, NavLink, Bars, NavBtn, BtnLink, BtnOut} from './navbarStyle'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

function NavBar () {
    const [isOpen, setIsOpen] = useState(false)
    const logAs = useSelector(state => state.logAs)
    const isLogin = useSelector(state => state.isLogin)
    const dispatch = useDispatch()

    const token = localStorage.getItem('token');

    const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    @media (max-width: 768px) {
        overflow: hidden;
        flex-direction: column;
        max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
        transition: max-height 0.3s ease-in;
        width: 100%;
    }
    `;

    const logout = (e) => {
      e.preventDefault()
      dispatch({type : "LOGOUT"})

      localStorage.removeItem("token");
    }

    
    return (
        <>
            <Nav>
                <Bars onClick={() => setIsOpen(!isOpen)}>
                </Bars>
                <Menu isOpen={isOpen}>
                    <NavLink to='/'activeStyle >
                        home
                    </NavLink>
                    <NavLink to='/volunteer' activeStyle>
                        volunteer
                    </NavLink>
                    <NavLink to='/cerita' activeStyle>
                        cerita
                    </NavLink>
                    <NavLink to='/rumah-sakit' activeStyle>
                        rumah sakit
                    </NavLink>
                    {/* <NavLink>
                        layanan
                    </NavLink> */}
                    <NavLink to='/health-condition' activeStyle>
                        kondisi
                    </NavLink>
                </Menu>

                {token ? 
                <NavBtn>
                      <h1>Selamat Datang</h1> 
                     <NavLink to='/'>
                        <BtnOut onClick={logout}>
                            Keluar
                        </BtnOut>
                    </NavLink>
                </NavBtn>
               
                :
                <NavBtn>
                    <NavLink to='/register'activeStyle>
                        Daftar
                    </NavLink>
                    <BtnLink to='/login'>
                        Masuk
                    </BtnLink>
                </NavBtn>
                }
            </Nav>
        </>
    )}
    
export default NavBar