import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getApi from '../../redux/action'

function VolunteerRegistInfo(props) {

    const unapproved = useSelector(state => state.unVolunteer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getApi("unapproved"))
        console.log(unapproved)
    },[])

    return (
        <div className="w-screen h-screen left-0 top-0 bg-opacity-50 bg-black flex items-center justify-center fixed">
                <div className="modalcheck h-5/6 w-5/6 p-4 gap-y-4 bg-white border-green-700 border-2 overflow-auto">
                    <h1>Test</h1>
                    <button onClick={() => props.close(false) }> Close </button>
                </div>
        </div>
    )
}

export default VolunteerRegistInfo
