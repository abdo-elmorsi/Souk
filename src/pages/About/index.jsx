import { useTranslation } from 'react-i18next'
import cookies from 'js-cookie'
import Container from '../../Components/ui/Container'
import imgOne from '../../assets/About/achats-ligne.png'
import imgTow from '../../assets/About/young-client.png'
import imgThree from '../../assets/About/Fashion-shopping.png'
import imgFour from '../../assets/About/istockphoto.png'
import One from '../../assets/About/One.png'
import Tow from '../../assets/About/Tow.png'
import Three from '../../assets/About/Three.png'
import Four from '../../assets/About/Four.png'
import Fife from '../../assets/About/Fife.png'
import Six from '../../assets/About/Six.png'
import ImageLoader from '../../Components/ui/ImageLoader'
import {
    slideDown,
    fadeIn,
    slideUp,
    animateList,
} from '../../helpers/animation'
import { motion } from 'framer-motion'
import ScrollReveal from '../../Components/ui/ScrollReveal'

const AboutUs = () => {
    const { t } = useTranslation()
    const currentLanguageCode = cookies.get('i18next') || 'en'
    return (
        <Container>
            <div className="py-20">
                <div className="flex justify-between flex-col md:flex-row">
                    <div className="w-full md:w-6/12 px-5 space-y-10 mb-10 md:mb-0">
                        <div>
                            <motion.h3
                                initial="hidden"
                                animate="visible"
                                variants={slideDown}
                                className="font-semibold text-5xl"
                            >
                                {t('About_Us')}
                            </motion.h3>
                            <motion.p
                                initial="hidden"
                                animate="visible"
                                variants={slideUp}
                                className={`font-light text-base pt-5 ${
                                    currentLanguageCode === 'sa'
                                        ? 'pl-10'
                                        : 'pr-10'
                                }`}
                            >
                                {t(
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacinia vitae, erat aliquam posuere dolor id tempor vel pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacinia vitae, erat aliquam posuere dolor id tempor vel pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacinia vitae, erat aliquam posuere dolor id tempor vel pulvinar.'
                                )}
                            </motion.p>
                        </div>
                        <ScrollReveal variants={animateList}>
                            <motion.h3
                                variants={slideUp}
                                className="font-semibold text-4xl"
                            >
                                {t('Our_Vision')}
                            </motion.h3>
                            <motion.p
                                variants={slideUp}
                                className={`font-light text-base pt-5 ${
                                    currentLanguageCode === 'sa'
                                        ? 'pl-10'
                                        : 'pr-10'
                                }`}
                            >
                                {t(
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacinia vitae, erat aliquam posuere dolor id tempor vel pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacinia vitae,'
                                )}
                            </motion.p>
                        </ScrollReveal>
                        <ScrollReveal variants={animateList}>
                            <motion.h3
                                variants={slideUp}
                                className="font-semibold text-4xl"
                            >
                                {t('Our_Mission')}
                            </motion.h3>
                            <motion.p
                                variants={slideUp}
                                className={`font-light text-base pt-5 ${
                                    currentLanguageCode === 'sa'
                                        ? 'pl-10'
                                        : 'pr-10'
                                }`}
                            >
                                {t(
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacinia vitae, erat aliquam posuere dolor id tempor vel pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacinia vitae,'
                                )}
                            </motion.p>
                        </ScrollReveal>
                    </div>
                    <div className="w-full md:w-6/12 flex flex-wrap px-5">
                        <ScrollReveal
                            variants={fadeIn}
                            className="w-6/12 h-72 overflow-hidden p-3"
                        >
                            <ImageLoader
                                className="w-full h-full rounded transform hover:scale-110 transition duration-400 ease-out"
                                src={imgOne}
                                alt="img"
                            />
                        </ScrollReveal>
                        <ScrollReveal
                            variants={fadeIn}
                            className="w-6/12 h-72 overflow-hidden p-3 transform translate-y-20"
                        >
                            <ImageLoader
                                className="w-full h-full rounded transform hover:scale-110 transition duration-400 ease-out"
                                src={imgTow}
                                alt="img"
                            />
                        </ScrollReveal>
                        <ScrollReveal
                            variants={fadeIn}
                            className="w-6/12 h-72 overflow-hidden p-3"
                        >
                            <ImageLoader
                                className="w-full h-full rounded transform hover:scale-110 transition duration-400 ease-out"
                                src={imgThree}
                                alt="img"
                            />
                        </ScrollReveal>
                        <ScrollReveal
                            variants={fadeIn}
                            className="w-6/12 h-72 overflow-hidden p-3 transform translate-y-20"
                        >
                            <ImageLoader
                                className="w-full h-full rounded transform hover:scale-110 transition duration-400 ease-out"
                                src={imgFour}
                                alt="img"
                            />
                        </ScrollReveal>
                    </div>
                </div>
                <div>
                    <div className="mt-40 flex justify-end">
                        <ScrollReveal
                            variants={animateList}
                            className="w-full lg:w-6/12"
                        >
                            <motion.h3
                                variants={slideUp}
                                className="font-semibold text-4xl flex justify-end"
                            >
                                {t('Our_Services')}
                            </motion.h3>
                            <motion.p
                                variants={slideUp}
                                className={`font-light text-base pt-5 ${
                                    currentLanguageCode === 'sa'
                                        ? 'text-left'
                                        : 'text-right'
                                }`}
                            >
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Lacinia vitae, erat aliquam
                                posuere dolor id tempor vel pulvinar. Lorem
                                ipsum dolor sit amet, consectetur adipiscing
                                elit. Lacinia vitae,
                            </motion.p>
                        </ScrollReveal>
                    </div>
                    <ScrollReveal
                        variants={animateList}
                        className="mt-36 flex flex-wrap justify-center"
                    >
                        {[One, Tow, Three, Four, Fife, Six].map(
                            (img, index) => (
                                <motion.div
                                    key={`img-${index}`}
                                    variants={slideUp}
                                    className="w-12/12 md:w-6/12 lg:w-4/12 p-1"
                                >
                                    <ImageLoader
                                        className="w-full h-full"
                                        src={img}
                                        alt="img"
                                    />
                                </motion.div>
                            )
                        )}
                    </ScrollReveal>
                </div>
            </div>
        </Container>
    )
}

export default AboutUs
