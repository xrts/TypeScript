let isDone: boolean = false;
let decLiteral: number = 5;
let myName:string = 'Tom';
let myAge: number= 25;
let sentence : string = `Hello, my name is ${myName}.
I'll be ${myAge +1} years old next month`;
// 空值 ,ts中用void表示没有任何返回值的函数
function alerName(): void {
    alert('My name is Tom');
}
// 声明一个void类型的变量没有什么用,因为你只能将它赋值为 undefined 和 null
// 可以用null 和 undefined 定义这两个原始数据类型
let u: undefined = undefined;
let n : null = null;
// undefined 和 null 是所有类型的子类型,可以赋值给所有类型
let num: number = undefined;