import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getApi from '../../redux/action'
import NavBar from '../nav/nav'

function Condition() {
    const conditions = useSelector(state => state.dataCondition)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getApi("condition"))
        console.log(conditions)
    },[])


    return (
        <div>
            <NavBar/>
            <br />
            <br />
            <br />
            <h1 className>Condition</h1>

        </div>
    )
}

export default Condition
