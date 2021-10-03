import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import cookies from 'js-cookie'
import { Turn as Hamburger } from 'hamburger-react'
import Container from '../../ui/Container'
import LanguageSwitch from '../../ui/LanguageSwitch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'

const Header = ({ sideNavOpen, setSideNavOpen }) => {
    const currentLanguage = cookies.get('i18next') || 'en'
    const { t } = useTranslation()

    const profile = useSelector((state) => state.profile)

    useEffect(() => {
        if (currentLanguage === 'sa') {
            document.body.dir = 'rtl'
        } else {
            document.body.dir = 'ltr'
        }
    }, [currentLanguage, t])

    if (profile?.avatar?.data) {
        var buffer = new Buffer.from(profile?.avatar?.data).toString('base64')
    }

    const userName = `${profile?.firstName} ${profile?.lastName}`

    const avatar = buffer ? `data:image/png;base64,${buffer}` : null

    return (
        <>
            <div className="pt-5 bg-secondary lg:rounded-md shadow-md">
                <Container>
                    <div className="flex flex-col lg:flex-row  py-3 justify-between">
                        {/* Search Box*/}
                        <div className="w-auto sm:grid sm:grid-cols-4 flex flex-col-reverse p-1 sm:items-center">
                            <div className="flex sm:flex-row flex-col col-span-3 sm:space-y-0 space-y-2 ">
                                <input className="text-sm px-5 border border-black rounded py-2" />

                                <button className="text-sm hover:bg-primary hover:text-white font-semibold sm:mx-2 border-black py-2  rounded bg-grayDB  px-6">
                                    {t('search')}
                                </button>
                            </div>

                            {/* Show Side Nav */}
                            <div
                                style={{ direction: 'ltr' }}
                                className=" sm:mb-0 mb-4   flex justify-end  lg:hidden cursor-pointer"
                            >
                                <div className="relative w-max z-50">
                                    <Hamburger
                                        toggled={sideNavOpen}
                                        toggle={setSideNavOpen}
                                        color="#fff"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="w-full relative z-40 pt-3 lg:pt-0 lg:w-1/2 flex justify-center lg:justify-end items-center">
                            <div className="mx-2">
                                <LanguageSwitch />
                            </div>
                            <div>
                                {!avatar || avatar === '' ? (
                                    <span className="text-lg inline-block flex items-center justify-center w-12 h-12 rounded-full bg-gray-200">
                                        <FontAwesomeIcon icon={faUser} />
                                    </span>
                                ) : (
                                    <img
                                        className="shadow-md h-12 w-12 object-cover rounded-full "
                                        src={avatar}
                                        alt=""
                                    />
                                )}
                            </div>

                            <h3 className="text-sm font-semibold text-white pl-2 ">
                                {!profile?.firstName || !profile?.lastName
                                    ? 'Seller'
                                    : userName}
                            </h3>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Header
