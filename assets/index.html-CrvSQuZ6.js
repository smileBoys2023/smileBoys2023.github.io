import{_ as l,c as i,d as a,b as s,o as e}from"./app-B50BTcOQ.js";const p={};function d(c,n){return e(),i("div",null,n[0]||(n[0]=[a(`<p>在 JavaScript 中，函数是核心构建块，有着多种声明和使用方式。不同类型的函数在特性、适用场景等方面各有不同，本文将详细讲解各种函数类型及其特点，并进行对比分析。</p><h2 id="一、函数声明-function-declarations" tabindex="-1"><a class="header-anchor" href="#一、函数声明-function-declarations"><span>一、函数声明（Function Declarations）</span></a></h2><p>函数声明是最基础的函数定义方式，具有函数提升特性。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>// 基本语法</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function add(a, b) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   return a + b;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 函数提升示例</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(greet()); // 正常执行</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function greet() {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   return &quot;Hello!&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>特点</strong>：</p><ul><li><p>函数名是必需的</p></li><li><p>会被提升到作用域顶部</p></li><li><p>有自己的 this 绑定</p></li><li><p>可用作构造函数（使用 new）</p></li></ul><h2 id="二、函数表达式-function-expressions" tabindex="-1"><a class="header-anchor" href="#二、函数表达式-function-expressions"><span>二、函数表达式（Function Expressions）</span></a></h2><p>函数表达式是将函数赋值给变量，这种方式更灵活但不会提升。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>// 基本语法</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const multiply = function(a, b) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   return a \\* b;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 具名函数表达式（便于调试）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const factorial = function fact(n) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   return n &lt;= 1 ? 1 : n \\* fact(n - 1);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>特点</strong>：</p><ul><li><p>函数名可选（匿名函数）</p></li><li><p>不会提升</p></li><li><p>适合作为回调函数传递</p></li><li><p>有自己的 this 绑定</p></li></ul><h2 id="三、箭头函数-arrow-functions" tabindex="-1"><a class="header-anchor" href="#三、箭头函数-arrow-functions"><span>三、箭头函数（Arrow Functions）</span></a></h2><p>箭头函数是 ES6 引入的简洁语法，无独立 this 绑定。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>// 基本语法</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const square = x =&gt; x \\* x;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 多参数</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const sum = (a, b) =&gt; a + b;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 多行语句</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const logUser = user =&gt; {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   console.log(\\\`Name: \\\${user.name}\\\`);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   console.log(\\\`Age: \\\${user.age}\\\`);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>特点</strong>：</p><ul><li><p>语法简洁（单行可省略 return 和 {}）</p></li><li><p>没有自己的 this（继承外层作用域）</p></li><li><p>没有 arguments 对象</p></li><li><p>不能用作构造函数（不能使用 new）</p></li><li><p>没有 prototype 属性</p></li></ul><h2 id="四、方法-methods" tabindex="-1"><a class="header-anchor" href="#四、方法-methods"><span>四、方法（Methods）</span></a></h2><p>方法是对象属性中的函数，this 绑定到所属对象。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>const calculator = {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   value: 0,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   add: function(num) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>       this.value += num;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   // ES6 简写方法</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   multiply(num) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>       this.value \\*= num;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>特点</strong>：</p><ul><li><p>this 指向调用该方法的对象</p></li><li><p>ES6 支持更简洁的语法</p></li><li><p>可作为对象行为封装</p></li></ul><h2 id="五、构造函数-constructor-functions" tabindex="-1"><a class="header-anchor" href="#五、构造函数-constructor-functions"><span>五、构造函数（Constructor Functions）</span></a></h2><p>构造函数是用于创建对象的特殊函数，首字母通常大写。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>function Person(name, age) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   this.name = name;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   this.age = age;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   this.introduce = function() {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>       return \\\`I&#39;m \\\${this.name}, \\\${this.age} years old\\\`;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const john = new Person(&quot;John&quot;, 30);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>特点</strong>：</p><ul><li><p>必须使用 new 关键字调用</p></li><li><p>内部 this 指向新创建的对象</p></li><li><p>通常不显式返回值</p></li><li><p>ES6 后更推荐使用 class 语法</p></li></ul><h2 id="六、生成器函数-generator-functions" tabindex="-1"><a class="header-anchor" href="#六、生成器函数-generator-functions"><span>六、生成器函数（Generator Functions）</span></a></h2><p>生成器函数是可暂停和恢复执行的函数，使用 function* 声明。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>function\\* idGenerator() {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   let id = 1;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   while (true) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>       yield id++;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const gen = idGenerator();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(gen.next().value); // 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(gen.next().value); // 2</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>特点</strong>：</p><ul><li><p>使用 yield 暂停执行</p></li><li><p>返回迭代器对象</p></li><li><p>适合惰性求值和状态管理</p></li></ul><h2 id="七、异步函数-async-functions" tabindex="-1"><a class="header-anchor" href="#七、异步函数-async-functions"><span>七、异步函数（Async Functions）</span></a></h2><p>异步函数是使用 async/await 处理异步操作的特殊函数。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>async function fetchData(url) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   try {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>       const response = await fetch(url);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>       return await response.json();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   } catch (error) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>       console.error(&quot;Fetch failed:&quot;, error);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>特点</strong>：</p><ul><li><p>总是返回 Promise</p></li><li><p>使用 await 暂停执行直到 Promise 解决</p></li><li><p>更简洁的异步代码书写方式</p></li><li><p>错误处理使用 try/catch</p></li></ul><h2 id="八、回调函数-callback-functions" tabindex="-1"><a class="header-anchor" href="#八、回调函数-callback-functions"><span>八、回调函数（Callback Functions）</span></a></h2><p>回调函数是作为参数传递给其他函数的函数。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>// 简单回调</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\\[1, 2, 3].forEach(num =&gt; console.log(num));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 异步回调</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fs.readFile(&#39;file.txt&#39;, &#39;utf8&#39;, (err, data) =&gt; {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   if (err) throw err;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   console.log(data);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>特点</strong>：</p><ul><li><p>通常用于异步操作和事件处理</p></li><li><p>可以是任何类型的函数（声明、表达式、箭头）</p></li><li><p>容易导致回调地狱（Callback Hell）</p></li></ul><h2 id="九、立即调用函数表达式-iife" tabindex="-1"><a class="header-anchor" href="#九、立即调用函数表达式-iife"><span>九、立即调用函数表达式（IIFE）</span></a></h2><p>立即调用函数表达式是定义后立即执行的函数。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>// 经典IIFE</span></span>
<span class="line"><span></span></span>
<span class="line"><span>(function() {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   console.log(&quot;IIFE executed&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>})();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 带参数的IIFE</span></span>
<span class="line"><span></span></span>
<span class="line"><span>(function(name) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   console.log(\\\`Hello, \\\${name}\\\`);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>})(&quot;Alice&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 箭头函数IIFE</span></span>
<span class="line"><span></span></span>
<span class="line"><span>(() =&gt; console.log(&quot;Arrow IIFE&quot;))();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>特点</strong>：</p><ul><li><p>创建独立作用域，避免污染全局命名空间</p></li><li><p>适合模块封装（现代已被模块系统替代）</p></li><li><p>立即执行</p></li></ul><h2 id="十、高阶函数-higher-order-functions" tabindex="-1"><a class="header-anchor" href="#十、高阶函数-higher-order-functions"><span>十、高阶函数（Higher-Order Functions）</span></a></h2><p>高阶函数是接受函数作为参数或返回函数的函数。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>// 接受函数作为参数</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function operate(a, b, operation) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   return operation(a, b);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(operate(5, 3, (x, y) =&gt; x \\* y)); // 15</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 返回函数</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function multiplier(factor) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   return function(x) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>       return x \\* factor;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const double = multiplier(2);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(double(8)); // 16</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>特点</strong>：</p><ul><li><p>支持函数式编程范式</p></li><li><p>增强代码复用性和抽象能力</p></li><li><p>常见于数组方法（map、filter、reduce）</p></li></ul><h2 id="对比总结表" tabindex="-1"><a class="header-anchor" href="#对比总结表"><span>对比总结表</span></a></h2>`,52),s("table",null,[s("thead",null,[s("tr",null,[s("th",null,"函数类型"),s("th",null,"语法示例"),s("th",null,"提升"),s("th",null,"自有 this"),s("th",null,"构造函数"),s("th",null,"arguments"),s("th",null,"适用场景")])]),s("tbody",null,[s("tr",null,[s("td",null,"函数声明"),s("td",null,"function fn() {}"),s("td",null,"✅"),s("td",null,"✅"),s("td",null,"✅"),s("td",null,"✅"),s("td",null,"通用函数")]),s("tr",null,[s("td",null,"函数表达式"),s("td",null,"const fn = function() {}"),s("td",null,"❌"),s("td",null,"✅"),s("td",null,"✅"),s("td",null,"✅"),s("td",null,"回调、条件函数")]),s("tr",null,[s("td",null,"箭头函数"),s("td",null,"const fn = () => {}"),s("td",null,"❌"),s("td",null,"❌"),s("td",null,"❌"),s("td",null,"❌"),s("td",null,"简短回调、词法 this")]),s("tr",null,[s("td",null,"方法"),s("td",null,"obj.method() {}"),s("td",null,"❌"),s("td",null,"✅"),s("td",null,"✅"),s("td",null,"✅"),s("td",null,"对象行为封装")]),s("tr",null,[s("td",null,"构造函数"),s("td",null,"function Obj() {}"),s("td",null,"✅"),s("td",null,"✅"),s("td",null,"✅"),s("td",null,"✅"),s("td",null,"创建对象实例")]),s("tr",null,[s("td",null,"生成器函数"),s("td",null,"function* gen() {}"),s("td",null,"✅"),s("td",null,"✅"),s("td",null,"❌"),s("td",null,"✅"),s("td",null,"惰性求值、状态序列")]),s("tr",null,[s("td",null,"异步函数"),s("td",null,"async function fn() {}"),s("td",null,"✅"),s("td",null,"✅"),s("td",null,"❌"),s("td",null,"✅"),s("td",null,"异步操作处理")]),s("tr",null,[s("td",null,"回调函数"),s("td",null,"arr.map(callback)"),s("td",null,"-"),s("td",null,"取决于类型"),s("td",null,"取决于类型"),s("td",null,"取决于类型"),s("td",null,"异步操作、事件处理")]),s("tr",null,[s("td",null,"IIFE"),s("td",null,"(function() {})()"),s("td",null,"❌"),s("td",null,"✅"),s("td",null,"✅"),s("td",null,"✅"),s("td",null,"模块封装、隔离作用域")]),s("tr",null,[s("td",null,"高阶函数"),s("td",{"css-module":"."},"function hoc(fn)"),s("td",null,"✅"),s("td",null,"✅"),s("td",null,"✅"),s("td",null,"✅"),s("td",null,"函数组合、抽象操作")])])],-1),a('<h2 id="选择指南" tabindex="-1"><a class="header-anchor" href="#选择指南"><span>选择指南</span></a></h2><ul><li><p>通用函数：函数声明（简单场景）或函数表达式（需要条件定义时）</p></li><li><p>回调函数：箭头函数（需要词法 this 时）或函数表达式</p></li><li><p>对象方法：方法简写语法（ES6+）</p></li><li><p>异步操作：异步函数（async/await）</p></li><li><p>创建对象：类（class）语法（现代替代构造函数）</p></li><li><p>模块封装：ES6 模块（替代 IIFE）</p></li><li><p>函数组合：高阶函数 + 箭头函数</p></li><li><p>迭代控制：生成器函数（需要暂停 / 恢复时）</p></li></ul><p>理解不同函数类型的特点和适用场景，能帮助您编写更清晰、更高效的 JavaScript 代码。在实际开发中，通常需要组合使用多种函数类型来解决复杂问题。</p>',3)]))}const t=l(p,[["render",d]]),u=JSON.parse('{"path":"/js/wpnlkr5v/","title":"JavaScript 函数类型详解与对比","lang":"zh-CN","frontmatter":{"title":"JavaScript 函数类型详解与对比","createTime":"2025/07/24 09:24:05","permalink":"/js/wpnlkr5v/"},"readingTime":{"minutes":4.64,"words":1393},"git":{"createdTime":1753323973000,"updatedTime":1753323973000,"contributors":[{"name":"smileBoys2023","username":"smileBoys2023","email":"140247874+smileBoys2023@users.noreply.github.com","commits":1,"avatar":"https://avatars.githubusercontent.com/smileBoys2023?v=4","url":"https://github.com/smileBoys2023"}]},"filePathRelative":"notes/js/JavaScript 函数类型详解与对比.md","headers":[]}');export{t as comp,u as data};
