import { slideUp } from '../../../helpers/animation'
import ScrollReveal from '../../ui/ScrollReveal'

const ProductVariationForm = ({ register, errors }) => {
    return (
        <ScrollReveal variants={slideUp} className="add-p-container">
            <h3 className="add-p-heading">Product Variation</h3>
            <div className="w-full px-4">
                <div className="flex space-y-2 flex-col mb-2">
                    <div className="justify-self-start">
                        <label
                            className="add-p-labelt"
                            htmlFor="inline-full-name"
                        >
                            color
                        </label>
                    </div>
                    <div className="input-wrapper">
                        <input
                            className="add-p-input"
                            type="text"
                            {...register('color')}
                        />
                        <div>
                            <span className="err-msg"></span>
                        </div>
                    </div>
                </div>
                <div className="flex space-y-2 flex-col">
                    <div className="justify-self-start">
                        <label
                            className="add-p-labelt"
                            htmlFor="inline-full-name"
                        >
                            weight
                        </label>
                    </div>
                    <div className="input-wrapper">
                        <input
                            className="add-p-input"
                            type="number"
                            {...register('weight', { valueAsNumber: true })}
                        />
                        <div>
                            <span className="err-msg"></span>
                        </div>
                    </div>
                </div>
                <div className="flex space-y-2 flex-col">
                    <div className="justify-self-start">
                        <label
                            className="add-p-labelt"
                            htmlFor="inline-full-name"
                        >
                            size
                        </label>
                    </div>
                    <div className="input-wrapper">
                        <input
                            className="add-p-input"
                            type="text"
                            {...register('size')}
                        />
                        <div>
                            <span className="err-msg"></span>
                        </div>
                    </div>
                </div>
            </div>
        </ScrollReveal>
    )
}

export default ProductVariationForm
