import{_ as n,c as a,d as i,o as e}from"./app-B50BTcOQ.js";const l={};function p(d,s){return e(),a("div",null,s[0]||(s[0]=[i(`<p>在 JavaScript 中，函数是极为重要的概念，而方法作为特殊的函数，与普通函数既有联系又有区别。同时，函数还有多种定义方式和类型，本文将详细阐述这些内容。</p><h2 id="_1-函数-function-和方法-method-的区别" tabindex="-1"><a class="header-anchor" href="#_1-函数-function-和方法-method-的区别"><span>1. 函数（Function）和方法（Method）的区别</span></a></h2><h3 id="函数-function" tabindex="-1"><a class="header-anchor" href="#函数-function"><span>函数（Function）</span></a></h3><ul><li><p>是独立定义的代码块，可直接通过函数名调用。</p></li><li><p>示例：</p></li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>function greet() {</span></span>
<span class="line"><span></span></span>
<span class="line"><span> console.log(&quot;Hello!&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>greet(); // 直接调用函数</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="方法-method" tabindex="-1"><a class="header-anchor" href="#方法-method"><span>方法（Method）</span></a></h3><ul><li><p>是绑定在对象属性上的函数，需通过对象调用。</p></li><li><p>示例：</p></li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>const person = {</span></span>
<span class="line"><span></span></span>
<span class="line"><span> name: &quot;Alice&quot;,</span></span>
<span class="line"><span></span></span>
<span class="line"><span> sayHi: function() {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   console.log(\\\`Hi, I&#39;m \\\${this.name}\\\`);</span></span>
<span class="line"><span></span></span>
<span class="line"><span> }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>person.sayHi(); // 通过对象调用方法（this 指向 person）</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="核心区别" tabindex="-1"><a class="header-anchor" href="#核心区别"><span>核心区别</span></a></h3><ul><li><p>存在形式：函数是独立的，方法属于对象。</p></li><li><p>this 指向：方法中的 this 指向调用它的对象，函数中的 this 默认指向全局对象（如 window），在严格模式下为 undefined。</p></li></ul><h2 id="_2-函数的类型" tabindex="-1"><a class="header-anchor" href="#_2-函数的类型"><span>2. 函数的类型</span></a></h2><p>JavaScript 中函数主要有以下几种定义方式：</p><h3 id="_1-函数声明-function-declaration" tabindex="-1"><a class="header-anchor" href="#_1-函数声明-function-declaration"><span>(1) 函数声明（Function Declaration）</span></a></h3><ul><li><p>具有提升（Hoisted）特性，可在定义前调用。</p></li><li><p>示例：</p></li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>sayHello(); // 正常执行（提升生效）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function sayHello() {</span></span>
<span class="line"><span></span></span>
<span class="line"><span> console.log(&quot;Hello!&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-函数表达式-function-expression" tabindex="-1"><a class="header-anchor" href="#_2-函数表达式-function-expression"><span>(2) 函数表达式（Function Expression）</span></a></h3><ul><li><p>定义：将函数赋值给变量或常量。</p></li><li><p>不具备提升特性，必须先定义后调用。</p></li><li><p>示例：</p></li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>const greet = function() {</span></span>
<span class="line"><span></span></span>
<span class="line"><span> console.log(&quot;Hi!&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>greet(); // 正确</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-箭头函数-arrow-function" tabindex="-1"><a class="header-anchor" href="#_3-箭头函数-arrow-function"><span>(3) 箭头函数（Arrow Function）</span></a></h3><ul><li><p>采用简写语法，没有自己的 this，this 继承自外层作用域。</p></li><li><p>示例：</p></li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>const add = (a, b) =&gt; a + b;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(add(2, 3)); // 5</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-构造函数-constructor-function" tabindex="-1"><a class="header-anchor" href="#_4-构造函数-constructor-function"><span>(4) 构造函数（Constructor Function）</span></a></h3><ul><li><p>用于创建对象实例，需通过 new 调用。</p></li><li><p>示例：</p></li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>function Person(name) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span> this.name = name;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const alice = new Person(&quot;Alice&quot;);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-生成器函数-generator-function" tabindex="-1"><a class="header-anchor" href="#_5-生成器函数-generator-function"><span>(5) 生成器函数（Generator Function）</span></a></h3><ul><li><p>使用 function* 定义，可通过 yield 暂停执行。</p></li><li><p>示例：</p></li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>function\\* count() {</span></span>
<span class="line"><span></span></span>
<span class="line"><span> yield 1;</span></span>
<span class="line"><span></span></span>
<span class="line"><span> yield 2;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const gen = count();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>gen.next().value; // 1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-函数表达式-function-expression" tabindex="-1"><a class="header-anchor" href="#_3-函数表达式-function-expression"><span>3. 函数表达式（Function Expression）</span></a></h2><h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念"><span>概念</span></a></h3><p>函数表达式是将函数作为值赋给变量的一种函数定义方式。</p><h3 id="特点" tabindex="-1"><a class="header-anchor" href="#特点"><span>特点</span></a></h3><ul><li><p>可以是匿名函数，也可以是具名函数（具名函数便于调试，但函数名仅在函数内部可访问，外部不可访问）。</p></li><li><p>适合作为回调函数或立即执行函数（IIFE）。</p></li></ul><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>// 匿名函数表达式</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const sum = function(a, b) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span> return a + b;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 具名函数表达式（内部可递归调用）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const factorial = function calc(n) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span> return n &lt;= 1 ? 1 : n \\* calc(n - 1);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>factorial(5); // 120</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-回调函数-callback-function" tabindex="-1"><a class="header-anchor" href="#_4-回调函数-callback-function"><span>4. 回调函数（Callback Function）</span></a></h2><h3 id="概念-1" tabindex="-1"><a class="header-anchor" href="#概念-1"><span>概念</span></a></h3><p>回调函数是指将函数作为参数传递给另一个函数，当特定条件满足（如异步操作完成）时被调用的函数。</p><h3 id="用途" tabindex="-1"><a class="header-anchor" href="#用途"><span>用途</span></a></h3><p>主要用于处理异步操作，如定时器、事件、AJAX 等场景。</p><h3 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1"><span>示例</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>// 同步回调</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function processData(data, callback) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span> const result = data.toUpperCase();</span></span>
<span class="line"><span></span></span>
<span class="line"><span> callback(result); // 执行回调</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>processData(&quot;hello&quot;, (res) =&gt; {</span></span>
<span class="line"><span></span></span>
<span class="line"><span> console.log(res); // &quot;HELLO&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 异步回调（setTimeout）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>setTimeout(() =&gt; {</span></span>
<span class="line"><span></span></span>
<span class="line"><span> console.log(&quot;Delayed message&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}, 1000);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="回调地狱-callback-hell-解决方案" tabindex="-1"><a class="header-anchor" href="#回调地狱-callback-hell-解决方案"><span>回调地狱（Callback Hell）解决方案</span></a></h3><p>当存在多层嵌套的回调函数时，会出现 “回调地狱” 问题，可使用 Promise 或 async/await 来替代嵌套回调，使代码更清晰、易读。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2><table><thead><tr><th>概念</th><th>说明</th></tr></thead><tbody><tr><td>函数 vs 方法</td><td>函数独立存在，方法依附于对象；两者的 this 指向不同</td></tr><tr><td>函数类型</td><td>包括函数声明、函数表达式、箭头函数、构造函数、生成器函数等</td></tr><tr><td>函数表达式</td><td>函数作为值赋给变量，不具备提升特性</td></tr><tr><td>回调函数</td><td>函数作为参数传递，在特定事件或操作后触发</td></tr></tbody></table><p>理解这些概念是掌握 JavaScript 核心编程的关键！ 🚀</p>`,46)]))}const r=n(l,[["render",p]]),t=JSON.parse('{"path":"/js/ck5mu6t3/","title":"JavaScript 中函数与方法的区别及相关概念","lang":"zh-CN","frontmatter":{"title":"JavaScript 中函数与方法的区别及相关概念","createTime":"2025/07/24 09:30:12","permalink":"/js/ck5mu6t3/"},"readingTime":{"minutes":3.01,"words":903},"git":{"createdTime":1753323973000,"updatedTime":1753323973000,"contributors":[{"name":"smileBoys2023","username":"smileBoys2023","email":"140247874+smileBoys2023@users.noreply.github.com","commits":1,"avatar":"https://avatars.githubusercontent.com/smileBoys2023?v=4","url":"https://github.com/smileBoys2023"}]},"filePathRelative":"notes/js/JavaScript 中函数与方法的区别及相关概念.md","headers":[]}');export{r as comp,t as data};
