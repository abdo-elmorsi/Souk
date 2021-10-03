import React from 'react'

const ShipmentTable = () => {
    const ShipmentTableHead = [
        'customer',
        'CPO Ref',
        'CPO',
        'Order date',
        'city',
        'SKU',
        'Product',
        'unit',
        'qty',
        'ship date',
        'cost',
    ]
    return (
        <table className="orders-table w-full flex flex-row flex-no-wrap border bg-white shadow border-gray-200 rounded-lg overflow-hidden my-5">
            <thead className="text-black">
                {new Array(12).fill({}).map((item, index) => (
                    <tr
                        key={`order-${index}`}
                        className="bg-teal-400 flex flex-col xl:border-none border flex-no-wrap xl:table-row rounded-l-lg xl:rounded-none mb-4 xl:mb-0"
                    >
                        {ShipmentTableHead.map((item, index) => (
                            <th
                                className="p-3 h-12 capitalize text-left"
                                key={`${item}-${index}`}
                            >
                                {item}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody className="flex-1 xl:flex-none">
                {new Array(12).fill({}).map((item, index) => (
                    <tr
                        key={`item-${index}`}
                        className="flex flex-col flex-no-wrap xl:table-row mb-4 xl:mb-0 border"
                    >
                        <td className="border-grey-light border hover:bg-gray-100 h-12 p-3">
                            Katsura Kotaro
                        </td>
                        <td className="border-grey-light border hover:bg-gray-100 p-3 h-12 truncate">
                            1092
                        </td>
                        <td className="border-grey-light border hover:bg-gray-100 p-3 h-12 truncate">
                            6
                        </td>
                        <td className="border-grey-light border hover:bg-gray-100 p-3 h-12 truncate">
                            2021-06-12
                        </td>
                        <td className="border-grey-light border hover:bg-gray-100 p-3 h-12 truncate">
                            Tokyo
                        </td>
                        <td className="border-grey-light border hover:bg-gray-100 p-3 h-12 truncate">
                            component1
                        </td>
                        <td className="border-grey-light border hover:bg-gray-100 p-3 h-12 truncate">
                            Tablet
                        </td>
                        <td className="border-grey-light border hover:bg-gray-100 p-3 h-12 truncate">
                            N/A
                        </td>
                        <td className="border-grey-light border hover:bg-gray-100 p-3 h-12 truncate">
                            2.00
                        </td>
                        <td className="border-grey-light border hover:bg-gray-100 p-3 h-12 truncate">
                            2021-08-12
                        </td>
                        <td className="border-grey-light border hover:bg-gray-100 p-3 h-12 truncate">
                            $239.00
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default ShipmentTable
