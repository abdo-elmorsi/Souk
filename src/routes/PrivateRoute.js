import * as ROUTES from '../constants/routes'
import { Redirect, Route } from 'react-router-dom'
import Navbar from '../Components/ui/Navbar'
import Footer from '../Components/ui/Footer'
import Navigation from '../Components/profile/Navigation'
import { connect } from 'react-redux'

const PrivateRoute = ({
    isAuth,
    role,
    component: Component,
    path,
    ...rest
}) => {
    return (
        <Route
            {...rest}
            component={(props) => {
                if (isAuth && (role === 'user' || role === 'seller')) {
                    if (
                        path === ROUTES.CUSTOMER_DASHBOARD ||
                        path === ROUTES.MANAGE_PROFILE ||
                        path === ROUTES.PROFILE_UPDATE_EMAIL ||
                        path === ROUTES.PROFILE_UPDATE_INFO ||
                        path === ROUTES.PROFILE_VERIFY_EMAIL ||
                        path === ROUTES.PROFILE_UPDATE_PASSWORD ||
                        path === ROUTES.PROFILE_UPDATE_AVATAR ||
                        path === ROUTES.PROFILE_UPDATE_PHONE ||
                        path === ROUTES.PROFILE_VERIFY_PHONE ||
                        path === ROUTES.PAYMENT_METHOD ||
                        path === ROUTES.ADD_PAYMENT_METHOD ||
                        path === ROUTES.PURCHASE_HISTORY ||
                        path === ROUTES.BECOME_SELLER ||
                        path === ROUTES.ADD_REVIEW
                    ) {
                        return (
                            <Navigation>
                                <Component {...props} />
                            </Navigation>
                        )
                    }
                    return (
                        <>
                            <Navbar />
                            <Component {...props} />
                            <Footer />
                        </>
                    )
                }

                return (
                    <Redirect
                        to={{
                            pathname: ROUTES.LOGIN,
                            state: { from: props.location },
                        }}
                    />
                )
            }}
        />
    )
}

const mapStateToProps = ({ auth }) => ({
    isAuth: !!auth,
    role: auth?.role || '',
})

export default connect(mapStateToProps)(PrivateRoute)
