import{_ as n,c as a,d as i,o as e}from"./app-B50BTcOQ.js";const l={};function p(d,s){return e(),a("div",null,s[0]||(s[0]=[i(`<p>递归是一种强大的编程技术，在 JavaScript 中使用递归时，其核心原则与其他语言相通，但由于 JS 引擎的特性，需要特别注意调用栈限制等问题。本文将详细介绍 JavaScript 递归的关键点和实践指南。</p><h2 id="基础递归示例" tabindex="-1"><a class="header-anchor" href="#基础递归示例"><span>基础递归示例</span></a></h2><h3 id="_1-阶乘函数" tabindex="-1"><a class="header-anchor" href="#_1-阶乘函数"><span>1. 阶乘函数</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>function factorial(n) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  if (n &lt;= 1) return 1;  // 基准条件</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return n \\* factorial(n - 1);  // 递归调用</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(factorial(5)); // 120</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-斐波那契数列" tabindex="-1"><a class="header-anchor" href="#_2-斐波那契数列"><span>2. 斐波那契数列</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>function fibonacci(n) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  if (n &lt;= 1) return n;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return fibonacci(n - 1) + fibonacci(n - 2);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(fibonacci(6)); // 8 (0,1,1,2,3,5,8)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="javascript-递归的特殊注意事项" tabindex="-1"><a class="header-anchor" href="#javascript-递归的特殊注意事项"><span>JavaScript 递归的特殊注意事项</span></a></h2><h3 id="调用栈限制" tabindex="-1"><a class="header-anchor" href="#调用栈限制"><span>调用栈限制</span></a></h3><p>JavaScript 引擎存在最大调用栈深度限制（通常在 1000-10000 层之间），当递归调用层数超出这个限制时，会抛出错误：</p><blockquote><p>RangeError: Maximum call stack size exceeded</p></blockquote><p><strong>解决方案</strong>：遇到这种情况，可改用循环实现或进行尾递归优化。</p><h3 id="尾递归优化-es6" tabindex="-1"><a class="header-anchor" href="#尾递归优化-es6"><span>尾递归优化（ES6）</span></a></h3><p>符合尾调用优化（TCO）条件的递归可以避免栈溢出问题。尾调用指的是函数的最后一个动作是调用另一个函数，且没有其他操作。</p><p><strong>改写阶乘为尾递归</strong>：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>function factorialTail(n, acc = 1) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  if (n &lt;= 1) return acc;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return factorialTail(n - 1, n \\* acc); // 尾调用位置</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 在支持 TCO 的引擎中可安全计算大数</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(factorialTail(10000));&amp;#x20;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实用场景与最佳实践" tabindex="-1"><a class="header-anchor" href="#实用场景与最佳实践"><span>实用场景与最佳实践</span></a></h2><h3 id="_1-树形结构遍历-dom-json" tabindex="-1"><a class="header-anchor" href="#_1-树形结构遍历-dom-json"><span>1. 树形结构遍历（DOM/JSON）</span></a></h3><p>递归非常适合处理树形结构，如 DOM 节点或嵌套的 JSON 数据。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>// 递归遍历 DOM 节点</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function traverseDOM(node, callback) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  callback(node);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  for (const child of node.children) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      traverseDOM(child, callback); // 递归子节点</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 示例：打印页面所有标签名</span></span>
<span class="line"><span></span></span>
<span class="line"><span>traverseDOM(document.body, node =&gt; {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  console.log(node.tagName);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-嵌套对象处理" tabindex="-1"><a class="header-anchor" href="#_2-嵌套对象处理"><span>2. 嵌套对象处理</span></a></h3><p>对于深嵌套的对象操作，递归是一种简洁的实现方式，例如深拷贝对象：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>// 深拷贝对象</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function deepClone(obj) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  if (typeof obj !== &#39;object&#39; || obj === null) return obj;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  const clone = Array.isArray(obj) ? \\[] : {};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  for (const key in obj) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      clone\\[key] = deepClone(obj\\[key]); // 递归属性</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return clone;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-递归优化技巧" tabindex="-1"><a class="header-anchor" href="#_3-递归优化技巧"><span>3. 递归优化技巧</span></a></h3><h4 id="记忆化-memoization" tabindex="-1"><a class="header-anchor" href="#记忆化-memoization"><span>记忆化（Memoization）</span></a></h4><p>记忆化是一种缓存计算结果的技术，可避免重复计算，大幅提高递归效率，尤其适用于斐波那契数列等存在大量重复计算的场景。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>const fibMemo = (() =&gt; {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  const cache = {};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return function fib(n) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      if (n in cache) return cache\\[n];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      if (n &lt;= 1) return n;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      return cache\\[n] = fib(n - 1) + fib(n - 2);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>})();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(fibMemo(50)); // 快速计算</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="尾递归模式" tabindex="-1"><a class="header-anchor" href="#尾递归模式"><span>尾递归模式</span></a></h4><p>如前所述，尾递归模式适合在支持 TCO 的环境中使用，可有效避免栈溢出。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>// 尾递归求和</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function sum(n, acc = 0) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return n === 0 ? acc : sum(n - 1, acc + n);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="递归-vs-迭代-循环-选择指南" tabindex="-1"><a class="header-anchor" href="#递归-vs-迭代-循环-选择指南"><span>递归 vs 迭代（循环）选择指南</span></a></h2><table><thead><tr><th>情况</th><th>推荐方案</th><th>原因</th></tr></thead><tbody><tr><td>未知深度的嵌套结构</td><td>递归</td><td>代码更简洁清晰</td></tr><tr><td>已知深度 &gt; 1000 层</td><td>迭代</td><td>避免栈溢出</td></tr><tr><td>数学计算（斐波那契等）</td><td>记忆化递归</td><td>比朴素递归高效，比循环直观</td></tr><tr><td>性能关键路径</td><td>迭代</td><td>避免函数调用开销</td></tr></tbody></table><h2 id="调试递归的技巧" tabindex="-1"><a class="header-anchor" href="#调试递归的技巧"><span>调试递归的技巧</span></a></h2><h3 id="使用-console-trace-查看调用栈" tabindex="-1"><a class="header-anchor" href="#使用-console-trace-查看调用栈"><span>使用 console.trace () 查看调用栈</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>function recursiveFunc(n) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  console.trace(\\\`Call at n=\\\${n}\\\`);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  if (n === 0) return;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  recursiveFunc(n - 1);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="添加终止条件检查" tabindex="-1"><a class="header-anchor" href="#添加终止条件检查"><span>添加终止条件检查</span></a></h3><p>为防止递归过深导致栈溢出，可添加额外的终止条件检查。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>function safeRecursion(n) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  if (n &gt; 1000) throw new Error(&quot;递归过深&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // ...其他逻辑</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="浏览器兼容性注意" tabindex="-1"><a class="header-anchor" href="#浏览器兼容性注意"><span>浏览器兼容性注意</span></a></h2><h3 id="尾调用优化-tco-的限制" tabindex="-1"><a class="header-anchor" href="#尾调用优化-tco-的限制"><span>尾调用优化（TCO）的限制</span></a></h3><p>尾调用优化（TCO）仅在严格模式下生效：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>&quot;use strict&quot;;</span><span> // 必须开启</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function optimized() { /\\* 尾递归 \\*/ }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="主流浏览器支持情况-截至-2023" tabindex="-1"><a class="header-anchor" href="#主流浏览器支持情况-截至-2023"><span>主流浏览器支持情况（截至 2023）</span></a></h3><ul><li><p>Safari：完全支持 TCO</p></li><li><p>Chrome/Firefox：部分版本支持，可能需手动启用标志</p></li><li><p>Node.js：&gt;= 6.5 在严格模式下支持</p></li></ul><p><strong>建议</strong>：生产环境中深度递归优先考虑迭代方案，或使用尾递归 + 严格模式 + Safari 部署。</p>`,44)]))}const r=n(l,[["render",p]]),t=JSON.parse('{"path":"/js/ogpa8h01/","title":"《JavaScript 递归：核心原则、实践与注意事项》","lang":"zh-CN","frontmatter":{"title":"《JavaScript 递归：核心原则、实践与注意事项》","createTime":"2025/07/24 09:16:47","permalink":"/js/ogpa8h01/"},"readingTime":{"minutes":3.3,"words":989},"git":{"createdTime":1753323973000,"updatedTime":1753323973000,"contributors":[{"name":"smileBoys2023","username":"smileBoys2023","email":"140247874+smileBoys2023@users.noreply.github.com","commits":1,"avatar":"https://avatars.githubusercontent.com/smileBoys2023?v=4","url":"https://github.com/smileBoys2023"}]},"filePathRelative":"notes/js/如何使用递归.md","headers":[]}');export{r as comp,t as data};
