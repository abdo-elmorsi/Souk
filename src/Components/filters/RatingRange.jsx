import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { setRate } from '../../redux/slices/filterSlice'

const RatingRange = () => {
    const { t } = useTranslation()

    const dispatch = useDispatch()

    return (
        <div className="mb-10">
            <h3 className="font-semibold text-md uppercase mb-4">
                {t('ratings')}
            </h3>
            <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-4">
                    <input
                        onChange={() => dispatch(setRate(4))}
                        type="radio"
                        className="w-4 h-4 mx-auto"
                    />
                    <div className="flex items-center space-x-1">
                        {new Array(5).fill({}).map((item, index) => (
                            <span
                                key={`star-${index}`}
                                className={`text-sm ${
                                    index < 4
                                        ? 'text-yellow-400'
                                        : 'text-gray-300'
                                }`}
                            >
                                <FontAwesomeIcon icon={faStar} />
                            </span>
                        ))}
                        <span className="text-sm font-semibold">
                            {t('& more')}
                        </span>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <input
                        onChange={() => dispatch(setRate(3))}
                        type="radio"
                        className="w-4 h-4 mx-auto"
                    />
                    <div className="flex items-center space-x-1">
                        {new Array(5).fill({}).map((item, index) => (
                            <span
                                key={`star-${index}`}
                                className={`text-sm ${
                                    index < 3
                                        ? 'text-yellow-300'
                                        : 'text-gray-300'
                                }`}
                            >
                                <FontAwesomeIcon icon={faStar} />
                            </span>
                        ))}
                        <span className="text-sm font-semibold">
                            {t('& more')}
                        </span>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <input
                        onChange={() => dispatch(setRate(2))}
                        type="radio"
                        className="w-4 h-4 mx-auto"
                    />
                    <div className="flex items-center space-x-1">
                        {new Array(5).fill({}).map((item, index) => (
                            <span
                                key={`star-${index}`}
                                className={`text-sm ${
                                    index < 2
                                        ? 'text-yellow-300'
                                        : 'text-gray-300'
                                }`}
                            >
                                <FontAwesomeIcon icon={faStar} />
                            </span>
                        ))}
                        <span className="text-sm font-semibold">
                            {t('& more')}
                        </span>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <input
                        onChange={() => dispatch(setRate(1))}
                        type="radio"
                        className="w-4 h-4 mx-auto"
                    />
                    <div className="flex items-center space-x-1">
                        {new Array(5).fill({}).map((item, index) => (
                            <span
                                key={`star-${index}`}
                                className={`text-sm ${
                                    index < 1
                                        ? 'text-yellow-300'
                                        : 'text-gray-300'
                                }`}
                            >
                                <FontAwesomeIcon icon={faStar} />
                            </span>
                        ))}
                        <span className="text-sm font-semibold">
                            {t('& more')}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RatingRange
