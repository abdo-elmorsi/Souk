import axios from 'axios'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

function GetSingleProduct(slug) {
    const [currentProduct, setCurrentProduct] = useState(null)

    useEffect(() => {
        const getSingleProduct = async () => {
            try {
                const product = await axios.get(
                    `https://souk-team-server.herokuapp.com/api/product/${slug}`
                    // `https://souk-team-server.herokuapp.com/api/${slug}`
                )
                setCurrentProduct(product.data.data)
            } catch (e) {
                toast.error(e.message)
            }
        }
        getSingleProduct()
    }, [slug])

    return { currentProduct }
}

export default GetSingleProduct
