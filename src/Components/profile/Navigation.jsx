import SideNav from './SideNav'
import Header from './Header'
import Container from '../ui/Container'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProfileStart } from '../../redux/slices/profileSlice'
import Loader from '../ui/Loader'
import { HOME } from '../../constants/routes'
import { Link } from 'react-router-dom'

const Navigation = ({ children }) => {
    const [sideNavOpen, setSideNavOpen] = useState(false)
    const { profile, auth, isLoadingProfile } = useSelector((state) => ({
        profile: state.profile,
        auth: state.auth,
        isLoadingProfile: state.loadingState.isLoadingProfile,
    }))

    const dispatch = useDispatch()

    useEffect(() => {
        if (!profile._id) {
            dispatch(getProfileStart(auth))
        }
    }, [profile._id, auth, dispatch])

    if (profile?.avatar?.data) {
        var buffer = new Buffer.from(profile?.avatar?.data).toString('base64')
    }

    return (
        <main>
            {isLoadingProfile && <Loader msg="Loading Profile..." />}
            {!isLoadingProfile && profile._id && (
                <section className="bg-white" style={{ maxWidth: 2000 }}>
                    <div className="lg:grid lg:grid-cols-5 overflow-hidden">
                        <SideNav
                            dispatch={dispatch}
                            sideNavOpen={sideNavOpen}
                            role={auth?.role}
                            avatar={
                                buffer
                                    ? `data:image/png;base64,${buffer}`
                                    : null
                            }
                            userName={`${profile?.firstName} ${profile?.lastName}`}
                        />
                        <div className="col-span-4 bg-grayDB lg:px-8 lg:py-4">
                            <Header
                                avatar={
                                    buffer
                                        ? `data:image/png;base64,${buffer}`
                                        : null
                                }
                                userName={`${profile?.firstName} ${profile?.lastName}`}
                                setSideNavOpen={setSideNavOpen}
                                sideNavOpen={sideNavOpen}
                            />
                            <Container>{children}</Container>
                        </div>
                    </div>
                </section>
            )}
            {!isLoadingProfile && !profile._id && (
                <div className="text-center">
                    Something Went wrong while trying to display your profile
                    please try again later
                    <Link
                        to={HOME}
                        className="px-4 py-2 rounded bg-primary text-white"
                    >
                        Back To Home
                    </Link>
                </div>
            )}
        </main>
    )
}

export default Navigation
