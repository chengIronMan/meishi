(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c3f1a4ea"],{"16c2":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("app-header",[[e("div",{attrs:{slot:"title"},slot:"title"},[t._v("消息通知")]),e("div",{attrs:{slot:"right"},slot:"right"})]],2),e("ul",t._l(t.list,(function(s,a){return e("li",{key:a,on:{click:function(e){return t.detail(s.message_classify,s.title)}}},[e("div",{staticClass:"icon"},[e("img",{attrs:{src:s.url}})]),e("div",{staticClass:"info"},[e("span",[t._v(t._s(s.title))]),e("p",{staticClass:"content"},[t._v(t._s(""==s.content?"暂无消息":s.content))])])])})),0)],1)},c=[],n=e("a4ce"),i=e("9870"),o={name:"",props:[],components:{appHeader:n["a"]},data(){return{messageList:[],list:[{title:"课程通知",url:"https://wap.365msmk.com/img/icon-msg-course.d8a2c8d5.png",message_classify:"course",content:""},{title:"系统通知",url:"https://wap.365msmk.com/img/icon-msg-system.db56e51b.png",message_classify:"system",content:""},{title:"订单通知",url:"https://wap.365msmk.com/img/icon-msg-order.41755990.png",message_classify:"order",content:""},{title:"约课通知",url:"https://wap.365msmk.com/img/icon-msg-oto.d8a2c8d5.png",message_classify:"oto",content:""},{title:"考试通知",url:"https://wap.365msmk.com/img/icon-msg-exam.8a210fd7.png",message_classify:"exam",content:""}]}},computed:{},watch:{},methods:{async msg(){let{data:t}=await Object(i["q"])();this.messageList=t.data,this.list.forEach(t=>{this.messageList.forEach(s=>{t.message_classify===s.message_classify&&(t.content=s.content)})}),console.log(this.list)},detail(t,s){this.$router.push({path:"/message-detail",query:{message_classify:t,title:s}})}},created(){},mounted(){this.msg()}},l=o,r=(e("1984"),e("2877")),m=Object(r["a"])(l,a,c,!1,null,"44715cd6",null);s["default"]=m.exports},1984:function(t,s,e){"use strict";e("57cc")},"57cc":function(t,s,e){},a4ce:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"header"},[t._t("left",[e("van-icon",{attrs:{name:"arrow-left"},on:{click:function(s){return t.$router.go(-1)}}})]),t._t("title",[t._v("找回密码")]),t._t("right",[t._v("1")])],2)])},c=[],n={name:"",props:[],components:{},data(){return{}},computed:{},watch:{},methods:{},created(){},mounted(){}},i=n,o=(e("ae13"),e("2877")),l=Object(o["a"])(i,a,c,!1,null,"fca03c4e",null);s["a"]=l.exports},ae13:function(t,s,e){"use strict";e("bc51")},bc51:function(t,s,e){}}]);
//# sourceMappingURL=chunk-c3f1a4ea.66a26889.js.map