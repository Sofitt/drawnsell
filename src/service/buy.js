import http from '@/service/http'

export default {
  async getList() {
    let data = await http.get('pages/buy')

    return data
  },
  async getSingle(id) {
    let data = await http.get('pages/buy/'+id)

    return data
  }
}
