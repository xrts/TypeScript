// 声明文件: 当使用第三方库时,我们需要引入它的声明文件

// 声明语句 JQ
declare  var jQuery: (selector: string) => any;
jQuery('#foo');
//declare 定义的类型只会用于编译时的检查，编译结果中会被删除。

// 声明文件: 通常把类型声明放在一个单独的文件中,就是声明文件
// jQuery.d.ts (我们约定声明文件以 .d.ts 为后缀)
declare var jQuery: (string) => any;
// 然后在使用到的文件的开头，用「三斜线指令」表示引用了声明文件：
/// <reference path="./jQuery.d.ts" />
jQuery('#foo');

// 第三方声明文件
//@types 的使用方式很简单，直接用 npm 安装对应的声明模块即可，以 jQuery 举例：
// npm install @types/jquery --save-dev