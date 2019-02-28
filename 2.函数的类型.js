// 函数声明（Function Declaration）
function sum(x, y) {
    return x + y;
}
// 函数表达式（Function Expression）
var mySum = function (x, y) {
    return x + y;
};
// 函数声明 ts需要考虑输入和输出,输入多余或少于要求都报错
function sum(x, y) {
    return x + y;
}
// 函数表达式 ts
var mySum = function (x, y) {
    return x + y;
};
// 上面的代码只对等号右侧的匿名函数进行了类型定义,而等号左边的mysum,是通过赋值操作进行类型推断出来的,如果需要我们手动给mysum添加类型,应该如下
var mySum = function (x, y) {
    return x + y;
};
var mySearch;
mySearch = function (source, subString) {
    return source.search(subString) !== -1;
};
// 可选参数(可选参数必须接在必需参数后面)
function buildName(firstName, lastName) {
    if (lastName) {
        return firstName + ' ' + lastName;
    }
    else {
        return firstName;
    }
}
var tomcat = buildName('Tom', 'Cat');
var tom = buildName('Tom');
// 参数默认值 (ts会将添加了默认值的参数识别为可选参数)此时就不受「可选参数必须接在必需参数后面」的限制了
function buildName(firstName, lastName) {
    if (firstName === void 0) { firstName = 'Tom'; }
    return firstName + ' ' + lastName;
}
var tomcat = buildName('Tom', 'Cat');
var cat = buildName(undefined, 'Cat');
// 剩余参数 ...rest
function push(array) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    items.forEach(function (item) {
        array.push(item);
    });
}
var a = [];
push(a, 1, 2, 3);
// rest参数只能是最后一个参数
