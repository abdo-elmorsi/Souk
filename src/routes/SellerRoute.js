import { connect } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'
import Navigation from '../Components/seller/side-nav/Navigation'
import { LOGIN } from '../constants/routes'

const SellerRoute = ({ isAuth, role, component: Component, ...rest }) => (
    <Route
        {...rest}
        component={(props) =>
            isAuth && role === 'seller' ? (
                <Navigation>
                    <Component {...props} />
                </Navigation>
            ) : (
                <Redirect
                    to={{
                        pathname: LOGIN,
                        state: { from: props.location },
                    }}
                />
            )
        }
    />
)

const mapStateToProps = ({ auth }) => ({
    isAuth: !!auth,
    role: auth?.role || '',
})

export default connect(mapStateToProps)(SellerRoute)
