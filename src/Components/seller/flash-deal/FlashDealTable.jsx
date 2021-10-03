const FlashDealTable = () => {
    return (
        <table className="small-table w-full flex flex-row flex-no-wrap border bg-white shadow border-gray-200 rounded-lg overflow-hidden my-5">
            <thead className="text-black">
                {new Array(5).fill({}).map((item, index) => (
                    <tr
                        key={`order-${index}`}
                        className="bg-teal-400 flex flex-col flex-no-wrap border lg:table-row rounded-l-lg lg:rounded-none mb-4 lg:mb-0"
                    >
                        {['number', 'product name', 'options'].map(
                            (item, index) => (
                                <th
                                    className=" h-12 px-3 text-left"
                                    key={`${item}-${index}`}
                                >
                                    {item}
                                </th>
                            )
                        )}
                    </tr>
                ))}
            </thead>
            <tbody className="flex-1 lg:flex-none">
                {new Array(5).fill({}).map((item, index) => (
                    <tr
                        key={`item-${index}`}
                        className="flex flex-col flex-no-wrap border lg:table-row mb-4 lg:mb-0"
                    >
                        <td className="border-grey-light border hover:bg-gray-100  h-12 px-3">
                            0 {index + 1}
                        </td>
                        <td className="border-grey-light border hover:bg-gray-100  h-12 px-3 ">
                            Canon Camera
                        </td>
                        <td className="border-grey-light border hover:bg-gray-100  h-12 px-3 ">
                            123
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default FlashDealTable
