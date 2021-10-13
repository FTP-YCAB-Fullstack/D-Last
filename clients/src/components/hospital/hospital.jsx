import React, { useEffect, useState } from 'react'
import NavBar from '../nav/nav'
import { Link, useHistory } from 'react-router-dom'
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux'
import getApi from '../../redux/action'

function Hospital() {

    const hospitals = useSelector(state => state.hospital)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getApi("hospital"))
        console.log(hospitals)
    },[])

    return (
        <div>
            <NavBar/>
            <h1>ini hospital</h1>
            <button onClick={() => console.log(hospitals)}>Check</button>
            <p>Nama2 rumah sakit</p>
            {hospitals.map((el,key) => {
                return (
                    <>
                        <p>{el.name}</p>
                    </>
                )
            })}
        </div>

    )
}

export default Hospital
