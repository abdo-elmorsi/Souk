import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import EmptyWish from '../../Components/wishlist/EmptyWish'
import WishItem from '../../Components/wishlist/WishItem'
import useScrollTop from '../../hooks/useScrollTop'

const Wishlist = () => {
    const { t } = useTranslation()
    const wishlist = useSelector((state) => state.wishlist)
    useScrollTop()

    return (
        <section className="py-20">
            <div className="max-w-screen-lg mx-auto px-2">
                <h3 className="font-semibold text-4xl text-center mb-10 text-primary">
                    {t('wishlist')}
                </h3>
                {wishlist.length <= 0 && <EmptyWish />}
                {wishlist.length > 0 && (
                    <>
                        <div className="md:grid justify-items-center grid-cols-6   hidden">
                            <div></div>
                            <div></div>
                            <div></div>
                            <h4 className="font-bold  uppercase text-md ">
                                {t('Unit')} {t('Price')}
                            </h4>
                            <h4 className="font-bold  uppercase text-md">
                                {t('stock status')}
                            </h4>
                        </div>
                        <div className="h-0.5 mt-4 mb-6 w-full bg-gray-100" />
                        <div>
                            {wishlist.map((product) => (
                                <div
                                    key={product.id}
                                    className="mb-6 border-b-2 border-gray-100 pb-4"
                                >
                                    <WishItem product={product} />
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </section>
    )
}

export default Wishlist
