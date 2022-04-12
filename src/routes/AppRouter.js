import { createBrowserHistory } from 'history'
import React from 'react'
import { Router, Switch } from 'react-router'
import * as ROUTES from '../constants/routes'

import  AdminRoute from './AdminRoute'
import  PrivateRoute from './PrivateRoute'
import  PublicRoute from './PublicRoute'
import  SellerRoute from './SellerRoute'

const  Dashboard =  React.lazy(() => import('../pages/admin/Dashboard'))
const  AddNewProduct =  React.lazy(() => import('../pages/admin/Product/AddNewProduct'))
const  Seller =  React.lazy(() => import('../pages/admin/Sellers'))
const  AddNewSeller =  React.lazy(() => import('../pages/admin/Sellers/AddNewSeller'))
const  SellerPayout =  React.lazy(() => import('../pages/admin/Sellers/SellerPayout'))
const  FlashDeal =  React.lazy(() => import('../pages/admin/Marketing/FlashDeal'))
const  PromoDeal =  React.lazy(() => import('../pages/admin/Marketing/PromoDeal'))
const  CreateFlashDeal =  React.lazy(() => import('../pages/admin/Marketing/CreateFlashDeal'))
const  ReportProductSale =  React.lazy(() => import('../pages/admin/Report/ProductSale'))
const  ReportProductStock =  React.lazy(() => import('../pages/admin/Report/ProductStock'))
const  ReportSellerProductSale =  React.lazy(() => import('../pages/admin/Report/SellerProductSale'))
const  ReportShipment =  React.lazy(() => import('../pages/admin/Report/Shipment'))
const  AllProducts =  React.lazy(() => import('../pages/admin/Product/AllProducts'))
const  ProductRate =  React.lazy(() => import('../pages/admin/Product/ProductRate'))
const  ProductRateDetails =  React.lazy(() => import('../pages/admin/Product/ProductRateDetails'))
const  Category =  React.lazy(() => import('../pages/admin/Product/Category'))
const  AddNewCategory =  React.lazy(() => import('../pages/admin/Product/AddNewCategory'))
const  ShopAdmin =  React.lazy(() => import('../pages/admin/Product/BrandShop'))
const  Login =  React.lazy(() => import('../pages/auth/login'))
const  SubCategoryFilter =  React.lazy(() => import('../pages/filter/SubCategoryFilter'))
const  Cart =  React.lazy(() => import('../pages/cart'))
const  Checkout =  React.lazy(() => import('../pages/checkout'))
const  Home =  React.lazy(() => import('../pages/home'))
const  Market =  React.lazy(() => import('../pages/market'))
const  Shop =  React.lazy(() => import('../pages/shop'))
const  Wishlist =  React.lazy(() => import('../pages/wishlist'))
const  About =  React.lazy(() => import('../pages/About'))
const  Contact =  React.lazy(() => import('../pages/contact'))

