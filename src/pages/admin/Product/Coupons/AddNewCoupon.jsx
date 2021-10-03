import { slideUp } from '../../../../helpers/animation'
import ScrollReveal from '../../../../Components/ui/ScrollReveal'
import '../../../../styles/$seller/add-product.css'
import Navbar from '../../../../Components/adminPanel/Navbar'
import Sidebar from '../../../../Components/adminPanel/Sidebar'
import Dropdown from '../../../../Components/adminPanel/Dropdown'
import { useEffect, useState } from 'react'
import { MultiSelect } from 'react-multi-select-component'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { getSellerProductsStart } from '../../../../redux/slices/sellerSlice'
import { useDispatch } from 'react-redux'
import { Alert } from 'react-st-modal'
import { createCouponStart } from '../../../../redux/slices/adminSlice'
import Loader from '../../../../Components/ui/Loader'

const AddNewCoupon = () => {
    const { allProducts, auth, isLoadingAdmin } = useSelector((state) => ({
        allProducts: state.seller.allProducts,
        auth: state.auth,
        isLoadingAdmin: state.loadingState.isLoadingAdmin,
    }))

    const dispatch = useDispatch()

    useEffect(() => {
        if (allProducts.length === 0) {
            dispatch(
                getSellerProductsStart({
                    sellerId: auth._id,
                    token: auth.token,
                })
            )
        }
    }, [allProducts.length, dispatch, auth._id, auth.token])

    const [showDropdown, setShowDropdown] = useState(false)

    const selectProducts = []
    allProducts?.forEach((product) => {
        const option = {
            label: product.name,
            value: product.id,
        }
        selectProducts.push(option)
    })

    const [selected, setSelected] = useState([])
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = async (data) => {
        if (selected.length === 0) {
            Alert('select coupon products')
        } else {
            const products = selected.map((product) => product.value)

            dispatch(
                createCouponStart({
                    data: { ...data, products },
                    token: auth.token,
                })
            )
        }
    }
    return (
        <>
            {isLoadingAdmin && <Loader />}
            <div className="flex">
                <Dropdown
                    showDropdown={showDropdown}
                    setShowDropdown={setShowDropdown}
                />
                <Sidebar />

                <div className="bg-backgroundDB w-full pb-10 px-4">
                    <Navbar
                        showDropdown={showDropdown}
                        setShowDropdown={setShowDropdown}
                    />
                    <ScrollReveal
                        variants={slideUp}
                        className="add-p-container my-10"
                    >
                        <h3 className="add-p-heading">Add new Coupon</h3>
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="w-full px-4 max-w-lg mx-auto"
                        >
                            <div className="flex flex-col space-y-2">
                                <div>
                                    <label htmlFor="inline-full-name">
                                        Title
                                    </label>
                                </div>
                                <div className="col-span-4">
                                    <input
                                        className="add-p-input"
                                        type="text"
                                        {...register('title', {
                                            required: true,
                                        })}
                                    />
                                    <div>
                                        <span className="text-red-500">
                                            {errors.title &&
                                                'this field is required'}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col space-y-2">
                                <div>
                                    <label htmlFor="inline-full-name">
                                        expirity Date
                                    </label>
                                </div>
                                <div className="col-span-4">
                                    <input
                                        className="add-p-input"
                                        type="date"
                                        {...register('expireDate', {
                                            required: true,
                                        })}
                                    />
                                    <div>
                                        <span className="text-red-500">
                                            {errors.expireDate &&
                                                'this field is required'}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col space-y-2">
                                <div>
                                    <label htmlFor="inline-full-name">
                                        discount
                                    </label>
                                </div>
                                <div className="col-span-4">
                                    <input
                                        className="add-p-input"
                                        type="number"
                                        {...register('discount', {
                                            valueAsNumber: true,
                                            required: 'this field is required',
                                        })}
                                    />
                                    <div>
                                        <span className="text-red-500">
                                            {errors.discount &&
                                                'this field is required'}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col space-y-2">
                                <div>
                                    <label htmlFor="inline-full-name">
                                        products
                                    </label>
                                </div>
                                <div className="col-span-4">
                                    <MultiSelect
                                        options={selectProducts}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="bg-gray-500 mt-4 text-white hover:bg-purple-500 px-4 py-2 rounded"
                            >
                                Add
                            </button>
                        </form>
                    </ScrollReveal>
                </div>
            </div>
        </>
    )
}

export default AddNewCoupon
