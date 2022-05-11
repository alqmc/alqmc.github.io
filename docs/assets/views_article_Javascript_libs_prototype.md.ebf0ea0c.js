import{_ as t,c as o,o as r,b as e}from"./app.0b8e6282.js";const g='{"title":"\u4F60\u771F\u7684\u4E86\u89E3prototype\u548C_proto_\u5417","description":"","frontmatter":{"title":"\u4F60\u771F\u7684\u4E86\u89E3prototype\u548C__proto__\u5417","theme":"default","tag":"Javascript","time":"2021.3.29"},"headers":[{"level":3,"title":"\u4E00\u53E5\u8BDD\u7684\u56FE\u89E3\uFF1A\u5B9E\u4F8B\u5BF9\u8C61\u7684\u9690\u5F0F\u539F\u578B\u6307\u5411\u6784\u9020\u51FD\u6570\u7684\u7684\u539F\u578B\u5BF9\u8C61","slug":"\u4E00\u53E5\u8BDD\u7684\u56FE\u89E3\uFF1A\u5B9E\u4F8B\u5BF9\u8C61\u7684\u9690\u5F0F\u539F\u578B\u6307\u5411\u6784\u9020\u51FD\u6570\u7684\u7684\u539F\u578B\u5BF9\u8C61"},{"level":3,"title":"\u4EC0\u4E48\u662F prototype","slug":"\u4EC0\u4E48\u662F-prototype"},{"level":3,"title":"\u4EC0\u4E48\u662Fproto","slug":"\u4EC0\u4E48\u662Fproto"},{"level":3,"title":"\u4EC0\u4E48\u662F\u539F\u578B\u94FE","slug":"\u4EC0\u4E48\u662F\u539F\u578B\u94FE"}],"relativePath":"views/article/Javascript/libs/prototype.md"}',p={},a=e('<h3 id="\u4E00\u53E5\u8BDD\u7684\u56FE\u89E3\uFF1A\u5B9E\u4F8B\u5BF9\u8C61\u7684\u9690\u5F0F\u539F\u578B\u6307\u5411\u6784\u9020\u51FD\u6570\u7684\u7684\u539F\u578B\u5BF9\u8C61" tabindex="-1">\u4E00\u53E5\u8BDD\u7684\u56FE\u89E3\uFF1A<strong>\u5B9E\u4F8B\u5BF9\u8C61\u7684\u9690\u5F0F\u539F\u578B\u6307\u5411\u6784\u9020\u51FD\u6570\u7684\u7684\u539F\u578B\u5BF9\u8C61</strong> <a class="header-anchor" href="#\u4E00\u53E5\u8BDD\u7684\u56FE\u89E3\uFF1A\u5B9E\u4F8B\u5BF9\u8C61\u7684\u9690\u5F0F\u539F\u578B\u6307\u5411\u6784\u9020\u51FD\u6570\u7684\u7684\u539F\u578B\u5BF9\u8C61" aria-hidden="true">#</a></h3><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cc97d23d54324e74b8cb4e219c344aa0~tplv-k3u1fbpfcp-watermark.image" alt=""></p><h3 id="\u4EC0\u4E48\u662F-prototype" tabindex="-1">\u4EC0\u4E48\u662F prototype <a class="header-anchor" href="#\u4EC0\u4E48\u662F-prototype" aria-hidden="true">#</a></h3><ul><li><p>javascript \u53EA\u6709\u51FD\u6570\u9ED8\u8BA4\u62E5\u6709 prototype \u5C5E\u6027\uFF0C\u7531\u6784\u9020\u51FD\u6570\u6784\u9020\u51FA\u6765\u7684\u5B9E\u4F8B\u9ED8\u8BA4\u662F\u4E0D\u5177\u6709\u6269\u5C55\u7684\uFF0C\u9664\u975E\u624B\u52A8\u7ED9\u8FD9\u4E2A\u5B9E\u4F8B\u52A0\u4E0A\u6269\u5C55\uFF08\u5F53\u7136\u8FD9\u5DF2\u7ECF\u4E0D\u662F prototype \u4E86\uFF0C\u4EC5\u662F\u4E00\u4E2A\u540D\u53EB prototype \u7684\u5C5E\u6027\u800C\u5DF2\uFF09\u3002</p></li><li><p>\u5728 JS \u91CC\uFF0C\u4E07\u7269\u7686\u5BF9\u8C61\u3002\u65B9\u6CD5(Function)\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u65B9\u6CD5\u7684\u539F\u578B(Function.prototype)\u662F\u5BF9\u8C61\u3002</p></li><li><p>prototype \u662F\u4E00\u4E2A\u62E5\u6709 [[Construct]] \u5185\u90E8\u65B9\u6CD5\u7684\u5BF9\u8C61\u624D\u6709\u7684\u5C5E\u6027\u3002</p><p>\u4F8B\u5982\u51FD\u6570\uFF0C\u5BF9\u8C61\u7684\u65B9\u6CD5\uFF0CES6 \u4E2D\u7684\u7C7B\u3002\u6CE8\u610F ES6 \u4E2D\u7684\u7BAD\u5934\u51FD\u6570\u6CA1\u6709 [[Construct]] \u65B9\u6CD5\uFF0C\u56E0\u6B64\u6CA1\u6709 prototype \u8FD9\u4E2A\u5C5E\u6027\uFF0C\u9664\u975E\u4F60\u4E3A\u5B83\u6DFB\u52A0\u4E00\u4E2A\u3002</p></li></ul><h3 id="\u4EC0\u4E48\u662Fproto" tabindex="-1">\u4EC0\u4E48\u662F<strong>proto</strong> <a class="header-anchor" href="#\u4EC0\u4E48\u662Fproto" aria-hidden="true">#</a></h3><ul><li><strong>proto</strong>\u5C31\u662F\u8FDE\u63A5\u4E24\u4E2A\u5B9E\u4F8B\u4E0E\u539F\u578B\u4E4B\u95F4\u7684\u6865\u6881\uFF0C\u5C31\u662F\u6211\u4EEC\u901A\u5E38\u6240\u8BF4\u7684\u539F\u578B\u94FE\uFF0C<strong>proto</strong>\u6307\u5411\u6784\u9020\u51FD\u6570\u7684 prototype \u3002<strong>proto</strong>\u7684\u4F5C\u7528\u662F\u521B\u5EFA\u4E00\u4E2A\u539F\u578B\u94FE\uFF0C\u8981\u901A\u8FC7<strong>proto</strong>\uFF0C\u4F60\u624D\u80FD\u4E0D\u65AD\u7684\u627E\u5230\u6240\u8C13\u7684\u7236\u539F\u578B\u3002</li><li>\u6BCF\u4E2A\u5BF9\u8C61\u90FD\u6709\u4E00\u4E2A<strong>proto</strong>\u5C5E\u6027</li></ul><h3 id="\u4EC0\u4E48\u662F\u539F\u578B\u94FE" tabindex="-1">\u4EC0\u4E48\u662F\u539F\u578B\u94FE <a class="header-anchor" href="#\u4EC0\u4E48\u662F\u539F\u578B\u94FE" aria-hidden="true">#</a></h3><ul><li>JavaScript \u53EF\u4EE5\u901A\u8FC7 prototype \u548C<strong>proto</strong>\u5728\u4E24\u4E2A\u5BF9\u8C61\u4E4B\u95F4\u521B\u5EFA\u4E00\u4E2A\u5173\u8054\uFF0C\u4F7F\u5F97\u4E00\u4E2A\u5BF9\u8C61\u5C31\u53EF\u4EE5\u901A\u8FC7\u59D4\u6258\u8BBF\u95EE\u53E6\u4E00\u4E2A\u5BF9\u8C61\u7684\u5C5E\u6027\u548C\u51FD\u6570\u3002</li><li>\u8FD9\u6837\u7684\u4E00\u4E2A\u5173\u8054\u5C31\u662F\u539F\u578B\u94FE\uFF0C\u4E00\u4E2A\u7531\u5BF9\u8C61\u7EC4\u6210\u7684\u6709\u9650\u5BF9\u8C61\u94FE\uFF0C\u7528\u4E8E\u5B9E\u73B0\u7EE7\u627F\u548C\u5171\u4EAB\u5C5E\u6027\u3002</li></ul>',8),i=[a];function s(l,n,c,d,_,h){return r(),o("div",null,i)}var y=t(p,[["render",s]]);export{g as __pageData,y as default};