const  ProductDetails =  React.lazy(() => import('../pages/product-details'))
const  SignUp =  React.lazy(() => import('../pages/auth/signup'))
const  CashPayment =  React.lazy(() => import('../pages/checkout/step_2/CashPayment'))
const  PaypalPayment =  React.lazy(() => import('../pages/checkout/step_2/PaypalPayment'))
const  UploadingFiles =  React.lazy(() => import('../pages/admin/UploadingFiles'))
const  CustomerDashboard =  React.lazy(() => import('../pages/profile/dashboard'))
const  ManageProfile =  React.lazy(() => import('../pages/profile/manage-profile'))
const  UpdateEmail =  React.lazy(() => import('../pages/profile/manage-profile/UpdateEmail'))
const  UpdatePassword =  React.lazy(() => import('../pages/profile/manage-profile/UpdatePassword'))
const  UpdateInfo =  React.lazy(() => import('../pages/profile/manage-profile/UpdateInfo'))
const  ProfileVerifyEmail =  React.lazy(() => import('../pages/profile/manage-profile/ProfileVerifyEmail'))
const  UpdateAvatar =  React.lazy(() => import('../pages/profile/manage-profile/UpdateAvatar'))
const  ProfileVerifyPhone =  React.lazy(() => import('../pages/profile/manage-profile/ProfileVerifyPhone'))
const  UpdatePhone =  React.lazy(() => import('../pages/profile/manage-profile/UpdatePhone'))
const  PaymentMethod =  React.lazy(() => import('../pages/profile/payment-method'))
const  AddNewPaymentMethod =  React.lazy(() => import('../pages/profile/payment-method/AddNewMethod'))
const  SellerDashboard =  React.lazy(() => import('../pages/seller/dashboard'))
const  ShopVerification =  React.lazy(() => import('../pages/seller/shop-verification'))
const  PurchaseHistory =  React.lazy(() => import('../pages/seller/purchace-history'))
const  SellerWishlist =  React.lazy(() => import('../pages/seller/wishlist'))
const  AddsManager =  React.lazy(() => import('../pages/admin/AddsManager'))
const  SellerChat =  React.lazy(() => import('../pages/seller/conversation'))
const  Customer =  React.lazy(() => import('../pages/admin/Customers'))
const  Orders =  React.lazy(() => import('../pages/admin/Customers/Orders'))
const  AdminProductWishlist =  React.lazy(() => import('../pages/admin/Report/ProductWishlist'))
const  Sales =  React.lazy(() => import('../pages/admin/Sales'))
const  OrdersHistory =  React.lazy(() => import('../pages/profile/orders-history'))
const  BeSeller =  React.lazy(() => import('../pages/profile/be-seller'))
const  CustomersOrders =  React.lazy(() => import('../pages/seller/customers/CustomerOrders'))
const  AllCustomers =  React.lazy(() => import('../pages/seller/customers/AllCustomers'))
const  ProductSale =  React.lazy(() => import('../pages/seller/reports/ProductSale'))
const  SellerSale =  React.lazy(() => import('../pages/seller/reports/SellerSale'))
const  StockReport =  React.lazy(() => import('../pages/seller/reports/StockReport'))
const  ShipmentReport =  React.lazy(() => import('../pages/seller/reports/ShipmentReport'))
const  SellerFlashDeal =  React.lazy(() => import('../pages/seller/flash-deal/SellerFlashDeal'))
const  SellerCreateFlashDeal =  React.lazy(() => import('../pages/seller/flash-deal/CreateFlashDeal'))
const  SellerPromoDeal =  React.lazy(() => import('../pages/seller/flash-deal/SellerPromoDeal'))
const  SellerAddProducts =  React.lazy(() => import('../pages/seller/products/SellerAddProducts'))
const  SellerAllProducts =  React.lazy(() => import('../pages/seller/products/SellerAllProducts'))
const  ReviewsPage =  React.lazy(() => import('../pages/reviews'))
const  AddReview =  React.lazy(() => import('../pages/profile/add-review'))
const  EditProduct =  React.lazy(() => import('../pages/seller/products/EditProduct'))
const  SellerAllCategories =  React.lazy(() => import('../pages/seller/products/SellerAllCategories'))
const  SellerBrands =  React.lazy(() => import('../pages/seller/products/SellerBrands'))
//  import AddCoupon from '../pages/seller/products/SellerAddCoupon'
const  SellerAddCategory =  React.lazy(() => import('../pages/seller/products/SellerAddCategory'))
const  SellerSubCategory =  React.lazy(() => import('../pages/seller/products/SellerSubCategory'))
const  SellerAddSubCategory =  React.lazy(() => import('../pages/seller/products/SellerAddSubCategory'))
const  SellerAllReviews =  React.lazy(() => import('../pages/seller/products/SellerAllReviews'))
const  VerifyEmail =  React.lazy(() => import('../Components/auth/VerifyEmail'))
const  ForgotPassword =  React.lazy(() => import('../pages/auth/forgot-password'))
const  PageNotFound =  React.lazy(() => import('../pages/PageNotFound'))
const  AdminEditProduct =  React.lazy(() => import('../pages/admin/Product/EditProduct'))
const  AllUsers =  React.lazy(() => import('../pages/admin/Customers/Users'))
const  AllCoupons =  React.lazy(() => import('../pages/admin/Product/Coupons/AllCoupons'))
const  AddNewCoupon =  React.lazy(() => import('../pages/admin/Product/Coupons/AddNewCoupon'))

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
