import React, { useEffect, useState } from 'react'
import NavBar from '../nav/nav'
import { Link, useHistory } from 'react-router-dom'
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux'
import getApi from '../../redux/action'

function Hospital() {

    const [input,setInput] = useState("")
    const hospitals = useSelector(state => state.hospital)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getApi("hospital"))
        console.log(hospitals)
    },[])

    const filter = () => {
        return hospitals.filter((el) => {
            if(input == ""){
                return el
            } else if (el.province.toLowerCase().includes(input.toLowerCase())){
                return el
            } 
        })    
    }

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
            {   
                filter().length ? filter().map((el,key) => {
                    return(
                        <p>{el.name}</p>
                    )
                }) : <p>Not Found</p>
                
            }
            {/* {hospitals.map((el) => <p>{el.province.toLowerCase()}</p>)} */}
        </div>
    )
}
export default Hospital