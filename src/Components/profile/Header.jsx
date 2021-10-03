import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import cookies from 'js-cookie'
import { Turn as Hamburger } from 'hamburger-react'
import Container from '../ui/Container'
import LanguageSwitch from '../ui/LanguageSwitch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Header = ({ sideNavOpen, setSideNavOpen, userName, avatar }) => {
    const currentLanguage = cookies.get('i18next') || 'en'
    const { t } = useTranslation()

    useEffect(() => {
        if (currentLanguage === 'sa') {
            document.body.dir = 'rtl'
        } else {
            document.body.dir = 'ltr'
        }
    }, [currentLanguage, t])

    return (
        <>
            <div className="pt-5 bg-white lg:rounded-md  shadow-md">
                <Container>
                    <div className="flex flex-col lg:flex-row  py-3 justify-between">
                        {/* Search Box*/}
                        <div className="w-auto sm:grid sm:grid-cols-4 flex flex-col-reverse p-1 sm:items-center">
                            <div className="flex sm:flex-row flex-col sm:space-y-0 space-y-2 col-span-3 ">
                                <input className="text-sm px-5 border border-black rounded py-2" />

                                <button className="text-sm hover:bg-purple-500 transition-all mx-2 py-2 border-black rounded bg-gray-400 text-white px-6">
                                    {t('search')}
                                </button>
                            </div>

                            {/* Show Side Nav */}
                            <div
                                style={{ direction: 'ltr' }}
                                className=" sm:mb-0 mb-4 relative z-50 flex justify-end  lg:hidden cursor-pointer"
                            >
                                <Hamburger
                                    toggled={sideNavOpen}
                                    toggle={setSideNavOpen}
                                    color="#000"
                                />
                            </div>
                        </div>

                        <div className="w-full relative z-40 pt-3 lg:pt-0 lg:w-1/2 flex justify-center lg:justify-end items-center">
                            <div className="mx-2">
                                <LanguageSwitch white={false} />
                            </div>
                            <div>
                                {!avatar || avatar === '' ? (
                                    <span className="text-lg inline-block flex items-center justify-center w-12 h-12 rounded-full bg-gray-200">
                                        <FontAwesomeIcon icon={faUser} />
                                    </span>
                                ) : (
                                    <img
                                        className="shadow-md mx-2 h-12 w-12 object-cover rounded-full "
                                        src={avatar}
                                        alt=""
                                    />
                                )}
                            </div>
                            {/* User's Name */}
                            <h3 className="text-sm font-semibold pl-3">
                                {userName ? userName : 'Customer'}
                            </h3>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Header
