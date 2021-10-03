import { slideUp } from '../../../helpers/animation'
import ScrollReveal from '../../ui/ScrollReveal'

const ProductPriceForm = ({ register, errors }) => {
    return (
        <ScrollReveal variants={slideUp} className="add-p-container">
            <h3 className="add-p-heading">Product Price</h3>
            <div className="w-full px-4">
                <div className="add-p-group">
                    <div className="add-p-labelc">
                        <label
                            className="add-p-labelt"
                            htmlFor="inline-full-name"
                        >
                            Unit price*
                        </label>
                    </div>
                    <div className="input-wrapper ">
                        <input
                            className="add-p-input "
                            {...register('unitPrice')}
                            type="text"
                        />
                    </div>
                </div>
                <div className="add-p-group">
                    <div className="add-p-labelc">
                        <label
                            className="add-p-labelt"
                            htmlFor="inline-full-name"
                        >
                            Discount Date*
                        </label>
                    </div>
                    <div className="input-wrapper ">
                        <input
                            className="add-p-input "
                            {...register('discountDate')}
                            type="date"
                        />
                    </div>
                </div>

                <div className="add-p-group">
                    <div className="add-p-labelc">
                        <label
                            className="add-p-labelt"
                            htmlFor="inline-full-name"
                        >
                            original Price
                        </label>
                    </div>
                    <div className="input-wrapper ">
                        <input
                            className="add-p-input "
                            {...register('originalPrice', {
                                valueAsNumber: true,
                            })}
                            type="number"
                        />
                    </div>
                </div>
                <div className="add-p-group">
                    <div className="add-p-labelc">
                        <label
                            className="add-p-labelt"
                            htmlFor="inline-full-name"
                        >
                            discount Price
                        </label>
                    </div>
                    <div className="input-wrapper ">
                        <input
                            className="add-p-input "
                            {...register('discountPrice', {
                                valueAsNumber: true,
                            })}
                            type="number"
                        />
                    </div>
                </div>
                <div className="add-p-group">
                    <div className="add-p-labelc">
                        <label
                            className="add-p-labelt"
                            htmlFor="inline-full-name"
                        >
                            SKU
                        </label>
                    </div>
                    <div className="input-wrapper ">
                        <input
                            className="add-p-input "
                            {...register('sku')}
                            type="text"
                        />
                    </div>
                </div>
            </div>
        </ScrollReveal>
    )
}

export default ProductPriceForm
