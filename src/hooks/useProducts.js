import useSWR from 'swr'
import { fetcher } from '../helpers/fetcher'

export function useProducts(api) {
    const { data, error } = useSWR(api, fetcher)

    return {
        products: data,
        isLoading: !error && !data,
        isError: error,
    }
}
