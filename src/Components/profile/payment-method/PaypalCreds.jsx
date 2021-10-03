import { useTranslation } from 'react-i18next'
import { slideUp } from '../../../helpers/animation'
import ScrollReveal from '../../ui/ScrollReveal'

const PaypalCreds = () => {
    const { t } = useTranslation()

    return (
        <ScrollReveal
            variants={slideUp}
            className="bg-white shadow-md  rounded-md p-6 "
        >
            <div className="border-b-2 border-gray-100 pb-4 mb-4">
                <h3 className="font-bold capitalize">
                    {' '}
                    {t('Paypal_Credentials')}{' '}
                </h3>
            </div>
            <form className="px-4">
                <div className="grid items-center sm:grid-cols-3 grid-cols-1 mb-6">
                    <div>
                        <label
                            className="block text-gray-500 capitalize font-bold mb-1 md:mb-0 "
                            htmlFor="inline-full-name"
                        >
                            {t('Paypal_Client_ID')}
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
                            htmlFor="inline-full-name"
                        >
                            {t('Paypal_Client_Secret')}
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
                            htmlFor="inline-full-name"
                        >
                            {t('Paypal_Sandbox_Mode')}
                        </label>
                    </div>
                    <div className="span-cols-2 relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                        <input
                            type="checkbox"
                            name="toggle_1"
                            id="toggle_1"
                            className="toggle-checkbox_1 absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                        />
                        <label
                            htmlFor="toggle"
                            className="toggle-label-1 block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                        ></label>
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

export default PaypalCreds
