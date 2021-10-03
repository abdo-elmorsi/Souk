import React from 'react'

const LeftSection = ({ image }) => {
    return (
        <>
            <div className="w-full lg:w-1/3 p-5">
                <div className="w-full h-full flex justify-center items-center">
                    <div>
                        <img
                            src={image}
                            alt=""
                            className="h-60 w-60 bg-gray-200 rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default LeftSection
