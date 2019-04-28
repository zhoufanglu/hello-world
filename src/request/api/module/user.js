/**
 *用户模块
 */
import base from '../base'; // 导入接口域名列表
import axios from '@/request/http'; // 导入http中创建的axios实例
import qs from 'qs'; // 根据需求是否导入qs模块

const user = {
  login(params){
    return axios.post(
      '/login',
      params
    )
  }
}
export default user