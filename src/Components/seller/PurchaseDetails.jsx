const PurchaseDetails = () => {
    return (
        <div className="grid grid-cols-7 gap-2 items-center justify-items-center border-b-2 border-gray-100 pb-4 mb-6">
            <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-gray-200"></div>
                <h3 className="font-bold capitalize mx-2">Tuscon</h3>
            </div>
            <p className="col-span-2 text-sm">
                28378, Toyota street, hokaido japan
            </p>
            <p>98787676</p>
            <p>wensday 16</p>
            <p>$1872</p>
            <div className="px-4 bg-blue-100 py-1 rounded-full">
                <h4>Pending</h4>
            </div>
        </div>
    )
}

export default PurchaseDetails
