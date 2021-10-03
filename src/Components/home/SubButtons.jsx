import { faAdversal } from '@fortawesome/free-brands-svg-icons'
import {
    faPlane,
    faShippingFast,
    faStar,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { itemSlideUp } from '../../helpers/animation'

const SubButtons = () => {
    const content = [
        { title: 'global store', icon: faPlane, color: 'purple-400' },
        { title: "today's offers", icon: faAdversal, color: 'blue-400' },
        { title: 'free delivery', icon: faShippingFast, color: 'secondary' },
        { title: "today's sales", icon: faStar, color: 'yellow-300' },
    ]

    const { t } = useTranslation()

    return (
        <>
            {content.map(({ title, icon, color }, index) => (
                <motion.div
                    variants={itemSlideUp}
                    key={`title-${index}`}
                    className="lg:h-24 sm:h-20 h-16 p-4 bg-grayDB shadow rounded-md flex items-center hover:bg-primary hover:text-white transition-all cursor-pointer justify-between capitalize"
                >
                    <span
                        className={`text-lg w-10 flex items-center justify-center h-10 bg-white rounded-full  text-${color}`}
                    >
                        <FontAwesomeIcon icon={icon} />
                    </span>
                    <h4 className="sm:text-sm text-xs font-semibold">
                        {t(`${title}`)}
                    </h4>
                </motion.div>
            ))}
        </>
    )
}

export default SubButtons
