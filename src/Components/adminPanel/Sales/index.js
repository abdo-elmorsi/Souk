import React, { useState, useMemo } from 'react'

import { faShoppingBasket, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../../styles/$seller/style.css'
import DataTable from 'react-data-table-component'
import { useDispatch } from 'react-redux'
import { StaticDialog } from 'react-st-modal'
import OrderInfoModal from '../../../Components/profile/OrderInfoModal'

import { useTranslation } from 'react-i18next'

import { delOrderStart } from '../../../redux/slices/sellerSlice'

export const Actions = ({ id }) => {
    const dispatch = useDispatch()

    return (
        <div className="flex items-center space-x-6">
            <span
                onClick={() => dispatch(delOrderStart(id))}
                className="text-lg text-red-500 cursor-pointer hover:opacity-70"
            >
                <FontAwesomeIcon icon={faTrashAlt} />
            </span>
        </div>
    )
}

const OrderInfo = ({ orderItems }) => {
    const [isOpen, setOpen] = useState(false)
    const { t } = useTranslation()
    return (
        <>
            <StaticDialog
                isOpen={isOpen}
                title={`${t('Shipping Address')}`}
                onAfterClose={() => {
                    setOpen(false)
                }}
            >
                <OrderInfoModal orderItems={orderItems} />
            </StaticDialog>
            <span
                onClick={() => setOpen(true)}
                className="text-lg text-purple-900 cursor-pointer hover:opacity-70"
            >
                <FontAwesomeIcon icon={faShoppingBasket} />
            </span>
        </>
    )
}

const TableBrowsePg = ({ allSales }) => {
    const { t } = useTranslation()
    const columns = useMemo(
        () => [
            {
                name: `${t('Payment Status')}`,
                selector: 'isPaid',
                sortable: true,
                center: true,
                cell: (row) => (
                    <span>
                        {row.isPaid ? `${t('Payed')}` : `${t('Not Payed')}`}
                    </span>
                ),
            },
            {
                name: `${t('Paid Profit')}`,
                selector: 'isPaidProfit',
                sortable: true,
                center: true,
                cell: (row) => (
                    <span>
                        {row.isPaid ? `${t('Payed')}` : `${t('Not Payed')}`}
                    </span>
                ),
            },

            {
                name: `${t('Delivery_Status')}`,
                selector: 'deliverStatus',
                sortable: true,
                center: true,
                cell: (row) => <span>{t(row.deliverStatus)}</span>,
            },
            {
                name: `${t('order items')}`,
                selector: 'orderItems',
                sortable: true,
                center: true,
                cell: (row) => <OrderInfo orderItems={row.orderItems} />,
            },

            {
                name: `${t('total price')}`,
                selector: 'totalPrice',
                sortable: true,
                center: true,
            },
            {
                name: `${t('actions')}`,
                selector: '_id',
                sortable: true,
                center: true,
                cell: (row) => <Actions id={row._id} />,
            },
        ],
        [t]
    )

    return (
        <div className="rounded-md py-6 shadow-md px-4 bg-gray-50 mt-8">
            <div className="flex lg:flex-row flex-col justify-between items-center mb-4">
                <h2 className="font-semibold">{t('Sales')}</h2>
                <div className="flex lg:flex-row flex-col lg:space-y-0 space-y-2 lg:space-x-2">
                    <div>
                        <input
                            type="text"
                            placeholder={`${t('type name or date')}`}
                            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        />
                    </div>
                </div>
            </div>

            {allSales?.length > 0 && (
                <DataTable columns={columns} data={allSales} pagination />
            )}
        </div>
    )
}

export default TableBrowsePg
