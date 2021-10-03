import {
    faFacebookF,
    faInstagram,
    faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Container from './Container'
import google_play from '../../assets/google_play.png'
import app_store from '../../assets/app_store.png'
const Footer = () => {
    return (
        <footer style={{ direction: 'ltr' }}>
            <div className="bg-blackDB py-20">
                <Container>
                    <div className="flex lg:items-end items-center justify-between lg:flex-row flex-col lg:space-y-0 space-y-16">
                        <div className="h-16 w-16 rounded-full bg-white flex items-center font-bold justify-center">
                            Logo
                        </div>
                        <div>
                            <h3 className="font-bold text-white text-lg capitalize mb-4">
                                Subscribe to the best deals first
                            </h3>

                            <form className="flex sm:flex-row flex-col sm:space-y-0 sm:space-x-2 space-y-4 lg:items-stretch items-start">
                                <input
                                    type="text"
                                    className="py-2 max-w-max px-4 font-light text-gray-900"
                                    placeholder="Enter your email address"
                                    style={{
                                        width: 450,
                                        maxWidth: 'fit-content',
                                    }}
                                />
                                <button className="px-4 py-2 font-bold text-white uppercase border-2 border-white">
                                    Request
                                </button>
                            </form>
                        </div>
                        <div className="lg:text-left text-center">
                            <h3 className="font-bold text-white text-lg capitalize mb-2">
                                Download our free app
                            </h3>
                            <p className="font-light text-white text-sm mb-4">
                                get access to exclusive offers
                            </p>
                            <div className="flex space-x-4">
                                <button>
                                    <img src={google_play} alt="google play" />
                                </button>
                                <button>
                                    <img src={app_store} alt="google play" />
                                </button>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <div className="bg-FooterDB py-20">
                <Container>
                    <div className="grid lg:grid-cols-4 grid-cols-1 lg:justify-items-start justify-items-center  gap-6 mb-10">
                        <div className="lg:col-span-2 lg:text-left text-center">
                            <h3 className="font-bold text-white text-xl capitalize mb-8">
                                Let us help you
                            </h3>
                            <ul className="flex flex-col space-y-4">
                                <li className="text-white capitalize text-md">
                                    Help center
                                </li>
                                <li className="text-white capitalize text-md">
                                    how to shop on logo
                                </li>
                                <li className="text-white capitalize text-md">
                                    delivery options and timelines
                                </li>
                                <li className="text-white capitalize text-md">
                                    how to return a product
                                </li>
                                <li className="text-white capitalize text-md">
                                    corporate and buld purchases
                                </li>
                            </ul>
                        </div>
                        <div className="lg:text-left text-center">
                            <h3 className="font-bold text-white text-xl capitalize mb-8">
                                About our store
                            </h3>
                            <ul className="flex flex-col space-y-2">
                                <li className="text-white capitalize text-md">
                                    about us
                                </li>
                                <li className="text-white capitalize text-md">
                                    our careers
                                </li>
                                <li className="text-white capitalize text-md">
                                    our express
                                </li>
                                <li className="text-white capitalize text-md">
                                    terms and conditions
                                </li>
                                <li className="text-white capitalize text-md">
                                    privacy policy
                                </li>
                                <li className="text-white capitalize text-md">
                                    our prime
                                </li>
                                <li className="text-white capitalize text-md">
                                    stay safe
                                </li>
                                <li className="text-white capitalize text-md">
                                    our global
                                </li>
                            </ul>
                        </div>
                        <div className="lg:justify-self-end lg:text-left text-center">
                            <h3 className="font-bold text-white text-xl capitalize mb-8">
                                Make money with logo
                            </h3>
                            <ul className="flex flex-col space-y-2">
                                <li className="text-white capitalize text-md">
                                    sell on logo
                                </li>
                                <li className="text-white capitalize text-md">
                                    hbecome a sales consultant
                                </li>
                                <li className="text-white capitalize text-md">
                                    become a logo vendor service
                                </li>
                                <li className="text-white capitalize text-md">
                                    provider
                                </li>
                                <li className="text-white capitalize text-md">
                                    become a logistics service partner
                                </li>
                                <li className="text-white capitalize text-md">
                                    join the logo DA
                                </li>
                                <li className="text-white capitalize text-md">
                                    join the logo KOL program
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="socials lg:text-left text-center">
                        <h3 className="font-bold text-white text-xl capitalize mb-4">
                            Follow Us
                        </h3>
                        <div className="flex lg:justify-start justify-center items-center">
                            <span className="inline-block flex items-center justify-center rounded-full border border-white h-8 w-8">
                                <span className="font-sm text-white ">
                                    <FontAwesomeIcon icon={faFacebookF} />
                                </span>
                            </span>
                            <span className="inline-block mx-4 flex items-center justify-center rounded-full border border-white h-8 w-8">
                                <span className="font-sm text-white ">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </span>
                            </span>
                            <span className="inline-block flex items-center justify-center rounded-full border border-white h-8 w-8">
                                <span className="font-sm text-white ">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </span>
                            </span>
                        </div>
                    </div>
                </Container>
            </div>
        </footer>
    )
}

export default Footer
