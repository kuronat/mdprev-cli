var $ = require("jquery")
var md = require('markdown-it')().use(require('./guard-delimiter'))
var current_md_str = ""

setInterval(_=>{
  $.get("/md").then(md_str=>{
   console.log("polling")
   if(md_str!=current_md_str){
     console.log("change detected!")
     current_md_str = md_str
     var h = md.render(md_str)

     // TODO: ここを全体更新ではなく部分更新にすると、MathJaxのレンダリング体験が向上するはず(プルプル感が消える)
     // どうやって実装するかというと、renderしたあとのhtmlの系列を、比較して、異なるなら置換、足りないなら挿入する。あるいは、HTMlのID属性で管理する
     // [ 1,2,3,4,5 ] vs [ 1,2,4,2,3 ]
     $(".markdown-body").html(h)

     MathJax.Hub.Queue(["Typeset",MathJax.Hub,"preview"])
   }
  })
}, 1000)
