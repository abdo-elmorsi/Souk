import { createBrowserHistory } from 'history'
import React from 'react'
import { Router, Switch } from 'react-router'
import * as ROUTES from '../constants/routes'
import Dashboard from '../pages/admin/Dashboard'
import AddNewProduct from '../pages/admin/Product/AddNewProduct'
import Seller from '../pages/admin/Sellers'
import AddNewSeller from '../pages/admin/Sellers/AddNewSeller'
import SellerPayout from '../pages/admin/Sellers/SellerPayout'
import FlashDeal from '../pages/admin/Marketing/FlashDeal'
import PromoDeal from '../pages/admin/Marketing/PromoDeal'
import CreateFlashDeal from '../pages/admin/Marketing/CreateFlashDeal'
import ReportProductSale from '../pages/admin/Report/ProductSale'
import ReportProductStock from '../pages/admin/Report/ProductStock'
import ReportSellerProductSale from '../pages/admin/Report/SellerProductSale'
import ReportShipment from '../pages/admin/Report/Shipment'
import AllProducts from '../pages/admin/Product/AllProducts'
import ProductRate from '../pages/admin/Product/ProductRate'
import ProductRateDetails from '../pages/admin/Product/ProductRateDetails'
import Category from '../pages/admin/Product/Category'
import AddNewCategory from '../pages/admin/Product/AddNewCategory'
import ShopAdmin from '../pages/admin/Product/BrandShop'
import Login from '../pages/auth/login'
import SubCategoryFilter from '../pages/filter/SubCategoryFilter'
import Cart from '../pages/cart'
import Checkout from '../pages/checkout'
import Home from '../pages/home'
import Market from '../pages/market'
import Shop from '../pages/shop'
import Wishlist from '../pages/wishlist'
import About from '../pages/About'
import Contact from '../pages/contact'
import AdminRoute from './AdminRoute'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import ProductDetails from '../pages/product-details'
import SignUp from '../pages/auth/signup'
import CashPayment from '../pages/checkout/step_2/CashPayment'
import PaypalPayment from '../pages/checkout/step_2/PaypalPayment'
import UploadingFiles from '../pages/admin/UploadingFiles'
import CustomerDashboard from '../pages/profile/dashboard'
import ManageProfile from '../pages/profile/manage-profile'
import UpdateEmail from '../pages/profile/manage-profile/UpdateEmail'
import UpdatePassword from '../pages/profile/manage-profile/UpdatePassword'
import UpdateInfo from '../pages/profile/manage-profile/UpdateInfo'
import ProfileVerifyEmail from '../pages/profile/manage-profile/ProfileVerifyEmail'
import UpdateAvatar from '../pages/profile/manage-profile/UpdateAvatar'
import ProfileVerifyPhone from '../pages/profile/manage-profile/ProfileVerifyPhone'
import UpdatePhone from '../pages/profile/manage-profile/UpdatePhone'
import PaymentMethod from '../pages/profile/payment-method'
import AddNewPaymentMethod from '../pages/profile/payment-method/AddNewMethod'
import SellerRoute from './SellerRoute'
import SellerDashboard from '../pages/seller/dashboard'
import ShopVerification from '../pages/seller/shop-verification'
import PurchaseHistory from '../pages/seller/purchace-history'
import SellerWishlist from '../pages/seller/wishlist'
import AddsManager from '../pages/admin/AddsManager'
import SellerChat from '../pages/seller/conversation'
import Customer from '../pages/admin/Customers'
import Orders from '../pages/admin/Customers/Orders'
import AdminProductWishlist from '../pages/admin/Report/ProductWishlist'
import Sales from '../pages/admin/Sales'
import OrdersHistory from '../pages/profile/orders-history'
import BeSeller from '../pages/profile/be-seller'
import CustomersOrders from '../pages/seller/customers/CustomerOrders'
import AllCustomers from '../pages/seller/customers/AllCustomers'
import ProductSale from '../pages/seller/reports/ProductSale'
import SellerSale from '../pages/seller/reports/SellerSale'
import StockReport from '../pages/seller/reports/StockReport'
import ShipmentReport from '../pages/seller/reports/ShipmentReport'
import SellerFlashDeal from '../pages/seller/flash-deal/SellerFlashDeal'
import SellerCreateFlashDeal from '../pages/seller/flash-deal/CreateFlashDeal'
import SellerPromoDeal from '../pages/seller/flash-deal/SellerPromoDeal'
import SellerAddProducts from '../pages/seller/products/SellerAddProducts'
import SellerAllProducts from '../pages/seller/products/SellerAllProducts'
import ReviewsPage from '../pages/reviews'
import AddReview from '../pages/profile/add-review'
import EditProduct from '../pages/seller/products/EditProduct'
import SellerAllCategories from '../pages/seller/products/SellerAllCategories'
import SellerBrands from '../pages/seller/products/SellerBrands'
//  import AddCoupon from '../pages/seller/products/SellerAddCoupon'
import SellerAddCategory from '../pages/seller/products/SellerAddCategory'
import SellerSubCategory from '../pages/seller/products/SellerSubCategory'
import SellerAddSubCategory from '../pages/seller/products/SellerAddSubCategory'
import SellerAllReviews from '../pages/seller/products/SellerAllReviews'
import VerifyEmail from '../Components/auth/VerifyEmail'
import ForgotPassword from '../pages/auth/forgot-password'
import PageNotFound from '../pages/PageNotFound'
import AdminEditProduct from '../pages/admin/Product/EditProduct'
import AllUsers from '../pages/admin/Customers/Users'
import AllCoupons from '../pages/admin/Product/Coupons/AllCoupons'
import AddNewCoupon from '../pages/admin/Product/Coupons/AddNewCoupon'

