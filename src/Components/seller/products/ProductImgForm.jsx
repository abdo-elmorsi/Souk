import { slideUp } from '../../../helpers/animation'
import ScrollReveal from '../../ui/ScrollReveal'

const ProductImgForm = ({ register, errors }) => {
    return (
        <ScrollReveal variants={slideUp} className="add-p-container">
            <h3 className="add-p-heading">Product Image</h3>
            <div className="w-full px-4">
                <div className="add-p-group">
                    <div className="add-p-labelc">
                        <label
                            className="add-p-labelt"
                            htmlFor="inline-full-name"
                        >
                            Gallery image
                        </label>
                    </div>
                    <div className="input-wrapper">
                        <input
                            className="add-p-input"
                            {...register('images')}
                            type="file"
                            multiple
                        />
                    </div>
                </div>
            </div>
        </ScrollReveal>
    )
}

export default ProductImgForm
