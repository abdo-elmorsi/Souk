import React from 'react'
import { useTranslation } from 'react-i18next'
import cookies from 'js-cookie'
import Navbar from '../../../../Components/adminPanel/Navbar'
import Sidebar from '../../../../Components/adminPanel/Sidebar'
import Dropdown from '../../../../Components/adminPanel/Dropdown'
import LeftSide from '../../../../Components/adminPanel/Products/BrandShop/LeftSide'
import RightSide from '../../../../Components/adminPanel/Products/BrandShop/RightSide'
import { useSelector, useDispatch } from 'react-redux'
import {
    getBrands,
    deleteBrand,
} from '../../../../redux/actions/products/allBrandAction'
import Loader from '../../../../Components/adminPanel/Loader/DataLoader'

const Shop = () => {
    const { t } = useTranslation()
    const currentLanguageCode = cookies.get('i18next') || 'en'
    const [showDropdown, setShowDropdown] = React.useState(false)
    const [tempFile, setTempFile] = React.useState(null)
    const [tempFile2, setTempFile2] = React.useState(null)

    const { brands, loader } = useSelector((state) => state.brands)
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(getBrands())
    }, [dispatch])
    const deleteBrandItem = async (id) => {
        dispatch(deleteBrand(id))
    }

    const [brandForm, setBrandFrom] = React.useState({
        name: '',
        metaTitle: '',
        metaDesc: '',
        ownerName: '',
        userNameEmail: '',
        password: '',
    })
    // console.log('BRANDFORM:>>>', brandForm)
    // console.log('tempFile:>>>', tempFile)
    // console.log('tempFile2:>>>', tempFile2)

    const handleBrand = (e) => {
        setBrandFrom({
            ...brandForm,
            [e.target.name]: e.target.value,
        })
    }

    const onSubmit = () => {
        const {
            name,
            metaTitle,
            metaDesc,
            ownerName,
            userNameEmail,
            password,
        } = brandForm

        const AddNewBrandData = new FormData()
        AddNewBrandData.append('name', name)
        AddNewBrandData.append('logo', tempFile)
        AddNewBrandData.append('banner', tempFile2)
        AddNewBrandData.append('metaTitle', metaTitle)
        AddNewBrandData.append('metaDesc', metaDesc)
        AddNewBrandData.append('ownerName', ownerName)
        AddNewBrandData.append('userNameEmail', userNameEmail)
        AddNewBrandData.append('password', password)
    }
    return (
        <>
            {!loader ? (
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

                        <div className="flex flex-col lg:flex-row">
                            {/* Left Section*/}
                            <div
                                className={
                                    currentLanguageCode === 'sa'
                                        ? 'ml-2 rounded w-full lg:w-3/5 mt-5 mb-5'
                                        : 'mr-2 rounded w-full lg:w-3/5 mt-5 mb-5'
                                }
                            >
                                <LeftSide
                                    brands={brands}
                                    deleteBrandItem={deleteBrandItem}
                                />
                            </div>

                            {/* Right Section*/}
                            <div
                                className={
                                    currentLanguageCode === 'sa'
                                        ? 'mr-0 lg:mr-2 rounded w-full lg:w-2/5 mt-5 mb-5'
                                        : 'ml-0 lg:ml-2 rounded w-full lg:w-2/5 mt-5 mb-5'
                                }
                            >
                                <form>
                                    <RightSide
                                        tempFile={tempFile}
                                        tempFile2={tempFile2}
                                        setTempFile={setTempFile}
                                        setTempFile2={setTempFile2}
                                        brandForm={brandForm}
                                        handleBrand={handleBrand}
                                        onSubmit={onSubmit}
                                    />
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="hidden">{t('XXX')}</div>
                </div>
            ) : (
                <Loader />
            )}
        </>
    )
}

export default Shop
