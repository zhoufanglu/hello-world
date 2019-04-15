//封装axios
import axios from 'axios'
import QS from 'qs'//// 引入qs模块，用来序列化post类型的数据
//vant toast提示组件
import { Toast } from 'vant'
import interceptors from '@/request/interceptors'

// 环境的切换
if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = ''
}
else if (process.env.NODE_ENV === 'debug') {
  axios.defaults.baseURL = ''
}
else if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = ''
}
//设置请求超时
axios.defaults.timeout = 10000 //10s

//post请求头设置
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

//封装get方法和post方法
/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    }).then(res => {
      resolve(res.data);
    }).catch(err => {
      reject(err.data)
    })
  });
}
/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, QS.stringify(params))
      .then(res => {
        resolve(res.data);
      })
      .catch(err =>{
        reject(err.data)
      })
  });
}
/*这里有个小细节说下，axios.get()方法和axios.post()在提交数据时参数的书写方式还是有区别的。
区别就是，get的第二个参数是一个{}，然后这个对象的params属性值是一个参数对象的。
而post的第二个参数就是一个参数对象。两者略微的区别要留意哦！*/


