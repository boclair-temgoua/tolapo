import axios from 'axios'
import { ENV_REACT_NATIVE_SERVER } from '@env'

export default axios.create({
  baseURL: `http://localhost:7000/api/v1`,
  headers: {
    "Content-type": "application/json"
  }
})