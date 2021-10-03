import { faCheck, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const SellerDetails = () => {
    return (
        <div>
            <div className="delivery bg-white rounded-md p-4 mb-4">
                <h4 className="pb-4 border-b-2 border-gray-100 font-lg font-semibold mb-4">
                    Seller Details
                </h4>
                <div className="mb-4">
                    <h3 className="font-lg uppercase font-semibold mb-2">
                        Michelin nig shop
                    </h3>
                    <p className="text-md mb-2">100% Seller Score</p>
                    <p className="text-md mb-2">154 Followers</p>
                </div>
                <div>
                    <h4 className="pb-4 border-b-2 border-gray-100 font-lg font-semibold mb-4">
                        Seller Details
                    </h4>
                    <ul>
                        <li className="text-sm text-gray-500 flex space-x-1">
                            <span className="text-green-200">
                                <FontAwesomeIcon icon={faCheck} />
                            </span>
                            <span>Order fulfillment </span>
                        </li>
                        <li className="text-sm text-gray-500 flex space-x-1">
                            <span className="text-green-200">
                                <FontAwesomeIcon icon={faCheck} />
                            </span>
                            <span>Quality Score: Excellent</span>
                        </li>
                        <li className="text-sm text-gray-500 flex space-x-1">
                            <span className="text-green-200">
                                <FontAwesomeIcon icon={faCheck} />
                            </span>
                            <span>Customer Rating: Excellent</span>
                        </li>
                    </ul>
                </div>
            </div>
            <button className="bg-red-100 py-1 px-2 rounded-md w-full">
                <span className="text-lg block font-semibold capitalize">
                    You want to sell ?
                </span>
                <span className="text-xs">
                    click here to list your products
                    <span className="ml-2">
                        <FontAwesomeIcon icon={faChevronRight} />
                    </span>
                </span>
            </button>
        </div>
    )
}

export default SellerDetails
