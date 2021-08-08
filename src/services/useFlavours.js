import useSWR from 'swr'
import api from './api'

export const useFlavour = () => {
  const { data, error } = useSWR(`/api/flavours/`, api)
  return {
    flavours: data?.data || [],
    isLoading: !error && !data,
    isError: error
  }
}

export default useFlavour;