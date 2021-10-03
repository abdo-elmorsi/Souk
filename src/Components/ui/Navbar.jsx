import { faHeart, faQuestionCircle } from '@fortawesome/free-regular-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { NavLink } from 'react-router-dom'
import Search from './Search'
import * as ROUTES from '../../constants/routes'
import '../../styles/ui/Navbar.css'
import MobileNav from './MobileNav'
import { useTranslation } from 'react-i18next'
import logo from '../../assets/logo.jpg'

import Cookies from 'js-cookie'
import { useEffect } from 'react'
import LanguageSwitch from './LanguageSwitch'
import { useDispatch, useSelector } from 'react-redux'
import { logoutStart } from '../../redux/slices/authSlice'
import Badge from './Badge'

export const navRoutes = [
    { $name: 'Home', route: ROUTES.HOME },
    { $name: 'About_Us', route: ROUTES.ABOUT },
    { $name: 'Contact', route: ROUTES.CONTACT },
    // { $name: 'Admin', route: ROUTES.ADMIN_DASHBOARD },
    // { $name: 'Market', route: ROUTES.MARKET },
]

const Navbar = () => {
    const { t } = useTranslation()

    const currentLanguage = Cookies.get('i18next') || 'en'

    const { isAuth, role, itemsInCart, itemsInWishlist } = useSelector(
        (state) => ({
            isAuth: state.auth._id,
            role: state.auth.role,
            itemsInCart: state.cart.length,
            itemsInWishlist: state.wishlist.length,
        })
    )

    const dispatch = useDispatch()

    useEffect(() => {
        if (currentLanguage === 'sa') {
            document.body.dir = 'rtl'
        } else {
            document.body.dir = 'ltr'
        }
    }, [currentLanguage, t])

    return (
        <>
            <header className=" py-2 bg-grayDB lg:block shadow-md hidden">
                <nav className="max-w-screen-xl mx-auto px-2">
                    <ul className="flex items-center justify-between mb-4">
                        <LanguageSwitch white={false} />
                        <div className="flex space-x-10">
                            {navRoutes.map(({ $name, route }, index) => (
                                <li
                                    key={`navlink-${index}`}
                                    className={`
                                    text-secondary hover:text-primary font-semibold capitalize
                                    ${currentLanguage === 'sa' && 'mx-6'}
                                    `}
                                >
                                    <NavLink
                                        activeClassName="text-primary font-bold"
                                        exact
                                        to={route}
                                    >
                                        {t(`${$name}`)}
                                    </NavLink>
                                </li>
                            ))}
                        </div>
                        <div className="flex space-x-4">
                            {!isAuth && (
                                <>
                                    <NavLink
                                        to={ROUTES.SIGNUP}
                                        className={`${
                                            currentLanguage === 'sa' && 'ml-4'
                                        } px-8 py-2 hover:bg-secondary shadow-lg transition-all rounded-full bg-primary text-white font-bold capitalize`}
                                    >
                                        {t('Sign_Up')}
                                    </NavLink>
                                    <NavLink
                                        to={ROUTES.LOGIN}
                                        className="px-8 py-2 hover:bg-secondary shadow-lg transition-all hover:border-secondary hover:text-white rounded-full border-2 border-primary text-primary capitalize font-bold"
                                    >
                                        {t('Login')}
                                    </NavLink>{' '}
                                </>
                            )}
                            {isAuth && (
                                <>
                                    {role === 'user' && (
                                        <NavLink
                                            to={ROUTES.CUSTOMER_DASHBOARD}
                                            className={`${
                                                currentLanguage === 'sa' &&
                                                'ml-4'
                                            } px-8 py-2 hover:bg-primary shadow-lg transition-all rounded-full bg-secondary text-white font-bold capitalize`}
                                        >
                                            {t('Profile')}
                                        </NavLink>
                                    )}
                                    {role === 'seller' && (
                                        <NavLink
                                            to={ROUTES.CUSTOMER_DASHBOARD}
                                            className={`${
                                                currentLanguage === 'sa' &&
                                                'ml-4'
                                            } px-8 py-2 hover:bg-primary shadow-lg transition-all rounded-full bg-secondary text-white font-bold capitalize`}
                                        >
                                            {t('Profile')}
                                        </NavLink>
                                    )}
                                    <button
                                        onClick={() => dispatch(logoutStart())}
                                        className="px-8 py-2 hover:bg-primary shadow-lg transition-all hover:border-primary hover:text-white rounded-full border-2 border-secondary text-secondary capitalize font-bold"
                                    >
                                        {t('Log_Out')}
                                    </button>
                                </>
                            )}
                        </div>
                    </ul>
                    <div className="flex justify-between items-center">
                        <div
                            style={{ backgroundImage: `url(${logo})` }}
                            className="rounded-full w-16 h-16 bg-secondary bg-cover shadow-md bg-no-repeat bg-center flex items-center justify-center"
                        >
                            {/* <span className="font-bold text-white">Logo</span> */}
                        </div>
                        <Search />
                        <div className="flex space-x-4 items-center">
                            <NavLink to={ROUTES.CONTACT}>
                                <span className="text-secondary hover:text-primary text-3xl">
                                    <FontAwesomeIcon icon={faQuestionCircle} />
                                </span>
                            </NavLink>
                            <div className="relative">
                                <Badge numberOfItems={itemsInCart} />
                                <NavLink
                                    activeClassName="text-primary"
                                    to={ROUTES.CART}
                                >
                                    <span
                                        className={`${
                                            currentLanguage === 'sa' && 'mr-4'
                                        }  text-secondary hover:text-primary  text-3xl`}
                                    >
                                        <FontAwesomeIcon
                                            icon={faShoppingCart}
                                        />
                                    </span>
                                </NavLink>
                            </div>
                            <div className="relative">
                                <Badge numberOfItems={itemsInWishlist} />
                                <NavLink
                                    activeClassName="text-primary"
                                    to={ROUTES.WISHLIST}
                                >
                                    <span className="text-secondary hover:text-primary  text-3xl">
                                        <FontAwesomeIcon icon={faHeart} />
                                    </span>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            <MobileNav />
        </>
    )
}

export default Navbar
