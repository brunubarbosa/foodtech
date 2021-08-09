import api from './api'

export const buy = (data) => api('/api/buy', {method: 'post', data});

export default buy;