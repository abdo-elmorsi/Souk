import React from 'react'
import cookies from 'js-cookie'
import { FaAngleRight, FaAngleLeft, FaAngleDown } from 'react-icons/fa'
import { IoMdRadioButtonOff } from 'react-icons/io'
import { IoRadioButtonOnOutline } from 'react-icons/io5'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'
import { motion } from 'framer-motion'
import { slideDown } from '../../helpers/animation'
import { logoutStart } from '../../redux/slices/authSlice'
import { useDispatch } from 'react-redux'

const styleLinks = {
    paddingTop: '.6rem',
    paddingBottom: '.6rem',
    display: 'flex',
    justifyContent: 'space-between',
    cursor: 'pointer',
    transition: 'all .5s ease-n-out',
}
const Sidebar = () => {
    const dispatch = useDispatch()
    const currentLanguageCode = cookies.get('i18next') || 'en'
    const { t } = useTranslation()
    const { pathname } = useLocation()
    const [productDropdown, setProductDropdown] = React.useState(false)
    const [sellerDropdown, setsellerDropdown] = React.useState(false)
    const [reportDropdown, setreportDropdown] = React.useState(false)
    // const [marketingDropdown, setmarketingDropdown] = React.useState(false)
    const [Customers, setCustomers] = React.useState(false)
    return (
        <>
            <motion.div
                variants={slideDown}
                initial="hidden"
                animate="visible"
                className="bg-violetBlack w-80 font-thin hidden md:inline"
            >
                <div className="min-h-screen">
                    {/* Search Box */}
                    <div className="py-1 pt-10  hover:bg-violetBlackHCh6 flex justify-center text-sm">
                        <input
                            placeholder={t('searchInMenu')}
                            className="border w-52 py-2 px-3 rounded-md border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        />
                    </div>

                    {/* Dashboard */}
                    <div className={'cursor-pointer text-white'}>
                        <Link to="/admin/dashboard">
                            <div
                                className={`pt-6 pb-2 font-semibold cursor-pointer text-white hover:bg-violetBlackH transition ease-in-out mt-5
                            ${
                                currentLanguageCode === 'sa'
                                    ? ' pr-7 lg:pr-10 pl-5'
                                    : ' pl-7 lg:pl-10 pr-5'
                            }
                            `}
                            >
                                {t('Dashboard')}
                            </div>
                        </Link>

                        <div>
                            {/* Product */}
                            <div
                                onClick={() => {
                                    setProductDropdown(!productDropdown)
                                }}
                                style={styleLinks}
                                className={`hover:bg-violetBlackH ${
                                    currentLanguageCode === 'sa'
                                        ? 'pr-7 lg:pr-10 pl-5'
                                        : 'pl-7 lg:pl-10 pr-5'
                                }`}
                            >
                                <div>{t('Product')}</div>
                                <div className="flex items-center">
                                    {currentLanguageCode === 'sa' ? (
                                        productDropdown ? (
                                            <FaAngleDown />
                                        ) : (
                                            <FaAngleLeft />
                                        )
                                    ) : productDropdown ? (
                                        <FaAngleDown />
                                    ) : (
                                        <FaAngleRight />
                                    )}
                                </div>
                            </div>

                            {productDropdown && (
                                <div>
                                    <Link to="/admin/dashboard/AddNewProduct">
                                        <div className="flex py-1 hover:bg-violetBlackHCh items-center px-10 text-sm">
                                            <div className="px-2">
                                                {pathname ===
                                                '/admin/dashboard/AddNewProduct' ? (
                                                    <IoRadioButtonOnOutline />
                                                ) : (
                                                    <IoMdRadioButtonOff />
                                                )}
                                            </div>
                                            <div>{t('Add_New_Product')}</div>
                                        </div>
                                    </Link>
                                    <Link to="/admin/dashboard/AllProducts">
                                        <div className="flex py-1 hover:bg-violetBlackHCh items-center px-10 text-sm">
                                            <div className="px-2">
                                                {pathname ===
                                                '/admin/dashboard/AllProducts' ? (
                                                    <IoRadioButtonOnOutline />
                                                ) : (
                                                    <IoMdRadioButtonOff />
                                                )}
                                            </div>
                                            <div>{t('All_Products')}</div>
                                        </div>
                                    </Link>
                                    <Link to="/admin/dashboard/Category">
                                        <div className="flex py-1 hover:bg-violetBlackHCh items-center px-10 text-sm">
                                            <div className="px-2">
                                                {pathname ===
                                                    '/admin/dashboard/Category' ||
                                                pathname ===
                                                    '/admin/dashboard/AddNewCategory' ? (
                                                    <IoRadioButtonOnOutline />
                                                ) : (
                                                    <IoMdRadioButtonOff />
                                                )}
                                            </div>
                                            <div>{t('Category')}</div>
                                        </div>
                                    </Link>
                                    <Link to={ROUTES.ADMIN_ALL_COUPONS}>
                                        <div className="flex py-1 hover:bg-violetBlackHCh items-center px-10 text-sm">
                                            <div className="px-2">
                                                {pathname ===
                                                '/admin/dashboard/BrandShop' ? (
                                                    <IoRadioButtonOnOutline />
                                                ) : (
                                                    <IoMdRadioButtonOff />
                                                )}
                                            </div>
                                            <div>{t('Coupons')}</div>
                                        </div>
                                    </Link>
                                    <Link to="/admin/dashboard/ProductRate">
                                        <div className="flex py-1 hover:bg-violetBlackHCh pb-3 items-center px-10 text-sm">
                                            <div className="px-2">
                                                {pathname ===
                                                '/admin/dashboard/ProductRate' ? (
                                                    <IoRadioButtonOnOutline />
                                                ) : (
                                                    <IoMdRadioButtonOff />
                                                )}
                                            </div>
                                            <div>{t('Product_Rate')}</div>
                                        </div>
                                    </Link>
                                </div>
                            )}

                            {/* Sales */}
                            <Link to="/admin/dashboard/Sales">
                                <div
                                    style={styleLinks}
                                    className={`hover:bg-violetBlackH ${
                                        currentLanguageCode === 'sa'
                                            ? 'pr-7 lg:pr-10 pl-5'
                                            : 'pl-7 lg:pl-10 pr-5'
                                    }`}
                                >
                                    <div>{t('Sales')}</div>
                                </div>
                            </Link>

                            {/*Customers */}
                            <div
                                onClick={() => {
                                    setCustomers(!Customers)
                                }}
                                style={styleLinks}
                                className={
                                    currentLanguageCode === 'sa'
                                        ? 'pr-7 lg:pr-10 pl-5 hover:bg-violetBlackH'
                                        : 'pl-7 lg:pl-10 pr-5 hover:bg-violetBlackH'
                                }
                            >
                                <div>{t('Customers')}</div>
                                <div className="flex items-center">
                                    {currentLanguageCode === 'sa' ? (
                                        Customers ? (
                                            <FaAngleDown />
                                        ) : (
                                            <FaAngleLeft />
                                        )
                                    ) : Customers ? (
                                        <FaAngleDown />
                                    ) : (
                                        <FaAngleRight />
                                    )}
                                </div>
                            </div>

                            {Customers && (
                                <div>
                                    <Link to="/admin/dashboard/Customers">
                                        <div className="flex py-1 hover:bg-violetBlackHCh items-center px-10 text-sm">
                                            <div className="px-2">
                                                {pathname ===
                                                '/admin/dashboard/Customers' ? (
                                                    <IoRadioButtonOnOutline />
                                                ) : (
                                                    <IoMdRadioButtonOff />
                                                )}
                                            </div>
                                            <div>{t('Customers')}</div>
                                        </div>
                                    </Link>
                                    <Link to="/admin/dashboard/Orders">
                                        <div className="flex py-1 hover:bg-violetBlackHCh items-center px-10 text-sm">
                                            <div className="px-2">
                                                {pathname ===
                                                '/admin/dashboard/Orders' ? (
                                                    <IoRadioButtonOnOutline />
                                                ) : (
                                                    <IoMdRadioButtonOff />
                                                )}
                                            </div>
                                            <div>{t('OrdersCapital')}</div>
                                        </div>
                                    </Link>
                                    <Link to={ROUTES.ADMIN_ALL_USERS}>
                                        <div className="flex py-1 hover:bg-violetBlackHCh items-center px-10 text-sm">
                                            <div className="px-2">
                                                {pathname ===
                                                ROUTES.ADMIN_ALL_USERS ? (
                                                    <IoRadioButtonOnOutline />
                                                ) : (
                                                    <IoMdRadioButtonOff />
                                                )}
                                            </div>
                                            <div>{t('Users')}</div>
                                        </div>
                                    </Link>
                                </div>
                            )}
                            {/* Sellers */}
                            <div
                                onClick={() => {
                                    setsellerDropdown(!sellerDropdown)
                                }}
                                style={styleLinks}
                                className={
                                    currentLanguageCode === 'sa'
                                        ? 'pr-7 lg:pr-10 pl-5 hover:bg-violetBlackH'
                                        : 'pl-7 lg:pl-10 pr-5 hover:bg-violetBlackH'
                                }
                            >
                                <div>{t('Sellers')}</div>
                                <div className="flex items-center">
                                    {currentLanguageCode === 'sa' ? (
                                        sellerDropdown ? (
                                            <FaAngleDown />
                                        ) : (
                                            <FaAngleLeft />
                                        )
                                    ) : sellerDropdown ? (
                                        <FaAngleDown />
                                    ) : (
                                        <FaAngleRight />
                                    )}
                                </div>
                            </div>
                            {sellerDropdown && (
                                <div>
                                    <Link to="/admin/dashboard/Sellers">
                                        <div className="flex py-1 hover:bg-violetBlackHCh  items-center px-10 text-sm">
                                            <div className="px-2">
                                                {pathname ===
                                                '/admin/dashboard/Sellers' ? (
                                                    <IoRadioButtonOnOutline />
                                                ) : (
                                                    <IoMdRadioButtonOff />
                                                )}
                                            </div>
                                            <div>{t('All Sellers')}</div>
                                        </div>
                                    </Link>
                                    <Link to="/admin/dashboard/Sellers/AddNewSeller">
                                        <div className="flex py-1 hover:bg-violetBlackHCh items-center px-10 text-sm">
                                            <div className="px-2">
                                                {pathname ===
                                                '/admin/dashboard/Sellers/AddNewSeller' ? (
                                                    <IoRadioButtonOnOutline />
                                                ) : (
                                                    <IoMdRadioButtonOff />
                                                )}
                                            </div>
                                            <div>{t('Add_New_Seller')}</div>
                                        </div>
                                    </Link>
                                    <Link to="/admin/dashboard/Sellers/SellerPayout">
                                        <div className="flex py-1 hover:bg-violetBlackHCh items-center px-10 text-sm">
                                            <div className="px-2">
                                                {pathname ===
                                                '/admin/dashboard/Sellers/SellerPayout' ? (
                                                    <IoRadioButtonOnOutline />
                                                ) : (
                                                    <IoMdRadioButtonOff />
                                                )}
                                            </div>
                                            <div>{t('Payout')}</div>
                                        </div>
                                    </Link>
                                </div>
                            )}

                            {/* Uploading Files */}
                            <Link to="/admin/dashboard/UploadingFiles">
                                <div
                                    style={styleLinks}
                                    className={
                                        currentLanguageCode === 'sa'
                                            ? 'pr-7 lg:pr-10 pl-5 hover:bg-violetBlackH'
                                            : 'pl-7 lg:pl-10 pr-5 hover:bg-violetBlackH'
                                    }
                                >
                                    <div>{t('Uploading_files')}</div>
                                </div>
                            </Link>
                            {/* Reports */}
                            <div
                                onClick={() => {
                                    setreportDropdown(!reportDropdown)
                                }}
                                style={styleLinks}
                                className={
                                    currentLanguageCode === 'sa'
                                        ? 'pr-7 lg:pr-10 pl-5 hover:bg-violetBlackH'
                                        : 'pl-7 lg:pl-10 pr-5 hover:bg-violetBlackH'
                                }
                            >
                                <div>{t('Reports')}</div>
                                <div className="flex items-center">
                                    {currentLanguageCode === 'sa' ? (
                                        reportDropdown ? (
                                            <FaAngleDown />
                                        ) : (
                                            <FaAngleLeft />
                                        )
                                    ) : reportDropdown ? (
                                        <FaAngleDown />
                                    ) : (
                                        <FaAngleRight />
                                    )}
                                </div>
                            </div>

                            {reportDropdown && (
                                <div>
                                    <Link to="/admin/dashboard/Report/ProductSale">
                                        <div className="flex py-1 hover:bg-violetBlackHCh items-center px-10 text-sm">
                                            <div className="px-2">
                                                {pathname ===
                                                '/admin/dashboard/Report/ProductSale' ? (
                                                    <IoRadioButtonOnOutline />
                                                ) : (
                                                    <IoMdRadioButtonOff />
                                                )}
                                            </div>
                                            <div>{t('Product_Sale')}</div>
                                        </div>
                                    </Link>
                                    <Link to="/admin/dashboard/Report/SellerProductSale">
                                        <div className="flex py-1 hover:bg-violetBlackHCh items-center px-10 text-sm">
                                            <div className="px-2">
                                                {pathname ===
                                                '/admin/dashboard/Report/SellerProductSale' ? (
                                                    <IoRadioButtonOnOutline />
                                                ) : (
                                                    <IoMdRadioButtonOff />
                                                )}
                                            </div>
                                            <div>
                                                {t('Seller_Product_Sale')}
                                            </div>
                                        </div>
                                    </Link>
                                    <Link to="/admin/dashboard/Report/ProductStock">
                                        <div className="flex py-1 hover:bg-violetBlackHCh items-center px-10 text-sm">
                                            <div className="px-2">
                                                {pathname ===
                                                '/admin/dashboard/Report/ProductStock' ? (
                                                    <IoRadioButtonOnOutline />
                                                ) : (
                                                    <IoMdRadioButtonOff />
                                                )}
                                            </div>
                                            <div>{t('Product_Stock')}</div>
                                        </div>
                                    </Link>
                                    {/* <Link to={ROUTES.ADMIN_PRODUCT_WISHLIST}>
                                        <div className="flex py-1 hover:bg-violetBlackHCh items-center px-10 text-sm">
                                            <div className="px-2">
                                                {pathname ===
                                                ROUTES.ADMIN_PRODUCT_WISHLIST ? (
                                                    <IoRadioButtonOnOutline />
                                                ) : (
                                                    <IoMdRadioButtonOff />
                                                )}
                                            </div>
                                            <div>{t('Product_Wishlist')}</div>
                                        </div>
                                    </Link> */}
                                    <Link to="/admin/dashboard/Report/Shipment">
                                        <div className="flex py-1 hover:bg-violetBlackHCh items-center px-10 text-sm">
                                            <div className="px-2">
                                                {pathname ===
                                                '/admin/dashboard/Report/Shipment' ? (
                                                    <IoRadioButtonOnOutline />
                                                ) : (
                                                    <IoMdRadioButtonOff />
                                                )}
                                            </div>
                                            <div>{t('Shipment')}</div>
                                        </div>
                                    </Link>
                                </div>
                            )}

                            {/* FlashDeal */}
                            {/* <div
                                onClick={() => {
                                    setmarketingDropdown(!marketingDropdown)
                                }}
                                style={styleLinks}
                                className={
                                    currentLanguageCode === 'sa'
                                        ? 'pr-7 lg:pr-10 pl-5 hover:bg-violetBlackH'
                                        : 'pl-7 lg:pl-10 pr-5 hover:bg-violetBlackH'
                                }
                            >
                                <div>{t('Flash_Deal')}</div>
                                <div className="flex items-center">
                                    {currentLanguageCode === 'sa' ? (
                                        marketingDropdown ? (
                                            <FaAngleDown />
                                        ) : (
                                            <FaAngleLeft />
                                        )
                                    ) : marketingDropdown ? (
                                        <FaAngleDown />
                                    ) : (
                                        <FaAngleRight />
                                    )}
                                </div>
                            </div> */}

                            {/* {marketingDropdown && (
                                <div>
                                    <div className="flex py-1 hover:bg-violetBlackHCh items-center px-10 text-sm">
                                        <div className="px-2">
                                            {pathname ===
                                            '/admin/dashboard/FlashDeal' ? (
                                                <IoRadioButtonOnOutline />
                                            ) : (
                                                <IoMdRadioButtonOff />
                                            )}
                                        </div>
                                        <div>
                                            <Link to="/admin/dashboard/FlashDeal">
                                                {t('Flash_Deal')}
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="flex py-1 hover:bg-violetBlackHCh items-center px-10 text-sm">
                                        <div className="px-2">
                                            {pathname ===
                                            '/admin/dashboard/PromoDeal' ? (
                                                <IoRadioButtonOnOutline />
                                            ) : (
                                                <IoMdRadioButtonOff />
                                            )}
                                        </div>
                                        <div>
                                            <Link to="/admin/dashboard/PromoDeal">
                                                {t('Promo_Deal')}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )} */}

                            {/* Addon Manager */}
                            {/* <div
                                style={styleLinks}
                                className={
                                    currentLanguageCode === 'sa'
                                        ? 'pr-7 lg:pr-10 pl-5 hover:bg-violetBlackH mb-4'
                                        : 'pl-7 lg:pl-10 pr-5 hover:bg-violetBlackH mb-4'
                                }
                            >
                                <Link to="/admin/dashboard/AddonManager">
                                    <div>{t('Addon_Manager')}</div>
                                </Link>
                            </div> */}
                            <div
                                className={
                                    currentLanguageCode === 'sa'
                                        ? 'pr-7 lg:pr-10 pl-5 hover:bg-violetBlackH '
                                        : 'pl-7 lg:pl-10 pr-5 hover:bg-violetBlackH '
                                }
                            >
                                <span
                                    onClick={() => dispatch(logoutStart())}
                                    className="cursor-pointer"
                                >
                                    {t('Log_Out')}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default Sidebar
