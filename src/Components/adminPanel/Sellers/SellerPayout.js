import React from 'react'
import { useTranslation } from 'react-i18next'
import ImageLoader from '../../ui/ImageLoader'
import { motion } from 'framer-motion'
import { itemSlideUp } from '../../../helpers/animation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const SellerPayout = ({ Data }) => {
    const { t } = useTranslation()
    return (
        <>
            <motion.div
                variants={itemSlideUp}
                initial="hidden"
                animate="visible"
                className="bg-white shadow-xl rounded mt-20 mb-80  w-full lg:w-9/12 xl:w-8/12 mx-auto"
            >
                <div className="pt-6 pb-3 px-5 md:px-10 border-b border-black font-semibold">
                    {t('Seller_Payout')}
                </div>
                <div
                    className="bg-white rounded-b"
                    style={{ minHeight: '400px' }}
                >
                    <div className="flex justify-end pt-6 pb-3 px-5 md:px-10 border-b border-black-800">
                        <div className="w-9/12  flex justify-between">
                            <span>{t('seller')}</span>
                            <span>{t('Amount')}</span>
                        </div>
                    </div>

                    {Data.map((items, index) => (
                        <div key={`seller-${index}`}>
                            <div className="flex justify-between items-center pt-6 pb-3 px-5 md:px-10 border-b border-black-800 hover:bg-gray-200">
                                <div className="w-3/12">
                                    <div className="w-14 h-14 overflow-hidden bg-gray-200 rounded-full flex items-center justify-center text-xl">
                                    {!items.avatar ||
                                        items.avatar === '' ? (
                                            <FontAwesomeIcon icon={faUser} />
                                        ) : (
                                            <ImageLoader
                                                alt="seller"
                                                className="w-full h-full"
                                                src={`data:image/png;base64,${new Buffer.from(
                                                    items.avatar.data
                                                ).toString('base64')}`}
                                            />
                                        )}
                                    </div>
                                </div>
                                <div className="w-9/12 flex justify-between">
                                    <span>
                                        Mr.{items.firstName} {items.lastName}
                                    </span>
                                    <span>
                                        $
                                        {items.moneyAfterProfit
                                            ? items.moneyAfterProfit
                                            : '0'}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </>
    )
}

export default SellerPayout
