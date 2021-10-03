import React from 'react'
// import { useTranslation } from 'react-i18next'

import Navbar from '../../../../Components/adminPanel/Navbar'
import Sidebar from '../../../../Components/adminPanel/Sidebar'
import Dropdown from '../../../../Components/adminPanel/Dropdown'
import { useForm } from 'react-hook-form'

import ScrollReveal from '../../../../Components/ui/ScrollReveal'
import { slideUp } from '../../../../helpers/animation'
import { createCategoryStart } from '../../../../redux/slices/sellerSlice'
import '../../../../styles/$seller/add-category.css'
import { useSelector, useDispatch } from 'react-redux'

const AddNewCategory = () => {
    // const { t } = useTranslation()

    const [showDropdown, setShowDropdown] = React.useState(false)

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
        <>
            <div className="flex">
                {/* SetDropdown */}
                <Dropdown
                    showDropdown={showDropdown}
                    setShowDropdown={setShowDropdown}
                />
                {/* Sidebar Component */}
                <Sidebar />

                <div className="bg-backgroundDB w-full px-4">
                    {/* Navbar Component */}
                    <Navbar
                        showDropdown={showDropdown}
                        setShowDropdown={setShowDropdown}
                    />

                    <div className="mt-5 mb-20">
                        <ScrollReveal
                            variants={slideUp}
                            className="seller-container max-w-screen-md mx-auto"
                        >
                            <h3 className="seller-heading">Add Category</h3>
                            <form
                                onSubmit={handleSubmit(onSubmit)}
                                className="w-full px-4"
                            >
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
                                                required:
                                                    'this field is required',
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
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddNewCategory
