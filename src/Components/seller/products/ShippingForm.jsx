import { slideUp } from '../../../helpers/animation'
import ScrollReveal from '../../ui/ScrollReveal'

const ShippingForm = ({ register, errors }) => {
    return (
        <ScrollReveal
            variants={slideUp}
            className="rounded-md bg-white md:p-4 p-2"
        >
            <h3 className="font-semibold mb-4 pb-4 border-b-2 border-gray-200">
                Estimate shipping days
            </h3>

            <div>
                <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    type="number"
                    {...register('shippingDays', { valueAsNumber: true })}
                />
            </div>
        </ScrollReveal>
    )
}

export default ShippingForm
