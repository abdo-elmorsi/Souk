import { slideUp } from '../../../helpers/animation'
import ScrollReveal from '../../../Components/ui/ScrollReveal'
import '../../../styles/$seller/add-product.css'

const AddCoupon = () => {
    return (
        <ScrollReveal variants={slideUp} className="add-p-container">
            <h3 className="add-p-heading">Add new Coupon</h3>
            <div className="w-full px-4">
                <div className="flex flex-col space-y-2">
                    <div>
                        <label htmlFor="inline-full-name">Name</label>
                    </div>
                    <div className="col-span-4">
                        <input className="add-p-input" type="text" />
                    </div>
                </div>

                <div className="flex flex-col space-y-2">
                    <div>
                        <label htmlFor="inline-full-name">expirity Date</label>
                    </div>
                    <div className="col-span-4">
                        <input className="add-p-input" type="date" />
                    </div>
                </div>
                <div className="flex flex-col space-y-2">
                    <div>
                        <label htmlFor="inline-full-name">discount</label>
                    </div>
                    <div className="col-span-4">
                        <input className="add-p-input" type="number" />
                    </div>
                </div>
                <div className="flex flex-col space-y-2">
                    <div>
                        <label htmlFor="inline-full-name">products</label>
                    </div>
                    <div className="col-span-4">
                        <input className="add-p-input" type="text" />
                    </div>
                </div>

                <button className="bg-gray-500 mt-4 text-white hover:bg-purple-500 px-4 py-2 rounded">
                    Add
                </button>
            </div>
        </ScrollReveal>
    )
}

export default AddCoupon
