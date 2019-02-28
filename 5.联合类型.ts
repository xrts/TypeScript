// 联合类型: 表示取值可以为多种类型中的一种
 let myFavoriteNumer: string | number;
myFavoriteNumer = 'seven';
myFavoriteNumer = 7;

// 访问联合类型的属性或方法
// 当ts不确定一个联合类型的变量到底是哪个类型的时候,我们只能访问此联合类型的所有类型里共有的属性或方法
function getLength(something: string | number): number {
    return something.length;
}
// index.ts(2,22): error TS2339: Property 'length' does not exist on type 'string | number'.
//   Property 'length' does not exist on type 'number'.

// 联合类型的变量在被赋值的时候, 会根据类型推论的规则推断出一个类型
{
    let myFavoriteNumber: string | number;
    myFavoriteNumer = 'seven';
    console.log(myFavoriteNumer.length); // 5
    myFavoriteNumer = 7;
    console.log(myFavoriteNumer.length); // 报错
}

