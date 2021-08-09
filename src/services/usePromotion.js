import useSWR from 'swr'
import api from './api'

export const usePromotion = () => {
  const { data, error } = useSWR(`/api/promotion/`, api)
  return {
    promotion: data?.data?.item,
    isLoading: !error && !data,
    isError: error
  }
}

export default usePromotion;