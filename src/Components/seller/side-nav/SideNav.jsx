import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import * as ROUTES from '../../../constants/routes'
import {
    faChevronDown,
    faChevronUp,
    // faComment,
    faUsers,
    faUserShield,
    faClipboardCheck,
    // faHeart,
    faHouseUser,
    faSignOutAlt,
    // faUserCircle,
    faFlag,
    faMoneyBillWave,
    faStoreAlt,
    faWarehouse,
    faDolly,
    // faAd,
    // faFire,
    // faBolt,
    faPlusCircle,
    faBox,
    faBoxes,
    faSitemap,
    // faCopyright,
    faUser,
    faCodeBranch,
    faCommentAlt,
    // faTicketAlt,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { logoutStart } from '../../../redux/slices/authSlice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

const Sidebar = ({ sideNavOpen }) => {
    const dispatch = useDispatch()
    const { t } = useTranslation()
    const [customersOpen, setCustomersOpen] = useState(false)
    const [reportsOpen, setReportsOpen] = useState(false)
    // const [flashOpen, setFlashOpen] = useState(false)
    const [productsOpen, setProductsOpen] = useState(false)

    const profile = useSelector((state) => state.profile)

    if (profile?.avatar?.data) {
        var buffer = new Buffer.from(profile?.avatar?.data).toString('base64')
    }

    const userName = `${profile?.firstName} ${profile?.lastName}`

    const avatar = buffer ? `data:image/png;base64,${buffer}` : null

    const profileRoutes = [
        {
            name: 'Profile_Dashboard',
            route: ROUTES.SELLER_DASHBOARD,
            icon: faHouseUser,
        },
        {
            name: 'Products',
            route: null,
            icon: faBox,
            dropdown: [
                {
                    name: 'add product',
                    route: ROUTES.SELLER_PRODUCTS_ADD,
                    icon: faPlusCircle,
                },
                {
                    name: 'all products',
                    route: ROUTES.SELLER_PRODUCTS_ALL,
                    icon: faBoxes,
                },
                {
                    name: 'categories',
                    route: ROUTES.SELLER_PRODUCTS_CATEGORIES,
                    icon: faSitemap,
                },
                {
                    name: 'sub-category',
                    route: ROUTES.SELLER_PRODUCTS_SUB_CATEGORY,
                    icon: faCodeBranch,
                },
                {
                    name: 'reviews',
                    route: ROUTES.SELLER_PRODUCTS_REVIEWS,
                    icon: faCommentAlt,
                },
                // {
                //     name: 'Coupons',
                //     route: ROUTES.SELLER_PRODUCTS_BRANDS,
                //     icon: faTicketAlt,
                // },
            ],
            dropdownHook: [productsOpen, setProductsOpen],
        },
        {
            name: 'Customers',
            route: null,
            icon: faUsers,
            dropdown: [
                {
                    name: 'Customers',
                    route: ROUTES.SELLER_CUSTOMERS,
                    icon: faUserShield,
                },
                {
                    name: 'Orders',
                    route: ROUTES.SELLER_ORDERS,
                    icon: faClipboardCheck,
                },
            ],
            dropdownHook: [customersOpen, setCustomersOpen],
        },

        {
            name: 'Reports',
            route: null,
            icon: faFlag,
            dropdown: [
                {
                    name: 'product sale',
                    route: ROUTES.SELLER_REPORT_PRODUCT,
                    icon: faMoneyBillWave,
                },
                {
                    name: 'seller products sales',
                    route: ROUTES.SELLER_REPORT_SALE,
                    icon: faStoreAlt,
                },
                {
                    name: 'product stock',
                    route: ROUTES.SELLER_REPORT_STOCK,
                    icon: faWarehouse,
                },
                // {
                //     name: 'product wishlist',
                //     route: ROUTES.SELLER_REPORT_WISHLIST,
                //     icon: faHeart,
                // },
                {
                    name: 'shipment',
                    route: ROUTES.SELLER_REPORT_SHIPMENT,
                    icon: faDolly,
                },
            ],
            dropdownHook: [reportsOpen, setReportsOpen],
        },

        // {
        //     name: 'Flash deal',
        //     route: null,
        //     icon: faBolt,
        //     dropdown: [
        //         {
        //             name: 'flash deal',
        //             route: ROUTES.SELLER_FLASH_DEAL,
        //             icon: faAd,
        //         },
        //         {
        //             name: 'promo deal',
        //             route: ROUTES.SELLER_PROMO_DEAL,
        //             icon: faFire,
        //         },
        //     ],
        //     dropdownHook: [flashOpen, setFlashOpen],
        // },
        // {
        //     name: 'conversations',
        //     route: ROUTES.SELLER_CHAT,
        //     icon: faComment,
        // },
        // {
        //     name: 'Manage_Profile',
        //     route: ROUTES.SELLER_PROFILE,
        //     icon: faUserCircle,
        // },
        { name: 'Log_Out', route: null, icon: faSignOutAlt },
    ]

    return (
        <div
            className={`
           bg-secondary lg:static lg:w-auto shadow-lg w-72 max-w-full z-50 fixed h-screen lg:overflow-hidden overflow-y-scroll top-0 left-0 lg:h-full flex justify-center min-h-screen transform transition-all duration-500 py-10
            ${
                sideNavOpen
                    ? 'translate-x-0'
                    : 'lg:translate-x-0 -translate-x-full'
            }
            `}
        >
            <div>
                <div className="mb-8 text-center">
                    {!avatar || avatar === '' ? (
                        <span className="text-2xl mb-2 mx-auto inline-block flex items-center justify-center w-20 h-20 rounded-full bg-gray-200">
                            <FontAwesomeIcon icon={faUser} />
                        </span>
                    ) : (
                        <img
                            className="shadow-md w-20 h-20 object-cover mx-auto mb-4 rounded-full "
                            src={avatar}
                            alt="avatar"
                        />
                    )}
                    <h3 className="font-bold text-white capitalize">
                        {!profile?.firstName || !profile?.lastName
                            ? 'Seller'
                            : userName}
                    </h3>
                </div>
                <ul className="flex flex-col space-y-2">
                    {profileRoutes.map(
                        (
                            { name, route, icon, dropdown, dropdownHook },
                            index
                        ) => (
                            <li
                                key={`navlink-${index}`}
                                className="font-semibold text-white relative text-md   w-full transition-all  xl:p-4 p-2 capitalize text-lg"
                            >
                                {route && (
                                    <NavLink
                                        className="flex  items-center hover:text-yellowGB transform "
                                        activeClassName="text-yellowGB"
                                        to={route}
                                    >
                                        <span className="mx-2 ">
                                            <FontAwesomeIcon icon={icon} />
                                        </span>
                                        <span>{t(`${name}`)}</span>
                                    </NavLink>
                                )}
                                {!route && dropdown && (
                                    <>
                                        <span
                                            onClick={() =>
                                                dropdownHook[1](
                                                    !dropdownHook[0]
                                                )
                                            }
                                            className="flex items-center justify-between cursor-pointer hover:text-yellowGB transform  items-center"
                                        >
                                            <div>
                                                <span className="mx-2">
                                                    <FontAwesomeIcon
                                                        icon={icon}
                                                    />
                                                </span>
                                                <span> {t(`${name}`)}</span>
                                            </div>
                                            <span>
                                                <FontAwesomeIcon
                                                    icon={
                                                        dropdownHook[0]
                                                            ? faChevronUp
                                                            : faChevronDown
                                                    }
                                                />
                                            </span>
                                        </span>
                                        <div
                                            className={`mt-2 transition-all duration-500 overflow-hidden ${
                                                dropdownHook[0]
                                                    ? 'max-h-96'
                                                    : 'max-h-0'
                                            }`}
                                        >
                                            <div className="px-2 py-2">
                                                {dropdown.map(
                                                    (
                                                        { name, route, icon },
                                                        index
                                                    ) => (
                                                        <NavLink
                                                            key={`${name}-${index}`}
                                                            to={route}
                                                            activeClassName="text-yellowGB"
                                                            className="block px-4 mb-4 text-sm font-semibold bg-transparent rounded-lg md:mt-0 hover:text-yellowGB "
                                                            href="#"
                                                        >
                                                            <span className="mx-2 ">
                                                                <FontAwesomeIcon
                                                                    icon={icon}
                                                                />
                                                            </span>
                                                            <span>{t`(${name})`}</span>
                                                        </NavLink>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    </>
                                )}
                                {!route && !dropdown && (
                                    <span
                                        onClick={() => dispatch(logoutStart())}
                                        className="flex  cursor-pointer hover:text-yellowGB transform  items-center"
                                    >
                                        <span className="mx-2 ">
                                            <FontAwesomeIcon icon={icon} />
                                        </span>
                                        <span> {t(`${name}`)}</span>
                                    </span>
                                )}
                            </li>
                        )
                    )}
                </ul>
                {/* <div className="text-center mt-6">
                    <h3 className="font-bold text-2xl text-white capitalize">
                        {t('Sold Amount')}
                    </h3>
                    <p className="mb-6 text-white">
                        your sold amount this month
                    </p>
                    <button className="rounded transform hover:text-white hover:bg-primary  transition-all bg-gray-200 px-4 py-2 mb-4">
                        $0.00
                    </button>
                    <p className="text-white font-semibold">
                        total sold: <span className="mx-4">$90.00</span>
                    </p>
                    <p className="text-white font-semibold">
                        sold last month: <span className="mx-4">$90.00</span>
                    </p>
                </div> */}
            </div>
        </div>
    )
}

export default Sidebar
