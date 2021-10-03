import React from 'react'
import { connect } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

const AdminRoute = ({ isAuth, role, component: Component, ...rest }) => (
    <Route
        {...rest}
        component={(props) =>
            isAuth && role === 'admin' ? (
                <>
                    {/* Admin Navigation here */}
                    <div className="mx-auto" style={{ maxWidth: '1750px' }}>
                        <Component {...props} />
                    </div>
                </>
            ) : (
                <Redirect to="/" />
            )
        }
    />
)

const mapStateToProps = ({ auth }) => ({
    isAuth: !!auth,
    role: auth?.role || '',
})

export default connect(mapStateToProps)(AdminRoute)
