const Badge = ({ numberOfItems }) => {
    return (
        <span className="absolute -right-1 -top-1 rounded-full bg-red-700 w-4 h-4 text-white text-sm flex items-center justify-center">
            {numberOfItems}
        </span>
    )
}

export default Badge
