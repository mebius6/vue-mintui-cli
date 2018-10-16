
import axios from 'axios';

import Config from '../config/Config'
axios.defaults.timeout = 5000;

axios.defaults.baseURL = Config.url;
// axios.defaults.withCredentials = true;

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

//http request 拦截器
axios.interceptors.request.use(
  config => {
    // const token = getCookie('名称');注意使用的时候需要引入cookie方法，推荐js-cookie

    config.data = JSON.stringify(config.data);
    config.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    }


    // if(token){
    //   config.params = {'token':token}
    // }

    NProgress.start()
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);


//http response 响应拦截器即异常处理
axios.interceptors.response.use(
  response => {

    NProgress.done()

    return response;
  },
  err => {
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          console.log('错误请求')
          break;
        case 401:
          console.log('未授权，请重新登录')
          break;
        case 403:
          console.log('拒绝访问')
          break;
        case 404:
          console.log('请求错误,未找到该资源')
          break;
        case 405:
          console.log('请求方法未允许')
          break;
        case 408:
          console.log('请求超时')
          break;
        case 500:
          console.log('服务器端出错')
          break;
        case 501:
          console.log('网络未实现')
          break;
        case 502:
          console.log('网络错误')
          break;
        case 503:
          console.log('服务不可用')
          break;
        case 504:
          console.log('网络超时')
          break;
        case 505:
          console.log('http版本不支持该请求')
          break;
        default:
          console.log(`连接错误${err.response.status}`)
      }
    } else {
      console.log('连接到服务器失败')
    }
    return Promise.resolve(err.response)
  }
)

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function get(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params,

    })
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err)
      })
  })
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err)
      })
  })
}

/**
* 封装patch请求
* @param url
* @param data
* @returns {Promise}
*/

export function patch(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.patch(url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err)
      })
  })
}

/**
* 封装put请求
* @param url
* @param data
* @returns {Promise}
*/

export function put(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.put(url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err)
      })
  })
}

/**
* 封装delete请求
* @param url
* @param data
* @returns {Promise}
*/

export function Delete(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.delete(url, data).then(response => {
      resolve(response.data);
    }, err => {
      reject(err);
    })
  })
}

