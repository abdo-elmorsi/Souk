import React from 'react'
import { FaAngleRight } from 'react-icons/fa'
// import cookies from 'js-cookie'
import { useTranslation } from 'react-i18next'

const Header = () => {
    const { t } = useTranslation()
    // const currentLanguageCode = cookies.get('i18next') || 'en'
    return (
        <>
            <div className="mx-auto pt-10 flex flex-col lg:flex-row justify-between items-center max-w-screen-xl">
                <div className="flex flex-col items-center lg:items-start mb-2 lg:mb-0">
                    {/* Tile- Ecommerce Dashboard */}
                    <div className="text-xl md:text-3xl font-bold">
                        {t('Ecommerce_Dashboard')}
                    </div>
                    <div className="text-xs flex items-center">
                        {' '}
                        {t('ecommerce')} <FaAngleRight /> {t('Dashboard')}{' '}
                    </div>
                </div>
                {/* 
                    <div className="bg-white flex justify-center px-2 rounded shadow-md">
                        <select className="outline-none py-1.5 flex justify-center cursor-pointer">
                            <option>{t('San_fransisco')}</option>
                            <option>{t('San_fransisco')}-1</option>
                            <option>{t('San_fransisco')}-2</option>
                        </select>
                    </div>
                    
                    <div className="bg-white mx-0 sm:mx-2 py-1.5 px-3 my-2 sm:my-0 rounded flex shadow-md ">
                        <div className="cursor-pointer"> {t('Day')} </div>
                        <div className="px-4 cursor-pointer"> {t('Week')} </div>
                        <div
                            className={
                                currentLanguageCode === 'sa'
                                    ? 'pl-4 cursor-pointer'
                                    : 'pr-4 cursor-pointer'
                            }
                        >
                            {t('Month')}{' '}
                        </div>
                        <div className="cursor-pointer"> {t('Annual')} </div>
                    </div>
                   
                    <div className="bg-white py-1.5 px-3 rounded flex justify-center shadow-md">
                        <input
                            type="date"
                            id="date"
                            name="date"
                            className="outline-none "
                        />
                    </div>
                </div> */}
            </div>
        </>
    )
}

export default Header
