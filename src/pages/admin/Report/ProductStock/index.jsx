import React, { useEffect, useMemo } from 'react'
import DataTable from 'react-data-table-component'
import Loader from '../../../../Components/ui/Loader'
import '../../../../styles/$seller/style.css'
import Dropdown from '../../../../Components/adminPanel/Dropdown'
import Navbar from '../../../../Components/adminPanel/Navbar'
import Sidebar from '../../../../Components/adminPanel/Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../../../redux/actions/products/allProductsAction'
import { useTranslation } from 'react-i18next'

const ProductSale = () => {
    const [showDropdown, setShowDropdown] = React.useState(false)
    const { products, loader, error } = useSelector((state) => state.products)
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const columns = useMemo(
        () => [
            {
                name: `${t('N° of product')}`,
                selector: 'name',
                sortable: true,
                center: true,
            },

            {
                name: `${t('Stock')}`,
                selector: 'quantity',
                sortable: true,
                center: true,
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
                        <div className="flex lg:flex-row flex-col justify-between items-center mb-4">
                            <h2 className="font-semibold capitalize">
                                {t('Product_Stock')}
                            </h2>
                        </div>
                        {error && (
                            <h3 className="font-semibold text-lg text-center">
                                An Error Accured
                            </h3>
                        )}
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

export default ProductSale
