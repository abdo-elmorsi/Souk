import React from 'react'
import { useTranslation } from 'react-i18next'
import cookies from 'js-cookie'

const Form = ({
    choseFile,
    tempFile,
    handleAddsManagerForm,
    addsManagerForm,
    onSubmit,
}) => {
    const { t } = useTranslation()
    const currentLanguageCode = cookies.get('i18next') || 'en'
    return (
        <>
            <div className="mt-5 mb-20">
                {/* Header */}
                <div className="bg-white flex flex-col items-center mt-5 rounded mx-5 lg:mx-10">
                    <div className="text-md rounded bg-white pb-5">
                        {/* Upload file */}
                        <div className="flex flex-col md:flex-row  md:items-center mb-3 mt-10 px-5">
                            <div className="w-48">{t('Upload_file')}</div>
                            <div className="w-full cursor-pointer">
                                <div className="w-full h-10 bg-gray-200 flex items-center rounded-md">
                                    <div
                                        onClick={choseFile}
                                        className={
                                            currentLanguageCode === 'sa'
                                                ? 'bg-gray-300 py-2 px-5 rounded-r-md'
                                                : 'bg-gray-300 py-2 px-5 rounded-l-md'
                                        }
                                    >
                                        {t('Browse')}
                                    </div>
                                    {/* here will be value of Browse */}
                                    {tempFile && (
                                        <div className="text-xs px-2">
                                            {tempFile}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        {/* Page / Section */}
                        <div className="flex flex-col md:flex-row  md:items-cente my-5 px-5">
                            <div className="w-48 pt-2">{t('Page_Section')}</div>
                            <div className="w-full cursor-pointer">
                                <div className="w-full h-10 bg-gray-200 flex items-center px-5 rounded-md">
                                    <div className="h-full w-full">
                                        <select
                                            name="pageSection"
                                            value={addsManagerForm.pageSection}
                                            onChange={handleAddsManagerForm}
                                            className="outline-none w-full h-10 bg-gray-200 flex items-center"
                                        >
                                            <option value="Home page Header Section">
                                                {t('Home_page_Header_Section')}
                                            </option>
                                            <option value="Home page Header Section-1">
                                                {t('Home_page_Header_Section')}
                                                -1
                                            </option>
                                            <option value="Home page Header Section-2">
                                                {t('Home_page_Header_Section')}
                                                -2
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div
                                    className="px-2"
                                    style={{ fontSize: '11px' }}
                                >
                                    {t(
                                        'Choose_the_page_and_the_section_where_you_want_your_ads_to_show'
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Period of Ads */}
                        <div className="flex flex-col md:flex-row  md:items-center my-5 px-5">
                            <div className="w-48">{t('Period_of_Ads')}</div>
                            <div className="w-full">
                                <input
                                    name="periodAds"
                                    type="text"
                                    value={addsManagerForm.periodAds}
                                    onChange={handleAddsManagerForm}
                                    className="w-full h-10 bg-gray-200 px-5 rounded-md"
                                />
                            </div>
                        </div>
                        {/* Number Target */}
                        <div className="flex flex-col md:flex-row  md:items-center my-5 px-5">
                            <div className="w-48">{t('Number_Target')}</div>
                            <div className="w-full">
                                <input
                                    name="numberTarget"
                                    type="text"
                                    value={addsManagerForm.numberTarget}
                                    onChange={handleAddsManagerForm}
                                    className="w-full h-10 bg-gray-200 px-5 rounded-md"
                                />
                            </div>
                        </div>
                        {/* Target location */}
                        <div className="flex flex-col md:flex-row  md:items-center my-5 px-5">
                            <div className="w-48">{t('Target_location')}</div>
                            <div className="w-full cursor-pointer">
                                <div className="w-full h-10 bg-gray-200 flex items-center px-5 rounded-md">
                                    <div className="h-full w-full">
                                        <select
                                            name="targetLocation"
                                            value={
                                                addsManagerForm.targetLocation
                                            }
                                            onChange={handleAddsManagerForm}
                                            className="outline-none w-full h-10 bg-gray-200 flex items-center"
                                        >
                                            <option value="Target Location">
                                                {t('Target_location')}
                                            </option>
                                            <option value="Target Location-1">
                                                {t('Target_location')}-1
                                            </option>
                                            <option value="Target Location-2">
                                                {t('Target_location')}-2
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Amount */}
                        <div className="flex flex-col md:flex-row  md:items-center my-5 px-5">
                            <div className="w-48">{t('Amount')}</div>
                            <div className="w-full">
                                <input
                                    name="amount"
                                    type="text"
                                    value={addsManagerForm.amount}
                                    onChange={handleAddsManagerForm}
                                    className="w-full h-10 bg-gray-200 px-5 rounded-md"
                                />
                            </div>
                        </div>
                        {/* This is for responsive, Don't delete it */}
                        <div className="invisible flex items-cente px-5">
                            <div className="w-48" />
                            <div className="w-full cursor-pointer">
                                <textarea
                                    className="w-full bg-gray-200 border rounded-md px-5"
                                    rows="1"
                                    cols="50"
                                />
                            </div>
                        </div>

                        {/* Save Button */}
                        <div className="flex items-cente mb-3 px-5">
                            <div className="w-full flex justify-end cursor-pointer">
                                <button
                                    onClick={onSubmit}
                                    className="bg-primary text-white py-2 px-8 rounded-md"
                                >
                                    {t('Run_Ads')}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form
