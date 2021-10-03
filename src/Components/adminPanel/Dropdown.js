import React from 'react'
import { GiSplitCross } from 'react-icons/gi'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
// import * as ROUTES from '../../constants/routes'
import './Dropdown.css'
import { logoutStart } from '../../redux/slices/authSlice'
import { useDispatch } from 'react-redux'

const Dropdown = ({ setShowDropdown, showDropdown }) => {
    const dispatch = useDispatch()
    const { t } = useTranslation()
    const [productDropdown, setProductDropdown] = React.useState(false)
    const [sellerDropdown, setsellerDropdown] = React.useState(false)
    const [reportDropdown, setreportDropdown] = React.useState(false)
    // const [marketingDropdown, setmarketingDropdown] = React.useState(false)
    const [Customers, setCustomers] = React.useState(false)
    // className="flex flex-col fixed bg-backgroundDB z-10 w-screen h-screen "

    return (
        <div className={!showDropdown ? 'dropDown2' : 'dropDown'}>
            <div className="cursor-pointer w-full flex justify-end p-10">
                <div
                    onClick={() => setShowDropdown(!showDropdown)}
                    className="mx-8"
                >
                    <GiSplitCross style={{ width: '30px', height: '30px' }} />
                </div>
            </div>

            <div className="">
                <div
                    onClick={() => setShowDropdown(!showDropdown)}
                    className="flex py-1 font-bold justify-center cursor-pointer"
                >
                    <Link to="/admin/dashboard">{t('Dashboard')}</Link>
                </div>
                {/* Product */}
                <div
                    onClick={() => {
                        setProductDropdown(!productDropdown)
                    }}
                    className="flex py-1 font-bold justify-center cursor-pointer"
                >
                    {t('Product')}
                </div>
                {productDropdown && (
                    <div className="flex flex-col items-center">
                        <div className="flex items-center px-3 text-sm">
                            <div className="">
                                <Link to="/admin/dashboard/AddNewProduct">
                                    {t('Add_New_Product')}
                                </Link>
                            </div>
                        </div>
                        <div className="flex pt-1 items-center px-3 text-sm">
                            <div className="">
                                <Link to="/admin/dashboard/AllProducts">
                                    {t('All_Products')}
                                </Link>
                            </div>
                        </div>
                        <div className="flex pt-1 items-center px-3 text-sm">
                            <div className="">
                                <Link to="/admin/dashboard/Category">
                                    {t('Category')}
                                </Link>
                            </div>
                        </div>
                        <div className="flex pt-1 items-center px-3 text-sm">
                            <div className="">
                                <Link to="/admin/dashboard/BrandShop">
                                    {t('Brand/Shop')}
                                </Link>
                            </div>
                        </div>
                        <div className="flex pt-1 pb-3 items-center px-3 text-sm">
                            <div className="">
                                <Link to="/admin/dashboard/ProductRate">
                                    {t('Product_Rate')}
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
                {/* Sales */}
                <div
                    onClick={() => setShowDropdown(!showDropdown)}
                    className="flex py-1 font-bold justify-center cursor-pointer"
                >
                    <Link to="/admin/dashboard/Sales">{t('Sales')}</Link>
                </div>
                {/* Customers */}
                <div
                    onClick={() => {
                        setCustomers(!Customers)
                    }}
                    className="flex py-1 font-bold justify-center cursor-pointer"
                >
                    {t('Customers')}
                </div>
                {Customers && (
                    <div className="flex flex-col items-center">
                        <div className="flex items-center px-3 text-sm">
                            <div className="">
                                <Link to="/admin/dashboard/Customers">
                                    {t('Customers')}
                                </Link>
                            </div>
                        </div>
                        <div className="flex items-center px-3 text-sm">
                            <div className="">
                                <Link to="/admin/dashboard/Orders">
                                    {t('OrdersCapital')}
                                </Link>
                            </div>
                        </div>
                        <div className="flex items-center px-3 text-sm">
                            <div className="mb-3">
                                <Link to="/admin/dashboard/all-users">
                                    {t('Users')}
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
                {/* Sellers */}
                <div
                    onClick={() => {
                        setsellerDropdown(!sellerDropdown)
                    }}
                    className="flex py-1 font-bold justify-center cursor-pointer"
                >
                    {t('sellers')}
                </div>
                {sellerDropdown && (
                    <div className="flex flex-col items-center">
                        <div className="flex items-center px-3 text-sm">
                            <div className="">
                                <Link to="/admin/dashboard/Sellers">
                                    {t('All Sellers')}
                                </Link>
                            </div>
                        </div>
                        <div className="flex pt-1 items-center px-3 text-sm">
                            <div className="">
                                <Link to="/admin/dashboard/Sellers/AddNewSeller">
                                    {t('Add_New_Seller')}
                                </Link>
                            </div>
                        </div>
                        <div className="flex pt-1 items-center px-3 text-sm">
                            <div className="mb-3">
                                <Link to="/admin/dashboard/Sellers/SellerPayout">
                                    {t('Payout')}
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
                {/* Upload File */}
                <div
                    onClick={() => setShowDropdown(!showDropdown)}
                    className="flex py-1 font-bold justify-center cursor-pointer"
                >
                    {/* {t('Uploading_files')} */}
                    <Link to="/admin/dashboard/UploadingFiles">
                        <div className="">{t('Uploading_files')}</div>
                    </Link>
                </div>
                {/* Reports */}
                <div
                    onClick={() => {
                        setreportDropdown(!reportDropdown)
                    }}
                    className="flex py-1 font-bold justify-center cursor-pointer"
                >
                    {t('Reports')}
                </div>
                {reportDropdown && (
                    <div className="flex flex-col items-center">
                        <div className="flex items-center px-3 text-sm">
                            <div className="">
                                <Link to="/admin/dashboard/Report/ProductSale">
                                    {t('Product_Sale')}
                                </Link>
                            </div>
                        </div>
                        <div className="flex pt-1 items-center px-3 text-sm">
                            <div className="">
                                <Link to="/admin/dashboard/Report/SellerProductSale">
                                    {t('Seller_Product_Sale')}
                                </Link>
                            </div>
                        </div>
                        <div className="flex pt-1 items-center px-3 text-sm">
                            <div className="">
                                <Link to="/admin/dashboard/Report/ProductStock">
                                    {t('Product_Stock')}
                                </Link>
                            </div>
                        </div>
                        {/* <div className="flex pt-1 items-center px-3 text-sm">
                            <div className="">
                                <Link to={ROUTES.ADMIN_PRODUCT_WISHLIST}>
                                    {t('Product_Wishlist')}
                                </Link>
                            </div>
                        </div> */}
                        <div className="flex pt-1 items-center px-3 text-sm">
                            <div className="mb-3">
                                <Link to="/admin/dashboard/Report/Shipment">
                                    {t('Shipment')}
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
                {/* Flash Deal */}
                {/* <div
                    onClick={() => {
                        setmarketingDropdown(!marketingDropdown)
                    }}
                    className="flex py-1 font-bold justify-center cursor-pointer"
                >
                    {t('FlashDeal')}
                </div> */}
                {/* {marketingDropdown && (
                    <div className="flex flex-col items-center">
                        <div className="flex items-center px-3 text-sm">
                            <div className="">
                                <Link to="/admin/dashboard/FlashDeal">
                                    {t('Flash_Deal')}
                                </Link>
                            </div>
                        </div>
                        <div className="flex pt-1 items-center px-3 text-sm">
                            <div className="mb-3">
                                <Link to="/admin/dashboard/PromoDeal">
                                    {t('Promo_Deal')}
                                </Link>
                            </div>
                        </div>
                    </div>
                )} */}
                {/* Addon Manager */}
                <div
                    onClick={() => setShowDropdown(!showDropdown)}
                    className="flex py-1 font-bold justify-center cursor-pointer"
                >
                    <Link to="/admin/dashboard/AddonManager">
                        <div className="">{t('Addon_Manager')}</div>
                    </Link>
                </div>
                <div className="flex py-1 font-bold justify-center cursor-pointer">
                    <span
                        onClick={() => dispatch(logoutStart())}
                        className="cursor-pointer"
                    >
                        {t('Log_Out')}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Dropdown
