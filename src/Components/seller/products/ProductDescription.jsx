import { slideUp } from '../../../helpers/animation'
import ScrollReveal from '../../ui/ScrollReveal'

const ProductDescription = ({ register, errors }) => {
    return (
        <ScrollReveal variants={slideUp} className="add-p-container">
            <h3 className="add-p-heading">Product details</h3>

            <div className="w-full px-4">
                <div className="flex flex-col space-y-2">
                    <div className="justify-self-start">
                        <label
                            className="add-p-labelt"
                            htmlFor="inline-full-name"
                        >
                            details
                        </label>
                    </div>
                    <div className="col-span-4">
                        <textarea
                            className="add-p-input"
                            {...register('details')}
                            rows="6"
                        ></textarea>
                    </div>
                </div>
            </div>
        </ScrollReveal>
    )
}

export default ProductDescription
