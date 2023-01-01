import axios from 'axios'
import { HOST_URI } from './config'

const getProducts = async () => {
  const { data } = await axios.get(`${HOST_URI}/api/products`)
  return data.filter(({ category }) => category.match(/clothing/))
}

const getProduct = async (id) => {
  const { data } = await axios.get(`${HOST_URI}/api/product/${id}`)
  return data
}

export { getProducts, getProduct }
