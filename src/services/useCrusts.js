import useSWR from 'swr'
import api from './api'

export const useCrusts = () => {
  const { data, error } = useSWR(`/api/crusts/`, api)
  return {
    crusts: data?.data,
    isLoading: !error && !data,
    isError: error
  }
}

export default useCrusts;