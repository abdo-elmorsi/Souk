import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    adminAllUsers: [],
    adminStatistics: {},
    allCoupons: [],
}

const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        getAllUserStart: (state, action) => {},
        getAllUserSuccess: (state, action) => {
            return { ...state, adminAllUsers: [...action.payload] }
        },
        delUserStart: (state, action) => {},
        delUserSuccess: (state, action) => {
            return {
                ...state,
                adminAllUsers: state.adminAllUsers.filter(
                    (user) => user.id !== action.payload
                ),
            }
        },
        addSellerStart: (state, action) => {},
        getAdminStaisticsStart: (state, action) => {},
        getAdminStaisticsSuccess: (state, action) => {
            return { ...state, adminStatistics: action.payload }
        },
        getAllCouponsStart: (state, action) => {},
        getAllCouponsSuccess: (state, action) => {
            return { ...state, allCoupons: [...action.payload] }
        },
        editCouponStart: (state, action) => {},
        editCouponSuccess: (state, action) => {
            return {
                ...state,
                allCoupons: state.allCoupons.map((coupon) => {
                    if (coupon.id === action.payload.id) {
                        return (coupon = action.payload)
                    }
                    return coupon
                }),
            }
        },
        delCouponStart: (state, action) => {},
        delCouponSuccess: (state, action) => {
            return {
                ...state,
                allCoupons: state.allCoupons.filter(
                    (coupon) => coupon._id !== action.payload
                ),
            }
        },
        createCouponStart: (state, action) => {},
        createCouponSuccess: (state, action) => {
            return {
                ...state,
                allCoupons: [...state.allCoupons, action.payload],
            }
        },
    },
})

export const {
    getAllUserStart,
    getAllUserSuccess,
    delUserStart,
    delUserSuccess,
    addSellerStart,
    getAdminStaisticsStart,
    getAdminStaisticsSuccess,
    getAllCouponsStart,
    getAllCouponsSuccess,
    delCouponStart,
    delCouponSuccess,
    editCouponStart,
    editCouponSuccess,
    createCouponStart,
    createCouponSuccess,
} = adminSlice.actions

export default adminSlice.reducer
