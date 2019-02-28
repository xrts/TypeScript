// 函数声明（Function Declaration）
function sum(x, y) {
    return x + y;
}

// 函数表达式（Function Expression）
let mySum = function (x, y) {
    return x + y;
};

// 函数声明 ts需要考虑输入和输出,输入多余或少于要求都报错
function sum(x: number, y:number): number {
    return x + y;
}

// 函数表达式 ts
let mySum = function (x: number, y: number): number {
    return x + y;
};
// 上面的代码只对等号右侧的匿名函数进行了类型定义,而等号左边的mysum,是通过赋值操作进行类型推断出来的,如果需要我们手动给mysum添加类型,应该如下
let mySum: (x: number, y:number) => number = function(x:number, y:number): number {
    return x +y;
};

// 用接口定义函数的形状
interface SearchFunc {
    (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    return source.search(subString) !== -1;
};

// 可选参数(可选参数必须接在必需参数后面)\
function buildName(firstName: string, lastName?: string) {
    if(lastName) {
        return firstName + ' ' + lastName;
    } else {
        return firstName;
    }
}
let tomcat = buildName('Tom', 'Cat');
let tom = buildName('Tom');

// 参数默认值 (ts会将添加了默认值的参数识别为可选参数)此时就不受「可选参数必须接在必需参数后面」的限制了
function buildName(firstName: string = 'Tom', lastName: string) {
    return firstName + ' ' + lastName;
}
let tomcat = buildName('Tom', 'Cat');
let cat = buildName(undefined, 'Cat');

// 剩余参数 ...rest
function push(array: any[], ...items: any[]) {
    items.forEach(function (item) {
        array.push(item);
    });
}
let a = [];
push(a,1,2,3);
// rest参数只能是最后一个参数

// 重载 (重载允许一个函数接受不同数量或类型的参数时,作出不同的处理)
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
    if(typeof  x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }else if(typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
//TypeScript 会优先从最前面的函数定义开始匹配，所以多个函数定义如果有包含关系，需要优先把精确的定义写在前面。