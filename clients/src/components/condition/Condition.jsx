import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getApi from '../../redux/action'
import ConditionDetail from '../modal/ConditionDetail'
import NavBar from '../nav/nav'

function Condition() {
    const conditions = useSelector(state => state.dataCondition)
    const dispatch = useDispatch()
    const [open,setOpen] = useState(false)
    const [dataCard, setDataCard] = useState()

    useEffect(() => {
        dispatch(getApi("condition"))
        console.log(conditions)
    },[])

    const cardData = (el) => {
        setDataCard(el)
        setOpen(true)
    }


    return (
        <div>
            <NavBar/>
            <div className= " overflow-auto p-12 h-11/12 flex justify-center items-center flex-col ">
                <div className= " flex flex-wrap items-center w-11/12 gap-y-4 gap-x-3">
                    {conditions.map((el,key) => {
                        return (
                            <>
                                <div key={key} className="max-w-md mx-auto ">
                                    <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-xs mb-5">
                                        <img className="w-full" src={`http://localhost:5000/${el.thumbnail}`} alt=""/>
                                        <div className="p-5 flex items-center flex-col">
                                            <h5 className="text-gray-900 font-bold text-center text-2xl tracking-tight mb-2">{el.judul}</h5>
                                            <a  onClick={() => cardData(el)}
                                                className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href="#">
                                                Read more
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                {open && <ConditionDetail close={setOpen} {...dataCard}/>}
                            </>
                            
                        )
                    })}
                    

                </div>
                <div className="w-full flex justify-center">
                    <div class="m-6 space-y-3 w-72 bg-green-700 ">
                        {/* <button
                            class="block rounded-full py-3 px-6 w-full px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-green-700 rounded shadow ripple hover:shadow-lg hover:bg-green-800 focus:outline-none">
                            Buat Cerita Disini!
                        </button> */}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Condition
