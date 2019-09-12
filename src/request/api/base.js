/**
 * 接口域名的管理
 */
console.log(`当前环境:${process.env.NODE_ENV}`)
const base = {
  sq: 'https://xxxx111111.com/api/v1',
  bd: 'http://xxxxx22222.com/api',
  taobao:'https://suggest.taobao.com',
  api: '/api' //本地服务开发利用proxy内的代理访问
}

export default base;