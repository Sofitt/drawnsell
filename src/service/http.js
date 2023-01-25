import axios from 'axios'

const host = 'http://localhost:8000/'

export default {
  // host/
  async get(path) {
    let { data } = await axios.get(host+path)

    return data
  }
}
