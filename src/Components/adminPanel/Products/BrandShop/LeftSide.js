import React from 'react'
import { useTranslation } from 'react-i18next'
import { ImBin } from 'react-icons/im'
import { FiEdit } from 'react-icons/fi'
// import DummyData from "../../../../dummyData/ShopBrandTableData.json"
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { filteredBrands } from '../../../../redux/reducers/products/allBrandReducer'

const ProductInfo = ({ brands, deleteBrandItem }) => {
    const { t } = useTranslation()
    const inputRef = useRef('')
    const dispatch = useDispatch()
    const filterCategories = () => {
        dispatch(filteredBrands(inputRef.current.value.toLowerCase()))
    }
    return (
        <>
            <div className="text-md rounded bg-white">
                <div className="flex items-center justify-between border-b border-black px-5 py-5 font-semibold">
                    <div className="">{t('Brand/Shop')}</div>
                    <div className="text-xs cursor-pointer">
                        <input
                            ref={inputRef}
                            onChange={filterCategories}
                            // placeholder={t('Type_&_Enter')}
                            placeholder="Search by name..."
                            className="w-48 rounded py-3 px-4 border border-black"
                        />
                    </div>
                </div>

                <div>
                    <table className="w-full border-collapse table-auto">
                        <thead>
                            <tr className="border">
                                <td className="text-md h-12 font-semibold px-3">
                                    <div className="">#</div>
                                </td>
                                <td className="text-md font-semibold px-3">
                                    <div className="">{t('Logo')}</div>
                                </td>
                                <td className="text-md font-semibold px-3">
                                    <div className="">{t('Name')}</div>
                                </td>
                                <td className="text-md font-semibold px-3">
                                    <div className="">{t('Banner')}</div>
                                </td>
                                <td className="text-md font-semibold px-3">
                                    <div className="">{t('Options')}</div>
                                </td>
                            </tr>
                        </thead>

                        <tbody>
                            {brands.map((item, index) => (
                                <tr className="border" key={index}>
                                    <td className="h-20 justify-center text-md px-3">
                                        <div className="">{index + 1}</div>
                                    </td>
                                    <td className="text-lg px-3">
                                        <div>
                                            <img
                                                src={item.image}
                                                className="h-12 w-12 rounded"
                                                alt=""
                                            />
                                        </div>
                                    </td>
                                    <td className="text-xs text-gray-500 px-3">
                                        <div className="">{item.title}</div>
                                    </td>
                                    <td className="text-gray-500 px-3">
                                        <div className="">
                                            <div>
                                                <img
                                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGnXY5zaklGLNHzeNDehoYoyabzgCvc6yml6wMHbejy-E7_bzHUkPagClhHVoRZtvTzjM&usqp=CAU"
                                                    alt=""
                                                    className="h-16 w-48 rounded"
                                                />
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-lg text-gray-500 px-3">
                                        <div className="flex items-center">
                                            <div className="bg-gray-200 hover:bg-blueDB trans mx-0.5 rounded-full h-10 w-10">
                                                <div className="text-blueDB hover:text-white flex items-center justify-center cursor-pointer h-full">
                                                    <FiEdit />
                                                </div>
                                            </div>
                                            <div className="bg-gray-200 hover:bg-red-500 trans mx-0.5 rounded-full h-10 w-10">
                                                <div className="text-red-500 hover:text-white flex items-center justify-center cursor-pointer h-full">
                                                    <ImBin
                                                        onClick={() =>
                                                            deleteBrandItem(
                                                                index + 1
                                                            )
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ProductInfo
