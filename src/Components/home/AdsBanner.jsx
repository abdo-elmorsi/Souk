import { fadeIn } from '../../helpers/animation'
import ImageLoader from '../ui/ImageLoader'
import ScrollReveal from '../ui/ScrollReveal'

const AdsBanner = ({ image }) => {
    return (
        <ScrollReveal
            variants={fadeIn}
            className="bg-gray-200 h-80 p-3 shadow hover:p-1 cursor-pointer transition-all duration-200 rounded-md mb-10"
        >
            <div className="bg-white h-full rounded-md overflow-hidden">
                <ImageLoader
                    src={image}
                    alt="ads"
                    className="w-full h-full inline-block object-fill md:object-cover"
                />
            </div>
        </ScrollReveal>
    )
}

export default AdsBanner
