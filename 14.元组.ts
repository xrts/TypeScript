// 元组
// 数组合并了相同类型的对象, 而元组合并了不同类型的对象

// 定义一对值分别为 string 和 number 的元组
let xcatliu: [string, number] = ['Xcat Liu', 25];
// 当赋值或访问一个已知索引的元素时, 会得到正确的类型
let xcatliu: [string, number];
xcatliu[0] = 'Xcat Liu';
xcatliu[1] = 25;
xcatliu[0].slice(1);
xcatliu[1].toFixed(2);
console.log(xcatliu);