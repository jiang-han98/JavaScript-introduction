3.1语法

3.1.1区分大小写

3.1.2标识符
1.第一个字符必须是一个字母、下划线(_)或美元符号($)
2.其他字符可以是字母、下划线、美元符号或数字

ECMAScript采用驼峰大小写格式， 第一个字母小写，剩下的每个单词的首字母大写

3.1.3注释

3.1.4严格模式
一些不确定的行为将得到处理，对于不安全的操作会抛出错误
启用严格模式，在顶部添加如下代码
"use strict"
或
function doSomething() {
  "use strict";
  //函数体
}

3.1.5语句
分号结尾
可以使用{}把多行代码组合到一个代码块中
在条件控制语句中，即使代码块中只有一条语句，也最好使用{}

3.2关键字和保留字

3.3变量
var
var message;   //此时message保存undefined
不建议修改变量所保存的类型，但这种操作可行
定义在 如：函数 中的局部变量，使用var定义的变量，这个变量在函数退出后就会被销毁
省略var 会定义一个全局变量，如：
function test() {
  message = "hi"l;
}
只要调用过一次test()函数，这个变量就有了定义，就可以在函数外部的任何地方被访问到。
但不推荐省略var:
1.在局部作用域定义的全局变量很难维护
2.由于相应变量不会马上就有定义而导致不必要的混乱
3.在严格模式下，会抛出错误
在严格模式下，不能定义名为eval或arguments的变量，否则会导致错误

3.4数据类型
ECMAScript有五种基本数据类型：Undefined、Null、Bollean、Number和String
            一种复杂数据类型：Object

3.4.1 typeof操作符
检测给定变量的数据类型。

undefined————未定义
boolean————布尔值
string————字符串
number————数值
object————对象或null
function————函数

var message = "some string";
alert(typeof message);         //string
alert(typeof (message));       //string

typeof是一个操作符而不是函数，因此圆括号可以使用，但不是必须的
有时typeof会返回一些技术上正确但会误导人的值：
1.typeof null 会返回object    因为null被认为是一个空的字符引用
2.typeof 正则表达式 在Safari5及之前版本、Chrome及之前版本会返回“function” 其他浏览器会返回“object”

3.4.2 undefined类型
在使用var声明变量但未对其初始化时，这个变量的值就是undefined
未初始化的变量自动被赋予undefined值，但最好先显式声明

3.4.3 null类型
空对象指针
typeof操作符检测null会返回object
如果变量要保存对象， 最好用null初始化变量  因为 只要直接检查null值就可以知道是否已经保存了对象的引用

undefined值是派生自null值的
所以alert（null == undefined）   //true

3.4.4Bollean类型
只有两个字面值：true false  且区分大小写
这两个值不等同于数字   所以 true不一定等于1  false不一定等于0
转换规则
数据类型            转换为true的值               转换为false的值
boolean            true                        false
string             任何非空字符串               ""(空字符串)
number             任何非零字符值（包括无穷大）   0和NAN（NAN来了 /滑稽）
object             任何对象                     null
undefined          N/A即notapplicable（不适用） undefined

3.4.5 number类型
8进制第一位必须是0  如果数值超出了范围，那么前导0将被忽略，后面的数字将被作为十进制解析
8进制字面量在严格模式下是无效的
16进制字面值前两位必须是0x  字母A~F大小写都行
在进行算数计算时，所有八进制十六进制都必须换算成十进制

 1.浮点数值
 e表示法
 浮点数值的最高精度是17位小数，但在算数计算时精度远不如整数
 eg. 0.1 + 0.2 = 0.30000000000000000004
 永远不要测试某个特定的浮点数值
 
 2.数值范围
 最小数值 Number.MIN_VALUE 这个值是 5e-324
 最大数值 Number.MAX_VALUE 这个值是 1.7976931348623157e+308
 
 如果一个值超过了这个范围则被自动转换成Infinity值 正数：Indinity（正无穷） 负数:-Indinity（负无穷）
 Infinity是不能够参加运算的数值

 isFinite()函数  参数位于最大数值与最小数值之间会返回true
 
 3.NaN
 NaN，即非数值  用于表示一个本来要返回数值的操作数未返回数值的情况
 js中，0除以0会返回NaN，大于0除以0返回Indinity，小于0除以0返回-Indinity，不会影响其他代码执行
 1.任何涉及Nan的操作都会返回NaN
 2.NaN和任何值都不相等，包括NaN本身（alert(NaN === NaN)   //false     alert(NaN == NaN)  // false）
 3.typeof(NaN) // "number"
 
 isNaN（）函数， 函数接收一个可以是任何类型的参数，函数会尝试把参数转化为数值，某些不是数值的会直接转化为数值（如"10",boolean），
