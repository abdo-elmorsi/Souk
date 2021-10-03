import ScrollReveal from '../../../Components/ui/ScrollReveal'
import { slideUp } from '../../../helpers/animation'
import { useDispatch, useSelector } from 'react-redux'
import { upgradeUserStart } from '../../../redux/slices/authSlice'
import { SELLER_DASHBOARD } from '../../../constants/routes'
import { Link } from 'react-router-dom'
import Loader from '../../../Components/ui/Loader'

// function useWindowSize() {
//     const [size, setSize] = useState([window.innerHeight, window.innerWidth])
//     useEffect(() => {
//         const handleResize = () => {
//             setSize([window.innerHeight, window.innerWidth])
//         }
//         window.addEventListener('resize', handleResize)
//         // Clean up!
//         return () => {
//             window.removeEventListener('resize', handleResize)
//         }
//     }, [])
//     return size
// }

const BeSeller = () => {
    const { auth, isLoadingAuth, authError } = useSelector((state) => ({
        auth: state.auth,
        isLoadingAuth: state.loadingState.isLoadingAuth,
        authError: state.errorState.authError,
    }))
    const dispatch = useDispatch()
    const handleSellerUpgrade = async () => {
        dispatch(
            upgradeUserStart({
                token: auth.token,
            })
        )
    }

    return (
        <ScrollReveal
            variants={slideUp}
            className=" flex items-center justify-center h-full mx-auto mt-10  p-6  overflow-hidden"
        >
            {isLoadingAuth && !authError && <Loader />}
            {auth && auth.role === 'user' && (
                <div className="rounded  shadow-md p-10 bg-white">
                    <div className="flex items-center justify-center">
                        <div className="text-center">
                            <button
                                onClick={handleSellerUpgrade}
                                className="text-gray-600 hover:opacity-70 px-6 py-2 font-semibold bg-yellow-200"
                            >
                                Click To BeCome seller
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {auth && auth.role === 'seller' && (
                <div className="rounded  shadow-md p-10 bg-white">
                    <div className="flex items-center justify-center">
                        <div className="text-center">
                            <Link
                                to={SELLER_DASHBOARD}
                                className="text-gray-600 hover:opacity-70 px-6 py-2 font-semibold bg-yellow-200"
                            >
                                Seller Dashbord
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </ScrollReveal>
    )
}

export default BeSeller
