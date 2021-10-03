import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useTranslation } from 'react-i18next'

const Search = () => {
    const { t } = useTranslation()

    return (
        <form className="lg:flex lg:space-x-4 grid grid-cols-5 sm:gap-4 gap-2">
            <div className="relative sm:col-span-4 col-span-3">
                <input
                    type="text"
                    className="min-w-full shadow-lg search-input  bg-white px-12 font-light rounded-sm py-3 max-w-full"
                    placeholder={t('Look_For_Anything_You_Want')}
                />
                <span className="absolute top-1/2 left-3 text-2xl text-black transform -translate-y-1/2">
                    <FontAwesomeIcon icon={faSearch} />
                </span>
            </div>
            <button
                type="submit"
                className="font-semibold shadow-lg sm:col-span-1 col-span-2 text-md px-10 py-3 bg-white hover:bg-secondary hover:text-white rounded-sm"
            >
                {t('Search')}
            </button>
        </form>
    )
}

export default Search
