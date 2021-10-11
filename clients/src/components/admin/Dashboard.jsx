import React, { useState } from 'react'
import FormCondition from '../modal/formCondition'

function Dashboard() {
    const [open, setOpen] = useState(false)

    return (
        <>
        
            <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
                <div class="text-center pb-12">
                    <h2 class="text-base font-bold text-indigo-600">
                        We Love, We Care
                    </h2>
                    <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
                        Admin Dashboard
                    </h1>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div onClick= {() => setOpen(true)} class="w-full bg-blue-200 rounded-lg p-12 flex flex-col justify-center items-center">
                        <div class="mb-8">
                            <img class="object-center object-cover rounded-full h-36 w-36" src="https://i.ibb.co/QcCxmZS/3771650.jpg" alt="photo"/>
                        </div>
                        <div class="text-center">
                            <p class="text-xl text-gray-700 font-bold mb-2">Kondisi Mental</p>
                        </div>
                    </div>
                </div>   
            </section>

            {open && <FormCondition close={setOpen}/>}
        </>
    )
}

export default Dashboard
