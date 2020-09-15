"use strict";
// 引用外部的 namespace
/*
方法：

1. 前端引用
前端可以使用 <script> 標籤引入 Namespaces (但必須注意順序)

2. 專案打包法與參照指令 (Triple Slash Directive)

先利用 tsconfig.json 的 outFile 打包為單一檔案，在透過 Triple Slash Directive

*/
/// <reference path="./MyMath/Circle.ts" />
/// <reference path="./MyMath/Rectangle.ts" />
console.log(MyMath.Circle.PI);
console.log(MyMath.Circle.area(10));
console.log(MyMath.Rectangle.area(10, 20));
