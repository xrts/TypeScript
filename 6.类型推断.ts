// 类型推断
// 没有指定类型ts会推测出一个类型
let myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
// index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.

// 如果定义的时候没有赋值,不管之后有没有赋值,都会被推断为any类型不做类型检查
let myFavoriteNumber;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7; // 不报错