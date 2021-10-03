const SellerSaleTable = () => {
    return (
        <table className="small-table w-full flex flex-row flex-no-wrap border bg-white shadow border-gray-200 rounded-lg overflow-hidden my-5">
            <thead className="text-black">
                {new Array(10).fill({}).map((item, index) => (
                    <tr
                        key={`order-${index}`}
                        className="bg-teal-400 flex flex-col flex-no-wrap border lg:table-row rounded-l-lg lg:rounded-none mb-4 lg:mb-0"
                    >
                        {[
                            'order',
                            'seller name',
                            'shop name',
                            'order amount',
                        ].map((item, index) => (
                            <th
                                className="px-3 h-12 text-left"
                                key={`${item}-${index}`}
                            >
                                {item}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody className="flex-1 lg:flex-none">
                {new Array(10).fill({}).map((item, index) => (
                    <tr
                        key={`item-${index}`}
                        className="flex flex-col flex-no-wrap border lg:table-row mb-4 lg:mb-0"
                    >
                        <td className="border-grey-light h-12 border hover:bg-gray-100 px-3 ">
                            <span>0{index + 1}</span>
                        </td>
                        <td className="border-grey-light h-12  border hover:bg-gray-100 px-3 ">
                            Hyakuya Mickayla
                        </td>
                        <td className="border-grey-light h-12 border hover:bg-gray-100 px-3">
                            electro planet
                        </td>
                        <td className="border-grey-light h-12 border  hover:bg-gray-100 px-3">
                            $2300.00
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default SellerSaleTable
