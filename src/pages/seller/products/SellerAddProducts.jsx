import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import AddProductForm from '../../../Components/seller/products/AddProductForm'
import ProductDescription from '../../../Components/seller/products/ProductDescription'
import ProductImgForm from '../../../Components/seller/products/ProductImgForm'
import ProductPriceForm from '../../../Components/seller/products/ProductPriceForm'
import ProductVariationForm from '../../../Components/seller/products/ProductVariationForm'
import ProductVideoForm from '../../../Components/seller/products/ProductVideoForm'
import SEOForm from '../../../Components/seller/products/SEOForm'
import ShippingForm from '../../../Components/seller/products/ShippingForm'
import StockForm from '../../../Components/seller/products/StockForm'
import TaxForm from '../../../Components/seller/products/TaxForm'
import '../../../styles/$seller/add-product.css'
import { addProductStart } from '../../../redux/slices/productsSlice'
import { hasEmptyProperty } from '../../../helpers/utils'
import { Alert } from 'react-st-modal'

const SellerAddProducts = () => {
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
        <div className="py-8" style={{ direction: 'ltr' }}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className=" grid md:grid-cols-3 grid-cols-1 md:gap-4 gap-y-4 mb-6">
                    <div className="col-span-2 flex flex-col space-y-6">
                        <AddProductForm register={register} errors={errors} />
                        <ProductImgForm register={register} errors={errors} />
                        <ProductVideoForm register={register} errors={errors} />
                        <ProductPriceForm register={register} errors={errors} />
                        <SEOForm register={register} errors={errors} />
                    </div>
                    <div className="flex flex-col space-y-6 w-full">
                        <StockForm register={register} errors={errors} />
                        <ShippingForm register={register} errors={errors} />
                        <TaxForm register={register} errors={errors} />
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
    )
}

export default SellerAddProducts
