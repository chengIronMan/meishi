(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-57fd8112"],{"034b":function(e,t,s){},"790d":function(e,t,s){"use strict";s("034b")},dc3f:function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e._m(0),s("div",{directives:[{name:"show",rawName:"v-show",value:0==e.zqd,expression:"zqd == 0"}],staticClass:"zqd_div1"},[s("div",[s("div",{class:e.input1?"zqd_active":""},[s("van-field",{attrs:{type:"tel",label:"",placeholder:"请输入手机号"},on:{focus:function(t){e.input1=!0},blur:function(t){e.input1=!1}},model:{value:e.zqd_deng1.mobile,callback:function(t){e.$set(e.zqd_deng1,"mobile",t)},expression:"zqd_deng1.mobile"}})],1),s("div",{class:e.input2?"zqd_active":""},[s("van-field",{attrs:{type:"password",label:"",placeholder:"请输入密码"},on:{focus:function(t){e.input2=!0},blur:function(t){e.input2=!1}},model:{value:e.zqd_deng1.password,callback:function(t){e.$set(e.zqd_deng1,"password",t)},expression:"zqd_deng1.password"}})],1)]),s("div",{staticClass:"sp"},[s("span",{staticClass:"zqd_sp1",on:{click:e.zqd_zhao}},[e._v("找回密码")]),s("span",{staticClass:"zqd_sp2",on:{click:e.zqd_zhuce}},[e._v("注册/验证码登录")])]),s("van-button",{attrs:{type:"primary",id:"zqd"},on:{click:function(t){return e.zqd_deng()}}},[e._v("登录")])],1),s("div",{directives:[{name:"show",rawName:"v-show",value:1==e.zqd,expression:"zqd == 1"}],staticClass:"zqd_div1"},[s("div",{class:e.input1?"zqd_active":""},[s("van-field",{attrs:{center:"",clearable:"",label:"",placeholder:"请输入手机号"},on:{focus:function(t){e.input1=!0},blur:function(t){e.input1=!1}},scopedSlots:e._u([{key:"button",fn:function(){return[s("span",{directives:[{name:"show",rawName:"v-show",value:e.zqd_show,expression:"zqd_show"}],on:{click:e.zqd_fa}},[e._v("获取验证码")]),s("p",{directives:[{name:"show",rawName:"v-show",value:!e.zqd_show,expression:"!zqd_show"}],attrs:{id:"qq"}},[s("van-count-down",{ref:"countDown",attrs:{time:6e4,format:"获取验证码 (ss)",id:"qq"}})],1)]},proxy:!0}]),model:{value:e.zqd_yan.mobile,callback:function(t){e.$set(e.zqd_yan,"mobile",t)},expression:"zqd_yan.mobile"}})],1),s("div",{class:e.input2?"zqd_active":""},[s("van-field",{attrs:{type:"password",label:"",placeholder:"请输入短信验证码"},on:{focus:function(t){e.input2=!0},blur:function(t){e.input2=!1}},model:{value:e.zqd_yan.sms_code,callback:function(t){e.$set(e.zqd_yan,"sms_code",t)},expression:"zqd_yan.sms_code"}})],1),s("div",{staticClass:"sp"},[s("span",{staticClass:"zqd_sp1"},[e._v("*未注册的手机号自动注册")]),s("span",{staticClass:"zqd_sp2",on:{click:function(t){e.zqd=0}}},[e._v("使用密码登录")])]),s("van-button",{attrs:{type:"primary",id:"zqd"},on:{click:e.zqd_duanxindeng}},[e._v("登录")])],1)])},a=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"zqd_login"},[s("img",{attrs:{src:"https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019pILfAg7Avr1567732916.png",alt:""}})])}],o=s("9870"),i=s("d399"),d={data(){return{input1:!1,input2:!1,zqd_show:!0,zqd:0,yanzheng:!0,zqd_deng1:{mobile:"",password:"",type:1},zqd_yan:{mobile:"",sms_code:"",client:1,type:2}}},created(){},mounted(){},methods:{async zqd_deng(){let{data:e}=await Object(o["t"])("login",this.zqd_deng1);console.log(e),"操作成功"==e.msg?(localStorage.setItem("token",e.data.remember_token),this.$router.go(-1)):Object(i["a"])("密码或者手机号有误")},zqd_zhuce(){this.zqd=1},async zqd_fa(){let e=/^1[3|4|5|7|8][0-9]{9}$/;if(!e.test(this.zqd_yan.mobile))return Object(i["a"])("手机号格式不正确"),!1;let{data:t}=await Object(o["t"])("smsCode",{mobile:this.zqd_yan.mobile,sms_type:"login"});200==t.code&&(this.zqd_show=!1,this.$refs.countDown.reset()),console.log(t)},async zqd_duanxindeng(){let{data:e}=await Object(o["t"])("login",this.zqd_yan);console.log(e),"操作成功"==e.msg&&localStorage.setItem("token",e.data.remember_token),1==e.data.is_new?this.$router.push("/new"):this.$router.push("/info")},zqd_zhao(){this.$router.push("/forget-pass")}}},c=d,l=(s("790d"),s("2877")),r=Object(l["a"])(c,n,a,!1,null,"6da181b2",null);t["default"]=r.exports}}]);
//# sourceMappingURL=chunk-57fd8112.711c5708.js.map