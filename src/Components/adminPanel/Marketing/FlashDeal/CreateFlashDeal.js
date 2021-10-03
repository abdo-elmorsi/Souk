import React from 'react'
import { useTranslation } from 'react-i18next'
import cookies from 'js-cookie'
import { motion } from 'framer-motion'
import { itemSlideUp } from '../../../../helpers/animation'

const SellerInfo = () => {
    const { t } = useTranslation()
    const currentLanguageCode = cookies.get('i18next') || 'en'

    return (
        <>
            <motion.div
                variants={itemSlideUp}
                initial="hidden"
                animate="visible"
                className="bg-white shadow-xl rounded mt-20 mb-80  w-full lg:w-9/12 mx-auto "
            >
                <div className="pt-6 px-5 pb-3 border-b border-black font-semibold">
                    {t('Seller_Info')}
                </div>
                <div className="bg-white rounded-b pb-10">
                    <form className="px-5 w-full lg:w-11/12">
                        <div className="flex items-center my-10">
                            <div className="lg:w-60 w-28">{t('Title')}</div>
                            <div className="w-full">
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="w-full py-3 focus:outline-none border-2 rounded-md border-gray-200 font-semibold px-2"
                                />
                            </div>
                        </div>
                        <div className="flex items-center my-10">
                            <div className="lg:w-60 w-28">
                                {t('Background_color')}
                            </div>
                            <div className="w-full">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="w-full py-3 focus:outline-none border-2 rounded-md border-gray-200 font-semibold px-2"
                                />
                            </div>
                        </div>
                        <div className="flex items-center my-10">
                            <div className="lg:w-60 w-28">
                                {t('Text_Color')}
                            </div>
                            <div className="w-full">
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    className="w-full py-3 focus:outline-none border-2 rounded-md border-gray-200 font-semibold px-2"
                                />
                            </div>
                        </div>
                        <div className="flex items-center my-10">
                            <div className="lg:w-60 w-28">
                                {t('Banner')} (1920x500)
                            </div>
                            <div className="w-full">
                                <div className="w-full h-10 bg-gray-200 flex items-center rounded-md">
                                    <div
                                        className={`bg-gray-300 py-2 w-full px-3 ${
                                            currentLanguageCode === 'sa'
                                                ? 'rounded-r-md'
                                                : 'rounded-l-md'
                                        }
                                    `}
                                    >
                                        <input type="file" />
                                    </div>
                                </div>
                                <p className="text-sm text-center">
                                    {t(
                                        'This_image_is_shown_as_cover_banner_in_flash_deal_details_page.'
                                    )}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center my-10">
                            <div className="lg:w-60 w-28">{t('Date')}</div>
                            <div className="w-full">
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    className="w-full py-3 focus:outline-none border-2 rounded-md border-gray-200 font-semibold px-2"
                                />
                            </div>
                        </div>
                        <div className="flex items-center my-10">
                            <div className="lg:w-60 w-28">
                                {t('Select_date')}
                            </div>
                            <div className="w-full">
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    className="w-full py-3 focus:outline-none border-2 rounded-md border-gray-200 font-semibold px-2"
                                />
                            </div>
                        </div>
                        <div className="flex items-center my-10">
                            <div className="lg:w-60 w-28">{t('Product')}</div>
                            <div className="w-full">
                                <div className="w-full h-10 bg-gray-200 flex items-center rounded-md">
                                    <div
                                        className={`bg-gray-300 py-2 w-full px-3 ${
                                            currentLanguageCode === 'sa'
                                                ? 'rounded-r-md'
                                                : 'rounded-l-md'
                                        }
                                    `}
                                    >
                                        <input type="file" />
                                    </div>
                                </div>
                                <p className="text-sm text-center">
                                    {t('You_can_choose_up_to_five_product')}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center my-10">
                            <div className="lg:w-60 w-28">
                                {t('Base_price')}
                            </div>
                            <div className="w-full">
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    className="w-full py-3 focus:outline-none border-2 rounded-md border-gray-200 font-semibold px-2"
                                />
                            </div>
                        </div>
                        <div className="flex items-center my-10">
                            <div className="lg:w-60 w-28">{t('Discount')}</div>
                            <div className="w-full">
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    className="w-full py-3 focus:outline-none border-2 rounded-md border-gray-200 font-semibold px-2"
                                />
                            </div>
                        </div>
                        <div className="flex items-center my-10">
                            <div className="lg:w-60 w-28">
                                {t('Discount_Type')}
                            </div>
                            <div className="w-full">
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    className="w-full py-3 focus:outline-none border-2 rounded-md border-gray-200 font-semibold px-2"
                                />
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <button className="bg-primary px-10 text-white text-lg py-3 rounded-md">
                                <span className="font-main">{t('Save')}</span>
                            </button>
                        </div>
                    </form>
                </div>
            </motion.div>
        </>
    )
}

export default SellerInfo
