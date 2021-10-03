import React from 'react'
import { useTranslation } from 'react-i18next'
import { ImBin } from 'react-icons/im'
import { FiEdit } from 'react-icons/fi'

const TableBrowsePg = ({ products, deleteProduct }) => {
    const { t } = useTranslation()

    const [checkedState, setCheckedState] = React.useState(
        new Array(products.length).fill(false)
    )

    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        )
        setCheckedState(updatedCheckedState)
    }

    return (
        <div>
            <table className="w-full border-collapse table-auto">
                <thead>
                    <tr className="border">
                        <td className="flex-start text-md py-2 pl-4">
                            <div className="flex justify-center items-center font-semibold">
                                <div className="rounded-md h-8 w-8 cursor-pointer mx-2 border border-black"></div>
                            </div>
                        </td>
                        <td className="flex-start text-md py-2 pl-4">
                            <div className="flex items-center font-semibold">
                                {t('Name')}
                            </div>
                        </td>
                        <td className="flex-start text-md py-2 pl-4">
                            <div className="flex justify-center items-center font-semibold">
                                {t('Infos')}
                            </div>
                        </td>
                        <td className="flex-start text-md py-2 pl-4">
                            <div className="flex justify-center items-center font-semibold">
                                {t('Total_in_stock')}
                            </div>
                        </td>
                        <td className="flex-start text-md py-2 pl-4">
                            <div className="flex justify-center items-center font-semibold">
                                {t('Options')}
                            </div>
                        </td>
                    </tr>
                </thead>

                <tbody>
                    {products.map((item, index) => (
                        <tr
                            className="border hover:bg-gray-500 text-gray-500 hover:text-white"
                            key={index + 1}
                        >
                            <td className="flex-start text-lg py-2 pl-4">
                                <div className="">
                                    <form className="relative flex items-center justify-center">
                                        <input
                                            type="checkbox"
                                            id={`custom-checkbox-${index}`}
                                            name={item.name}
                                            value={item.name}
                                            checked={checkedState[index]}
                                            onChange={() =>
                                                handleOnChange(index)
                                            }
                                            className="bg-white absolute opacity-0 cursor-pointer h-8 w-8 z-10"
                                        />
                                        <span className="bg-white absolute cursor-pointer h-8 w-8 z-0 rounded-md border border-violetBlack"></span>
                                    </form>
                                </div>
                            </td>
                            <td className="flex items-center flex-start text-xs py-2 pl-4">
                                <div className="flex justify-center items-center rounded">
                                    <div>
                                        <img
                                            src={item.images}
                                            className="h-20 w-20 bg-gray-200 rounded"
                                            alt=""
                                        />
                                    </div>
                                    <div className="mx-2">{item.name}</div>
                                </div>
                            </td>
                            <td className="flex-start text-xs py-2 pl-4">
                                <div className="flex flex-col items-center justify-center">
                                    <div className="">
                                        {t('Total_sales')}: {item.originalPrice}{' '}
                                        {t('items')}
                                    </div>
                                    <div className="">
                                        {t('Base_Price')}: ${item.originalPrice}
                                        .00
                                    </div>
                                    <div className="">
                                        {t('Rating')}: {item.rating}
                                    </div>
                                </div>
                            </td>
                            <td className="flex-start text-xs py-2 pl-4">
                                <div className="flex justify-center items-center">
                                    {item.rating.count}
                                </div>
                            </td>
                            <td className="flex-start text-lg py-2 pl-4">
                                <div className="flex items-center justify-center">
                                    {checkedState[index] ? (
                                        <div className="bg-gray-200 mx-2 rounded-full h-10 w-10 hover:bg-blueDB trans">
                                            <div className="text-blueDB hover:text-white flex items-center justify-center cursor-pointer h-full">
                                                <FiEdit />
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="bg-gray-200 mx-2 rounded-full h-10 w-10">
                                            <div className="text-gray-500 flex items-center justify-center cursor-pointer h-full">
                                                <FiEdit />
                                            </div>
                                        </div>
                                    )}
                                    {checkedState[index] ? (
                                        <div className="bg-gray-200 hover:bg-red-500 mx-0.5 rounded-full h-10 w-10">
                                            <div className="text-red-500 hover:text-white flex items-center justify-center cursor-pointer h-full">
                                                <ImBin
                                                    onClick={
                                                        () =>
                                                            deleteProduct(
                                                                index + 1
                                                            )
                                                        // deleteProduct(item.id)
                                                    }
                                                />
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="bg-gray-200 mx-0.5 rounded-full h-10 w-10">
                                            <div className="text-gray-500 flex items-center justify-center cursor-pointer h-full">
                                                <ImBin />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TableBrowsePg
