import axios from 'axios'

const API_URL = 'https://serene-ocean-15499.herokuapp.com/api/v1'

export function fetchArticles() {
  let request = axios({
    method: 'get',
    url: `${API_URL}/articles`,
    headers: []
  })

  return request
}