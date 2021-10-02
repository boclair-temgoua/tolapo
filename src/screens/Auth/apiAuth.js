import { Axios } from '../../utils'

class apiAuth {

  login(data) {
    return Axios.post(`/login`, data)
  }

  register(data) {
    return Axios.post(`/register`, data)
  }

  resetPassword(data) {
    return Axios.post(`/password/reset`, data)
  }

}

export default new apiAuth()