import React from 'react'
import {Link, useParams,useHistory} from 'react-router-dom'
import Request from '../../axios_instance'

function Email_Verif() {

    const {token} = useParams()
    const history = useHistory()

    const verified = async () => {
        try{
            const isVerif = await Request({
                method:'GET',
                url: `users/verify-email?token=${token}`,
            })

            if(isVerif.data.message === `User is verified`){
                history.push('/login')
            }
        }catch(error){
            console.log(error)
        }
    }

    return (
        <body>
        <div className="flex items-center justify-center min-h-screen p-5 bg-gray-500 min-w-screen">
            <div className="max-w-xl p-8 text-center text-gray-800 bg-white shadow-xl lg:max-w-3xl rounded-3xl lg:p-12">
                <h3 className="text-2xl">Terima Kasih sudah bergabung di D'Last-Line</h3>
                <div className="flex justify-center">
                    <i className="fas fa-envelope-open-text fa-5x mt-4 w-24 h-24 text-green-600" >
                    </i>
                </div>

                <p>Kami senang kamu disini. Email mu sudah diverifikasi ya!</p>
                <div className="mt-4">
                    <button 
                    onClick={verified}
                    className="px-2 py-2 text-white bg-green-600 rounded hover:bg-green-500">
                        Verify
                    </button>
                </div>
            </div>
        </div>
    </body>

    )
}

export default Email_Verif
