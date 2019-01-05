import axios from 'axios'
import { Message } from 'element-ui'
import router from '../router/index'
import global from '@/globalData.js'
import qs from 'qs'; // 序列化post类型的数据

axios.defaults.timeout = 10000
axios.defaults.baseURL = global.apiUrl
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'

// http request 拦截器
// post传参序列化
axios.interceptors.request.use(
  config => {
    if (config.method === 'post') {
      if (config.headers['Content-Type'] !== 'application/json') {
        config.data = qs.stringify(config.data)
      }
    }
    return config
  }, (error) => {
    return error
  }
)
// http response 拦截器
axios.interceptors.response.use(
  response => {
    if (response.status !== 200) {
      Message({
        showClose: true,
        message: response.data.returnMsg,
        type: 'error'
      })
      return false
    }
    return response
  }, (error) => {
    Message({
      showClose: true,
      message: '网络错误，请联系后台管理员',
      type: 'error'
    })
    return error
  }
)

function configBaseInfo () {
  const login = JSON.parse(localStorage.getItem('login'))
  const headers = {
    token: login ? login.token : '',
    authorization: '136402a521d05971'
  }
  return {
    headers: headers,
    login: login
  }
}
// 网络请求模版
axios.comAjax = function (obj) {
  // get和post传参有区分
  let data = null
  if (!obj.method || obj.method.toLowerCase() === 'get') {
    data = {
      params: obj.data
    }
  } else {
    data = {
      data: obj.data
    }
  }
  //Object.assign(目标对象， 源对象) 源对象会覆盖掉目标对象已有的参数  ====返回目标对象
  const base = configBaseInfo()
  return axios(Object.assign({
    method: obj.method || 'get',
    url: global.apiUrl + obj.url,
    headers: Object.assign(base.headers, obj.headers)
  }, data)).then(res => {
    if (res.data.returnCode === '000000') {
      // 000000正常返回
      return res
    } else if (res.data.returnCode === '000001' || res.data.returnCode === '000002') {
      // 未认证，重新登陆
      router.push('/login')
    } else {
      Message({
        showClose: true,
        message: res.data.returnMsg,
        type: 'error'
      })
      return new Promise((resolve, reject) => {})
    }
  }, rej => {
    if (rej.status === 500) {
      router.push('/500')
    } else {
      return new Promise((resolve, reject) => {})
    }
  }).catch(err => {
    if (error.message && error.message.indexOf('timeout') !== -1) {
      Message({
        showClose: true,
        message: '请求超时，请重试',
        type: 'error'
      })
    } else {
      Message({
        showClose: true,
        message: '网络错误，请联系后台管理员',
        type: 'error'
      })
    }
  })
}

export default axios

// export default {
//   get(url, params) {
//     return new Promise((resolve, reject) => {
//       axios.get(url, {
//         params: params 
//       }).then(res => {
//         resolve(res.data)
//       }).catch(err => {
//         reject(err.data)
//       })
//     })
//   },
//   post(url, params) {
//     return new Promise((resolve, reject) => {
//       axios.post(url, qs.stringify(params)).then(res => {
//         resolve(res.data);
//       }).catch(err =>{
//         reject(err.data)
//       })
//     })
//   }
// }