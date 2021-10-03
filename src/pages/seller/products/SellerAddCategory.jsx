import { useForm } from 'react-hook-form'

import ScrollReveal from '../../../Components/ui/ScrollReveal'
import { slideUp } from '../../../helpers/animation'
import { createCategoryStart } from '../../../redux/slices/sellerSlice'
import '../../../styles/$seller/add-category.css'
import { useSelector, useDispatch } from 'react-redux'

const SellerAddCategory = () => {
    const auth = useSelector((state) => state.auth)
    const dispatch = useDispatch()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = async (data) => {
        dispatch(createCategoryStart({ name: data.name, token: auth.token }))
    }
    return (
        <ScrollReveal
            variants={slideUp}
            className="seller-container max-w-screen-md mx-auto"
        >
            <h3 className="seller-heading">Add Category</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full px-4">
                <div className="seller-form-grid">
                    <div className="seller-label">
                        <label
                            className="label-text"
                            htmlFor="inline-full-name"
                        >
                            Name
                        </label>
                    </div>
                    <div className="col-span-4">
                        <input
                            className="seller-input"
                            type="text"
                            {...register('name', {
                                required: 'this field is required',
                            })}
                        />
                        <div>
                            <span className="text-red-500 ">
                                {errors?.name?.message}
                            </span>
                        </div>
                    </div>
                </div>
                {/* <div className="seller-form-grid">
                    <div className="seller-label">
                        <label
                            className="label-text"
                            htmlFor="inline-full-name"
                        >
                            Parent category
                        </label>
                    </div>
                    <div className="relative col-span-4 mb-4">
                        <select className="seller-select">
                            <option>item</option>
                            <option>item</option>
                            <option>item</option>
                        </select>
                        <div className="select-icon">
                            <span className="text-base">
                                <FontAwesomeIcon icon={faChevronDown} />
                            </span>
                        </div>
                    </div>
                </div>
                <div className="seller-form-grid">
                    <div className="seller-label">
                        <label
                            className="label-text"
                            htmlFor="inline-full-name"
                        >
                            Ordering Number
                        </label>
                    </div>
                    <div className="relative col-span-4 mb-4">
                        <select className="seller-select">
                            <option>item</option>
                            <option>item</option>
                            <option>item</option>
                        </select>
                        <div className="select-icon">
                            <span className="text-base">
                                <FontAwesomeIcon icon={faChevronDown} />
                            </span>
                        </div>
                    </div>
                </div>

                <div className="seller-form-grid">
                    <div className="seller-label">
                        <label
                            className="label-text"
                            htmlFor="inline-full-name"
                        >
                            Type
                        </label>
                    </div>
                    <div className="col-span-4">
                        <input className="seller-input" type="file" />
                    </div>
                </div>
                <div className="seller-form-grid">
                    <div className="seller-label">
                        <label
                            className="label-text"
                            htmlFor="inline-full-name"
                        >
                            banner
                        </label>
                    </div>
                    <div className="col-span-4">
                        <input className="seller-input" type="file" />
                    </div>
                </div>
                <div className="seller-form-grid">
                    <div className="seller-label">
                        <label
                            className="label-text"
                            htmlFor="inline-full-name"
                        >
                            icon(32*32)
                        </label>
                    </div>
                    <div className="col-span-4">
                        <input className="seller-input" type="file" />
                    </div>
                </div>
                <div className="seller-form-grid">
                    <div className="seller-label">
                        <label
                            className="label-text"
                            htmlFor="inline-full-name"
                        >
                            meta title(32*32)
                        </label>
                    </div>
                    <div className="col-span-4">
                        <input className="seller-input" type="file" />
                    </div>
                </div>
                <div className="seller-form-grid">
                    <div className="seller-label">
                        <label
                            className="label-text"
                            htmlFor="inline-full-name"
                        >
                            description
                        </label>
                    </div>
                    <div className="col-span-4">
                        <textarea className="seller-input" rows="4"></textarea>
                    </div>
                </div> */}

                <button className="add-btn">Add</button>
            </form>
        </ScrollReveal>
    )
}

export default SellerAddCategory