能转化为数值则返回false，不能的（即NaN）返回true
 eg.
 alert(isNaN(NaN));    //true
 alert(isNaN(10));    //false
 alert(isNaN("10"));    //false
 alert(isNaN("blue"));    //true
 alert(isNaN(true));    //false   (可以转换成数值1)
 isNaN()也可适用于对象  会先调用对象的valueof()方法，确定返回的值是否可以转换成数值。如果不能，则基于返回值再调用toString()方法，再测试返回值
 
 4.数值转换
 把非数值转化为数值的3个函数：Number（），parseInt（），parseFloat（）
 转型函数Number（）可用于任何数据类型，parseInt（），parseFloat（）专门用于把字符串转换成数值
 
 Number（）的转换规则：
 （1）Boolean值，true变1，false变0
 （2）数字值，只传入和返回
 （3）null值，返回0
 （4）undefined，返回NaN
 （5）字符串，遵循以下规则：
     （a）字符串中只包含数字（包括前面带正负号），将其转化为十进制数值，特别的如"0011"会变为11（前导0被忽略了）
     （b）字符串中包含有效的浮点格式，转化为对应的浮点数值（同样忽略前导0）
     （c）字符串中包含有效的十六进制格式，将其转化为对应的十进制整数值
     （d）字符串是空的（不包括任何数值），转换为0
     （e）字符串中包含上述格式外的字符，则转化为NaN
 （6）如果是对象，则调用对象的valueOf（）方法，然后依照前面的规则转换返回的值，
     如果valueOf()转换结果为NaN，则调用toString（）方法，然后再依照前面的规则转换返回的字符串值
     注：
     valueOf（）规则：  valueOf() 方法返回指定对象的原始值。
     对象	返回值
     Array	     返回数组对象本身。
     Boolean	   布尔值。
     Date	       存储的时间是从 1970 年 1 月 1 日午夜开始计的毫秒数 UTC。
     Function	   函数本身。
     Number	     数字值。
     Object	     对象本身。这是默认情况。
     String	     字符串值。
 	               Math 和 Error 对象没有 valueOf 方法。
注：Number（）转换字符串时非常复杂且不够合理  所以在处理整数时更常用parseInt（）函数。

parseInt（）函数会忽略字符串前面的空格，知道找到第一个非空格字符。如果第一个字符不是数字字符或者负号，就会返回NaN；直到遇到了非数字字符
开头0x且后跟数字 解析成16进制       开头0后跟数字 解析成8进制
对空字符串： parseInt（ ） 返回NaN            Number（ ） 返回0

parseInt（"1234ble"）      //1234
parseInt（"22.05"）        //22
parseInt（"070"）          //56（八进制）（ECMScript3）  70（ECMAScript5）

在使用parseInt（）解析像八进制字面量的字符串时，ECMAScript3和5存在分歧
parseInt（"070"）          //56（八进制）（ECMScript3）  70（ECMAScript5）
为了消除这种困扰，可以为parseInt（）提供第二个参数：基数（转换时的进制数）
eg. parseInt("AF",16)

建议无论什么时候都明确基数   即使是10进制数，也最后加上基数10 且这是十分必要的
parseFloat（）也是从第一个字符（位置0）开始解析 直到串尾或遇到一个无效的浮点数字字符 （字符串中的第一个小数点有效，但第二个小数点就无效了）

         parseInt（）     和     parseFloat（）的区别
1.小数点     无效                  第一个有效
2.前导0   十六进制不会忽略           始终忽略（parseFloat（）只解析十进制）
如果字符串包含的是一个可解析为整数的数（没有小数点或小数点后是0）parseFloat（）会返回整数

3.4.6 String类型
string由0个或多个16位Unicode字符组成的字符序列。可用 " 或 ' 表示，且在js中两者没有区别

1.字符字面量
\n          换行
\t          制表
\b          空格
\r          回车
\xnn        以十六进制代码nn表示一个字符（n为0~F）
\unnnn      以十六进制代码nnnn表示的一个Unicode字符

任何字符串的长度都可以通过访问length属性取得
eg.   alert(text.length)；     输出text的长度
如果字符串中包含双字节字符，那么length属性可能不会精确返回字符串中的字符数目

2.字符串特点
ECMAScript中字符串是不可变的
一旦字符串创建，他们的值就不能改变。
要改变某个变量保存的字符串，首先要销毁原来的字符串，然后再用另一个包含新值的字符串填充该变量
eg.   var lang = 'JAVA';
      lang = lang + "Script";
首先创建新字符串   然后在这个字符串填充 JAVA 和 Script   最后销毁原来的字符串 "JAVA" 和 "Script"

3.转换为字符串
两种方式：
1.几乎每个值都有toString()方法
    返回相应值的字符串 
    数值、布尔值、对象和字符串值
2.

                











