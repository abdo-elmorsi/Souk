import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import * as ROUTES from '../../constants/routes'
import {
    faBackward,
    faChartLine,
    faDollarSign,
    faHouseUser,
    // faMoneyCheckAlt,
    faSignOutAlt,
    faUserCircle,
    faUser,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { logoutStart } from '../../redux/slices/authSlice'

const Sidebar = ({ sideNavOpen, userName, dispatch, avatar, role }) => {
    const { t } = useTranslation()

    const profileRoutes = [
        {
            name: 'Profile_Dashboard',
            route: ROUTES.CUSTOMER_DASHBOARD,
            icon: faHouseUser,
        },
        {
            name: 'Purchase_History',
            route: ROUTES.PURCHASE_HISTORY,
            icon: faDollarSign,
        },
        // {
        //     name: 'Payment_Method',
        //     route: ROUTES.PAYMENT_METHOD,
        //     icon: faMoneyCheckAlt,
        // },
        {
            name: 'Manage_Profile',
            route: ROUTES.MANAGE_PROFILE,
            icon: faUserCircle,
        },

        { name: 'Back_To_Shop', route: ROUTES.HOME, icon: faBackward },
        {
            name: role === 'user' ? 'Be a Seller' : 'Seller dashboard',
            route:
                role === 'seller'
                    ? ROUTES.SELLER_DASHBOARD
                    : ROUTES.BECOME_SELLER,
            icon: faChartLine,
        },
        { name: 'Log_Out', route: null, icon: faSignOutAlt },
    ]

    return (
        <div
            className={`
            bg-white border-t-2 border-gray-200 shadow-lg lg:static lg:w-auto w-60 z-50 fixed lg:overflow-hidden overflow-y-scroll h-full  min-h-screen top-0 left-0 bottom-0 flex justify-center py-10 transform transition-all duration-500 py-10
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

                    <h3 className="font-bold text-secondary capitalize">
                        {userName ? userName : 'Customer'}
                    </h3>
                </div>
                <ul className="flex w-full flex-col space-y-2">
                    {profileRoutes.map(({ name, route, icon }, index) => (
                        <li
                            key={`navlink-${index}`}
                            className="font-semibold text-secondary text-md transform hover:scale-110 w-full transition-all hover:text-primary p-4 capitalize text-lg"
                        >
                            {route && (
                                <NavLink
                                    exact
                                    to={route}
                                    activeClassName="text-primary"
                                    className="flex items-center"
                                >
                                    <span className="mx-2 ">
                                        <FontAwesomeIcon icon={icon} />
                                    </span>
                                    <span>{t(`${name}`)}</span>
                                </NavLink>
                            )}
                            {route === null && (
                                <span
                                    onClick={() => dispatch(logoutStart())}
                                    className="flex cursor-pointer items-center"
                                >
                                    <span className="mx-2 ">
                                        <FontAwesomeIcon icon={icon} />
                                    </span>
                                    <span> {t(`${name}`)}</span>
                                </span>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
