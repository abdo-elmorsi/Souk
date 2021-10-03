import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    allProducts: [],
    allCustomers: [],
    allOrders: [],
    AllCategories: [],
    AllSubCategories: [],
    allReviews: [],
    sellerStatistics: {},
}

const sellerSlice = createSlice({
    name: 'seller',
    initialState,
    reducers: {
        getSellerProductsStart: (state, action) => {},
        getSellerProductsSuccess: (state, action) => {
            return { ...state, allProducts: [...action.payload] }
        },
        delProductStart: (state, action) => {},
        delProductSuccess: (state, action) => {
            return {
                ...state,
                allProducts: state.allProducts.filter(
                    (product) => product.slug !== action.payload
                ),
            }
        },
        editProductStart: (state, action) => {},
        editProductSuccess: (state, action) => {
            return {
                ...state,
                allProducts: state.allProducts.map((product) => {
                    if (product.slug === action.payload.slug) {
                        return (product = action.payload)
                    }
                    return product
                }),
            }
        },
        getSellerCustomersStart: (state, action) => {},
        getSellerCustomersSuccess: (state, action) => {
            return { ...state, allCustomers: [...action.payload] }
        },
        getSellerOrdersStart: (state, action) => {},
        getSellerOrdersSuccess: (state, action) => {
            return { ...state, allOrders: [...action.payload] }
        },
        delOrderStart: (state, action) => {},
        delOrderSuccess: (state, action) => {
            return {
                ...state,
                allOrders: state.allOrders.filter(
                    (order) => order._id !== action.payload
                ),
            }
        },
        updateOrderStart: (state, action) => {},
        updateOrderSuccess: (state, action) => {
            return {
                ...state,
                allOrders: state.allOrders.map((order) => {
                    if (order._id === action.payload._id) {
                        return (order = action.payload)
                    }
                    return order
                }),
            }
        },
        getAllCategoriesStart: (state, action) => {},
        getAllCategoriesSuccess: (state, action) => {
            return { ...state, AllCategories: [...action.payload] }
        },
        delCategoryStart: (state, action) => {},
        delCategorySuccess: (state, action) => {
            return {
                ...state,
                AllCategories: state.AllCategories.filter(
                    (cat) => cat.slug !== action.payload
                ),
            }
        },
        createCategoryStart: (state, action) => {},
        createCategorySuccess: (state, action) => {
            return {
                ...state,
                AllCategories: [...state.AllCategories, action.payload],
            }
        },
        updateCategoryStart: (state, action) => {},
        updateCategorySuccess: (state, action) => {
            return {
                ...state,
                AllCategories: state.AllCategories.map((cat) => {
                    if (cat._id === action.payload._id) {
                        return (cat = action.payload)
                    }
                    return cat
                }),
            }
        },
        getSubCategoriesStart: (state, action) => {},
        getSubCategoriesSuccess: (state, action) => {
            return { ...state, AllSubCategories: [...action.payload] }
        },
        delSubCategoryStart: (state, action) => {},
        delSubCategorySuccess: (state, action) => {
            return {
                ...state,
                AllSubCategories: state.AllSubCategories.filter(
                    (cat) => cat.slug !== action.payload
                ),
            }
        },
        createSubCategoryStart: (state, action) => {},
        createSubCategorySuccess: (state, action) => {
            return {
                ...state,
                AllSubCategories: [...state.AllSubCategories, action.payload],
            }
        },
        updateSubCategoryStart: (state, action) => {},
        updateSubCategorySuccess: (state, action) => {
            return {
                ...state,
                AllSubCategories: state.AllSubCategories.map((cat) => {
                    if (cat._id === action.payload._id) {
                        return (cat = action.payload)
                    }
                    return cat
                }),
            }
        },
        getAllReviewsStart: (state, action) => {},
        getAllReviewsSuccess: (state, action) => {
            return { ...state, allReviews: [...action.payload] }
        },

        approveReviewStart: (state, action) => {},
        approveReviewSuccess: (state, action) => {
            return {
                ...state,
                allReviews: state.allReviews.filter(
                    (rev) => rev.id !== action.payload
                ),
            }
        },
        addReviewStart: (state, action) => {},
        getSellerStaisticsStart: (state, action) => {},
        getSellerStaisticsSuccess: (state, action) => {
            return { ...state, sellerStatistics: action.payload }
        },
        clearSeller: () => {
            return initialState
        },
    },
})

export const {
    getSellerProductsStart,
    getSellerProductsSuccess,
    delProductStart,
    delProductSuccess,
    editProductStart,
    editProductSuccess,
    getSellerCustomersStart,
    getSellerCustomersSuccess,
    getSellerOrdersStart,
    getSellerOrdersSuccess,
    delOrderStart,
    delOrderSuccess,
    updateOrderStart,
    updateOrderSuccess,
    getAllCategoriesStart,
    getAllCategoriesSuccess,
    delCategoryStart,
    delCategorySuccess,
    createCategoryStart,
    createCategorySuccess,
    updateCategoryStart,
    updateCategorySuccess,
    getSubCategoriesStart,
    getSubCategoriesSuccess,
    delSubCategoryStart,
    delSubCategorySuccess,
    createSubCategoryStart,
    createSubCategorySuccess,
    updateSubCategoryStart,
    updateSubCategorySuccess,
    getAllReviewsStart,
    getAllReviewsSuccess,
    approveReviewStart,
    approveReviewSuccess,
    addReviewStart,
    getSellerStaisticsStart,
    getSellerStaisticsSuccess,
    clearSeller,
} = sellerSlice.actions

export default sellerSlice.reducer
