import React, { useState } from 'react'
import {Nav, NavLink, Bars, Menu, NavBtn, BtnLink} from './navbarStyle'
import { useDispatch, useSelector } from 'react-redux'

function NavBar () {
    const [isOpen, setIsOpen] = useState(false)
    const logAs = useSelector(state => state.logAs)
    const isLogin = useSelector(state => state.isLogin)
    const dispatch = useDispatch()

    const logout = (e) => {
      e.preventDefault()
      dispatch({type : "LOGOUT"})

      localStorage.removeItem("token");
    }
    return (
        <>
            <Nav>
                <NavLink to='/'>
                   <h1>Halo {logAs.username}</h1> 
                    <NavBtn onClick={logout}>
                        Keluar
                    </NavBtn>
                </NavLink>
                <Bars onClick={() => setIsOpen(!isOpen)}>
                </Bars>
                <Menu isOpen={isOpen}>
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
    )}
// import React, { useEffect, useState } from 'react'

// // import axios from "axios"


//     return (
//     <nav id="header" className="z-30 py-1 bg-white shadow-lg border-b border-blue-400 mt-5">
//         <div className="w-full flex items-center justify-between mt-0 px-6 py-2">
//            <label for="menu-toggle" className="cursor-pointer md:hidden block">
//            </label>
//            <input className="hidden" type="checkbox" id="menu-toggle"/>
           
//            <div className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1" id="menu">
//               <nav>
//                  <ul className="md:flex items-center justify-between text-base text-blue-600 pt-4 md:pt-0">
//                     <li><Link to='/' className="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2" >Home</Link></li>
//                     <li><a className="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2" href="#">Service</a></li>
//                     <li><a className="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2" href="#">Kondisi Kesehatan</a></li>
//                     <li><Link to='/rumah-sakit' className="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2" >Rumah Sakit</Link></li>
//                     <li><Link to='/cerita' className="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2" >Cerita</Link></li>
//                     <li><Link to='/volunteer' className="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2" >Volunteer</Link></li>
//                  </ul>
//               </nav>
//            </div>
           
           

//            {isLogin ? 
//             <div className="order-2 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4" id="nav-content">
//                <div className="auth flex items-center w-full md:w-full">
//                   <h4 className="bg-transparent text-gray-800  p-2 rounded border-gray-300 mr-4 hover:bg-gray-100 hover:text-gray-700">  </h4>
//                   <button onClick={logout} className="bg-blue-600 text-gray-200  p-2 rounded  hover:bg-blue-500 hover:text-gray-100">Logout</button>
//                </div>
//             </div>
//            : 
//             <div className="order-2 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4" id="nav-content">
//                <div className="auth flex items-center w-full md:w-full">
//                   <button className="bg-transparent text-gray-800  p-2 rounded border border-gray-300 mr-4 hover:bg-gray-100 hover:text-gray-700"> <Link to = '/login'> Masuk </Link> </button>
//                   <button className="bg-blue-600 text-gray-200  p-2 rounded  hover:bg-blue-500 hover:text-gray-100"><Link to = '/register'> Daftar </Link></button>
//                </div>
//             </div> 
//             }
           
//         </div>
//      </nav>

//     )


export default NavBar
