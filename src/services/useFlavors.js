import useSWR from 'swr'
import api from './api'

export const useFlavor = () => {
  const { data, error } = useSWR(`/api/flavors/`, api)
  return {
    flavors: data?.data || [],
    isLoading: !error && !data,
    isError: error
  }
}

export default useFlavor;