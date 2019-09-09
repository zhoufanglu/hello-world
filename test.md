## mvvm
m:model 数据模型
v:view 视图
viewModel  数据与视图直接的桥梁
双向绑定，数据驱动视图，只要关注数据的变化即可

vue2  Object.defineProperty  //无法监听数组
vue3.0 Proxy


## 生命周期
创建前后,create
加载前后,mounted
更新前后 update
销毁前后 destory



## 路由
router
params & query传参

路由守卫  1、全局Router.beforeEach
             全局Router.afterEach
          2、单独路由守卫
            (to,from,next)

## 闭包 closure
数据私有化
函数内返回函数
可以访问外部变量
对象一直存在于内存中
```js
function foo(){
    var a = 10
    return function(){
        a= a*10
        return a
    }
}

var bar = foo()
bar()//100
bar()//1000
```


## 浅拷贝
对象 Object.assign({},obj)
数组 [...]
## 深拷贝
JSON.stingFly()

## 虚拟dom
原本的dom对象有很多属性
虚拟dom操作快

## Set --集合
不能重复的一个集合,里面是数组
new Set([1,2,2,3]) //Set({1,2,3})



## 数组降维
```js
[1,2,3,[1,2,3,[1,2]],11].flat(Invinity)
```

## pdd
1、css中的水平居中的不同方式
    * flex 布局
    * position:absolute，定位
2、css中的伪类：before与after
   * 定义元素前后 的内容。
   * 移动端1像素边框需要用到这个
4、有做过H5，移动端的页面吗？
   rem代替px  px2rem
   字体随屏幕大小变换
   css自动前缀
5、media-query用过吗？
媒体查询 @media
6、用的ES6的语法吗？
const let
箭头函数
...扩展运算符
解构赋值
Set Map数组格式
Proxy
Promise
async await
Module
Class


7、promise是什么意思？
解决地狱回调
增加代码的可读性
ajax 封装 promise
```js
 return new Promise((resolve,reject)=>{
    ajax.put(
        url,
        params
    ).then((res)=>{
        resolve(res)
    }，err=>{
        reject(err)
    )
 })

```


8、后台拿数据是使用什么？原生的ajax对象了解吗？原生的ajax用promise封装一下要怎么做？
13、git常用命令，git rebase用过吗？

---




6、js如何实现继承？
es5原型继承
es6
```js
    class Person{
        constructor(name,age){
            this.name = name
            this.age = age
        }
    }
    let person1 = new Person('lfz',18)

    class extend Person{
        constructor(name,age,sex){
            supper(name,age)
            this.sex = sex
        }
    }

```

7、new这个操作做了哪些事情？
 * 新建了一个对象
 * 对象的this指向这个新对象
 * 添加属性
 * 返回新对象

 ```js
  var obj = new Base()

  var obj = {}
  obj._proto_ = Base.prototype
  Base.call(obj)
  return obj
 ```
 [连接](https://www.jianshu.com/p/fdb475ebee85)

8、js的基本数据类型和引用数据类型分别有哪些？有什么区别？
基本数据类型
null undefind Number String Boolean Symbol
引用数据类型 Array Object  Function




12、js的垃圾回收机制


13、假设现在有一个数组，长度是99位，元素是1-100里边的值，数组是无序的也是不重复的，怎么快速的去找到这个数组和1-100相比缺的元素？（没答上来）



16、css的position有哪些属性值？分别是相对于谁定位的？
fix html
absolute 父元素
relative 自己


17、IE盒模型和W3C盒模型有什么区别？css3中要怎么设置？


19、ES6中的let和const与var的区别？
var 变量提升
let 在区域块内不可以重复声明 是变量
const 声明的是常量







![f3a850e845cc03ffc5591810b114f03d.png](en-resource://database/1234:1)


## 原型



## keep-alive
数据缓存
include 缓存子组件
exclude 不缓存子组件

## ajax请求步骤

1、创建一个XMlHttpRequest
2、创建htpp,url,方式
3、发送http连接
4、返回数据
5、渲染数据
