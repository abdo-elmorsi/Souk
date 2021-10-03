import { faFilter } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import PurchaseDetails from '../../../Components/seller/PurchaseDetails'
import PurchaseInfo from '../../../Components/seller/PurchaseInfo'
import ScrollReveal from '../../../Components/ui/ScrollReveal'
import { slideUp } from '../../../helpers/animation'

const PurchaseHistory = () => {
    const purchaseStatus = [
        'all',
        'pending',
        'in transit',
        'delayed',
        'delivered',
        'canceled',
    ]

    const purchaseTable = [
        'purchased by',
        'address',
        'purchase id',
        'date',
        'cost',
        'status',
    ]

    const [currentStatus, setStatus] = useState('all')

    return (
        <div className="py-10 sm:px-4">
            <div className="mb-10 grid xl:grid-cols-3 gap-4">
                {new Array(3).fill({}).map((item, index) => (
                    <div key={`purchase${index}`}>
                        <PurchaseInfo />
                    </div>
                ))}
            </div>
            <ScrollReveal
                variants={slideUp}
                className="md:overflow-x-hidden overflow-x-scroll"
            >
                <div className="flex px-6 md:w-full w-max  items-between space-x-12 max-w-screen-lg mx-auto">
                    {purchaseStatus.map((status, index) => (
                        <h3
                            onClick={() => setStatus(status)}
                            key={`${status}-${index}`}
                            className={`font-bold  pb-4 cursor-pointer capitalize hover:text-primary ${
                                currentStatus === status &&
                                'border-b-4 border-primary'
                            }`}
                        >
                            {status}
                        </h3>
                    ))}
                </div>
            </ScrollReveal>

            <ScrollReveal
                variants={slideUp}
                className="rounded bg-white shadow-md p-6 max-w-screen-lg md:overflow-x-hidden overflow-x-scroll"
            >
                <div className="mb-4 flex items-center w-max">
                    <input
                        type="text"
                        name="filter"
                        id="filter"
                        className="border border-gray-300 rounded p-2"
                    />
                    <button className="bg-gray-200 hover:bg-purple-500 hover:text-white border mx-4 py-2 w-36">
                        <span className="mx-2 ">
                            <FontAwesomeIcon icon={faFilter} />
                        </span>
                        Filter
                    </button>
                </div>
                <div className="grid grid-cols-7 gap-2 justify-items-center md:w-full w-max border-b-2 border-gray-100 pb-2 mb-4">
                    {purchaseTable.map((title, index) => (
                        <h3
                            key={`${title}-${index}`}
                            className={`font-semibold text-gray-700 cursor-pointer capitalize  ${
                                index === 1 && 'col-span-2 '
                            }`}
                        >
                            {title}
                        </h3>
                    ))}
                </div>
                <div className="md:w-full w-max">
                    {new Array(4).fill({}).map((item, index) => (
                        <div key={`details-${index}`}>
                            <PurchaseDetails />
                        </div>
                    ))}
                </div>
            </ScrollReveal>
        </div>
    )
}

export default PurchaseHistory
