import React from 'react'

const DataLoader = () => {
    return (
        <div className="loader__container flex justify-center items-center" style={{ maxWidth: '1750px',height:"95vh" }}>
            <div className="absolute font-bold bg-primary text-white py-2 px-5 z-50 rounded">
                Loading Data
            </div>
            <div className="loader__container__item"></div>
        </div>
    )
}

export default DataLoader
