import{_ as n,c as s,o as a,b as t}from"./app.0b8e6282.js";const f='{"title":"LeetCode\u5237\u9898\u65E5\u8BB0\u4E4B\u987A\u65F6\u9488\u6253\u5370\u77E9\u9635","description":"","frontmatter":{"title":"LeetCode\u5237\u9898\u65E5\u8BB0\u4E4B\u987A\u65F6\u9488\u6253\u5370\u77E9\u9635","theme":"default","tag":"Javascript","time":"2021.1.12"},"headers":[],"relativePath":"views/article/Javascript/libs/leetcode-rect.md"}',p={},o=t(`<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/114a757fe3824f88a5a9ccd156478563~tplv-k3u1fbpfcp-zoom-1.image" alt=""><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ade6260330b640efbc1fd830d484fb9c~tplv-k3u1fbpfcp-zoom-1.image" alt=""> \u89E3\u9898\u601D\u8DEF\uFF1A\u628A\u77E9\u9635\u5206\u4E3A\u4E00\u4E2A\u4E00\u4E2A\u7684\u5706\u73AF\uFF0C\u987A\u65F6\u9488\u904D\u5386\u5706\u73AF\u5373\u53EF\uFF08\u8BBE\u7F6E\u8FB9\u754C\u503C\uFF0C\u6839\u636E\u8FB9\u754C\u503C\uFF0C\u904D\u5386\u5706\u73AF\uFF09\uFF0C\u53EA\u5269\u4E0B\u4E00\u884C\uFF0C\u4ECE\u5DE6\u5230\u53F3\u4F9D\u6B21\u6DFB\u52A0\uFF0C\u53EA\u5269\u4E0B\u4E00\u5217\u65F6\uFF0C\u4ECE\u4E0A\u5230\u4E0B\u4F9D\u6B21\u6DFB\u52A0\u3002 <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d65014d568f1437b968f47a14bc7dcb8~tplv-k3u1fbpfcp-zoom-1.image" alt=""></p><div class="language-js"><pre><code><span class="token keyword">let</span> matrix <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token function-variable function">spiralOrder</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">matrix</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>matrix<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> top <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> bottom <span class="token operator">=</span> matrix<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> right <span class="token operator">=</span> matrix<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>top <span class="token operator">&lt;</span> bottom <span class="token operator">&amp;&amp;</span> left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> left<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> right<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>matrix<span class="token punctuation">[</span>top<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> top<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> bottom<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> right<span class="token punctuation">;</span> i <span class="token operator">&gt;</span> left<span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>matrix<span class="token punctuation">[</span>bottom<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> bottom<span class="token punctuation">;</span> i <span class="token operator">&gt;</span> top<span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    right<span class="token operator">--</span><span class="token punctuation">;</span>
    top<span class="token operator">++</span><span class="token punctuation">;</span>
    bottom<span class="token operator">--</span><span class="token punctuation">;</span>
    left<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// \u5269\u4E0B\u4E00\u884C\uFF0C\u4ECE\u5DE6\u5230\u53F3\u4F9D\u6B21\u6DFB\u52A0</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>top <span class="token operator">==</span> bottom<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> left<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> right<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>matrix<span class="token punctuation">[</span>top<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">==</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> top<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> bottom<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">spiralOrder</span><span class="token punctuation">(</span>matrix<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,2),c=[o];function e(u,l,k,i,r,m){return a(),s("div",null,c)}var b=n(p,[["render",e]]);export{f as __pageData,b as default};
