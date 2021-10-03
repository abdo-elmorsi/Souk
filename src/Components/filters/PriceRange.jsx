import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { setMaxPrice, setMinPrice } from '../../redux/slices/filterSlice'

const PriceRange = () => {
    const [range, setRange] = useState(500)
    const min = 10

    const handleChange = (e) => {
        setRange(Number(e.target.value))
    }

    const { t } = useTranslation()

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(setMinPrice(min))
        dispatch(setMaxPrice(range))
    }

    return (
        <div className="relative w-full mb-10">
            <form onSubmit={handleSubmit}>
                <div className="flex justify-between items-center mb-4">
                    <h4 className="font-semibold uppercase">{t('Price')} $</h4>
                    <button className="bg-white border border-gray-400 py-1 rounded px-4">
                        {t('Apply')}
                    </button>
                </div>
                <div className="w-full mb-4">
                    <input
                        type="range"
                        min="10"
                        value={range}
                        onChange={(e) => handleChange(e)}
                        max="1200"
                        className="w-full bg-black"
                    />
                </div>
            </form>
            <div className="flex items-center justify-between space-x-2">
                <div className="bg-gray-200 w-20 text-center rounded py-2">
                    {min}
                </div>
                <p className="font-bold text-2xl">-</p>
                <div className="bg-gray-200 w-20 text-center rounded py-2">
                    {range}
                </div>
            </div>
        </div>
    )
}

export default PriceRange
