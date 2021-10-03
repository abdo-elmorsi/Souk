import { faFilter } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import PurchaseInfo from '../../../Components/seller/PurchaseInfo'
import WishlistDetails from '../../../Components/seller/WishlistDetails'
import ScrollReveal from '../../../Components/ui/ScrollReveal'
import { slideUp } from '../../../helpers/animation'

const SellerWishlist = () => {
    const purchaseTable = [
        'Wished by',
        'Name of product',
        'category',
        'date',
        'cost',
    ]

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
                className="rounded shadow-md bg-white p-6 overflow-x-scroll md:overflow-x-hidden max-w-screen-lg"
            >
                <div className="mb-4 flex items-center">
                    <input
                        type="text"
                        name="filter"
                        id="filter"
                        className="border border-gray-300 rounded p-2"
                    />
                    <button className="bg-gray-200 flex hover:bg-purple-500 hover:text-white border mx-4 px-4 py-2 ">
                        <span className="mx-2 ">
                            <FontAwesomeIcon icon={faFilter} />
                        </span>
                        Filter
                    </button>
                </div>
                <div className="grid grid-cols-6 gap-2 lg:w-full w-max justify-items-center border-b-2 border-gray-100 pb-2 mb-4">
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
                <div className=" lg:w-full w-max">
                    {new Array(4).fill({}).map((item, index) => (
                        <div key={`details-${index}`}>
                            <WishlistDetails />
                        </div>
                    ))}
                </div>
            </ScrollReveal>
        </div>
    )
}

export default SellerWishlist
