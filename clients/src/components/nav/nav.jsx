import React, { useState } from 'react'
import {Nav, NavLink, Bars, NavBtn, BtnLink, BtnOut} from './navbarStyle'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

function NavBar () {
    const [isOpen, setIsOpen] = useState(false)
    const dispatch = useDispatch()
    const history = useHistory()

    const token = localStorage.getItem('token');
    const auth = localStorage.getItem('authAs');

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
      localStorage.removeItem("authAs");
      history.push('/')
    }

    
    return (
        <div className= "block">
            <Nav className="font-bold">
                <Bars onClick={() => setIsOpen(!isOpen)}>
                </Bars>
                <Menu isOpen={isOpen}>
                    <NavLink to='/'activeStyle >
                    <i className="fas fa-house-user fa-xl"></i>
                    </NavLink>
                    <NavLink to='/volunteer' activeStyle>
                        VOLUNTEER
                    </NavLink>
                    <NavLink to='/cerita' activeStyle>
                        CERITA
                    </NavLink>
                    <NavLink to='/rumah-sakit' activeStyle>
                        RUMAH SAKIT
                    </NavLink>
                    <NavLink to='/health-condition' activeStyle>
                        KONDISI
                    </NavLink>
                    
                </Menu>

                {token ? 
                <NavBtn>
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
                {auth === 'admin' ? <NavBtn>
                    <NavLink to='/admin'>
                        <BtnOut>
                            Admin Menu
                        </BtnOut>
                    </NavLink>
                </NavBtn>
                :
                null}
                
            </Nav>
        </div>
    )}
    
export default NavBar