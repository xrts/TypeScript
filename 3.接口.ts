// 对象的类型--接口: 在ts中,我们使用接口( Interfaces )来定义对象的类型
// 在面向对象语言中,接口是一个很重要的概念, 它是对行为的抽象, 而具体如何行动需要由类( classes ) 去实现 ( implements )
// 对类的一部分行为进行抽象,对象的形状进行描述

interface Person {
    name: string;
    age: number;
}
let tom: Person = {
    name: 'Tom',
    age: 25
};

// 定义的变量比接口少一些属性 或 多一些属性都会报错,赋值的时候,变量的形状必须和接口的形状保持一致

// 可选属性: 有时我们希望不要完全匹配一个形状, 可以用可选属性,该属性可以不存在
{
    interface Person {
        name: string;
        age?: number;
    }
    let tom: Person = {
        name: 'Tom'
    }
}// 不报错

// 任意属性: 有时我们希望接口允许有任意的属性
{
    interface Person {
        name: string;
        age?: number;
        [propName: string]: any;
    }
    let tom: Person = {
        name: 'Tom',
        gender: 'male'
    };
}

// 一旦定义了任意属性,那么确定属性和可选属性都必须是它的子属性
{
    interface Person {
        name: string;
        age?: number;
        [propName: string]: string;
    }

    let tom: Person = {
        name: 'Tom',
        age: 25,
        gender: 'male'
    };
    // 年龄为number 类型,不属于任意属性的子属性,所以报错
    // index.ts(3,5): error TS2411: Property 'age' of type 'number' is not assignable to string index type 'string'.
    // index.ts(7,5): error TS2322: Type '{ [x: string]: string | number; name: string; age: number; gender: string; }' is not assignable to type 'Person'.
    //   Index signatures are incompatible.
    //     Type 'string | number' is not assignable to type 'string'.
    //       Type 'number' is not assignable to type 'string'.
}

// 只读属性: 有时候我们希望对象中的一些字段只能在创建的时候被赋值, 可以用 readonly 定义只读属性
{
    interface Person {
        readonly id: number;
        name:string;
        age?: number;
        [propName: string]: any;
    }
    let tom: Person = {
        id: 89757,
        name: 'Tom',
        gender: 'male'
    }
    tom.id = 9527 // 报错
    // index.ts(14,5): error TS2540: Cannot assign to 'id' because it is a constant or a read-only property.
}
// 只读的约束存在于第一次给对象赋值的时候, 而不是第一次给只读属性赋值的时候
{
    interface Person {
        readonly id: number;
        name: string;
        age?: number;
        [propName: string]: any;
    }

    let tom: Person = {
        name: 'Tom',
        gender: 'male'
    };

    tom.id = 89757;
    // 报错信息有两处，第一处是在对 tom 进行赋值的时候，没有给 id 赋值。
    // 第二处是在给 tom.id 赋值的时候，由于它是只读属性，所以报错了。
    // index.ts(8,5): error TS2322: Type '{ name: string; gender: string; }' is not assignable to type 'Person'.
    //   Property 'id' is missing in type '{ name: string; gender: string; }'.
    // index.ts(13,5): error TS2540: Cannot assign to 'id' because it is a constant or a read-only property.
}