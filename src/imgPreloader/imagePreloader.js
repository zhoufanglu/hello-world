//创建单个图片对象加载的方法
const imgPreloader = url => {
  return new Promise((resolve, reject) => {
    let image = new Image();
    image.onload = () => {
      resolve('图片加载成功');
    };
    image.onerror = () => {
      reject('图片加载出错');
    };
    image.src = url
  });
}

/*const imgs = [
  'http://119.45.53.85/img/1.jpg',
  'http://119.45.53.85/img/2.jpg'
]*/
/**
 *
 * @param imgs 图片路径数组
 * @returns {Promise<unknown[]>}
 */
const allImgPreloader = imgs => {
  console.log(25, imgs)
  let promiseArr = []
  imgs.forEach(src => {
    console.log(28, src)
    promiseArr.push(imgPreloader(src))
  })
  return Promise.all(promiseArr)
}

export default allImgPreloader
