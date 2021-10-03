// import DataTable from 'react-data-table-component'

import ScrollReveal from '../../../Components/ui/ScrollReveal'
import { slideUp } from '../../../helpers/animation'

const SellerBrands = () => {
    // const token = useSelector((state) => state.auth.token)

    return (
        <div className="mt-8">
            <div className="text-end">
                <button className="bg-priamry px-4 py-2 text-white">
                    Add Coupon
                </button>
            </div>
            <ScrollReveal
                variants={slideUp}
                className="col-span-2 bg-gray-50 rounded-md shadow-md p-4"
            >
                <div className="flex lg:flex-row flex-col justify-between items-center border-b-2 border-gray-100 pb-4 mb-4">
                    <h2 className="font-semibold">Brand / Shop</h2>
                    <div>
                        <input
                            type="text"
                            placeholder="type name or date"
                            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        />
                    </div>
                </div>
                {/* <DataTable
                    columns={columns}
                    data={data}
                    pagination
                    selectableRows
                /> */}
            </ScrollReveal>
        </div>
    )
}

export default SellerBrands
