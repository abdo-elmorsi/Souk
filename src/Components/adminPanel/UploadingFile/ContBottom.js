import React from 'react'
import {useTranslation} from 'react-i18next'

const ContBottom = ({choseFile}) => {
    const {t} = useTranslation();
    return (
        <>
            <div
                className="flex flex-col md:flex-row justify-between items-center text-md w-full rounded py-5 font-semibold">
                <div className="flex">
                    <div className="py-2 md:py-0">
                        <button className="bg-yellowDB text-white rounded px-5 py-3" style={{background: "#025F00"}}>
                            {t('Prev')}
                        </button>
                    </div>
                    <div className="py-2 md:py-0">
                        <button className="mx-2 text-white rounded px-5 py-3" style={{background: "#005BE4"}}>
                            {t('Next')}
                        </button>
                    </div>
                </div>
                <div className="py-2 md:py-0">
                    <button onClick={choseFile} className="bg-yellowDB text-white rounded px-5 py-3">
                        {t('Add_File')}
                    </button>
                </div>
            </div>
        </>
    )
}

export default ContBottom
