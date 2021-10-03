// import axios from 'axios'
// export const banSellerAction = (id) => async (dispatch, getState) => {
//     try {
//         dispatch({ type: 'BAN_SELLER_REQUEST' })
//         const { auth } = getState()
//         await axios({
//             method: 'PUT',
//             url: `https://souk-team-server.herokuapp.com/api/users/${id}/ban`,
//             headers: {
//                 'Content-Type': 'application/json',
//                 authorization: `Bearer ${auth.token}`,
//             },
//             data: {},
//         }).then((res) => {
//             dispatch({ type: 'BAN_SELLER_SUCCESS', payload: res.data })
//         })
//     } catch (error) {
//         dispatch({ type: 'BAN_SELLER_FAIL', payload: error.message })
//     }
// }
// const BanSeller = (state = {}, { type, payload }) => {
//     switch (type) {
//         case 'BAN_SELLER_REQUEST':
//             return { loading: true }
//         case 'BAN_SELLER_SUCCESS':
//             return { loading: false, success: payload }
//         case 'BAN_SELLER_FAIL':
//             return { loading: false, error: payload }
//         default:
//             return state
//     }
// }
// export default BanSeller
