import axios from 'axios' //引入axios
// import qs from 'qs' //引入qs，用来序列化post类型的数据，否则后端无法接收到数据
// 设置post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.withCredentials = false;//在跨域请求时，不会携带用户凭证；返回的 response 里也会忽略 cookie

// 跨域基准地址
const BASE_URL = '/';  // 开发使用
// const BASE_URL = 'http://192.168.1.226:60002';
// const BASE_URL = ''  // 上线使用

//创建axios实例，请求超时时间为300秒
axios.defaults.baseURL = `${BASE_URL}`  // 这里直接写就行，后期有socket 的接口 再用 那个 create 创建 axios 的 实例对象使用
axios.defaults.timeout = 60 * 5000

//请求和响应拦截可以根据实际项目需求进行编写
// 请求发起前拦截
axios.interceptors.request.use((config) => {
//这里可以对接口请求头进行操作 如：config.headers['X-Token'] = token
    return config;
}, (error) => {
    // Do something with request error
    return Promise.reject(error)
})

// 响应拦截（请求返回后拦截）
axios.interceptors.response.use(response => {
    return response;
}, error => {
    return Promise.reject(error)
})

//按照请求类型对axios进行封装
function _axios(method, url, data, config) {
    /*
        将 axios 封装成一个方法
    */
    return new Promise((reslove, reject) => {
      if (method == 'get') {
        axios.get(url, {
          params: data,
          ...config,
        }).then((response) => {
          reslove(response)
        }).catch((response) =>{
          reject(response)
        })
      } else if (method == 'options') {
        axios.options(url, {
          params: data,
          ...config,
        }).then((response) => {
          reslove(response)
        }).catch((response) => {
          reject(response)
        })
      } else if (method == 'post') {
        axios.post(url,
        //     {
        // ...qs.stringify(data),
        // ...config,
        // }
            data
        ).then((response) => {
          reslove(response)
        }).catch((response) => {
          reject(response)
        })
      } else {
        axios({
          method,
          url,
          data,
          ...config
        }).then((response) => {
          reslove(response)
        }).catch((response) => {
          reject(response)
        })
      }
    })
  }
const api = {
    get: (url, data, config) => _axios('get', url, data, config),
    post: (url, data, config) => _axios('post', url, data, config),
    options: (url, data, config) => _axios('options', url, data, config),
    put: (url, data) => _axios('put', url, data),
    patch: (url, data) => _axios('patch', url, data),
    delete: (url, data) => _axios('delete', url, data),
    all: (requestArr) => axios.all(requestArr),
}

// 将 api 暴露出去之后，通过 api.get // api.post  调用对应的方法
export { api }
