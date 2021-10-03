import { useTranslation } from 'react-i18next'
import cookies from 'js-cookie'
import Container from '../../Components/ui/Container'
import contactImg from '../../assets/contactImg.jpg'
import { FaPhoneAlt } from 'react-icons/fa'
import { RiMessage2Fill } from 'react-icons/ri'

const AboutUs = () => {
    const { t } = useTranslation()
    const currentLanguageCode = cookies.get('i18next') || 'en'
    return (
        <div className="">
            <div className="pt-52 absolute flex justify-center w-full text-3xl md:text-5xl lg:text-7xl font-bold">
                <div className="">
                    <div className="text-gray-800">
                        {t('Contact_Us_for_any_Request')}
                    </div>
                    <div className="text-sm md:text-2xl text-gray-700 flex justify-center py-10 tshadowb">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </div>
                </div>
            </div>
            <div className="">
                <img
                    src={contactImg}
                    className="w-full object-cover"
                    alt=""
                    style={{ height: '720px' }}
                />
            </div>
            <Container>
                <div
                    className="px-0 md:px-20 z-50"
                    style={{ marginTop: '-200px', zIndex: '9999' }}
                >
                    <div className="borde my-10 py-3 pr-5 bg-gray- rounded-xl">
                        <div className="flex flex-col lg:flex-row">
                            {/* Left Section*/}
                            <div
                                className={
                                    currentLanguageCode === 'sa'
                                        ? 'mr-0 lg:mr-2 rounded w-full lg:w-2/5 mt-5 mb-5'
                                        : 'ml-0 lg:ml-2 rounded w-full lg:w-2/5 mt-5 mb-5'
                                }
                            >
                                <div className="shadow-2xl bg-white rounded-xl p-12 border mb-10 mx-10">
                                    <div className="flex justify-center">
                                        <div className="">
                                            <FaPhoneAlt className="w-20 h-20 text-primary border-4 rounded-full p-4 border-primary" />
                                        </div>
                                        <div className="mx-5 flex flex-col justify-center">
                                            <div className="text-lg font-semibold">
                                                {t('Direct_Call')}
                                            </div>
                                            <div className="text-sm">
                                                {t('Make_call_on')}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-center text-xl pt-5 font-semibold">
                                        +33 012 455 0047
                                    </div>
                                </div>
                                <div className="shadow-2xl bg-white rounded-xl p-12 border m-10">
                                    <div className="flex justify-center">
                                        <div className="">
                                            <RiMessage2Fill className="w-20 h-20 text-primary border-4 rounded-full p-4 border-primary" />
                                        </div>
                                        <div className="mx-5 flex flex-col justify-center">
                                            <div className="text-lg font-semibold">
                                                {t('Direct_Message')}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-center text-sm pt-5 text-gray-400">
                                        {t('chatwith_one_of_our_customer_care')}
                                    </div>
                                    <div className="flex justify-center pt-5">
                                        <button className="bg-primary border-2 border-primary trans py-1 px-3 text-white rounded hover:bg-white hover:border-primary hover:text-primary">
                                            {t('Let’s_Chat')}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Right Section*/}
                            <div
                                className={
                                    currentLanguageCode === 'sa'
                                        ? 'mr-2 lg:mr-0 ml-2 rounded w-full lg:w-3/5 mt-5 mb-5 bg-white borde rounded-xl shadow-2xl'
                                        : 'ml-2 lg:ml-0 mr-2 rounded w-full lg:w-3/5 mt-5 mb-5 bg-white borde rounded-xl shadow-2xl'
                                }
                            >
                                <div className="text-md rounded-xl bg-white">
                                    <div className="text-2xl text-primary flex justify-center font-semibold pt-10">
                                        {t('Book_a_meeting')}
                                    </div>
                                    <div className="text-sm text-gray-400 flex justify-center px-20">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit.
                                    </div>
                                    {/* Name*/}
                                    <div className="mt-10 flex w-full">
                                        <div className="flex flex-col mb-3 mt-6 px-5 w-1/2">
                                            <div className="w-full">
                                                <input
                                                    placeholder={t('Name')}
                                                    className="w-full h-10 bg-gray-100 px-5 rounded-md
                                                    border-transparent
                                                    focus:outline-none
                                                    focus:ring-2
                                                    focus:ring-primary
                                                    focus:border-transparent"
                                                />
                                            </div>
                                        </div>
                                        {/*Email*/}
                                        <div className="flex flex-col mb-3 mt-6 px-5 w-1/2">
                                            <div className="w-full">
                                                <input
                                                    placeholder={t('Email')}
                                                    className="w-full h-10 bg-gray-100 px-5 rounded-md
                                                    border-transparent
                                                    focus:outline-none
                                                    focus:ring-2
                                                    focus:ring-primary
                                                    focus:border-transparent"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Reason */}
                                    <div className="flex flex-col mt-3 px-5">
                                        <div className="w-full cursor-pointer">
                                            <textarea
                                                placeholder={t('Reason')}
                                                className="w-full bg-gray-100 border rounded-md px-5 py-5
                                                border-transparent
                                                focus:outline-none
                                                focus:ring-2
                                                focus:ring-primary
                                                focus:border-transparent"
                                                rows="4"
                                                cols="50"
                                            ></textarea>
                                        </div>
                                    </div>

                                    {/* Date */}
                                    <div className="flex flex-col my-3 px-5">
                                        <div className="w-full">
                                            <input
                                                placeholder={t('Date')}
                                                className="w-full h-10 bg-gray-100 px-5 rounded-md
                                                border-transparent
                                                focus:outline-none
                                                focus:ring-2
                                                focus:ring-primary
                                                focus:border-transparent"
                                            />
                                        </div>
                                    </div>

                                    {/* Time */}
                                    <div className="flex flex-col my-3 px-5">
                                        <div className="w-full">
                                            <input
                                                placeholder={t('Time')}
                                                className="w-full h-10 bg-gray-100 px-5 rounded-md
                                                border-transparent
                                                focus:outline-none
                                                focus:ring-2
                                                focus:ring-primary
                                                focus:border-transparent"
                                            />
                                        </div>
                                    </div>

                                    {/* Button */}
                                    <div className="flex flex-col px-5 py-10">
                                        <div className="w-full flex justify-end">
                                            <button className="bg-primary border-2 border-primary trans py-2 px-4 text-white rounded hover:bg-white hover:border-primary hover:text-primary">
                                                {t('Send_Request')}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default AboutUs