export const history = createBrowserHistory()

const AppRouter = () => {
    return (
        <Router history={history}>
            <Switch>
                <PublicRoute component={Home} exact path={ROUTES.HOME} />
                <PublicRoute component={Shop} path={ROUTES.SHOP} />
                <PublicRoute
                    component={SubCategoryFilter}
                    path={ROUTES.SUB_CATEGORY_SHOP}
                />
                <PublicRoute component={Market} path={ROUTES.MARKET} />
                <PublicRoute component={Contact} path={ROUTES.CONTACT} />
                <PublicRoute component={Wishlist} path={ROUTES.WISHLIST} />

                <PublicRoute component={Cart} path={ROUTES.CART} />

                <PublicRoute
                    component={ProductDetails}
                    path={ROUTES.PRODUCT_DETAILS}
                />
                <PublicRoute
                    exact
                    component={ReviewsPage}
                    path={ROUTES.REVIEWS}
                />
                <PublicRoute component={About} path={ROUTES.ABOUT} />

                <PublicRoute component={Login} path={ROUTES.LOGIN} />

                <PublicRoute component={SignUp} path={ROUTES.SIGNUP} />
                <PublicRoute
                    component={VerifyEmail}
                    path={ROUTES.VERIFY_EMAIL}
                />
                <PublicRoute
                    component={ForgotPassword}
                    path={ROUTES.FORGOT_PASSWORD}
                />
                <PrivateRoute
                    component={CustomerDashboard}
                    path={ROUTES.CUSTOMER_DASHBOARD}
                />
                <PrivateRoute
                    component={ManageProfile}
                    path={ROUTES.MANAGE_PROFILE}
                />
                <PrivateRoute
                    component={UpdateInfo}
                    path={ROUTES.PROFILE_UPDATE_INFO}
                />
                <PrivateRoute
                    component={UpdateEmail}
                    path={ROUTES.PROFILE_UPDATE_EMAIL}
                />
                <PrivateRoute
                    component={ProfileVerifyEmail}
                    path={ROUTES.PROFILE_VERIFY_EMAIL}
                />
                <PrivateRoute
                    component={UpdatePassword}
                    path={ROUTES.PROFILE_UPDATE_PASSWORD}
                />
                <PrivateRoute
                    component={UpdatePhone}
                    path={ROUTES.PROFILE_UPDATE_PHONE}
                />
                <PrivateRoute
                    component={UpdateAvatar}
                    path={ROUTES.PROFILE_UPDATE_AVATAR}
                />
                <PrivateRoute
                    component={ProfileVerifyPhone}
                    path={ROUTES.PROFILE_VERIFY_PHONE}
                />
                <PrivateRoute
                    component={PaymentMethod}
                    path={ROUTES.PAYMENT_METHOD}
                />
                <PrivateRoute
                    component={AddNewPaymentMethod}
                    path={ROUTES.ADD_PAYMENT_METHOD}
                />
                <PrivateRoute
                    component={OrdersHistory}
                    path={ROUTES.PURCHASE_HISTORY}
                />
                <PrivateRoute
                    component={BeSeller}
                    path={ROUTES.BECOME_SELLER}
                />

                <PrivateRoute
                    exact
                    component={AddReview}
                    path={ROUTES.ADD_REVIEW}
                />

                <PrivateRoute
                    exact
                    component={Checkout}
                    path={ROUTES.CHECKOUT}
                />

                <PrivateRoute
                    component={CashPayment}
                    path={ROUTES.CHECKOUT_CASH}
                />
                <PrivateRoute
                    component={PaypalPayment}
                    path={ROUTES.CHECKOUT_PAYPAL}
                />

                <AdminRoute
                    exact
                    component={Dashboard}
                    path={ROUTES.ADMIN_DASHBOARD}
                />

                <AdminRoute component={AllProducts} path={ROUTES.ALL_PRODUCT} />
                <AdminRoute
                    component={AddNewProduct}
                    path={ROUTES.ADD_NEW_PRODUCT}
                />

                <AdminRoute
                    component={ProductRate}
                    path={ROUTES.PRODUCT_RATE}
                />
                <AdminRoute
                    component={ProductRateDetails}
                    path={ROUTES.PRODUCT_RATE_DETAILS}
                />
                <AdminRoute exact component={Seller} path={ROUTES.SELLERS} />
                <AdminRoute
                    component={AddNewSeller}
                    path={ROUTES.ADD_NEW_SELLER}
                />
                <AdminRoute
                    component={SellerPayout}
                    path={ROUTES.SELLER_PAYOUT}
                />
                <AdminRoute
                    component={ReportProductSale}
                    path={ROUTES.REPORT_PRODUCT_SALE}
                />
                <AdminRoute
                    component={ReportProductStock}
                    path={ROUTES.REPORT_PRODUCT_STOCK}
                />
                <AdminRoute
                    component={ReportSellerProductSale}
                    path={ROUTES.REPORT_SELLER_PRODUCT_SALE}
                />
                <AdminRoute
                    component={ReportShipment}
                    path={ROUTES.REPORT_SHIPMENT}
                />
                <AdminRoute component={FlashDeal} path={ROUTES.FLASH_DEAL} />
                <AdminRoute component={PromoDeal} path={ROUTES.PROMO_DEAL} />
                <AdminRoute
                    component={CreateFlashDeal}
                    path={ROUTES.CREATE_FLASH_DEAL}
                />

                <AdminRoute component={Category} path={ROUTES.CATEGORY} />
                <AdminRoute
                    component={AddNewCategory}
                    path={ROUTES.ADD_NEW_CATEGORY}
                />
                <AdminRoute component={ShopAdmin} path={ROUTES.SHOP_ADMIN} />
                <AdminRoute
                    component={UploadingFiles}
                    path={ROUTES.Uploading_Files}
                />
                <AdminRoute
                    component={AddsManager}
                    path={ROUTES.ADDS_MANAGER}
                />

                <AdminRoute component={Customer} path={ROUTES.CUSTOMER} />
                <AdminRoute
                    component={AdminProductWishlist}
                    path={ROUTES.ADMIN_PRODUCT_WISHLIST}
                />
                <AdminRoute component={Orders} path={ROUTES.ORDERS} />
                <AdminRoute
                    component={AdminEditProduct}
                    path={ROUTES.EDIT_ADMIN_PRODUCT}
                />
                <AdminRoute
                    exact
                    component={AllUsers}
                    path={ROUTES.ADMIN_ALL_USERS}
                />
                <AdminRoute
                    component={AllCoupons}
                    path={ROUTES.ADMIN_ALL_COUPONS}
                />
                <AdminRoute
                    component={AddNewCoupon}
                    path={ROUTES.ADMIN_PRODUCTS_ADD_COUPON}
                />
                <SellerRoute
                    component={SellerDashboard}
                    path={ROUTES.SELLER_DASHBOARD}
                />

                <SellerRoute
                    component={ShopVerification}
                    path={ROUTES.SHOP_VERIFICATION}
                />
                <SellerRoute
                    component={PurchaseHistory}
                    path={ROUTES.SELLER_PURCHASE_HISTORY}
                />
                <SellerRoute
                    component={ManageProfile}
                    path={ROUTES.SELLER_PROFILE}
                />
                <SellerRoute
                    component={CustomersOrders}
                    path={ROUTES.SELLER_ORDERS}
                />
                <SellerRoute
                    component={AllCustomers}
                    path={ROUTES.SELLER_CUSTOMERS}
                />

                <SellerRoute
                    component={ProductSale}
                    path={ROUTES.SELLER_REPORT_PRODUCT}
                />

                <SellerRoute
                    component={SellerSale}
                    path={ROUTES.SELLER_REPORT_SALE}
                />
                <SellerRoute
                    component={StockReport}
                    path={ROUTES.SELLER_REPORT_STOCK}
                />
                <SellerRoute
                    component={ShipmentReport}
                    path={ROUTES.SELLER_REPORT_SHIPMENT}
                />

                <SellerRoute
                    component={SellerWishlist}
                    path={ROUTES.SELLER_REPORT_WISHLIST}
                />
                <SellerRoute
                    component={SellerFlashDeal}
                    path={ROUTES.SELLER_FLASH_DEAL}
                />
                <SellerRoute
                    component={SellerCreateFlashDeal}
                    path={ROUTES.SELLER_CREATE_FLASH_DEAL}
                />
                <SellerRoute
                    component={SellerPromoDeal}
                    path={ROUTES.SELLER_PROMO_DEAL}
                />
                <SellerRoute
                    component={SellerAddProducts}
                    path={ROUTES.SELLER_PRODUCTS_ADD}
                />
                <SellerRoute
                    component={SellerAllProducts}
                    path={ROUTES.SELLER_PRODUCTS_ALL}
                />

                <SellerRoute
                    component={SellerAllCategories}
                    path={ROUTES.SELLER_PRODUCTS_CATEGORIES}
                />

                <SellerRoute
                    component={SellerBrands}
                    path={ROUTES.SELLER_PRODUCTS_BRANDS}
                />

                <SellerRoute
                    component={SellerAddCategory}
                    path={ROUTES.SELLER_PRODUCTS_ADD_CATEGORY}
                />

                <SellerRoute
                    component={SellerSubCategory}
                    path={ROUTES.SELLER_PRODUCTS_SUB_CATEGORY}
                />
                <SellerRoute
                    component={SellerAddSubCategory}
                    path={ROUTES.SELLER_PRODUCTS_ADD_SUB_CATEGORY}
                />

                <SellerRoute component={SellerChat} path={ROUTES.SELLER_CHAT} />

                <AdminRoute component={Sales} path={ROUTES.SALES} />

                <SellerRoute
                    component={EditProduct}
                    path={ROUTES.SELLER_PRODUCTS_EDIT}
                />

                <SellerRoute
                    component={SellerAllReviews}
                    path={ROUTES.SELLER_PRODUCTS_REVIEWS}
                />
                <PublicRoute component={PageNotFound} path={ROUTES.NOT_FOUND} />
            </Switch>
        </Router>
    )
}

export default AppRouter
