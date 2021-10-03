import React from 'react'
import {useTranslation} from 'react-i18next'
import {Link} from 'react-router-dom'

const Header = () => {
    const {t} = useTranslation();
    return (
        <>
            <div className="rounded mt-5 mb-5">
                <div className="rounded flex justify-between">
                    <div className="text-xl font-bold flex items-center">
                        {t('All_Categories')}
                    </div>
                    <div className="bg-gray-500 px-5 py-3 rounded-lg cursor-pointer font-bold text-xs text-white">
                        <Link to="/admin/dashboard/AddNewCategory">
                            {t('Add_New_Category')}
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
