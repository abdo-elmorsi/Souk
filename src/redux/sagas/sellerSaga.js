import { call, put } from 'redux-saga/effects'
import toast from 'react-hot-toast'
import {
    createCategoryStart,
    delCategoryStart,
    delCategorySuccess,
    delOrderStart,
    delOrderSuccess,
    delProductStart,
    delProductSuccess,
    editProductStart,
    editProductSuccess,
    getAllCategoriesStart,
    getAllCategoriesSuccess,
    getSellerCustomersStart,
    getSellerCustomersSuccess,
    getSellerOrdersStart,
    getSellerOrdersSuccess,
    getSellerProductsStart,
    getSellerProductsSuccess,
    updateOrderStart,
    updateOrderSuccess,
    updateCategoryStart,
    updateCategorySuccess,
    getSubCategoriesStart,
    getSubCategoriesSuccess,
    delSubCategoryStart,
    delSubCategorySuccess,
    createSubCategoryStart,
    updateSubCategoryStart,
    createCategorySuccess,
    getAllReviewsStart,
    getAllReviewsSuccess,
    approveReviewStart,
    approveReviewSuccess,
    addReviewStart,
    getSellerStaisticsStart,
    getSellerStaisticsSuccess,
    createSubCategorySuccess,
    updateSubCategorySuccess,
} from '../slices/sellerSlice'
import { isSellerLoading } from '../slices/loadingSlice'
import { setSellerErrMsg } from '../slices/errorSlice'
import {
    deleteProduct,
    editProduct,
    getSellerProducts,
    uploadProductImg,
} from '../../services/productApi'
import { history } from '../../routes/AppRouter'
import {
    SELLER_PRODUCTS_CATEGORIES,
    PURCHASE_HISTORY,
} from '../../constants/routes'
import {
    deleteOrder,
    getSellerCustomers,
    getSellerOrders,
    updateOrderStatus,
} from '../../services/orderApi'
import {
    createCategory,
    createSubCategory,
    deleteCategory,
    deleteSubCategory,
    getAllCategory,
    getSubCategory,
    updateCategory,
    updateSubCategory,
} from '../../services/categoryApi'
import {
    addReview,
    approveReview,
    getPendingReviews,
} from '../../services/reviewsApi'
import { extraStatistics } from '../../services/adminApi'

function* handleError(e) {
    yield put(isSellerLoading(false))
    if (e.message) {
        yield put(setSellerErrMsg({ msg: e.message }))
        toast.error(e.message)
    } else {
        yield put(setSellerErrMsg({ msg: 'Server Error' }))
    }
}

