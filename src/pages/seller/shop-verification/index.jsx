import { useTranslation } from 'react-i18next'
import ScrollReveal from '../../../Components/ui/ScrollReveal'
import { slideUp } from '../../../helpers/animation'
import useScrollTop from '../../../hooks/useScrollTop'

const ShopVerification = () => {
    const { t } = useTranslation()
    useScrollTop()

    return (
        <ScrollReveal
            variants={slideUp}
            className="md:p-20 py-10 px-4  h-full w-full"
        >
            <h3 className="font-bold text-2xl capitalize mb-6">
                {t('Shop_Verification')}
            </h3>
            <div className="bg-white max-w-screen-lg py-6 px-4 lg-mx-auto rounded-md">
                <h2 className="font-semibold capitalize pb-4 mb-4 border-b-2 border-gray-100">
                    {t('Verification_Info')}
                </h2>
                <form className="w-full px-4">
                    <div className="grid items-center sm:grid-cols-6 mb-6">
                        <div className="col-span-2 justify-self-start">
                            <label
                                className="block text-gray-500 capitalize font-bold md:text-right mb-1 md:mb-0 pr-4"
                                htmlFor="inline-full-name"
                            >
                                {t('Your_Name')}*
                            </label>
                        </div>
                        <div className="col-span-4">
                            <input
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                type="text"
                            />
                        </div>
                    </div>
                    <div className="sm:grid sm:grid-cols-6 items-center mb-6">
                        <div className="col-span-2 justify-self-start">
                            <label
                                className="block text-gray-500 capitalize font-bold md:text-right mb-1 md:mb-0 pr-4"
                                htmlFor="shop-name"
                            >
                                {t('Shop_Name')}*
                            </label>
                        </div>
                        <div className="col-span-4">
                            <input
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                type="text"
                            />
                        </div>
                    </div>

                    <div className="sm:grid sm:grid-cols-6 items-center mb-6">
                        <div className="col-span-2 justify-self-start">
                            <label
                                className="block text-gray-500 capitalize font-bold md:text-right mb-1 md:mb-0 pr-4"
                                htmlFor="email"
                            >
                                {t('Email')}*
                            </label>
                        </div>
                        <div className="col-span-4">
                            <input
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                type="email"
                            />
                        </div>
                    </div>
                    <div className="sm:grid sm:grid-cols-6 items-center mb-6">
                        <div className="col-span-2 justify-self-start">
                            <label
                                className="block text-gray-500 capitalize font-bold md:text-right mb-1 md:mb-0 pr-4"
                                htmlFor="licence"
                            >
                                {t('Licence_N')}*
                            </label>
                        </div>
                        <div className="col-span-4">
                            <input
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                type="number"
                            />
                        </div>
                    </div>

                    <div className="sm:grid sm:grid-cols-6 items-center mb-6">
                        <div className="col-span-2 justify-self-start">
                            <label
                                className="block text-gray-500 capitalize font-bold md:text-right mb-1 md:mb-0 pr-4"
                                htmlFor="Address"
                            >
                                {t('address')}*
                            </label>
                        </div>
                        <div className="col-span-4">
                            <input
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                type="text"
                            />
                        </div>
                    </div>
                    <div className="sm:grid sm:grid-cols-6 items-center mb-6">
                        <div className="col-span-2 justify-self-start">
                            <label
                                className="block text-gray-500 capitalize font-bold md:text-right mb-1 md:mb-0 pr-4"
                                htmlFor="taxe-paper"
                            >
                                {t('Taxe_Paper')}*
                            </label>
                        </div>
                        <div className="col-span-4 flex">
                            <button className="bg-gray-500 rounded text-lg text-white font-semibold px-6 py-2">
                                {t('Browse')}
                            </button>
                            <input
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                type="text"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                            type="button"
                        >
                            {t('Apply')}
                        </button>
                    </div>
                </form>
            </div>
        </ScrollReveal>
    )
}

export default ShopVerification
