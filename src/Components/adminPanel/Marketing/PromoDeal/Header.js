import React from 'react'
import {useTranslation} from 'react-i18next'

const Header = () => {
    const {t} = useTranslation()
    return (
        <>
            <div className="rounded mt-5 mb-5">
                <div className="rounded flex justify-between">
                    <div className="text-xl font-bold flex items-center">
                        {t("All_Promo_Deal")}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
