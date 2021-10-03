import i18next from 'i18next'

const LanguageSwitch = ({ white = true }) => {
    return (
        <span className="text-gray-900 flex  font-light">
            <span
                onClick={() => {
                    i18next.changeLanguage('en')
                }}
                className={`${
                    white && 'text-white'
                } hover:text-primary cursor-pointer  font-semibold`}
            >
                English 🇬🇧
            </span>
            <span className={`${white && 'text-white'} mx-4 font-bold`}>|</span>
            <span
                onClick={() => {
                    i18next.changeLanguage('sa')
                }}
                className={`${
                    white && 'text-white'
                } hover:text-primary cursor-pointer  font-semibold`}
            >
                عربي 🇸🇦
            </span>
        </span>
    )
}

export default LanguageSwitch
