import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFacebookF,
    faInstagram,
    faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { useTranslation } from 'react-i18next'
import 'react-image-gallery/styles/css/image-gallery.css'
import ImageGallery from 'react-image-gallery'

const ProductShowcase = ({ images }) => {
    const { t } = useTranslation()

    const galleryImages = []
    images?.forEach((img) => {
        const gallery = {
            original: img,
            thumbnail: img,
            originalHeight: 450,
            thumbnailHeight: 100,
        }
        galleryImages.push(gallery)
    })

    return (
        <div>
            <div className="pb-6 mb-6 border-b-2  border-gray-200">
                {images.length > 0 && (
                    <ImageGallery
                        showFullscreenButton={false}
                        items={galleryImages}
                        showPlayButton={false}
                    />
                )}
            </div>
            <div className="flex items-center justify-between">
                <h2 className="font-semibold text-2xl capitalize">
                    {t('share product')}
                </h2>
                <div className="flex items-center">
                    <span className="text-gray-700 text-xl">
                        <FontAwesomeIcon icon={faFacebookF} />
                    </span>
                    <span className="text-gray-700 text-xl mx-4">
                        <FontAwesomeIcon icon={faTwitter} />
                    </span>
                    <span className="text-gray-700 text-xl">
                        <FontAwesomeIcon icon={faInstagram} />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ProductShowcase
