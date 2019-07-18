<template>
	<div>
		<title :titleJson="titleJson"></title>
		    <Login class="center" v-if="showLogin" @GerstureLogin="toGerstureLogin" @FingerLogin="toFingerLogin"></Login>
		  	<gersture class="center1" v-if="showGersture" @FingerLogin="toFingerLogin" @PwdLogin="toPwdLogin"></gersture>
		  	<Fingerprint v-if="showFinger" :show="show" @NofingerLogin="NofingerLogin" @confirm="confirm"></Fingerprint>
	</div>
 
</template>
<style scoped>
.center{
 flex: 1;
 width: 750px;
}
.center1{
	flex: 1;
}

</style>

<script>
	const context = weex.requireModule("context");
	const modal = weex.requireModule("modal");
	const stream = weex.requireModule("stream");
	const fingerprint = weex.requireModule("fingerprint")

import Login from "@/components/login/login_component.vue";
import Title from "@/components/login/titlebar_component.vue";
import Gersture from "@/components/login/gesturesLogin.vue"
import Fingerprint from "@/components/login/fingerprintLogin.vue";


export default {
  components: {
  	Login,
  	Title,
  	Gersture,
  	Fingerprint
  },
  data() {
    return {
    	titleJson:"",
    	showLogin:true,
    	showGersture:false,
    	showFinger:false,
    	show:false
    };
  },
  created() {
  	
  	if(context.secureGetString("isFingerOpen") == "Y"){
  		this.FingerLogin();
  	}else if(context.secureGetString("isGestureOpen") == "Y"){
  		this.GerstureLogin();
  	}else{
  		this.PwdLogin();
  	}
  },
  methods: {
  	PwdLogin(){
  		this.showLogin = true;
  		this.showGersture = false;
  		this.showFinger = false;
  		this.titleJson = "login/titlebar.json";
  	},
  	GerstureLogin(){
  		this.showLogin = false;
  		this.showGersture = true;
  		this.showFinger = false;
  		this.titleJson = "login/titlebar1.json";
  	},
  	confirm(){
  		fingerprint.cancelIdentify();
  		this.showFinger = false;
  	},
  	//指纹登录
  	FingerLogin(){
  		if(WXEnvironment.platform != "iOS"){
        	 this.showFinger = true;
        	 this.show = true;
        }else{
        	this.showFinger = true;
        }
  	},
    toPwdLogin(){
    	this.PwdLogin();
    },
    toGerstureLogin(){
    	if(context.secureGetString("isGestureOpen") != "Y"){
    		this.alertMsg("您还没有开启手势登录!");
    		return;
    	}
    	this.GerstureLogin();
    },
    toFingerLogin(){
    	if(context.secureGetString("isFingerOpen") != "Y"){
    		this.alertMsg("您还没有开启指纹登录!");
    		return;
    	}
    	this.FingerLogin();
    },
    NofingerLogin(){
    	this.showFinger = false;
    }
  	
  }
};
</script>