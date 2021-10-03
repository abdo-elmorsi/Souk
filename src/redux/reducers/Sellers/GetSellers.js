import axios from 'axios'
export const GetSellers = () => async (dispatch, getState) => {
    try {
        dispatch({ type: 'GET_SELLERS_REQUEST' })
        const { auth } = getState()
        await axios({
            method: 'GET',
            url: `https://souk-team-server.herokuapp.com/api/users/sellers`,
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${auth.token}`,
            },
        }).then((res) => {
            dispatch({ type: 'GET_SELLERS_SUCCESS', payload: res.data })
        })
    } catch (error) {
        dispatch({ type: 'GET_SELLERS_FAIL', payload: error })
    }
}

const SellersReducer = (state = { Sellers: [] }, action) => {
    switch (action.type) {
        case 'GET_SELLERS_REQUEST':
            return { loading: true }
        case 'GET_SELLERS_SUCCESS':
            return { loading: false, Sellers: action.payload }
        case 'GET_SELLERS_FAIL':
            return { loading: false, error: action.payload }

        default:
            return state
    }
}
export default SellersReducer
