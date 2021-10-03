import React from 'react'
import {useTranslation} from 'react-i18next'

const Header = ({choseFile}) => {
    const {t} = useTranslation();
    return (
        <>
            <div className="flex flex-col items-center mt-5">
                <div className="flex flex-col text-md w-full rounded-t py-3 px-5 font-semibold"
                     style={{background: "#D8FFF6"}}>
                    <div className="flex">
                        <div onClick={choseFile} className="cursor-pointer px-5 rounded py-3"
                             style={{background: "#B1CEF9"}}>
                            {t('Select_File')}
                        </div>
                        <div className="px-4 py-3">
                            {t('Update_New')}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
