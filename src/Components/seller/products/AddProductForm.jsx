import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { slideUp } from '../../../helpers/animation'
import { getSubCategory } from '../../../services/categoryApi'
import ScrollReveal from '../../ui/ScrollReveal'

const AddProductForm = ({ register, errors }) => {
    const [categories, setCategory] = useState()

    useEffect(() => {
        const getCategory = async () => {
            try {
                const category = await getSubCategory()
                if (category) {
                    setCategory(category)
                }
            } catch (e) {
                toast.error(e.message)
            }
        }
        getCategory()
    }, [])
    return (
        <ScrollReveal variants={slideUp} className="add-p-container">
            <h3 className="add-p-heading">Product Info</h3>
            <div className="w-full px-4">
                <div className="add-p-group">
                    <div className="add-p-labelc">
                        <label
                            className="add-p-labelt"
                            htmlFor="inline-full-name"
                        >
                            product name
                        </label>
                    </div>
                    <div className="input-wrapper">
                        <input
                            className="add-p-input"
                            type="text"
                            {...register('name')}
                        />
                    </div>
                </div>
                <div className="add-p-group">
                    <div className="add-p-labelc">
                        <label
                            className="add-p-labelt"
                            htmlFor="inline-full-name"
                        >
                            sub category
                        </label>
                    </div>
                    <div className="relative input-wrapper mb-4">
                        <select
                            className="add-p-select"
                            id="grid-state"
                            {...register('subcategory')}
                        >
                            {categories &&
                                categories.map((cat) => (
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
                    </div>
                </div>
                <div className="add-p-group">
                    <div className="add-p-labelc">
                        <label
                            className="add-p-labelt"
                            htmlFor="inline-full-name"
                        >
                            Brand/shop
                        </label>
                    </div>
                    <div className="input-wrapper">
                        <input
                            className="add-p-input"
                            type="text"
                            {...register('brand')}
                        />
                    </div>
                </div>
                <div className="add-p-group">
                    <div className="add-p-labelc">
                        <label
                            className="add-p-labelt"
                            htmlFor="inline-full-name"
                        >
                            Unit
                        </label>
                    </div>
                    <div className="input-wrapper">
                        <input
                            className="add-p-input"
                            {...register('unit')}
                            type="text"
                        />
                    </div>
                </div>
                <div className="add-p-group">
                    <div className="add-p-labelc">
                        <label
                            className="add-p-labelt"
                            htmlFor="inline-full-name"
                        >
                            Minimum purchase qty
                        </label>
                    </div>
                    <div className="input-wrapper">
                        <input
                            className="add-p-input"
                            type="number"
                            {...register('minimumPurchaseQty', {
                                valueAsNumber: true,
                            })}
                        />
                    </div>
                </div>
                <div className="add-p-group">
                    <div className="add-p-labelc">
                        <label
                            className="add-p-labelt"
                            htmlFor="inline-full-name"
                        >
                            Quantity
                        </label>
                    </div>
                    <div className="input-wrapper">
                        <input
                            className="add-p-input"
                            type="number"
                            {...register('quantity', { valueAsNumber: true })}
                        />
                    </div>
                </div>

                <div className="add-p-group">
                    <div className="add-p-labelc">
                        <label
                            className="add-p-labelt"
                            htmlFor="inline-full-name"
                        >
                            tags
                        </label>
                    </div>
                    <div className="input-wrapper">
                        <input
                            className="add-p-input"
                            type="text"
                            {...register('tags')}
                        />
                    </div>
                </div>
            </div>
        </ScrollReveal>
    )
}

export default AddProductForm
