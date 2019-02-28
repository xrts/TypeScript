// 任意值用来表示允许赋值为任意类型
// 任意值可以修改,可以访问任何属性
{
    let anyThing: any = 'hello';
    console.log(anyThing.myName);
    console.log(anyThing.myName.firstName);
}
// 也允许调用任何方法
{
    let anyThing: any = 'Tom';
    anyThing.setName('Jerry');
    anyThing.setName('Jerry').sayHello();
    anyThing.myName.setFirstName('Cat');
}
// 声明一个变量为任意值之后,对它的任何操作,返回的内容的类型都是任意值

// 未声明类型的变量 === any

