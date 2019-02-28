//1、 类型 + 方括号 表示法
let fibonacci: number[] = [1,1,2,3,5];
// 数组的项目不允许出现其他的类型

// 2、数组泛型 （Array<number>)
let fibonacci: Array<number> = [1,1,2,3,5];

// 3、接口表示数组
interface NumberArray {
    [index: number]: number;
}
let fibonacci: NumberArray = [1,1,2,3,5];

// 用any表示数组中允许出现任意类型
let list: any[] = ['aa',25,{website:'m.zhuge.com'}];

// 类数组不是数组类型 arguments
function sum() {
    let args: number[] = arguments;
}
// index.ts(2,7): error TS2322: Type 'IArguments' is not assignable to type 'number[]'.
//   Property 'push' is missing in type 'IArguments'.
function sum() {
    let args: IArguments = arguments;//IArguments 内置接口
}