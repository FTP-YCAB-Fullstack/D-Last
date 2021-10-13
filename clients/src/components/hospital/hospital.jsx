import React, { useEffect, useState } from 'react'
import NavBar from '../nav/nav'
import { Link, useHistory } from 'react-router-dom'
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux'
import getApi from '../../redux/action'

import { useDispatch, useSelector } from 'react-redux'
import getApi from '../../redux/action'
function Hospital() {
    const hospitals = useSelector(state => state.hospital)
    const dispatch = useDispatch()

    const [input,setInput] = useState("")
    const hospitals = useSelector(state => state.hospital)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getApi("hospital"))
        console.log(hospitals)
    },[])

    useEffect(() => {
        console.log(input)
    },[input])

    return (
        <div>
            <NavBar/>
            <h1>ini hospital</h1>
            <form >
                <div className="inp">
                    <input type="text" onChange={(e) => setInput(e.target.value)} placeholder="Masukan nama provinsi"/>
                    <input type="button" onClick={() => console.log(hospitals)} value="Check"/>
                </div>
            </form>
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