import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import { HOME } from '../../constants/routes'

const PayError = () => {
    return (
        <div className="flex items-center justify-center text-center p-10 bg-white rounded-lg overflow-hidden shadow-xl  sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div>
                <div className="mb-6 rounded-full h-10 w-10 bg-red-100 flex mx-auto items-center justify-center text-lg text-red-400">
                    <FontAwesomeIcon icon={faExclamationTriangle} />
                </div>
                <h2 className="font-bold text-xl mb-6 text-red-500">
                    Error Accured
                </h2>
                <p className="text-base mb-8">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
                <Link
                    to={HOME}
                    className="bg-secondary text-white rounded px-4 py-2"
                >
                    Back To Checkout
                </Link>
            </div>
        </div>
    )
}

export default PayError
