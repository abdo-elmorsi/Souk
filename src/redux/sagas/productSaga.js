import { call, put } from 'redux-saga/effects'
import { setProductErrMsg } from '../slices/errorSlice'
import { isGettingProduct } from '../slices/loadingSlice'
import toast from 'react-hot-toast'
import {
    addProductStart,
    getProductsStart,
    getProductsSuccess,
    addProductSuccess,
} from '../slices/productsSlice'
import {
    getProducts,
    uploadProductImg,
    addProduct,
} from '../../services/productApi'
import { getAllCategory, getSubCategory } from '../../services/categoryApi'
import {
    getAllCategoriesSuccess,
    getSubCategoriesSuccess,
} from '../slices/sellerSlice'

function* handleError(e) {
    yield put(isGettingProduct(false))
    if (e.message) {
        yield put(setProductErrMsg({ msg: e.message }))
        toast.error(e.message)
    } else {
        yield put(setProductErrMsg({ msg: 'server error' }))
        toast.error('server error')
    }
}

function* productSaga({ type, payload }) {
    switch (type) {
        case getProductsStart.type:
            try {
                yield put(isGettingProduct(true))
                const products = yield call(getProducts)
                const categories = yield call(getAllCategory)
                const sub_categories = yield call(getSubCategory)
                yield put(getProductsSuccess(products.data))
                yield put(getAllCategoriesSuccess(categories.data))
                yield put(getSubCategoriesSuccess(sub_categories))
                yield put(isGettingProduct(false))
            } catch (e) {
                yield handleError(e)
            }
            break
        case addProductStart.type:
            try {
                yield put(isGettingProduct(true))

                const images = yield call(
                    uploadProductImg,
                    payload.product.images,
                    payload.token
                )

                if (images.data.length > 0) {
                    const $product = { ...payload.product, images: images.data }

                    const product = yield call(
                        addProduct,
                        $product,
                        payload.token
                    )
                    yield put(addProductSuccess(product.product))
                    toast.success(product.message)
                }
                yield put(isGettingProduct(false))
            } catch (e) {
                yield handleError(e)
            }
            break

        default:
            return
    }
}

export default productSaga
