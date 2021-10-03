import { slideUp } from '../../../helpers/animation'
import ScrollReveal from '../../ui/ScrollReveal'

const SEOForm = ({ currentProduct = null, register, errors }) => {
    return (
        <ScrollReveal variants={slideUp} className="add-p-container">
            <h3 className="add-p-heading">SEO meta tags</h3>
            <div className="w-full px-4">
                <div className="add-p-group">
                    <div className="add-p-labelc">
                        <label
                            className="add-p-labelt"
                            htmlFor="inline-full-name"
                        >
                            description
                        </label>
                    </div>
                    <div className="input-wrapper">
                        <textarea
                            className="add-p-input"
                            {...register('seoDescription')}
                            rows="3"
                        ></textarea>
                    </div>
                </div>
                <div className="add-p-group">
                    <div className="add-p-labelc">
                        <label
                            className="add-p-labelt"
                            htmlFor="inline-full-name"
                        >
                            seo tags
                        </label>
                    </div>
                    <div className="input-wrapper">
                        <input
                            className="add-p-input"
                            {...register('seoTags')}
                            type="text"
                        />
                    </div>
                </div>
            </div>
        </ScrollReveal>
    )
}

export default SEOForm
