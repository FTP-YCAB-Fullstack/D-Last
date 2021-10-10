import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
// import axios from "axios"
// import { useDispatch, useSelector } from 'react-redux'

function Nav() {

    return (
    <nav id="header" class="w-full z-30 py-1 bg-white shadow-lg border-b border-blue-400 mt-5">
        <div class="w-full flex items-center justify-between mt-0 px-6 py-2">
           <label for="menu-toggle" class="cursor-pointer md:hidden block">
           </label>
           <input class="hidden" type="checkbox" id="menu-toggle"/>
           
           <div class="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1" id="menu">
              <nav>
                 <ul class="md:flex items-center justify-between text-base text-blue-600 pt-4 md:pt-0">
                    <li><Link to='/home' class="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2" >Home</Link></li>
                    <li><a class="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2" href="#">Service</a></li>
                    <li><a class="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2" href="#">Kondisi Kesehatan</a></li>
                    <li><Link to='/rumah-sakit' class="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2" >Rumah Sakit</Link></li>
                    <li><Link to='/cerita' class="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2" >Cerita</Link></li>
                    <li><Link to='/volunteer' class="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2" >Volunteer</Link></li>

                 </ul>
              </nav>
           </div>
           
           <div class="order-2 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4" id="nav-content">
              <div class="auth flex items-center w-full md:w-full">
                 <button class="bg-transparent text-gray-800  p-2 rounded border border-gray-300 mr-4 hover:bg-gray-100 hover:text-gray-700"> <Link to = '/login'> Masuk </Link> </button>
                 <button class="bg-blue-600 text-gray-200  p-2 rounded  hover:bg-blue-500 hover:text-gray-100"><Link to = '/register'> Daftar </Link></button>
              </div>
           </div>
        </div>
     </nav>

    )
}

export default Nav
