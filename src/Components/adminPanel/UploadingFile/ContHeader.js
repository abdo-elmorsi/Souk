import React from 'react'
import {useTranslation} from 'react-i18next'

const ContHeader = () => {
    const {t} = useTranslation();
    return (
        <>
            <div className="flex bg-white flex-col items-center border-b border-black">
                <div
                    className="flex flex-col md:flex-row justify-between items-center text-md w-full rounded py-3 px-5 font-semibold">
                    <div className="flex">
                        <div className="px-5 py-3 bg-gray-200 rounded">
                            {t('Sorted_By_Newest')}
                        </div>
                        <div className="px-4 py-3">
                            {t('Selected_only')}
                        </div>
                    </div>
                    <div className="py-2 md:py-0">
                        <input placeholder={t('Search_your_file')} className="rounded border py-2 px-5"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContHeader
