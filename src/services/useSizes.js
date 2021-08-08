import useSWR from 'swr'
import api from './api'

export const useSizes = () => {
  const { data, error } = useSWR(`/api/sizes/`, api)
  return {
    sizes: data?.data || [],
    isLoading: !error && !data,
    isError: error
  }
}

export default useSizes;