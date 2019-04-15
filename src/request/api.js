//统一管理接口
import { get, post } from '@/request/http'

export const getStore = p => get('/api/sug', p);