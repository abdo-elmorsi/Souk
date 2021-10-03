import {
    faUser,
    faShoppingCart,
    faQuestionCircle,
    faHeart,
    faTimes,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import * as ROUTES from '../../constants/routes'
import CategoryNav from '../home/CategoryNav'
import Search from './Search'
import { Squash as Hamburger } from 'hamburger-react'
import { navRoutes } from './Navbar'
import { useTranslation } from 'react-i18next'
import LanguageSwitch from './LanguageSwitch'
import logo from '../../assets/logo.jpg'
import { useSelector } from 'react-redux'

const MobileNav = () => {
    const { t } = useTranslation()
    const [isOpen, setOpen] = useState(false)

    const categories = useSelector((state) => state.seller.AllCategories)
    return (
        <header className="bg-grayDB py-2 lg:hidden">
            <nav className="max-w-screen-xl mx-auto px-2">
                <ul className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                        <div className="bars">
                            <Hamburger
                                toggle={setOpen}
                                toggled={isOpen}
                                color="#2b2d42"
                            />
                        </div>
                        <div
                            style={{ backgroundImage: `url(${logo})` }}
                            className="rounded-full w-16 h-16 bg-secondary bg-cover shadow-md bg-no-repeat bg-center flex items-center justify-center"
                        >
                            {/* <span className="font-bold text-white">Logo</span> */}
                        </div>
                    </div>
                    <div className="flex space-x-4">
                        <NavLink className="mx-4" to={ROUTES.LOGIN}>
                            <span className="text-secondary hover:text-primary text-3xl">
                                <FontAwesomeIcon icon={faUser} />
                            </span>
                        </NavLink>
                        <NavLink to={ROUTES.CART}>
                            <span className="text-secondary hover:text-primary text-3xl">
                                <FontAwesomeIcon icon={faShoppingCart} />
                            </span>
                        </NavLink>
                    </div>
                </ul>
                <div>
                    <Search />
                </div>
            </nav>
            <div
                className={`
                ${isOpen ? 'translate-x-0' : '-translate-x-full'}
                fixed h-screen w-64 max-w-full 
                overflow-scroll top-0 left-0 
                bottom-0 z-20 py-6 px-8  
                transform transition-all duration-300 
                bg-white`}
            >
                <button className="mb-4" onClick={() => setOpen(false)}>
                    <FontAwesomeIcon icon={faTimes} />
                </button>
                <LanguageSwitch white={false} />
                <ul className="my-4 flex flex-col space-y-4">
                    {navRoutes.map(({ $name, route }, index) => (
                        <li
                            key={`${$name}-${index}`}
                            className="text-gray-800 font-semibold  capitalize"
                        >
                            <NavLink
                                exact
                                activeClassName="text-primary font-bold"
                                to={route}
                            >
                                {t(`${$name}`)}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <div className=" mb-4 border-t-2 border-b-2 border-gray-50 py-2">
                    <div className="flex items-center  mb-2">
                        <NavLink to={ROUTES.CONTACT}>
                            <span className="text-gray-600 text-xl ">
                                <FontAwesomeIcon icon={faQuestionCircle} />
                            </span>
                            <span className="font-semibold gray-600 mx-2">
                                {t('Help')}
                            </span>
                        </NavLink>
                    </div>
                    <div className="flex items-center ">
                        <NavLink to={ROUTES.WISHLIST}>
                            <span className="text-gray-600 text-xl">
                                <FontAwesomeIcon icon={faHeart} />
                            </span>
                            <span className="font-semibold gray-600 mx-2">
                                {t('wishlist')}
                            </span>
                        </NavLink>
                    </div>
                </div>
                <h2 className="text-primary font-semibold mb-4">
                    {t('Our Categories')}
                </h2>
                {categories.length > 0 && (
                    <CategoryNav categories={categories} />
                )}
            </div>
        </header>
    )
}

export default MobileNav
