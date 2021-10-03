import React from 'react'
import ScrollReveal from '../../../Components/ui/ScrollReveal'
import { slideUp, slideDown } from '../../../helpers/animation'

const SellerChat = () => {
    return (
        <div className="py-10  px-4">
            <div className="max-w-screen-lg ">
                <ScrollReveal
                    variants={slideDown}
                    className="border-b-2 flex flex-wrap lg:space-y-0 space-y-2 w-full border-gray-400 pb-4 mb-6"
                >
                    {new Array(8).fill({}).map((item, index) => (
                        <div
                            key={`circus-${index}`}
                            className="md:w-20 md:h-20 w-10 h-10  bg-white rounded-full mx-4"
                        ></div>
                    ))}
                </ScrollReveal>

                <ScrollReveal
                    variants={slideUp}
                    className="bg-white shadow-md rounded-md px-4 py-10 "
                >
                    <div className="chat-message mb-10">
                        <div className="flex md:flex-row flex-col items-end justify-end">
                            <div className="flex flex-col space-y-2 text-sm max-w-sm mx-2 order-1 items-end">
                                <div>
                                    <span className="p-4 rounded-lg inline-block rounded-br-none bg-gray-100 text-black ">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Natus, velit sequi
                                        ullam
                                    </span>
                                </div>
                            </div>
                            <div className="h-8  order-2 w-8 rounded-full bg-gray-200"></div>
                        </div>
                    </div>
                    <div className="chat-message">
                        <div className="flex md:items-end md:flex-row flex-col">
                            <div className="flex flex-col space-y-2 text-sm max-w-sm mx-2 md:order-2 items-start">
                                <div>
                                    <span className="p-4 rounded-lg inline-block rounded-bl-none bg-gray-100 text-black ">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Natus, velit sequi
                                        ullam facere delectus quos consequatur
                                        maiores laborum animi maxime sed
                                        possimus earum assumenda hic et placeat
                                        officiis dolor error!
                                    </span>
                                </div>
                            </div>
                            <div className="h-8  md:order-1 w-8 rounded-full bg-gray-200"></div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </div>
    )
}

export default SellerChat
