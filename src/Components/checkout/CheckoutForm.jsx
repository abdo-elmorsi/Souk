import {
    faCcAmazonPay,
    faCcMastercard,
    faCcPaypal,
    faCcVisa,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { slideToLeft } from '../../helpers/animation'
import ScrollReveal from '../ui/ScrollReveal'

const CheckoutForm = () => {
    const cardType = [
        { $name: 'visa', icon: faCcVisa, color: 'text-red-500' },
        { $name: 'paypal', icon: faCcPaypal, color: 'text-blue-400' },
        { $name: 'mastercard', icon: faCcMastercard, color: 'text-yellow-600' },
        { $name: 'amazon', icon: faCcAmazonPay, color: 'text-blue-900' },
    ]

    const { t } = useTranslation()

    return (
        <ScrollReveal
            variants={slideToLeft}
            className="leading-loose max-w-xl  md:p-10 p-2 bg-white rounded-md shadow-xl"
        >
            <p className="text-gray-800 font-bold text-lg border-b-2 pb-2 mb-2">
                {t('Card details')}
            </p>
            <div className="mb-6">
                <p className="font-semibold mb-2">{t('Card type')}</p>
                <div className="flex justify-between">
                    {cardType.map(({ $name, icon, color }) => (
                        <button className={`text-5xl ${color}`} key={$name}>
                            <FontAwesomeIcon icon={icon} />
                        </button>
                    ))}
                </div>
            </div>
            <form className="w-full">
                <div className="mb-4">
                    <label className="block font-semibold mb-2 text-sm text-gray-500">
                        {t('Name_On_Card')}
                    </label>
                    <input
                        className="w-full px-5 py-2 text-gray-700 bg-gray-200 rounded"
                        id="card_name"
                        name="card_name"
                        type="text"
                    />
                </div>
                <div className="mb-4">
                    <label className="block font-semibold mb-2 text-sm text-gray-500">
                        {t('Card_Number')}
                    </label>
                    <input
                        className="w-full px-5 py-2 text-gray-700 bg-gray-200 rounded"
                        name="card_number"
                        type="text"
                    />
                </div>

                <div className="mb-10 grid md:grid-cols-2 gap-4">
                    <div>
                        <label className="block font-semibold mb-2 text-sm text-gray-500">
                            {t('Expiration_Date')}
                        </label>
                        <input
                            className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                            name="email"
                            type="date"
                        />
                    </div>
                    <div>
                        <label className="block font-semibold mb-2 text-sm text-gray-500">
                            CVV
                        </label>
                        <input
                            className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                            name="email"
                            type="text"
                        />
                    </div>
                </div>

                <div className="border-t-2 border-gray-200 pt-4">
                    <div className="flex justify-between items-center">
                        <h3 className=" font-semibold text-gray-800">
                            {t('Balance')}
                        </h3>
                        <p className="text-md">$ 700.00</p>
                    </div>
                    <div className="mflex justify-between items-center my-2">
                        <h3 className=" font-semibold text-gray-800 ">
                            {t('Delivery fee')}
                        </h3>
                        <p className="text-md">$ 70.00</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <h3 className=" font-bold md:text-2xl text-lg text-gray-800 ">
                            {t('Total Amount')}
                        </h3>
                        <p className="text-xl  font-bold">$ 770.00</p>
                    </div>
                </div>

                <div className="mt-8">
                    <button
                        className="capitalize py-3 text-xl w-full text-white font-bold tracking-wider bg-primary rounded"
                        type="submit"
                    >
                        {t('confirm payment')}
                    </button>
                </div>
            </form>
        </ScrollReveal>
    )
}

export default CheckoutForm
