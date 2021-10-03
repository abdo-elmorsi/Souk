import React from 'react'
import {useTranslation} from 'react-i18next'
import {Link} from 'react-router-dom'
import {ADD_NEW_PRODUCT} from "../../../../constants/routes"

const Header = () => {
    const {t} = useTranslation()
    return (
        <>
            <div className="rounded mt-5 mb-5">
                <div className="rounded flex justify-between">
                    <div className="text-xl font-bold flex items-center">
                        {t('All_Product')}
                    </div>
                    <button className="bg-gray-500 px-5 py-3 rounded-lg cursor-pointer font-bold text-xs text-white">
                        <Link to={ADD_NEW_PRODUCT}>{t('Add_New_Product')}</Link>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Header
