import { slideUp } from '../../../helpers/animation'
import ScrollReveal from '../../ui/ScrollReveal'

const ProductVideoForm = ({ register, errors }) => {
    return (
        <ScrollReveal variants={slideUp} className="add-p-container">
            <h3 className="add-p-heading">Product Links</h3>
            <div className="w-full px-4">
                {/* <div className="add-p-group">
                    <div className="add-p-labelc">
                        <label
                            className="add-p-labelt"
                            htmlFor="inline-full-name"
                        >
                            Video Link
                        </label>
                    </div>
                    <div className="input-wrapper">
                        <input
                            className="add-p-input"
                            type="text"
                            {...register('videoLink')}
                        />
                    </div>
                </div> */}
                <div className="add-p-group">
                    <div className="add-p-labelc">
                        <label
                            className="add-p-labelt"
                            htmlFor="inline-full-name"
                        >
                            website
                        </label>
                    </div>
                    <div className="input-wrapper">
                        <input
                            className="add-p-input"
                            type="text"
                            {...register('website')}
                        />
                    </div>
                </div>
            </div>
        </ScrollReveal>
    )
}

export default ProductVideoForm
