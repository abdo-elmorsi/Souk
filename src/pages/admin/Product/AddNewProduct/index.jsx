import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
// import Loader from '../../../../Components/adminPanel/Loader/AddDataLoader'

// import { useTranslation } from 'react-i18next'
import Navbar from '../../../../Components/adminPanel/Navbar'
import Sidebar from '../../../../Components/adminPanel/Sidebar'
import Dropdown from '../../../../Components/adminPanel/Dropdown'
import AddProductForm from '../../../../Components/seller/products/AddProductForm'
import ProductDescription from '../../../../Components/seller/products/ProductDescription'
import ProductImgForm from '../../../../Components/seller/products/ProductImgForm'
import ProductPriceForm from '../../../../Components/seller/products/ProductPriceForm'
import ProductVariationForm from '../../../../Components/seller/products/ProductVariationForm'
import ProductVideoForm from '../../../../Components/seller/products/ProductVideoForm'
import SEOForm from '../../../../Components/seller/products/SEOForm'
import ShippingForm from '../../../../Components/seller/products/ShippingForm'
import StockForm from '../../../../Components/seller/products/StockForm'
import TaxForm from '../../../../Components/seller/products/TaxForm'
import '../../../../styles/$seller/add-product.css'
import { useForm } from 'react-hook-form'
import { addProductStart } from '../../../../redux/slices/productsSlice'
import Loader from '../../../../Components/ui/Loader'
import { Alert } from 'react-st-modal'
import { hasEmptyProperty } from '../../../../helpers/utils'

const AddNewProduct = () => {
    // const { t } = useTranslation()

    const [showDropdown, setShowDropdown] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm()

    const { auth, isLoadingProduct, productError } = useSelector((state) => ({
        auth: state.auth,
        isLoadingProduct: state.loadingState.isLoadingProduct,
        productError: state.errorState.productError,
    }))
    const dispatch = useDispatch()

    const onSubmit = (data) => {
        if (hasEmptyProperty(data)) {
            Alert('Please fill all data')
        } else {
            const formData = new FormData()
            if (data.images && data.images.length > 0) {
                for (let i = 0; i < data.images.length; i++) {
                    formData.append('images', data.images[i])
                }
            }
            if (formData.has('images')) {
                const product = { ...data, images: formData }
                dispatch(addProductStart({ product, token: auth.token }))
                if (!isLoadingProduct && !productError) {
                    reset()
                }
            }
        }
    }

    return (
        <>
            {isLoadingProduct && !productError && (
                <Loader msg="adding product" />
            )}

            {!isLoadingProduct && !productError && (
                <div className="flex">
                    <Dropdown
                        showDropdown={showDropdown}
                        setShowDropdown={setShowDropdown}
                    />
                    <Sidebar />

                    <div className="bg-backgroundDB w-full px-4">
                        <Navbar
                            showDropdown={showDropdown}
                            setShowDropdown={setShowDropdown}
                        />

                        <div
                            className="mx-auto py-10 flex flex-col lg:flex-row max-w-screen-xl"
                            style={{ direction: 'ltr' }}
                        >
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className=" grid md:grid-cols-3 grid-cols-1 md:gap-4 gap-y-4 mb-6">
                                    <div className="col-span-2 flex flex-col space-y-6">
                                        <AddProductForm
                                            register={register}
                                            errors={errors}
                                        />
                                        <ProductImgForm
                                            register={register}
                                            errors={errors}
                                        />
                                        <ProductVideoForm
                                            register={register}
                                            errors={errors}
                                        />
                                        <ProductPriceForm
                                            register={register}
                                            errors={errors}
                                        />
                                        <SEOForm
                                            register={register}
                                            errors={errors}
                                        />
                                    </div>
                                    <div className="flex flex-col space-y-6 w-full">
                                        <StockForm
                                            register={register}
                                            errors={errors}
                                        />
                                        <ShippingForm
                                            register={register}
                                            errors={errors}
                                        />
                                        <TaxForm
                                            register={register}
                                            errors={errors}
                                        />
                                        <ProductVariationForm
                                            register={register}
                                            errors={errors}
                                        />
                                        <ProductDescription
                                            register={register}
                                            errors={errors}
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="rounded font-semibold px-4 py-2 text-white bg-red-500"
                                >
                                    submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default AddNewProduct
