// 基准大小
const baseSize = 32
// 设置 rem 函数
function setRem () {
  // 当前页面宽度相对于 750 宽的缩放比例，可根据自己需要修改。
  const scale = document.documentElement.clientWidth / 750
  let size = (baseSize * Math.min(scale, 2))
  console.log(8, size)
  if(size<12){
    size = 12
  }else if(size>50){
    size =50
  }
  // 设置页面根节点字体大小
  document.documentElement.style.fontSize = size + 'px'
}
// 初始化
setRem()
// 改变窗口大小时重新设置 rem
window.onresize = function () {
  setRem()
}