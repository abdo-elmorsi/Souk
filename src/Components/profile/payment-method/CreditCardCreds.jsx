import { useTranslation } from 'react-i18next'
import { slideUp } from '../../../helpers/animation'
import '../../../styles/profile/payment-method.css'
import ScrollReveal from '../../ui/ScrollReveal'

const CreditCardCreds = () => {
    const { t } = useTranslation()

    return (
        <ScrollReveal
            variants={slideUp}
            className="bg-white shadow-md rounded-md p-6 lg:my-0 my-10"
        >
            <div className="border-b-2 border-gray-100 pb-4 mb-4">
                <h3 className="font-bold capitalize">
                    {t('Credit_Card_Credentials')}
                </h3>
            </div>
            <form className="px-4">
                <div className="grid items-center sm:grid-cols-3 grid-cols-1 mb-6">
                    <div>
                        <label
                            className="block text-gray-500 capitalize font-bold mb-1 md:mb-0 "
                            htmlFor="inline-full-name"
                        >
                            {t('Name_On_Card')}
                        </label>
                    </div>
                    <div className="col-span-2">
                        <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            type="text"
                        />
                    </div>
                </div>
                <div className="grid items-center sm:grid-cols-3 grid-cols-1 mb-6">
                    <div>
                        <label
                            className="block text-gray-500 capitalize font-bold  mb-1 md:mb-0 pr-4"
                            htmlFor="card-number"
                        >
                            {t('Card_Number')}
                        </label>
                    </div>
                    <div className="col-span-2">
                        <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            type="text"
                        />
                    </div>
                </div>
                <div className="grid items-center sm:grid-cols-3 grid-cols-1 mb-6">
                    <div>
                        <label
                            className="block text-gray-500 capitalize font-bold  mb-1 md:mb-0 pr-4"
                            htmlFor="security-code"
                        >
                            {t('Security_Code')}
                        </label>
                    </div>
                    <div className="col-span-2">
                        <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            type="text"
                        />
                    </div>
                </div>
                <div className="grid items-center sm:grid-cols-3 grid-cols-1 gap-2 mb-6">
                    <div>
                        <label
                            className="block text-gray-500 capitalize font-bold  mb-1 md:mb-0 pr-4"
                            htmlFor="card-number"
                        >
                            {t('Expiration_Date')}
                        </label>
                    </div>
                    <div>
                        <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            type="text"
                            placeholder="MM"
                        />
                    </div>
                    <div>
                        <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            type="text"
                            placeholder="YY"
                        />
                    </div>
                </div>
                <div className="text-right">
                    <button
                        type="submit"
                        className="rounded hover:bg-purple-500 transition-all text-white text-lg font-semibold px-4 py-1 bg-primary"
                    >
                        {t('Save')}
                    </button>
                </div>
            </form>
        </ScrollReveal>
    )
}

export default CreditCardCreds
