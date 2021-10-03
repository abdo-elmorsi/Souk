import React from 'react'
import {useTranslation} from 'react-i18next'

const Featured = () => {
    const {t} = useTranslation();
    return (
        <>
            <div className="text-md bg-white rounded mt-5 pb-5">
                <div className="border-b border-black px-5 py-5 font-semibold">
                    {t('Featured')}
                </div>
                <div className="flex items-center mb-3 mt-6 px-5">
                    <div className="w-full">{t('Status')}</div>
                </div>
            </div>
        </>
    )
}

export default Featured
