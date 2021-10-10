import React, { useState } from 'react'
import {Nav, NavLink, Bars, Menu, NavBtn, BtnLink} from './navbarStyle'

function NavBar() {

    return (
        <>
            <Nav>
                <NavLink to='/'>
                    <h1>logo</h1>
                </NavLink>
                <Bars/>
                <Menu>
                    <NavLink to='/home'activeStyle >
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
                    </NavLink>
                    <NavLink>
                        kondisi
                    </NavLink> */}
                </Menu>
                <NavBtn>
                    <NavLink to='/register'activeStyle>
                        Daftar
                    </NavLink>
                    <BtnLink to='/login'>
                        Masuk
                    </BtnLink>
                </NavBtn>
            </Nav>
        </>

    )
}

export default NavBar
