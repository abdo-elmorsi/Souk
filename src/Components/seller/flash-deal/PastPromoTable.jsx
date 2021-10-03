import { PromoTableHead } from './RecentPromoTable'

const PastPromoTable = () => {
    return (
        <table className="orders-table w-full flex flex-row flex-no-wrap border bg-white shadow border-gray-200 rounded-lg overflow-hidden my-5">
            <thead className="text-black">
                {new Array(5).fill({}).map((item, index) => (
                    <tr
                        key={`order-${index}`}
                        className="bg-teal-400 flex flex-col xl:border-none border flex-no-wrap xl:table-row rounded-l-lg xl:rounded-none mb-4 xl:mb-0"
                    >
                        {PromoTableHead.map((item, index) => (
                            <th
                                className="p-3 text-xs md:text-md xl:h-auto xl:py-3 h-12 text-left"
                                key={`${item}-${index}`}
                            >
                                {item}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody className="flex-1 xl:flex-none">
                {new Array(5).fill({}).map((item, index) => (
                    <tr
                        key={`item-${index}`}
                        className="flex flex-col flex-no-wrap xl:table-row mb-4 xl:mb-0 border"
                    >
                        <td className="border-grey-light border hover:bg-gray-100 text-xs md:text-md xl:h-auto xl:py-3 h-12 px-3">
                            0{index + 1}
                        </td>
                        <td className="border-grey-light flex items-center border hover:bg-gray-100 text-xs md:text-md xl:h-auto xl:py-3 h-12 px-3 ">
                            <div className="h-10 w-10 rounded bg-gray-100"></div>
                        </td>
                        <td className="border-grey-light border hover:bg-gray-100 text-xs md:text-md xl:h-auto xl:py-3 h-12 px-3">
                            Name-111
                        </td>
                        <td className="border-grey-light border hover:bg-gray-100 text-xs md:text-md p-3 xl:h-auto xl:py-3 h-12 truncate">
                            $ 524
                        </td>
                        <td className="border-grey-light border hover:bg-gray-100 text-xs md:text-md p-3 xl:h-auto xl:py-3 h-12 truncate">
                            15%
                        </td>
                        <td className="border-grey-light border hover:bg-gray-100 text-xs md:text-md p-3 xl:h-auto xl:py-3 h-12 truncate">
                            $ 266
                        </td>
                        <td className="border-grey-light border hover:bg-gray-100 text-xs md:text-md p-3 xl:h-auto xl:py-3 h-12 truncate">
                            14-06-2021 to 14-07-2021
                        </td>

                        <td className="border-grey-light border hover:bg-gray-100 text-xs md:text-md p-3 xl:h-auto xl:py-3 h-12 truncate">
                            Fashion Buy
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default PastPromoTable
