import React from 'react'

const DeleteDataLoder = () => {
    return (
        <div className="loader__container" style={{ maxWidth: '1750px' }}>
            <div className="absolute font-bold bg-primary text-white py-2 px-5 z-50 rounded">
                Delete Data
            </div>
            <div className="loader__container__item"></div>
        </div>
    )
}

export default DeleteDataLoder
