function sayHello (name:string){
    return `hello ${name}`
}


let isDone:boolean = false

let number:number = 1

let string:string = 'xx'

let sentence:string = `name is ${string},age is ${number}`
//console.log(sentence)
function foo():boolean{
    return false
}

let anyValue
anyValue = 123
anyValue = foo()
anyValue = {}
//console.log(Object.prototype.toString.call(anyValue))

let unionValue:(string|number) = 'xxx'
unionValue = 123
//console.log(unionValue = 222)

//接口
interface Person {
    readonly name:string,
    age:number,
    sex?: string,
    line?:any
}
let lufangzhou:Person = {
    name:'lfz',
    age: 16,
    sex: 'men',
    line:'167cm'
}
let arr: Array<any> = [
    {name:'xxx'},
    {name:'yyy'}
]

function testFoo():number{
    return 111
}
console.log(testFoo())


