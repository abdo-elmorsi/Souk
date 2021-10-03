import { Link } from 'react-router-dom'
import FlashDealTable from '../../../Components/seller/flash-deal/FlashDealTable'
import { SELLER_CREATE_FLASH_DEAL } from '../../../constants/routes'
import '../../../styles/$seller/style.css'

const SellerFlashDeal = () => {
    return (
        <div className="rounded-md py-6 shadow-md px-4 bg-gray-50 mt-8">
            <div className="flex lg:flex-row flex-col justify-between items-center mb-4">
                <h2 className="font-semibold">All Flash Deal</h2>
                <div className="flex lg:flex-row flex-col lg:space-y-0 space-y-2 lg:space-x-2">
                    <div>
                        <input
                            type="text"
                            placeholder="type name or date"
                            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        />
                    </div>
                    <Link
                        to={SELLER_CREATE_FLASH_DEAL}
                        className="bg-primary rounded hover:bg-red-400 px-4 py-2 text-white font-semibold"
                    >
                        create new flash deal
                    </Link>
                </div>
            </div>
            <FlashDealTable />
        </div>
    )
}

export default SellerFlashDeal
