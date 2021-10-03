import { slideUp } from '../../helpers/animation'
import ScrollReveal from '../ui/ScrollReveal'

const PurchaseInfo = () => {
    return (
        <ScrollReveal
            variants={slideUp}
            className="bg-white shadow-md rounded-md p-4"
        >
            <div className="grid md:grid-rows-2 grid-cols-4 gap-4">
                <div className="rounded-full w-12 h-12 bg-gray-100 md:row-span-2"></div>
                <div className="fles justify-between col-span-3">
                    <div>
                        <h3 className="text-capitalize font-semibold mb-2">
                            2828 S Avienda Santa, tucson, Az 85678
                        </h3>
                        <span className="text-gray-300">Aug 2, 2021</span>
                    </div>
                    <h4 className="font-semibold">$328,87</h4>
                </div>
                <div className="col-span-3 grid grid-cols-3 gap-2">
                    <div className="bg-gray-100 rounded h-16 w-16"></div>
                    <div className="bg-gray-100 rounded h-16 w-16"></div>
                    <div className="bg-gray-100 rounded h-16 w-16"></div>
                </div>
            </div>
            <div className="text-right">
                <span className="font-semibold text-gray-500 mx-4">Deny</span>
                <span className="font-semibold">Approved</span>
            </div>
        </ScrollReveal>
    )
}

export default PurchaseInfo
