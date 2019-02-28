// 元组
// 数组合并了相同类型的对象, 而元组合并了不同类型的对象
// 定义一对值分别为 string 和 number 的元组
var xcatliu = ['Xcat Liu', 25];
// 当赋值或访问一个已知索引的元素时, 会得到正确的类型
var xcatliu;
xcatliu[0] = 'Xcat Liu';
xcatliu[1] = 25;
xcatliu[0].slice(1);
xcatliu[1].toFixed(2);
console.log(xcatliu);
// 也可以只赋值其中一项：
let xcatliu: [string, number];
xcatliu[0] = 'Xcat Liu';
// 但是当直接对元组类型的变量进行初始化或者赋值的时候，需要提供所有元组类型中指定的项。
let xcatliu: [string, number];
xcatliu = ['Xcat Liu', 25];

// 越界的元素: 当添加越界的元素时,它的类型会被限制为元组中每个类型的联合类型
let xcatliu: [string, number];
xcatliu = ['Xcat Liu', 25];
xcatliu.push('m.zhuge.com');
xcatliu.push(true);
// index.ts(4,14): error TS2345: Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
//   Type 'boolean' is not assignable to type 'number'.
