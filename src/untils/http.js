import Vue from 'vue'
import axios from 'axios';
import { Indicator } from 'mint-ui';
Vue.use(Indicator);

import Config from '../config/Config'
axios.defaults.timeout = 5000;
axios.defaults.baseURL = Config.url;

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
    Indicator.open();
  
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);


//http response 拦截器
axios.interceptors.response.use(
  config => {
    // if(response.data.errCode ==2){
    //   router.push({
    //     path:"/login",
    //     querry:{redirect:router.currentRoute.fullPath}//从哪个页面跳转
    //   })
    // }
    Indicator.close();
 
    return config;
  },
  error => {
    return Promise.reject(error)
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
      params: params
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

