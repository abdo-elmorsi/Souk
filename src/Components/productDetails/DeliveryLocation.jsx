import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const DeliveryLocation = () => {
    return (
        <div className="delivery bg-white rounded-md p-4 mb-4">
            <h4 className="pb-4 border-b-2 border-gray-100 font-lg font-semibold mb-4">
                Delivery
            </h4>
            <p className="text-sm mb-4">Choose your location</p>
            <div className="w-full">
                <div className="relative mb-4">
                    <select
                        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-state"
                    >
                        <option>New Mexico</option>
                        <option>Missouri</option>
                        <option>Texas</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <span className="text-md">
                            <FontAwesomeIcon icon={faChevronDown} />
                        </span>
                    </div>
                </div>
                <div className="relative">
                    <select
                        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-state"
                    >
                        <option>Mexico City</option>
                        <option>Missouri</option>
                        <option>Texas</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <span className="text-md">
                            <FontAwesomeIcon icon={faChevronDown} />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeliveryLocation
