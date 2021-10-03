import * as ROUTES from '../constants/routes'
import { Redirect, Route } from 'react-router-dom'
import Navbar from '../Components/ui/Navbar'
import Footer from '../Components/ui/Footer'
import { connect } from 'react-redux'

const PublicRoute = ({ isAuth, role, component: Component, path, ...rest }) => {
    return (
        <Route
            {...rest}
            component={(props) => {
                const { from } = props.location.state || {
                    from: { pathname: '/' },
                }

                if (isAuth && role === 'admin') {
                    return <Redirect to={ROUTES.ADMIN_DASHBOARD} />
                }

                if (
                    isAuth &&
                    (role === 'user' || role === 'seller') &&
                    (path === ROUTES.LOGIN ||
                        path === ROUTES.SIGNUP ||
                        path === ROUTES.VERIFY_EMAIL)
                ) {
                    return <Redirect to={from} />
                }
                if (path === ROUTES.VERIFY_EMAIL) {
                    return <Component {...props} />
                }

                return (
                    <>
                        <Navbar />
                        <Component {...props} />
                        <Footer />
                    </>
                )
            }}
        />
    )
}

const mapStateToProps = ({ auth }) => ({
    isAuth: !!auth,
    role: auth?.role || '',
})

export default connect(mapStateToProps)(PublicRoute)
