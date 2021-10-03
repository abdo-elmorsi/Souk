import React from 'react'
import { useTranslation } from 'react-i18next'
import { ImBin } from 'react-icons/im'
import { FiEdit } from 'react-icons/fi'

const CategoriesTable = ({ categories, deleteCategory }) => {
    const { t } = useTranslation()

    const [checkedState, setCheckedState] = React.useState(
        new Array(categories.length).fill(false)
    )

    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        )
        setCheckedState(updatedCheckedState)
    }
    return (
        <>
            <table className="w-full border-collapse table-auto">
                <thead>
                    <tr className="border">
                        <td className=" flex-start text-md py-2 pl-4 font-semibold">
                            <div className="h-8 w-8 rounded-md cursor-pointer mx-2 border border-black"></div>
                        </td>
                        <td className="flex-start text-md py-2 pl-4 font-semibold">
                            <div className="flex items-center mx-3">
                                {t('Name')}
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
                    {categories.map((item, index) => (
                        <tr
                            className="border hover:bg-gray-500 text-gray-500 hover:text-white"
                            key={index}
                        >
                            <td className=" flex-start text-lg py-2 pl-4 ">
                                <div className="">
                                    <form className="relative flex items-center justify-cente mx-2">
                                        <input
                                            type="checkbox"
                                            id={`custom-checkbox-${index}`}
                                            name={item.title}
                                            value={item.title}
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
                                <div className="flex justify-center items-center">
                                    <div className="h-20 w-20 bg-gray-100 rounded">
                                        <img
                                            src="https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-icon-16.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="mx-3">{item}</div>
                                </div>
                            </td>
                            <td className="flex-start text-lg py-2 pl-4 ">
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
                                                    onClick={() =>
                                                        deleteCategory(
                                                            index + 1
                                                        )
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
        </>
    )
}

export default CategoriesTable
