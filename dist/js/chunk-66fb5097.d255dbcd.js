(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-66fb5097"],{7789:function(t,s,a){"use strict";a("7bc5")},"7bc5":function(t,s,a){},f1ad:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"tad-body"},[a("van-sticky",[a("div",{staticClass:"tad-sou"},[a("van-icon",{attrs:{name:"arrow-left",size:"0.4rem"},on:{click:t.fan}}),a("span",[t._v(t._s(t.list.title))]),a("van-icon",{attrs:{name:"notes-o",size:"0.4rem"}})],1)]),a("div",{staticClass:"tad-zhong"},[a("span",[t._v("共"+t._s(t.list.section_num)+"课时")]),a("div"),a("span",[t._v("以学习0%")])]),t._l(t.list1,(function(s,e){return a("div",{key:e,staticClass:"tad-di",on:{click:t.sp}},[a("div",{staticClass:"tad-di1"},[a("div",{staticClass:"k0"},[a("div",{staticClass:"k1"}),0==s.course_type?a("span",{staticClass:"k2"},[t._v("[回放]")]):t._e(),a("span",[t._v(t._s(s.periods_title))])]),a("p",{staticClass:"k3"},[a("span",[t._v(t._s(s.total_start_play))]),a("span",[t._v(t._s(s.total_end_play))])]),t._m(0,!0)])])})),a("van-popup",{model:{value:t.show,callback:function(s){t.show=s},expression:"show"}},[a("van-field",{attrs:{name:"rate",label:"星级："},scopedSlots:t._u([{key:"input",fn:function(){return[a("van-rate",{attrs:{size:25,color:"#ffd21e","void-icon":"star","void-color":"#eee"},model:{value:t.value,callback:function(s){t.value=s},expression:"value"}})]},proxy:!0}])}),a("div",{staticClass:"nei"},[a("span",[t._v("内容：")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.neirong,expression:"neirong"}],attrs:{type:"text"},domProps:{value:t.neirong},on:{input:function(s){s.target.composing||(t.neirong=s.target.value)}}})]),a("div",{staticClass:"fabu",on:{click:t.fabu}},[t._v("发布")])],1),a("div",{staticClass:"tad-wei"},[a("p",{on:{click:t.showPopup}},[a("van-icon",{attrs:{name:"edit",size:"0.3rem"}}),a("span",[t._v("写评论")])],1),a("p",{on:{click:t.xiangqing}},[a("van-icon",{attrs:{name:"apps-o",size:"0.3rem"}}),a("span",[t._v("课程详情")])],1),a("p",[a("van-icon",{attrs:{name:"delete",size:"0.3rem"}}),a("span",[t._v("移除列表")])],1)])],2)},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"tad-zhong1"},[a("div"),a("span",[t._v("以观看0%")])])}],n=a("9870"),o={data(){return{show:!1,rate:3,list:[],list1:[],value:0,neirong:""}},name:"demo",props:{},mounted(){this.fun()},computed:{},watch:{},methods:{async fun(){let{data:t}=await Object(n["p"])(`/myStudy/course/${this.$route.query.id}?`);this.list=t.data.course,this.list1=t.data.periods,console.log(this.list1)},async fabu(){let{data:t}=await Object(n["t"])("myStudy/comment",{content:this.neirong,course_id:this.$route.query.id,grade:this.value,type:1});200==t.code?this.$toast("评论成功"):this.$toast(t.msg),this.show=!1,this.value=0,this.neirong="",console.log(t)},async sp(){window.location.href="https://wap.365msmk.com/video?id=189&video_id=30929276&title="+this.list1[0].periods_title},fan(){this.$router.go(-1)},xiangqing(){this.$router.push("/course-detail?id="+this.$route.query.id)},showPopup(){this.show=!0}}},c=o,l=(a("7789"),a("2877")),r=Object(l["a"])(c,e,i,!1,null,"6870058f",null);s["default"]=r.exports}}]);
//# sourceMappingURL=chunk-66fb5097.d255dbcd.js.map