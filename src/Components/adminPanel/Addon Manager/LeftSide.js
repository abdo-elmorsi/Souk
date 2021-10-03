import React from 'react'
import {useTranslation} from 'react-i18next'
import cookies from 'js-cookie'
import {AiFillCaretLeft} from 'react-icons/ai'
import { motion } from 'framer-motion'
import { itemSlideUp } from '../../../helpers/animation'

const LeftSide = ({showOptions, setShowOptions}) => {
    const {t} = useTranslation()
    const currentLanguageCode = cookies.get('i18next') || 'en';
    return (
        <>
            <motion.div
                variants={itemSlideUp}
                initial="hidden"
                animate="visible"
                className="mt-5 mb-5 lg:mb-28 bg-violetDB text-white px-5 pb-20 rounded">
                <div className="mt-8 mb-10 flex justify-center">
                    <input placeholder={t("Search_Account")}
                        className="text-black border w-52 py-2 px-3 rounded-md border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"/>
                </div>
                <div className="flex flex-col items-center">
                    <div className="pb-3">{t("Web_Account")}</div>
                    <div className="py-3">{t("Airbnb_House")}</div>
                    <div className="py-3">{t("Invisiondesign_camp")}</div>
                    <div className="py-3">{t("Motorola_device")}</div>
                    <div className="py-3">{t("Yale_business_team")}</div>
                    <div className="py-3">{t("Starbucks_coffee")}</div>
                    <div className="py-3">{t("Line_messenger")}</div>
                    <div className="py-3">{t("Learn_more")}</div>
                    <div onClick={() => {
                        setShowOptions(!showOptions)
                    }} className="py-3 cursor-pointer">
                        {t("Add_New_Account")}
                    </div>
                    {showOptions &&
                    <div
                        className="z-10 absolute mt-60 ml-96 text-black px-12 py-12 rounded-md bg-white border border-black">
                        <div className="absolute" style={{marginLeft: "-100px", marginTop: "68px"}}>
                            <AiFillCaretLeft
                                className={currentLanguageCode === "sa" ? "hidden" : "h-20 w-16 ml-5 text-white"}/>
                        </div>
                        <div className="py-2 hover:bg-gray-200 px-2 rounded">{t("Facebook")}</div>
                        <div className="py-2 hover:bg-gray-200 px-2 rounded">{t("Google_Ads")}</div>
                        <div className="py-2 hover:bg-gray-200 px-2 rounded">{t("Pinterest")}</div>
                        <div className="py-2 hover:bg-gray-200 px-2 rounded">{t("Snapchat")}</div>
                    </div>}
                </div>
            </motion.div>
        </>
    )
}

export default LeftSide
