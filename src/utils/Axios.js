import axios from 'axios'
import { ENV_REACT_NATIVE_SERVER } from '@env'

export default axios.create({
  baseURL: `${ENV_REACT_NATIVE_SERVER}`,
  headers: {
    "Content-type": "application/json"
  }
})