function* sellerSaga({ type, payload }) {
    switch (type) {
        case getSellerProductsStart.type:
            try {
                yield put(isSellerLoading(true))
                const products = yield call(
                    getSellerProducts,
                    payload.sellerId,
                    payload.token
                )
                yield put(getSellerProductsSuccess(products.data))
                yield put(isSellerLoading(false))
            } catch (e) {
                yield handleError(e)
            }
            break
        case delProductStart.type:
            try {
                yield put(isSellerLoading(true))
                const res = yield call(
                    deleteProduct,
                    payload.slug,
                    payload.token
                )
                if (res.success) {
                    yield put(delProductSuccess(payload.slug))
                }
                toast.success('Product Deleted')
                yield put(isSellerLoading(false))
            } catch (e) {
                yield handleError(e)
            }
            break
        case editProductStart.type:
            try {
                yield put(isSellerLoading(true))

                if (payload.product.images) {
                    const images = yield call(
                        uploadProductImg,
                        payload.product.images,
                        payload.token
                    )
                    if (images.data.length > 0) {
                        const $product = {
                            ...payload.product,
                            images: images.data,
                        }

                        const res = yield call(
                            editProduct,
                            payload.slug,
                            $product,
                            payload.token
                        )
                        if (res.data) {
                            yield put(editProductSuccess(res.data))
                        }
                        toast.success('Product Edited')
                    }
                } else {
                    const res = yield call(
                        editProduct,
                        payload.slug,
                        payload.product,
                        payload.token
                    )
                    if (res.data) {
                        yield put(editProductSuccess(res.data))
                    }
                    toast.success('Product Edited')
                }

                yield put(isSellerLoading(false))
            } catch (e) {
                yield handleError(e)
            }
            break
        case getSellerCustomersStart.type:
            try {
                yield put(isSellerLoading(true))
                const customers = yield call(
                    getSellerCustomers,
                    payload.user,
                    payload.token
                )
                yield put(getSellerCustomersSuccess(customers))
                yield put(isSellerLoading(false))
            } catch (e) {
                yield handleError(e)
            }
            break
        case getSellerOrdersStart.type:
            try {
                yield put(isSellerLoading(true))
                const orders = yield call(
                    getSellerOrders,
                    payload.user,
                    payload.token
                )
                yield put(getSellerOrdersSuccess(orders))
                yield put(isSellerLoading(false))
            } catch (e) {
                yield handleError(e)
            }
            break
        case delOrderStart.type:
            try {
                yield put(isSellerLoading(true))
                const res = yield call(deleteOrder, payload.id, payload.token)
                yield put(delOrderSuccess(payload.id))
                toast.success(res.message)
                yield put(isSellerLoading(false))
            } catch (e) {
                yield handleError(e)
            }
            break
        case updateOrderStart.type:
            try {
                yield put(isSellerLoading(true))
                const order = yield call(
                    updateOrderStatus,
                    payload.status,
                    payload.orderId,
                    payload.token
                )
                yield put(updateOrderSuccess(order))
                toast.success('Status Updated')
                yield put(isSellerLoading(false))
            } catch (e) {
                yield handleError(e)
            }
            break

        case getAllCategoriesStart.type:
            try {
                yield put(isSellerLoading(true))
                const categories = yield call(getAllCategory)
                yield put(getAllCategoriesSuccess(categories.data))
                yield put(isSellerLoading(false))
            } catch (e) {
                yield handleError(e)
            }
            break
        case delCategoryStart.type:
            try {
                yield put(isSellerLoading(true))
                const res = yield call(
                    deleteCategory,
                    payload.slug,
                    payload.token
                )

                yield put(delCategorySuccess(payload.slug))
                toast.success(res.message)
                yield put(isSellerLoading(false))
            } catch (e) {
                yield handleError(e)
            }
            break
        case createCategoryStart.type:
            try {
                yield put(isSellerLoading(true))
                const res = yield call(
                    createCategory,
                    payload.name,
                    payload.token
                )
                toast.success(res.message)
                yield put(createCategorySuccess(res.data))
                yield put(isSellerLoading(false))
                history.push(SELLER_PRODUCTS_CATEGORIES)
            } catch (e) {
                yield handleError(e)
            }
            break
        case updateCategoryStart.type:
            try {
                yield put(isSellerLoading(true))
                const res = yield call(
                    updateCategory,
                    payload.slug,
                    payload.name,
                    payload.token
                )
                if (res.data) {
                    yield put(updateCategorySuccess(res.data))
                }

                toast.success(res.message)
                yield put(isSellerLoading(false))
            } catch (e) {
                yield handleError(e)
            }
            break

        // SubCategory
        case getSubCategoriesStart.type:
            try {
                yield put(isSellerLoading(true))
                const subCategories = yield call(getSubCategory)
                yield put(getSubCategoriesSuccess(subCategories))

                yield put(isSellerLoading(false))
            } catch (e) {
                handleError(e)
            }
            break
        case delSubCategoryStart.type:
            try {
                yield put(isSellerLoading(true))
                const res = yield call(
                    deleteSubCategory,
                    payload.slug,
                    payload.token
                )

                yield put(delSubCategorySuccess(payload.slug))
                toast.success(res.message)
                yield put(isSellerLoading(false))
            } catch (e) {
                yield handleError(e)
            }
            break
        case createSubCategoryStart.type:
            try {
                yield put(isSellerLoading(true))
                const res = yield call(
                    createSubCategory,
                    payload.name,
                    payload.categoryId,
                    payload.token
                )
                toast.success(res.message)
                yield put(createSubCategorySuccess(res.data))

                yield put(isSellerLoading(false))
            } catch (e) {
                yield handleError(e)
            }
            break
        case updateSubCategoryStart.type:
            try {
                yield put(isSellerLoading(true))
                const res = yield call(
                    updateSubCategory,
                    payload.slug,
                    payload.name,
                    payload.token
                )
                console.log(res)
                yield put(updateSubCategorySuccess(res.data))
                toast.success(res.message)
                yield put(isSellerLoading(false))
            } catch (e) {
                yield handleError(e)
            }
            break

        case getAllReviewsStart.type:
            try {
                yield put(isSellerLoading(true))
                const res = yield call(getPendingReviews, payload.token)
                yield put(getAllReviewsSuccess(res.data))
                yield put(isSellerLoading(false))
            } catch (e) {
                handleError(e)
            }
            break

        case approveReviewStart.type:
            try {
                yield put(isSellerLoading(true))
                const res = yield call(
                    approveReview,
                    payload.data,
                    payload.token
                )
                if (res.success) {
                    yield put(approveReviewSuccess(payload.data.id))
                    toast.success(res.message)
                }
                yield put(isSellerLoading(false))
            } catch (e) {
                handleError(e)
            }
            break
        case addReviewStart.type:
            try {
                yield put(isSellerLoading(true))
                const res = yield call(
                    addReview,
                    payload.data,
                    payload.slug,
                    payload.token
                )
                if (res.success) {
                    toast.success(res.message)
                    history.push(PURCHASE_HISTORY)
                }
                yield put(isSellerLoading(false))
            } catch (e) {
                handleError(e)
            }
            break
        case getSellerStaisticsStart.type:
            try {
                yield put(isSellerLoading(true))
                const stats = yield call(extraStatistics, payload.token)
                // const products = yield call(
                //     getSellerProducts,
                //     payload.sellerId,
                //     payload.token
                // )
                yield put(getSellerStaisticsSuccess(stats))
                // yield put(getSellerProductsSuccess(products.data))
                yield put(isSellerLoading(false))
            } catch (e) {
                yield handleError(e)
            }
            break

        default:
            return
    }
}

export default sellerSaga
