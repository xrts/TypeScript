// 类型断言: 手动指定一个值的类型
// <类型>值    or    值 as 类型(在tsx语法中必须用这一种)
function getLength(something) {
    if (something.length) {
        return something.length;
    }
    else {
        return something.toString().length;
    }
}
// 类型断言不是类型转换，断言成一个联合类型中不存在的类型是不允许的
