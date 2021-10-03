import React, { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import cookies from 'js-cookie'
import Navbar from '../../../Components/adminPanel/Navbar'
import Sidebar from '../../../Components/adminPanel/Sidebar'
import Dropdown from '../../../Components/adminPanel/Dropdown'
import { AiFillCaretDown } from 'react-icons/ai'
import LeftSide from '../../../Components/adminPanel/Addon Manager/LeftSide'
import Form from '../../../Components/adminPanel/Addon Manager/Form'
import { motion } from 'framer-motion'
import { slideDown } from '../../../helpers/animation'

const AddsManager = () => {
    const { t } = useTranslation()
    const [showDropdown, setShowDropdown] = React.useState(false)
    const [showOptions, setShowOptions] = React.useState(false)
    const [activeBtn, setActiveBtn] = React.useState('web')

    const currentLanguageCode = cookies.get('i18next') || 'en'

    const [tempFile, setTempFile] = React.useState(null)

    const filePickRef = useRef(null)

    const choseFile = () => {
        if (filePickRef.current) {
            filePickRef.current.click()
        }
    }

    const onFileChange = (e) => {
        e.persist()
        const fileURL = e.target.files[0]
        if (fileURL) {
            setTempFile(fileURL)
        }
    }

    const [addsManagerForm, setAddsManagerForm] = useState({
        pageSection: '',
        periodAds: '',
        numberTarget: '',
        targetLocation: '',
        amount: '',
    })

    const handleAddsManagerForm = (e) => {
        setAddsManagerForm({
            ...addsManagerForm,
            [e.target.name]: e.target.value,
        })
    }

    const onSubmit = () => {
        const { pageSection, periodAds, numberTarget, targetLocation, amount } =
            addsManagerForm

        const AdsData = new FormData()
        AdsData.append('uploadFile', tempFile)
        AdsData.append('pageSection', pageSection)
        AdsData.append('periodAds', periodAds)
        AdsData.append('numberTarget', numberTarget)
        AdsData.append('targetLocation', targetLocation)
        AdsData.append('amount', amount)
    }

    return (
        <div className="flex">
            {/* SetDropdown */}
            <Dropdown
                showDropdown={showDropdown}
                setShowDropdown={setShowDropdown}
            />

            {/* Sidebar Component */}
            <Sidebar />

            {/* For Browse */}
            <input
                onChange={onFileChange}
                ref={filePickRef}
                type="file"
                hidden
            />

            <div className="bg-backgroundDB w-full px-8">
                {/* Navbar Component */}
                <Navbar
                    showDropdown={showDropdown}
                    setShowDropdown={setShowDropdown}
                />

                <div className="flex flex-col md:flex-row">
                    {/* Left Section */}
                    <LeftSide
                        showOptions={showOptions}
                        setShowOptions={setShowOptions}
                    />
                    {/* Right Section */}
                    <div
                        className={
                            currentLanguageCode === 'sa'
                                ? 'mr-0 lg:mr-5 my-5 w-full'
                                : 'ml-0 lg:ml-5 my-5 w-full'
                        }
                    >
                        {/* Header */}
                        <div className="text-xl font-semibold mb-2">
                            {t('Overview')}
                        </div>
                        {/* Top 3 Items */}
                        <div className="flex flex-col md:flex-row">
                            <div className="w-full md:w-4/12 bg-white px-10 py-5 rounded-lg">
                                <div className="">{t('Overall_Ads')}</div>
                                <div className="text-2xl font-semibold">06</div>
                            </div>
                            <div className="my-2 w-full md:w-4/12 md:my-0 mx-0 md:mx-5 bg-blueDB text-white px-10 py-5 rounded-lg">
                                <div className="">{t('Overall_Ads')}</div>
                                <div className="text-2xl font-semibold">35</div>
                            </div>
                            <div className="bg-white w-full md:w-4/12 px-10 py-5 rounded-lg">
                                <div className="">{t('Insomes_status')}</div>
                                <div className="flex justify-between items-center">
                                    <div className="text-2xl font-semibold">
                                        24
                                    </div>
                                    <div className="text-xs flex items-center">
                                        10.25%
                                        <span className="mx-1">
                                            <AiFillCaretDown />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Container */}
                        <motion.div
                            variants={slideDown}
                            initial="hidden"
                            animate="visible"
                            className="mt-5 bg-white rounded"
                        >
                            <div className="py-5 px-5 border-b border-black font-semibold">
                                {t('Run_Ads')}
                            </div>
                            <div className="flex flex-col sm:flex-row py-5 justify-center px-5 md:px-0">
                                <div
                                    onClick={() => {
                                        setActiveBtn('web')
                                    }}
                                    className={
                                        activeBtn === 'web'
                                            ? 'bg-blueDB text-white py-2 px-5 text-md rounded-md cursor-pointer'
                                            : 'py-2 px-5 text-md rounded-md cursor-pointer'
                                    }
                                >
                                    {t('Web_Account')}
                                </div>
                                <div
                                    onClick={() => {
                                        setActiveBtn('facebook')
                                    }}
                                    className={
                                        activeBtn === 'facebook'
                                            ? 'bg-blueDB text-white py-2 px-5 text-md rounded-md cursor-pointer'
                                            : 'py-2 px-5 text-md rounded-md cursor-pointer'
                                    }
                                >
                                    {t('Facebook')}
                                </div>
                                <div
                                    onClick={() => {
                                        setActiveBtn('google')
                                    }}
                                    className={
                                        activeBtn === 'google'
                                            ? 'bg-blueDB text-white py-2 px-5 text-md rounded-md cursor-pointer'
                                            : 'py-2 px-5 text-md rounded-md cursor-pointer'
                                    }
                                >
                                    {t('Google_Ads')}
                                </div>
                                <div
                                    onClick={() => {
                                        setActiveBtn('instagram')
                                    }}
                                    className={
                                        activeBtn === 'instagram'
                                            ? 'bg-blueDB text-white py-2 px-5 text-md rounded-md cursor-pointer'
                                            : 'py-2 px-5 text-md rounded-md cursor-pointer'
                                    }
                                >
                                    {t('Instagram_Ads')}
                                </div>
                            </div>

                            {/* Form */}
                            <Form
                                addsManagerForm={addsManagerForm}
                                handleAddsManagerForm={handleAddsManagerForm}
                                tempFile={tempFile}
                                choseFile={choseFile}
                                onSubmit={onSubmit}
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddsManager
