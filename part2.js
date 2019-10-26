2.1
<script>元素
6个属性（全部可选）
1. async : 可选。 表示应当立即下载脚本，但不妨碍其他操作
2. charset : 可选。 表示通过src属性指定的代码的字符集（很少使用）
3. defer : 可选。 表示脚本可以延迟到文档完全被解析和显示之后再执行。
4. language : （已废用）
5. src : 可选。 包含要执行代码的外部文件。
6. type : 可选。 编写代码使用的脚本语言的内容类型（也称为MME）。 默认值: text/javascript

</script>是结束语句。输出时会报错，若不想报错，只需<\/script>

带有src属性的<script>元素不应该在其<script>和</script>标签之间再包含额外的javascript代码。嵌入的代码会被忽略

只要不存在defer和async属性，浏览器都会按照<script>元素在标签之中出现的先后顺序对他们依次进行解析。如
<script></>  (1)
<script></>  (2)
<script></>  (3)
解析顺序为 1 2 3

2.1.1
通常把javascript语句放在<body>后面，为了避免延迟过高，页面加载缓慢

2.1.2延迟脚本
<script>定义了defer属性。用途：表明脚本在执行时不会影响页面的构造。即，脚本会被延迟到整个页面都解析完毕后再运行。相当于告诉浏览器立即下载，但延迟执行。
在现实中，延迟脚本并不一定按顺序执行，所以最好只设置一个defer
defer属性只适用于外部脚本文件
2.1.3异步脚本
<script>定义了async属性。
async属性
