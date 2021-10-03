import { useForm } from 'react-hook-form'

import ScrollReveal from '../../../Components/ui/ScrollReveal'
import { slideUp } from '../../../helpers/animation'
import {
    createSubCategoryStart,
    getAllCategoriesStart,
} from '../../../redux/slices/sellerSlice'
import '../../../styles/$seller/add-category.css'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const SellerAddSubCategory = () => {
    const { auth, allCategories } = useSelector((state) => ({
        auth: state.auth,
        allCategories: state.seller.AllCategories,
    }))
    const dispatch = useDispatch()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = async (data) => {
        dispatch(
            createSubCategoryStart({
                name: data.name,
                categoryId: data.category,
                token: auth.token,
            })
        )
    }

    useEffect(() => {
        if (allCategories.length === 0) {
            dispatch(getAllCategoriesStart())
        }
    }, [allCategories.length, dispatch])
    return (
        <ScrollReveal
            variants={slideUp}
            className="seller-container max-w-screen-md mx-auto"
        >
            <h3 className="seller-heading">Add Sub Category</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full px-4">
                <div className="add-p-group">
                    <div className="add-p-labelc">
                        <label
                            className="add-p-labelt"
                            htmlFor="inline-full-name"
                        >
                            category
                        </label>
                    </div>
                    <div className="relative input-wrapper mb-4">
                        <select
                            className="add-p-select"
                            id="grid-state"
                            {...register('category', {
                                required: 'this field is required',
                            })}
                        >
                            {allCategories.length > 0 &&
                                allCategories.map((cat) => (
                                    <option key={cat._id} value={cat._id}>
                                        {cat.name}
                                    </option>
                                ))}
                        </select>
                        <div className="add-p-icon">
                            <span className="text-md">
                                <FontAwesomeIcon icon={faChevronDown} />
                            </span>
                        </div>
                        <div>
                            <span className="text-red-500 ">
                                {errors?.category?.message}
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

                <button className="add-btn">Add</button>
            </form>
        </ScrollReveal>
    )
}

export default SellerAddSubCategory
