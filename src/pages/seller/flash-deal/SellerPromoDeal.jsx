import RecentPromoTable from '../../../Components/seller/flash-deal/RecentPromoTable'
import PastPromoTable from '../../../Components/seller/flash-deal/PastPromoTable'
import '../../../styles/$seller/style.css'

const SellerPromoDeal = () => {
    return (
        <div className="mt-8">
            <div className="rounded-md py-6 shadow-md px-4 bg-gray-50 ">
                <div className="flex lg:flex-row flex-col justify-between items-center mb-4">
                    <h2 className="font-semibold">Recent Promo</h2>
                    <div className="flex lg:flex-row flex-col lg:space-y-0 space-y-2 lg:space-x-2">
                        <div>
                            <input
                                type="text"
                                placeholder="type name or date"
                                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            />
                        </div>
                    </div>
                </div>
                <RecentPromoTable />
            </div>
            <div className="rounded-md py-6 shadow-md px-4 bg-gray-50 mt-8">
                <div className="flex lg:flex-row flex-col justify-between items-center mb-4">
                    <h2 className="font-semibold">Past Promo</h2>
                    <div className="flex lg:flex-row flex-col lg:space-y-0 space-y-2 lg:space-x-2">
                        <div>
                            <input
                                type="text"
                                placeholder="type name or date"
                                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            />
                        </div>
                    </div>
                </div>
                <PastPromoTable />
            </div>
        </div>
    )
}

export default SellerPromoDeal
