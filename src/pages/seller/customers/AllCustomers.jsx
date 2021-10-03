import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSellerCustomersStart } from '../../../redux/slices/sellerSlice'
import '../../../styles/$seller/style.css'
import DataTable from 'react-data-table-component'
import Loader from '../../../Components/ui/Loader'

const columns = [
    {
        name: 'Name',
        selector: 'lastName',
        sortable: true,
        center: true,
        cell: (row) => <span>{row.firstName + ' ' + row.lastName}</span>,
    },
    {
        name: 'email',
        selector: 'email',
        sortable: true,
        center: true,
        reorder: true,
    },
    {
        name: 'phone',
        selector: 'phone',
        sortable: true,
        center: true,
        reorder: true,
    },
    {
        name: 'address',
        selector: 'address1',
        sortable: true,
        center: true,
        reorder: true,
    },
    {
        name: 'Country',
        selector: 'country',
        sortable: true,
        center: true,
        reorder: true,
    },
]

const AllCustomers = () => {
    const { allCustomers, user, isLoadingSeller } = useSelector((state) => ({
        allCustomers: state.seller.allCustomers,
        user: state.auth,
        isLoadingSeller: state.loadingState.isLoadingSeller,
    }))

    const dispatch = useDispatch()

    useEffect(() => {
        if (allCustomers.length === 0) {
            dispatch(getSellerCustomersStart({ user, token: user.token }))
        }
    }, [allCustomers.length, user, dispatch])

    return (
        <div className="rounded-md py-6 shadow-md px-4 bg-gray-50 mt-8 ">
            <div className="flex lg:flex-row flex-col justify-between items-center mb-4">
                <h2 className="font-semibold">All Customers</h2>
                <div className="flex lg:flex-row flex-col lg:space-y-0 space-y-2 lg:space-x-2">
                    <div className="relative">
                        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                            <option>Bulk Actions</option>
                            <option>Select All</option>
                            <option>Delete</option>
                            <option>Delete All</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <span className="text-md">
                                <FontAwesomeIcon icon={faChevronDown} />
                            </span>
                        </div>
                    </div>

                    <div>
                        <input
                            type="text"
                            placeholder="type name or date"
                            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        />
                    </div>
                </div>
            </div>

            {isLoadingSeller && <Loader msg="loading customers" />}
            {!isLoadingSeller && allCustomers.length > 0 && (
                <DataTable columns={columns} data={allCustomers} pagination />
            )}
            {!isLoadingSeller && allCustomers.length === 0 && (
                <h3 className="font-semibold text-lg text-center">
                    You Have No Customers Yet
                </h3>
            )}
        </div>
    )
}

export default AllCustomers
