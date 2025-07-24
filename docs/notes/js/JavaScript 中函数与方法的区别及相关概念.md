---
title: JavaScript 中函数与方法的区别及相关概念
createTime: 2025/07/24 09:30:12
permalink: /js/ck5mu6t3/
---
# JavaScript 中函数与方法的区别及相关概念

在 JavaScript 中，函数是极为重要的概念，而方法作为特殊的函数，与普通函数既有联系又有区别。同时，函数还有多种定义方式和类型，本文将详细阐述这些内容。

## 1. 函数（Function）和方法（Method）的区别

### 函数（Function）



*   是独立定义的代码块，可直接通过函数名调用。

*   示例：



```
function greet() {

 console.log("Hello!");

}

greet(); // 直接调用函数
```

### 方法（Method）



*   是绑定在对象属性上的函数，需通过对象调用。

*   示例：



```
const person = {

 name: "Alice",

 sayHi: function() {

   console.log(\`Hi, I'm \${this.name}\`);

 }

};

person.sayHi(); // 通过对象调用方法（this 指向 person）
```

### 核心区别



*   存在形式：函数是独立的，方法属于对象。

*   this 指向：方法中的 this 指向调用它的对象，函数中的 this 默认指向全局对象（如 window），在严格模式下为 undefined。

## 2. 函数的类型

JavaScript 中函数主要有以下几种定义方式：

### (1) 函数声明（Function Declaration）



*   具有提升（Hoisted）特性，可在定义前调用。

*   示例：



```
sayHello(); // 正常执行（提升生效）

function sayHello() {

 console.log("Hello!");

}
```

### (2) 函数表达式（Function Expression）



*   定义：将函数赋值给变量或常量。

*   不具备提升特性，必须先定义后调用。

*   示例：



```
const greet = function() {

 console.log("Hi!");

};

greet(); // 正确
```

### (3) 箭头函数（Arrow Function）



*   采用简写语法，没有自己的 this，this 继承自外层作用域。

*   示例：



```
const add = (a, b) => a + b;

console.log(add(2, 3)); // 5
```

### (4) 构造函数（Constructor Function）



*   用于创建对象实例，需通过 new 调用。

*   示例：



```
function Person(name) {

 this.name = name;

}

const alice = new Person("Alice");
```

### (5) 生成器函数（Generator Function）



*   使用 function\* 定义，可通过 yield 暂停执行。

*   示例：



```
function\* count() {

 yield 1;

 yield 2;

}

const gen = count();

gen.next().value; // 1
```

## 3. 函数表达式（Function Expression）

### 概念

函数表达式是将函数作为值赋给变量的一种函数定义方式。

### 特点



*   可以是匿名函数，也可以是具名函数（具名函数便于调试，但函数名仅在函数内部可访问，外部不可访问）。

*   适合作为回调函数或立即执行函数（IIFE）。

### 示例



```
// 匿名函数表达式

const sum = function(a, b) {

 return a + b;

};

// 具名函数表达式（内部可递归调用）

const factorial = function calc(n) {

 return n <= 1 ? 1 : n \* calc(n - 1);

};

factorial(5); // 120
```

## 4. 回调函数（Callback Function）

### 概念

回调函数是指将函数作为参数传递给另一个函数，当特定条件满足（如异步操作完成）时被调用的函数。

### 用途

主要用于处理异步操作，如定时器、事件、AJAX 等场景。

### 示例



```
// 同步回调

function processData(data, callback) {

 const result = data.toUpperCase();

 callback(result); // 执行回调

}

processData("hello", (res) => {

 console.log(res); // "HELLO"

});

// 异步回调（setTimeout）

setTimeout(() => {

 console.log("Delayed message");

}, 1000);
```

### 回调地狱（Callback Hell）解决方案

当存在多层嵌套的回调函数时，会出现 “回调地狱” 问题，可使用 Promise 或 async/await 来替代嵌套回调，使代码更清晰、易读。

## 总结



| 概念       | 说明                            |
| -------- | ----------------------------- |
| 函数 vs 方法 | 函数独立存在，方法依附于对象；两者的 this 指向不同  |
| 函数类型     | 包括函数声明、函数表达式、箭头函数、构造函数、生成器函数等 |
| 函数表达式    | 函数作为值赋给变量，不具备提升特性             |
| 回调函数     | 函数作为参数传递，在特定事件或操作后触发          |

理解这些概念是掌握 JavaScript 核心编程的关键！ 🚀

