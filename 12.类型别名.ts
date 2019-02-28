// 类型别名: 我们使用 type 创建类型别名
type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
    if (typeof  n === 'string') {
        return n;
    } else {
        return n();
    }
}