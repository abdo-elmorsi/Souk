import SideNav from './SideNav'
import Header from './Header'
import Container from '../../ui/Container'
import { useState } from 'react'

const Navigation = ({ children }) => {
    const [sideNavOpen, setSideNavOpen] = useState(false)

    return (
        <main>
            <section className="bg-grayDB" style={{ maxWidth: 2000 }}>
                <div className="lg:grid lg:grid-cols-5 relative overflow-hidden">
                    <SideNav sideNavOpen={sideNavOpen} />
                    <div className="col-span-4 lg:px-8 lg:py-4">
                        <Header
                            setSideNavOpen={setSideNavOpen}
                            sideNavOpen={sideNavOpen}
                        />

                        <Container>{children}</Container>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Navigation
