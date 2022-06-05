(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{562:function(t,s,a){"use strict";a.r(s);var n=a(9),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"stash"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stash"}},[t._v("#")]),t._v(" "),a("strong",[t._v("stash")])]),t._v(" "),a("p",[t._v("[官方文档]  "),a("a",{attrs:{href:"https://git-scm.com/docs/git-stash",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://git-scm.com/docs/git-stash"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("[git 教程] "),a("a",{attrs:{href:"https://www.bookstack.cn/read/git-tutorial/docs-commands-git-stash.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.bookstack.cn/read/git-tutorial/docs-commands-git-stash.md"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#描述"}},[t._v("#")]),t._v(" 描述")]),t._v(" "),a("blockquote",[a("p",[t._v("官方解释：当您想记录工作目录和索引的当前状态，但又想返回一个干净的工作目录时，请使用git stash。该命令将保存本地修改，并恢复工作目录以匹配头部提交。")])]),t._v(" "),a("p",[t._v("stash 命令能够将还未 commit 的代码存起来，让你的工作目录变得干净。")]),t._v(" "),a("h3",{attrs:{id:"应用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用场景"}},[t._v("#")]),t._v(" 应用场景")]),t._v(" "),a("p",[t._v("我猜你心里一定在想：为什么要变干净？")]),t._v(" "),a("p",[t._v("应用场景：某一天你正在 feature 分支开发新需求，突然产品经理跑过来说线上有bug，必须马上修复。而此时你的功能开发到一半，于是你急忙想切到 master 分支，然后你就会看到以下报错：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/68f81dbc24944538bf63d8530f62cc2a~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp",alt:"图片"}})]),t._v(" "),a("p",[t._v("因为当前有文件更改了，需要提交commit保持工作区干净才能切分支。由于情况紧急，你只有急忙 commit 上去，commit 信息也随便写了个“暂存代码”，于是该分支提交记录就留了一条黑历史...(真人真事，看过这种提交)")]),t._v(" "),a("h3",{attrs:{id:"命令使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命令使用"}},[t._v("#")]),t._v(" "),a("strong",[t._v("命令使用")])]),t._v(" "),a("p",[t._v("如果你学会 stash，就不用那么狼狈了。你只需要：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash\n")])])]),a("p",[t._v("就这么简单，代码就被存起来了。")]),t._v(" "),a("p",[t._v("当你修复完线上问题，切回 feature 分支，想恢复代码也只需要：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash apply\n")])])]),a("h3",{attrs:{id:"相关命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关命令"}},[t._v("#")]),t._v(" "),a("strong",[t._v("相关命令")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 保存当前未commit的代码")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 保存当前未commit的代码并添加备注")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash save "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"备注的内容"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 列出stash的所有记录")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash list\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除stash的所有记录")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("clear")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 应用最近一次的stash")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash apply\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 应用最近一次的stash，随后删除该记录")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash pop\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除最近的一次stash")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash drop\n")])])]),a("p",[t._v("当有多条 stash，可以指定操作stash，首先使用stash list 列出所有记录：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash list\nstash@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(": WIP on "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\nstash@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(": WIP on "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\nstash@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(": On "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n")])])]),a("p",[t._v("应用第二条记录：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash apply stash@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("pop，drop 同理。")])])}),[],!1,null,null,null);s.default=e.exports}}]);