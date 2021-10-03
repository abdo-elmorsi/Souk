import React from 'react'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import cookies from 'js-cookie'
import { FaRegBell } from 'react-icons/fa'
import { FaAngleDown } from 'react-icons/fa'
import { CgMenu } from 'react-icons/cg'
import { motion } from 'framer-motion'
import { slideToLeft } from '../../helpers/animation'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProfileStart } from '../../redux/slices/profileSlice'

const languages = [
    {
        key: '222',
        code: 'en',
        text: 'English',
        name: 'English',
        country_code: 'gb',
    },
    {
        key: '111',
        code: 'sa',
        text: 'Arabic',
        dir: 'rtl',
        country_code: 'sa',
        name: 'Arabic',
    },
]

const Navbar = ({ showDropdown, setShowDropdown }) => {
    const [showLang, setShowLang] = useState(false)
    const currentLanguageCode = cookies.get('i18next') || 'en'
    const currentLanguage = languages.find(
        (l) => l.code === currentLanguageCode
    )
    const { t } = useTranslation()

    const { profile, auth, isLoadingProfile } = useSelector((state) => ({
        profile: state.profile,
        auth: state.auth,
        isLoadingProfile: state.loadingState.isLoadingProfile,
    }))

    const dispatch = useDispatch()

    useEffect(() => {
        if (!profile._id) {
            dispatch(getProfileStart(auth))
        }
    }, [profile._id, auth, dispatch])

    if (profile?.avatar?.data) {
        var buffer = new Buffer.from(profile?.avatar?.data).toString('base64')
    }

    useEffect(() => {
        document.body.dir = currentLanguage.dir || 'ltr'
    }, [currentLanguage, t])
    return (
        <motion.div variants={slideToLeft} initial="hidden" animate="visible">
            <div className="pt-5">
                <div className="flex flex-col md:flex-row bg-white py-3 rounded shadow-md px-3">
                    {/* Search Box*/}
                    <div className="w-full md:w-6/12 flex justify-center md:justify-start items-center">
                        <input
                            className={`max-w-sm text-sm flex w-full  cursor-pointer rounded py-2 ring-2 border-transparent focus:outline-none ring-black focus:ring-2 focus:ring-primary focus:border-transparent
                        ${
                            currentLanguageCode === 'sa'
                                ? 'pr-5 pl-24 '
                                : 'pl-5 pr-28 '
                        }
                        `}
                        />
                        <div className="h-full flex items-center">
                            <div
                                className={`text-sm cursor-pointer bg-primary text-white px-6 hover:bg-secondary transition ease-linear ${
                                    currentLanguageCode === 'sa'
                                        ? 'arabicNavbar rounded-l'
                                        : 'englishNavbar rounded-r'
                                }`}
                            >
                                <div className="">{t('search')}</div>
                            </div>
                        </div>
                        {/* Set Dropdown */}
                        <div
                            onClick={() => {
                                setShowDropdown(!showDropdown)
                            }}
                            className={`flex md:hidden cursor-pointer rounded-full p-2 shadow-md border border-black ${
                                currentLanguageCode === 'sa' ? 'mr-2' : 'ml-2'
                            }`}
                        >
                            <div className="">
                                <CgMenu
                                    style={{
                                        height: '22px',
                                        width: '22px',
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-6/12 pt-3 md:pt-0 flex justify-center lg:justify-end lg:pr-10 items-center">
                        {/* Notification Button */}
                        <div className="mx-1 lg:mx-3">
                            <div
                                className={`h-12 w-12 rounded-full flex justify-center items-center cursor-pointer${
                                    currentLanguageCode === 'sa' ? '' : 'ml-5'
                                }
                            `}
                            >
                                <div
                                    className="h-2 bg-primary animate-ping w-2 absolute ml-6 rounded-full"
                                    style={{ marginTop: '-14px' }}
                                ></div>
                                <div
                                    className="h-2 w-2 bg-primary absolute ml-6 rounded-full"
                                    style={{ marginTop: '-14px' }}
                                ></div>
                                <FaRegBell
                                    className=""
                                    style={{
                                        height: '20px',
                                        width: '20px',
                                    }}
                                />
                            </div>
                        </div>
                        <div
                            onClick={() => {
                                setShowLang(!showLang)
                            }}
                            className={`flex items-center cursor-pointer border  rounded mx-1 lg:mx-3${
                                currentLanguageCode === 'sa'
                                    ? 'pr-1 pl-2'
                                    : 'pl-1 pr-4'
                            }
                            `}
                        >
                            {currentLanguageCode === 'sa' ? (
                                <>
                                    <img
                                        src="https://www.countryflags.io/sa/flat/32.png"
                                        alt=""
                                        style={{
                                            width: '25px',
                                            height: '26px',
                                            borderRadius: '25px',
                                            marginRight: '3px',
                                        }}
                                    />
                                    <div className="text-xs px-1">عربى</div>
                                    <div className="mr-2">
                                        <FaAngleDown />
                                    </div>
                                </>
                            ) : (
                                <>
                                    <img
                                        src="https://www.countryflags.io/gb/flat/32.png"
                                        alt=""
                                        style={{
                                            width: '25px',
                                            height: '26px',
                                            borderRadius: '25px',
                                            marginRight: '3px',
                                        }}
                                    />
                                    <div className="text-xs px-1">English</div>
                                    <div className="ml-2">
                                        <FaAngleDown />
                                    </div>
                                </>
                            )}

                            {showLang && (
                                <div className="bg-white py-3 rounded text-black border border-black mt-32 shadow-2xl absolute">
                                    <div
                                        onClick={() => {
                                            i18next.changeLanguage('sa')
                                        }}
                                        className="flex h-8 items-center justify-center px-5 hover:bg-gray-100"
                                    >
                                        <img
                                            src="https://www.countryflags.io/sa/flat/32.png"
                                            alt=""
                                            style={{
                                                width: '25px',
                                                height: '25px',
                                                borderRadius: '25px',
                                                marginRight: '3px',
                                            }}
                                        />
                                        <div className="text-xs px-1">عربى</div>
                                    </div>
                                    <div
                                        onClick={() => {
                                            i18next.changeLanguage('en')
                                        }}
                                        className="flex h-8 items-center justify-center px-5 hover:bg-gray-100"
                                    >
                                        <img
                                            src="https://www.countryflags.io/gb/flat/32.png"
                                            alt=""
                                            style={{
                                                width: '25px',
                                                height: '25px',
                                                borderRadius: '25px',
                                                marginRight: '3px',
                                            }}
                                        />
                                        <div className="text-xs px-1">
                                            English
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="mx-1 lg:mx-3">
                            {/* User's Image */}
                            {!profile.avatar || profile.avatar === '' ? (
                                <span className="text-lg flex items-center justify-center w-12 h-12 rounded-full bg-gray-200">
                                    <FontAwesomeIcon icon={faUser} />
                                </span>
                            ) : (
                                <img
                                    className="shadow-md h-12 w-12 object-cover rounded-full "
                                    src={`data:image/png;base64,${buffer}`}
                                    alt=""
                                />
                            )}{' '}
                        </div>
                        {/* User's Name */}
                        <div
                            className={`text-sm font-semibold ${
                                currentLanguageCode === 'sa'
                                    ? 'text-left'
                                    : 'text-right'
                            }`}
                        >
                            <div className="font-bold">
                                {/* Abdullah Rubayet */}
                                {!isLoadingProfile && profile._id
                                    ? `${profile.firstName} ${profile.lastName}`
                                    : 'Customer'}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Navbar
