import axios from 'axios'

export const http = axios.create({
  baseURL: 'https://my-test-meals.herokuapp.com/'
})