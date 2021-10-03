import { faShippingFast } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import { HOME } from '../../../constants/routes'
import useScrollTop from '../../../hooks/useScrollTop'

const CashPayment = () => {
    useScrollTop()
    return (
        <div className="h-screen flex items-center justify-center">
            <div className="flex items-center justify-center text-center p-10 bg-white rounded-lg overflow-hidden shadow-xl ">
                <div>
                    <div className="mb-6 rounded-full h-10 w-10 bg-yellow-100 flex mx-auto items-center justify-center text-lg text-yellow-400">
                        <FontAwesomeIcon icon={faShippingFast} />
                    </div>
                    <h2 className="font-bold text-xl mb-6 text-yellow-500">
                        Order Confirmed
                    </h2>
                    <p className="text-base mb-8">Product on it's way</p>
                    <Link
                        to={HOME}
                        className="bg-secondary text-white rounded px-4 py-2"
                    >
                        Continue Shopping
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CashPayment
