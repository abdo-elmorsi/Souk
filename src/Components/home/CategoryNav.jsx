// import {
//     faTshirt,
//     faCouch,
//     faBolt,
//     faCar,
//     faTractor,
//     faBook,
//     faDumbbell,
//     faRandom,
//     faGraduationCap,
//     faCarBattery,
//     faBlender,
//     faDesktop,
// } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const CategoryNav = ({ categories }) => {
    const { t } = useTranslation()

    // const categories = [
    //     { name: 'Fashion', icon: faTshirt },
    //     { name: 'Furniture', icon: faCouch },
    //     { name: 'Electronics', icon: faCarBattery },
    //     { name: 'Cookers', icon: faBlender },
    //     { name: 'Electrical', icon: faBolt },
    //     { name: 'Car', icon: faCar },
    //     { name: 'Computer', icon: faDesktop },
    //     { name: 'Agric', icon: faTractor },
    //     { name: 'E-book', icon: faBook },
    //     { name: 'School', icon: faGraduationCap },
    //     { name: 'Sport_&_Gym', icon: faDumbbell },
    //     { name: 'Bike_&_Bicycle', icon: faDumbbell },
    //     { name: 'Others', icon: faRandom },
    // ]
    return (
        <ul className="flex justify-between flex-col  space-y-6">
            {categories?.length > 0 &&
                categories.slice(0, 13).map(({ name, _id, slug }, index) => (
                    <li
                        key={_id}
                        className="font-semibold text-md hover:scale-110 transform transition-all"
                    >
                        {/* <NavLink
                        className="hover:text-primary text-gray-600"
                        to={`/shop/${name}`}
                    >
                        <span className=" mx-2">
                            <FontAwesomeIcon icon={icon} />
                        </span>
                        <span>{t(`${name}`)}</span>
                    </NavLink> */}
                        <Link
                            className="hover:text-primary text-gray-600"
                            to={`/shop/${slug}`}
                        >
                            {/* <span className=" mx-2">
                            <FontAwesomeIcon icon={icon} />
                        </span> */}
                            <span>{t(`${name}`)}</span>
                        </Link>
                    </li>
                ))}
        </ul>
    )
}

export default CategoryNav
