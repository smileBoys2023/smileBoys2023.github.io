import{_ as n,c as a,d as i,o as e}from"./app-B50BTcOQ.js";const l={};function p(d,s){return e(),a("div",null,s[0]||(s[0]=[i(`<p>在 JavaScript 中，函数是一等公民，这使得回调函数成为一种非常重要且常用的编程模式。回调函数不仅是异步编程的基础，也在事件处理、数组方法等诸多场景中发挥着关键作用。本文将详细介绍回调函数的核心概念、应用场景以及使用技巧。</p><h2 id="回调函数的基本概念" tabindex="-1"><a class="header-anchor" href="#回调函数的基本概念"><span>回调函数的基本概念</span></a></h2><h3 id="定义" tabindex="-1"><a class="header-anchor" href="#定义"><span>定义</span></a></h3><p><strong>回调函数</strong>是一个被作为参数传递给另一个函数的函数，它会在某个特定条件满足或操作完成后被调用。</p><h3 id="执行时机" tabindex="-1"><a class="header-anchor" href="#执行时机"><span>执行时机</span></a></h3><p>回调函数的执行时机由接收它的函数决定，通常在以下情况被调用：</p><ul><li><p>异步操作完成时（如数据加载完毕）</p></li><li><p>特定事件触发时（如用户点击按钮）</p></li><li><p>某个预定流程执行到特定阶段时</p></li></ul><h3 id="命名来源" tabindex="-1"><a class="header-anchor" href="#命名来源"><span>命名来源</span></a></h3><p>之所以被称为 &quot;回调&quot;，是因为它会在某个操作完成后被 &quot;回呼&quot;（call back）到原始的调用流程中。</p><h3 id="基本示例" tabindex="-1"><a class="header-anchor" href="#基本示例"><span>基本示例</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>function greet(name, callback) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   console.log(\\\`Hello, \\\${name}!\\\`);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   callback();  // 执行回调函数</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function sayGoodbye() {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   console.log(&quot;Goodbye!&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>greet(&quot;Alice&quot;, sayGoodbye);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 输出:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Hello, Alice!</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Goodbye!</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="回调函数的常见应用场景" tabindex="-1"><a class="header-anchor" href="#回调函数的常见应用场景"><span>回调函数的常见应用场景</span></a></h2><h3 id="_1-异步操作-最常见用途" tabindex="-1"><a class="header-anchor" href="#_1-异步操作-最常见用途"><span>1. 异步操作（最常见用途）</span></a></h3><p>在处理需要等待的操作（如网络请求、定时器）时，回调函数是实现异步编程的基础方式。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>// 模拟异步操作</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function fetchData(callback) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   setTimeout(() =&gt; {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>       const data = { id: 1, name: &quot;John&quot; };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>       callback(data);  // 数据就绪后回调</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   }, 1000);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 使用回调处理结果</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fetchData((result) =&gt; {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   console.log(&quot;Received data:&quot;, result);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-事件处理" tabindex="-1"><a class="header-anchor" href="#_2-事件处理"><span>2. 事件处理</span></a></h3><p>无论是浏览器环境还是 Node.js 环境，事件处理都大量依赖回调函数。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>// DOM 事件回调</span></span>
<span class="line"><span></span></span>
<span class="line"><span>document.getElementById(&quot;myBtn&quot;).addEventListener(&quot;click&quot;, () =&gt; {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   console.log(&quot;Button clicked!&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Node.js 文件读取</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const fs = require(&#39;fs&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fs.readFile(&#39;file.txt&#39;, &#39;utf8&#39;, (err, data) =&gt; {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   if (err) throw err;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   console.log(data);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-数组迭代方法" tabindex="-1"><a class="header-anchor" href="#_3-数组迭代方法"><span>3. 数组迭代方法</span></a></h3><p>JavaScript 数组的许多内置方法（如 <code>forEach</code>、<code>map</code>、<code>filter</code> 等）都接受回调函数作为参数，用于定义对数组元素的处理逻辑。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>const numbers = \\[1, 2, 3];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// forEach 的回调</span></span>
<span class="line"><span></span></span>
<span class="line"><span>numbers.forEach((num) =&gt; {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   console.log(num \\* 2);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// map 的回调</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const doubled = numbers.map(num =&gt; num \\* 2);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-高阶函数" tabindex="-1"><a class="header-anchor" href="#_4-高阶函数"><span>4. 高阶函数</span></a></h3><p>在函数式编程中，回调函数常被用于创建和使用高阶函数（返回函数或接受函数作为参数的函数）。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>function createMultiplier(factor) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   return function(number) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>       return number \\* factor;  // 返回回调函数</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const double = createMultiplier(2);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(double(5)); // 10</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="回调地狱问题与解决方案" tabindex="-1"><a class="header-anchor" href="#回调地狱问题与解决方案"><span>回调地狱问题与解决方案</span></a></h2><p>当处理多层嵌套的异步操作时，过多的回调嵌套会导致代码结构混乱，形成所谓的 &quot;回调地狱&quot;（Callback Hell）：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>getData((data) =&gt; {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   parseData(data, (parsed) =&gt; {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>       processData(parsed, (result) =&gt; {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>           saveData(result, () =&gt; {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>               console.log(&quot;Done!&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>           });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>       });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案"><span>解决方案</span></a></h3><h4 id="命名函数-减少嵌套" tabindex="-1"><a class="header-anchor" href="#命名函数-减少嵌套"><span>命名函数（减少嵌套）</span></a></h4><p>通过将匿名回调函数提取为命名函数，可以显著改善代码的可读性。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>function handleSave() { /\\* ... \\*/ }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function handleProcess(result) { saveData(result, handleSave); }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 以此类推...</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="promise-首选方案" tabindex="-1"><a class="header-anchor" href="#promise-首选方案"><span>Promise（首选方案）</span></a></h4><p>Promise 提供了链式调用的方式，有效解决了回调地狱问题。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>getData()</span></span>
<span class="line"><span></span></span>
<span class="line"><span> .then(parseData)</span></span>
<span class="line"><span></span></span>
<span class="line"><span> .then(processData)</span></span>
<span class="line"><span></span></span>
<span class="line"><span> .then(saveData)</span></span>
<span class="line"><span></span></span>
<span class="line"><span> .then(() =&gt; console.log(&quot;Done!&quot;))</span></span>
<span class="line"><span></span></span>
<span class="line"><span> .catch(handleError);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="async-await-更直观" tabindex="-1"><a class="header-anchor" href="#async-await-更直观"><span>async/await（更直观）</span></a></h4><p>ES2017 引入的 async/await 语法，基于 Promise 提供了更接近同步代码的写法，进一步提升了代码的可读性。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>async function process() {</span></span>
<span class="line"><span></span></span>
<span class="line"><span> const data = await getData();</span></span>
<span class="line"><span></span></span>
<span class="line"><span> const parsed = await parseData(data);</span></span>
<span class="line"><span></span></span>
<span class="line"><span> const result = await processData(parsed);</span></span>
<span class="line"><span></span></span>
<span class="line"><span> await saveData(result);</span></span>
<span class="line"><span></span></span>
<span class="line"><span> console.log(&quot;Done!&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="回调函数使用要点" tabindex="-1"><a class="header-anchor" href="#回调函数使用要点"><span>回调函数使用要点</span></a></h2><h3 id="错误优先约定-node-js-风格" tabindex="-1"><a class="header-anchor" href="#错误优先约定-node-js-风格"><span>错误优先约定（Node.js 风格）</span></a></h3><p>在 Node.js 中，有一个广泛采用的约定：回调函数的第一个参数专门用于传递错误对象，后续参数才用于传递正常结果。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>function operation(callback) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   // 模拟可能出错的操作</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   const err = Math.random() &gt; 0.5 ? null : new Error(&quot;Failed&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   const result = err ? null : &quot;Success&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   callback(err, result);  // 第一个参数是错误对象</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>operation((err, res) =&gt; {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   if (err) return console.error(&quot;Error:&quot;, err.message);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   console.log(&quot;Result:&quot;, res);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="保持回调可选" tabindex="-1"><a class="header-anchor" href="#保持回调可选"><span>保持回调可选</span></a></h3><p>在设计接受回调函数的 API 时，应考虑到回调可能被省略的情况，避免因此导致错误。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>function fetchData(callback) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   const data = /\\* ... \\*/;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   if (typeof callback === &quot;function&quot;) callback(data);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   // 如果没有回调也不会出错</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="箭头函数的简洁写法" tabindex="-1"><a class="header-anchor" href="#箭头函数的简洁写法"><span>箭头函数的简洁写法</span></a></h3><p>对于简单的回调逻辑，使用箭头函数可以使代码更加简洁。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>// 传统写法</span></span>
<span class="line"><span></span></span>
<span class="line"><span>setTimeout(function() {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   console.log(&quot;Timeout&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}, 1000);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 箭头函数写法</span></span>
<span class="line"><span></span></span>
<span class="line"><span>setTimeout(() =&gt; console.log(&quot;Timeout&quot;), 1000);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="回调-vs-promise-vs-async-await" tabindex="-1"><a class="header-anchor" href="#回调-vs-promise-vs-async-await"><span>回调 vs Promise vs async/await</span></a></h2><table><thead><tr><th>特性</th><th>回调函数</th><th>Promise</th><th>async/await</th></tr></thead><tbody><tr><td>可读性</td><td>嵌套多时差</td><td>链式调用较好</td><td>最接近同步代码</td></tr><tr><td>错误处理</td><td>需手动处理</td><td>.catch () 统一处理</td><td>try/catch 同步风格</td></tr><tr><td>异步流程控制</td><td>困难</td><td>内置 Promise.all 等方法</td><td>配合 Promise 方法使用</td></tr><tr><td>浏览器支持</td><td>所有版本</td><td>ES6+（现代浏览器）</td><td>ES2017+（现代浏览器）</td></tr></tbody></table><p><strong>现代开发建议</strong>：新项目优先使用 async/await + Promise 组合，它们提供了更好的可读性和错误处理机制；只有在维护遗留系统或使用特定回调风格的 API 时，才考虑直接使用嵌套回调。</p>`,50)]))}const r=n(l,[["render",p]]),t=JSON.parse('{"path":"/js/pybqjioq/","title":"《JavaScript 回调函数：概念、应用与最佳实践》","lang":"zh-CN","frontmatter":{"title":"《JavaScript 回调函数：概念、应用与最佳实践》","createTime":"2025/07/24 09:20:18","permalink":"/js/pybqjioq/"},"readingTime":{"minutes":4.19,"words":1258},"git":{"createdTime":1753323973000,"updatedTime":1753323973000,"contributors":[{"name":"smileBoys2023","username":"smileBoys2023","email":"140247874+smileBoys2023@users.noreply.github.com","commits":1,"avatar":"https://avatars.githubusercontent.com/smileBoys2023?v=4","url":"https://github.com/smileBoys2023"}]},"filePathRelative":"notes/js/JavaScript 回调函数：概念、应用与最佳实践.md","headers":[]}');export{r as comp,t as data};
