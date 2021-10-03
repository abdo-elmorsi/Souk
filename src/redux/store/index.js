import { configureStore, combineReducers } from '@reduxjs/toolkit'
import cartReducer from '../slices/cartSlice'
import wishlistReducer from '../slices/wishlistSlice'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas'
import authReducer from '../slices/authSlice'
import loadingReducer from '../slices/loadingSlice'
import profileReducer, { updateProfileAvatar } from '../slices/profileSlice'
import logger from 'redux-logger'
import errorReducer from '../slices/errorSlice'
import productsReducer from '../reducers/products/allProductsReducer'
import categoriesReducer from '../reducers/products/allCategoriesReducer'
import brandsReducer from '../reducers/products/allBrandReducer'
import productsRatesReducer from '../reducers/products/productRateReducer'
import promoDealReducer from '../reducers/deals/promoDealReducer'
import addNewProductReducer from '../reducers/products/addNewProductReducer'
import checkoutReducer from '../slices/checkoutSlice'
import SellersReducer from '../reducers/Sellers/GetSellers'
// import BanSeller from "../actions/banSeller/index"☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import mainProductsReducer, { addProductStart } from '../slices/productsSlice'
import userOrdersReducer from '../slices/userOrdersSlice'
import sellerReducer from '../slices/sellerSlice'
import adminReducer from '../slices/adminSlice'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth', 'profile'],
}

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    cart: cartReducer,
    wishlist: wishlistReducer,
    auth: authReducer,
    loadingState: loadingReducer,
    errorState: errorReducer,
    profile: profileReducer,
    checkout: checkoutReducer,
    mainProducts: mainProductsReducer,
    userOrders: userOrdersReducer,
    seller: sellerReducer,
    products: productsReducer,
    categories: categoriesReducer,
    brands: brandsReducer,
    productsRates: productsRatesReducer,
    promoDeal: promoDealReducer,
    addNewProduct: addNewProductReducer,
    Sellers: SellersReducer,
    admin: adminReducer,
    // BanSeller: BanSeller,☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                    updateProfileAvatar.type,
                    addProductStart.type,
                ],
            },
        }).concat(sagaMiddleware, logger),
})

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)
