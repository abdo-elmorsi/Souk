import React, { useState } from 'react'
import OrderInfoModal from './OrderInfoModal'
import { StaticDialog } from 'react-st-modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { displayTime } from '../../helpers/utils'

const OrderedItem = ({
    orderNum,
    createdAt,
    isPaid,
    orderItems,
    totalPrice,
    deliverStatus,
}) => {
    const [isOpen, setOpen] = useState(false)

    return (
        <>
            <StaticDialog
                isOpen={isOpen}
                title="All Order Items"
                onAfterClose={() => {
                    setOpen(false)
                }}
            >
                <OrderInfoModal
                    isPaid={isPaid}
                    deliverStatus={deliverStatus}
                    orderItems={orderItems}
                />
            </StaticDialog>
            <div
                onClick={() => setOpen(true)}
                className="hover:bg-gray-50 py-4 cursor-pointer grid lg:grid-cols-6 grid-cols-1 gap-2 items-center lg:justify-items-center border-b-2 border-gray-100 "
            >
                <div className="grid lg:grid-cols-4  w-full  lg:col-span-2">
                    <h3 className="font-bold capitalize flex items-center justify-center space-x-4 w-full text-center col-span-4  font-sm ">
                        <span className="text-base text-gray-600 hover:text-primary">
                            <FontAwesomeIcon icon={faEye} />
                        </span>
                        <span>Order #{orderNum}</span>
                    </h3>
                </div>
                <div className="lg:block lg:space-x-0 flex items-center space-x-4">
                    <span className="font-semibold lg:hidden">
                        N° of Products:
                    </span>
                    <p className=" text-sm">{orderItems.length}</p>
                </div>
                <div className="lg:block lg:space-x-0 flex items-center space-x-4">
                    <span className="font-semibold lg:hidden">Date:</span>
                    <p>{displayTime(createdAt)}</p>
                </div>
                <div className="lg:block lg:space-x-0 flex items-center space-x-4">
                    <span className="font-semibold lg:hidden">
                        Total Price:
                    </span>
                    <p>${totalPrice}</p>
                </div>
                <div className="px-4 bg-blue-100 py-1 justify-self-center rounded-full">
                    <h4>{deliverStatus}</h4>
                </div>
            </div>
        </>
    )
}

export default OrderedItem
