(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7977a85e"],{"2ec5":function(t,e,s){},"9ec0":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._m(0),s("div",{staticClass:"zqd_div1"},[s("van-field",{attrs:{center:"",clearable:"",label:"",placeholder:"请输入手机号"},scopedSlots:t._u([{key:"button",fn:function(){return[s("van-button",{attrs:{size:"small",type:"primary"},on:{click:t.zqd_fa}},[t._v("发送验证码")])]},proxy:!0}]),model:{value:t.zqd_yan.mobile,callback:function(e){t.$set(t.zqd_yan,"mobile",e)},expression:"zqd_yan.mobile"}}),s("van-field",{attrs:{type:"password",label:"",placeholder:"请输入短信验证码"},model:{value:t.zqd_yan.sms_code,callback:function(e){t.$set(t.zqd_yan,"sms_code",e)},expression:"zqd_yan.sms_code"}}),s("span",{staticClass:"zqd_sp1"},[t._v("*未注册的手机号自动注册")]),s("span",{staticClass:"zqd_sp2",on:{click:t.zqd_tiao}},[t._v("使用密码登录")]),s("van-button",{attrs:{type:"primary",id:"zqd"},on:{click:t.zqd_duanxindeng}},[t._v("登录")])],1)])},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"zqd_login"},[s("img",{attrs:{src:"https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019pILfAg7Avr1567732916.png",alt:""}})])}],n=s("9870"),i={data(){return{zqd:0,huo:!1,huo1:!1,zqd_deng1:{mobile:"",password:"",type:1},zqd_yan:{mobile:"",sms_code:"",client:1,type:2}}},created(){},mounted(){},methods:{async zqd_deng(){let{data:t}=await this.$http.post("http://120.53.31.103:84/api/app/login",this.zqd_deng1);console.log(t.msg),console.log("123"),"操作成功"==t.msg&&(localStorage.setItem("token",t.data.remember_token),this.$router.push("/person"))},zqd_zhuce(){this.zqd=1},async zqd_fa(){console.log("123");let{data:t}=await Object(n["t"])("/api/app/smsCode",{mobile:this.zqd_yan.mobile,sms_type:"login"});console.log(t)},async zqd_duanxindeng(){let{data:t}=await this.$http.post("http://120.53.31.103:84/api/app/login",this.zqd_yan);console.log(t)},zqd_tiao(){this.$router.push("/login")},zqd_huo(){this.huo=!0},zqd_shi(){this.huo=!1},zqd_huo1(){this.huo1=!0},zqd_shi1(){this.huo1=!1}}},l=i,d=(s("ca17"),s("2877")),c=Object(d["a"])(l,a,o,!1,null,"30d6336c",null);e["default"]=c.exports},ca17:function(t,e,s){"use strict";s("2ec5")}}]);
//# sourceMappingURL=chunk-7977a85e.5c5e345c.js.map