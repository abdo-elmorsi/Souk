import React from 'react'
import {useTranslation} from 'react-i18next'
import ProgressBar from "@ramonak/react-progress-bar";

const ProgressBarAll = ({excellect, poor, good, average, below_average}) => {
    const {t} = useTranslation();
    return (
        <div className="">
            {/* Excellent Progressbar */}
            <div className="flex items-center px-8 pt-5 pb-2">
                <div className="w-48">{t('Excellent')}</div>
                <div className="w-full">
                    <ProgressBar completed={excellect} height={"15px"} bgColor={"green"} borderRadius={"5px"}/>
                </div>
            </div>
            {/* Good Progressbar */}
            <div className="flex items-center px-8 py-2">
                <div className="w-48">{t('Good')}</div>
                <div className="w-full">
                    <ProgressBar completed={good} height={"15px"} bgColor={"#2ECC71"} borderRadius={"5px"}/>
                </div>
            </div>
            {/* Average Progressbar */}
            <div className="flex items-center px-8 py-2">
                <div className="w-48">{t('Average')}</div>
                <div className="w-full">
                    <ProgressBar completed={average} height={"15px"} bgColor={"#FFE921"} borderRadius={"5px"}/>
                </div>
            </div>
            {/* Below Average Progressbar */}
            <div className="flex items-center px-8 py-2">
                <div className="w-48">{t('Below_Average')}</div>
                <div className="w-full">
                    <ProgressBar completed={below_average} height={"15px"} bgColor={"orange"} borderRadius={"5px"}/>
                </div>
            </div>
            {/* Poor Progressbar */}
            <div className="flex items-center px-8 py-2">
                <div className="w-48">{t('Poor')}</div>
                <div className="w-full">
                    <ProgressBar completed={poor} height={"15px"} bgColor={"red"} borderRadius={"5px"}/>
                </div>
            </div>
        </div>
    )
}

export default ProgressBarAll
