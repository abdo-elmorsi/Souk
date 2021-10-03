const WishlistDetails = () => {
    return (
        <div className="grid grid-cols-6 gap-2 items-center justify-items-center border-b-2 border-gray-100 pb-4 mb-6">
            <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-gray-200"></div>
                <h3 className="font-bold capitalize mx-2">Tuscon</h3>
            </div>
            <p className="col-span-2 text-sm">basketball</p>
            <p>sport & gym</p>
            <p>wensday 16</p>
            <p>$1872</p>
        </div>
    )
}

export default WishlistDetails
