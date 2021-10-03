import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import AddProductForm from '../../../Components/seller/products/AddProductForm'
import ProductDescription from '../../../Components/seller/products/ProductDescription'
import ProductPriceForm from '../../../Components/seller/products/ProductPriceForm'
import ProductVariationForm from '../../../Components/seller/products/ProductVariationForm'
import ProductVideoForm from '../../../Components/seller/products/ProductVideoForm'
import SEOForm from '../../../Components/seller/products/SEOForm'
import ShippingForm from '../../../Components/seller/products/ShippingForm'
import StockForm from '../../../Components/seller/products/StockForm'
import TaxForm from '../../../Components/seller/products/TaxForm'
import '../../../styles/$seller/add-product.css'
import { useParams } from 'react-router'
import { editProductStart } from '../../../redux/slices/sellerSlice'
import ProductImgForm from '../../../Components/seller/products/ProductImgForm'

const EditProduct = () => {
    const { slug } = useParams()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const auth = useSelector((state) => state.auth)
    const dispatch = useDispatch()

    const onSubmit = async (data) => {
        const hasNoUpdates = Object.values(data).every(
            (prop) => prop === '' || prop.length === 0
        )
        if (!hasNoUpdates) {
            for (let propName in data) {
                if (
                    data[propName] === '' ||
                    data[propName].length === 0 ||
                    Number.isNaN(data[propName])
                ) {
                    delete data[propName]
                }
            }
            if (data.images && data.images.length > 0) {
                const formData = new FormData()
                for (let i = 0; i < data.images.length; i++) {
                    formData.append('images', data.images[i])
                }
                dispatch(
                    editProductStart({
                        slug,
                        product: { ...data, images: formData },
                        token: auth.token,
                    })
                )
            } else if (!data.images) {
                dispatch(
                    editProductStart({
                        slug,
                        product: data,
                        token: auth.token,
                    })
                )
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

export default EditProduct
