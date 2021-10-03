import React, { useEffect, useMemo } from 'react'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Dropdown from '../../../../Components/adminPanel/Dropdown'
import Navbar from '../../../../Components/adminPanel/Navbar'
import Sidebar from '../../../../Components/adminPanel/Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../../../redux/actions/products/allProductsAction'
import { useTranslation } from 'react-i18next'

import DataTable from 'react-data-table-component'
import Loader from '../../../../Components/ui/Loader'
import '../../../../styles/$seller/style.css'
import { Link } from 'react-router-dom'
import { CREATE_FLASH_DEAL } from '../../../../constants/routes'
import { delProductStart } from '../../../../redux/slices/sellerSlice'

export const Actions = ({ slug }) => {
    const dispatch = useDispatch()
    const auth = useSelector((state) => state.auth)

    return (
        <div className="flex items-center space-x-6">
            <span
                onClick={() =>
                    dispatch(delProductStart({ slug, token: auth.token }))
                }
                className="text-lg text-red-500 cursor-pointer hover:opacity-70"
            >
                <FontAwesomeIcon icon={faTrashAlt} />
            </span>
        </div>
    )
}

const FlashDeall = () => {
    const dispatch = useDispatch()
    const { t } = useTranslation()
    const [showDropdown, setShowDropdown] = React.useState(false)

    const { products, loader } = useSelector((state) => ({
        products: state.products.products,

        loader: state.products.loader,
    }))

    const columns = useMemo(
        () => [
            {
                name: `${t('N° of product')}`,
                selector: 'name',
                sortable: true,
                center: true,
            },

            {
                name: `${t('actions')}`,
                selector: '_id',
                sortable: true,
                center: true,
                cell: (row) => <Actions slug={row.slug} />,
            },
        ],
        [t]
    )
    useEffect(() => {
        if (products.length === 0) {
            dispatch(getProducts())
        }
    }, [dispatch, products])
    return (
        <div>
            <div className="flex">
                {/* SetDropdown */}
                <Dropdown
                    showDropdown={showDropdown}
                    setShowDropdown={setShowDropdown}
                />
                {/* Sidebar Component */}
                <Sidebar />
                <div className="bg-backgroundDB w-full px-3 md-px-8">
                    {/* Navbar Component */}
                    <Navbar
                        showDropdown={showDropdown}
                        setShowDropdown={setShowDropdown}
                    />
                    {/* report */}
                    <div className="rounded-md py-6 shadow-md px-4 bg-gray-50 mt-8">
                        <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
                            <div>{t('All Flash deal')}</div>
                            <Link to={CREATE_FLASH_DEAL}>
                                <div className="bg-primary hover:bg-secondary transition ease-linear text-white rounded-md py-4 px-10">
                                    {t('Creat New Flash Deal')}
                                </div>
                            </Link>
                        </div>
                        {loader && <Loader msg="Loading Products" />}
                        {!loader && products && (
                            <DataTable
                                columns={columns}
                                data={products}
                                pagination
                            />
                        )}
                        {!loader && !products && (
                            <h3 className="font-semibold text-lg text-center">
                                No Salles
                            </h3>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlashDeall
