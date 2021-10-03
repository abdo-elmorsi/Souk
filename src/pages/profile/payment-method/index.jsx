import {
    faCcAmazonPay,
    faCcMastercard,
    faCcPaypal,
    faCcVisa,
} from '@fortawesome/free-brands-svg-icons'
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { ADD_PAYMENT_METHOD } from '../../../constants/routes'
import { Link } from 'react-router-dom'
import ScrollReveal from '../../../Components/ui/ScrollReveal'
import { slideDown, slideUp } from '../../../helpers/animation'
import { motion } from 'framer-motion'

const PaymentMethod = () => {
    const [selectedCard, setSelected] = useState('visa')
    const { t } = useTranslation()

    const cardType = [
        { $name: 'visa', icon: faCcVisa, color: 'text-red-500' },
        { $name: 'paypal', icon: faCcPaypal, color: 'text-blue-400' },
        { $name: 'mastercard', icon: faCcMastercard, color: 'text-yellow-600' },
        { $name: 'amazon', icon: faCcAmazonPay, color: 'text-blue-900' },
    ]

    return (
        <div className="max-w-screen-lg mx-auto py-20 px-4">
            <motion.div
                variants={slideDown}
                initial="hidden"
                animate="visible"
                className="text-right my-8"
            >
                <Link
                    to={ADD_PAYMENT_METHOD}
                    className="text-xl shadow-md rounded hover:text-white hover:bg-primary hover:border-primary  font-bold capitalize border border-gray-500 px-6 py-2"
                >
                    {t('Add_New_Method')}
                </Link>
            </motion.div>
            <div className="p-4 bg-white shadow-md  rounded-md">
                <div className="flex justify-between border-b-2 pb-4 mb-6 border-gray-100">
                    <h3 className="font-bold text-lg capitalize">
                        {t('Account')}
                    </h3>
                    <h3 className="font-bold text-lg capitalize">
                        {t('Action')}
                    </h3>
                </div>
                {cardType.map(({ $name, icon, color }, index) => (
                    <ScrollReveal
                        variants={slideUp}
                        key={`method-${index}`}
                        className="flex justify-between border-b-2 border-gray-100 pb-2 mb-4"
                    >
                        <div>
                            <span className={`text-5xl ${color}`} key={$name}>
                                <FontAwesomeIcon icon={icon} />
                            </span>
                        </div>
                        <div className="flex sm:flex-row flex-col sm:space-y-0 space-y-6 items-center ">
                            <button
                                onClick={() => setSelected($name)}
                                className={`
                             px-8 py-2  rounded capitalize mx-4 font-bold
                             ${
                                 $name === selectedCard
                                     ? 'bg-blue-300 text-white'
                                     : 'border border-gray-500 textgray-600'
                             }
                            `}
                            >
                                {$name === selectedCard
                                    ? `${t('Selected')}`
                                    : `${t('Select')}`}
                            </button>
                            <div className="text-center cursor-pointer">
                                <span className="block text-red-500 text-2xl">
                                    <FontAwesomeIcon icon={faTrashAlt} />
                                </span>
                                <span className="text-gray-600 capitalize">
                                    {t('Delete')}
                                </span>
                            </div>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </div>
    )
}

export default PaymentMethod
