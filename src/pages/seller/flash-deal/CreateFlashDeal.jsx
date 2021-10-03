import React from 'react'

const SellerCreateFlashDeal = () => {
    return (
        <div className="bg-white mt-8 max-w-screen-md shadow-md py-6 md:px-4 px-2 mx-auto rounded-md">
            <h3 className="font-bold text-2xl capitalize mb-6">
                Create Flash Deal
            </h3>
            <div className="py-6 md:px-4 px-2">
                <form className="w-full px-4">
                    <div className="grid items-center sm:grid-cols-6 mb-6">
                        <div className="col-span-2 justify-self-start">
                            <label
                                className="block text-gray-500 capitalize font-bold md:text-right mb-1 md:mb-0 pr-4"
                                htmlFor="title"
                            >
                                title
                            </label>
                        </div>
                        <div className="col-span-4">
                            <input
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                type="text"
                            />
                        </div>
                    </div>
                    <div className="sm:grid sm:grid-cols-6 items-center mb-6">
                        <div className="col-span-2 justify-self-start">
                            <label
                                className="block text-gray-500 capitalize font-bold md:text-right mb-1 md:mb-0 pr-4"
                                htmlFor="bg-color"
                            >
                                background color
                            </label>
                        </div>
                        <div className="col-span-4">
                            <input
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                type="text"
                            />
                        </div>
                    </div>

                    <div className="sm:grid sm:grid-cols-6 items-center mb-6">
                        <div className="col-span-2 justify-self-start">
                            <label
                                className="block text-gray-500 capitalize font-bold md:text-right mb-1 md:mb-0 pr-4"
                                htmlFor="text-color"
                            >
                                text color
                            </label>
                        </div>
                        <div className="col-span-4">
                            <input
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                type="text"
                            />
                        </div>
                    </div>
                    <div className="sm:grid sm:grid-cols-6 items-center mb-6">
                        <div className="col-span-2 justify-self-start">
                            <label
                                className="block text-gray-500 capitalize font-bold md:text-right mb-1 md:mb-0 pr-4"
                                htmlFor="banner"
                            >
                                banner
                            </label>
                        </div>
                        <div className="col-span-4">
                            <input
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                type="file"
                            />
                        </div>
                    </div>

                    <div className="sm:grid sm:grid-cols-6 items-center mb-6">
                        <div className="col-span-2 justify-self-start">
                            <label
                                className="block text-gray-500 capitalize font-bold md:text-right mb-1 md:mb-0 pr-4"
                                htmlFor="date"
                            >
                                date
                            </label>
                        </div>
                        <div className="col-span-4">
                            <input
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                type="date"
                            />
                        </div>
                    </div>
                    <div className="sm:grid sm:grid-cols-6 items-center mb-6">
                        <div className="col-span-2 justify-self-start">
                            <label
                                className="block text-gray-500 capitalize font-bold md:text-right mb-1 md:mb-0 pr-4"
                                htmlFor="product"
                            >
                                product
                            </label>
                        </div>
                        <div className="col-span-4 flex">
                            <input
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                type="file"
                            />
                        </div>
                    </div>
                    <div className="sm:grid sm:grid-cols-6 items-center mb-6">
                        <div className="col-span-2 justify-self-start">
                            <label
                                className="block text-gray-500 capitalize font-bold md:text-right mb-1 md:mb-0 pr-4"
                                htmlFor="base-price"
                            >
                                base price
                            </label>
                        </div>
                        <div className="col-span-4">
                            <input
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                type="text"
                            />
                        </div>
                    </div>
                    <div className="sm:grid sm:grid-cols-6 items-center mb-6">
                        <div className="col-span-2 justify-self-start">
                            <label
                                className="block text-gray-500 capitalize font-bold md:text-right mb-1 md:mb-0 pr-4"
                                htmlFor="discount"
                            >
                                discount
                            </label>
                        </div>
                        <div className="col-span-4">
                            <input
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                type="text"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                            type="button"
                        >
                            save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SellerCreateFlashDeal
