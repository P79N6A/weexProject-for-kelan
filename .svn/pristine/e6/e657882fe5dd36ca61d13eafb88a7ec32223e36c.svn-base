<template>
	<div class="container">
		<mp-bar title="账户设置" 
			:barStyle="barStyle" 
			:titleStyle="titleStyle" 
			:leftBtn="leftBtn" 
			:leftBtnStyle="leftBtnStyle" 
			@mpBarLeftBtnClick="mpBarLeftBtnClick"></mp-bar>
		<scroller style="flex: 1;">
		<div class="head">
			<image class="headImg" src="./imgs/tab_user/titlebar/hand.png"></image>
			<div class="fontBox">
				<text class="name">{{$store.state.name}}</text>
				<text class="lastTime">欢迎登录贵阳农商银行</text>
			</div>
		</div>
		<div style="width: 750px;background-color: #FFFFFF; margin-top: 20px;">
			<div class="menuItem" @click="toChangePassword">
				<text class="title">登录密码修改</text>
				<image src="./imgs/img_right.png" class="image"></image>
			</div>
			<div class="menuItem"  @click="gestureWitch">
				<text class="title">手势登录</text>
				<div style="flex-direction: row; align-items: center;" v-if="$store.state.isGestureOpen">
					<text class="isClose" style="padding-right: 20px;">未开启</text>
					<image src="./imgs/img_right.png" class="image"></image>
				</div>
				<div style="flex-direction: row; align-items: center;" v-else>
					<text class="isOpen" style="padding-right: 20px;">已开启</text>
					<image src="./imgs/img_right.png" class="image"></image>
				</div>
			</div>
			<div class="menuItem1" @click="fingerWitch">
				<text class="title">指纹/面容登录</text>
				<div style="flex-direction: row; align-items: center;" v-if="$store.state.isFingerOpen">
					<text class="isClose" style="padding-right: 20px;">未开启</text>
					<image src="./imgs/img_right.png" class="image"></image>
				</div>
				<div style="flex-direction: row; align-items: center;" v-else>
					<text class="isOpen" style="padding-right: 20px;">已开启</text>
					<image src="./imgs/img_right.png" class="image"></image>
				</div>
			</div>
		</div>
		
		<div style="width: 750px;background-color: #FFFFFF; margin-top: 20px;">
			<div class="menuItem" @click="informCenter">
				<text class="title">通知中心</text>
				<image src="./imgs/img_right.png" class="image"></image>
			</div>
			
			<div class="menuItem1" @click="">
				<text class="title">帮助中心</text>
				<image src="./imgs/img_right.png" class="image"></image>
			</div>
		</div>
		
		<div style="width: 750px;background-color: #FFFFFF; margin-top: 20px;">
			<div class="menuItem1"  @click="">
				<text class="title">关于</text>
				<image src="./imgs/img_right.png" class="image"></image>
			</div>
		</div>
		
		<div class="btn">
			<image class="loginBgimg" src="./imgs/securityCenter/loginBg.png" @click="loginOut"></image>
			<text class="btnFont">安全退出</text>
		</div>
	</scroller>
	</div>
</template>

<script>
	const context = weex.requireModule("context");
	import { MpBar } from "madp-ui";
	export default {
		components: {
			MpBar
		},
		created(){
			if(context.sessionGetString("cifName")){
		 		this.name = context.sessionGetString("cifName");
		 	}
			if(context.secureGetString("isGestureOpen") == "Y"){
    			this.$store.state.isGestureOpen = false;
    		}else{
    			this.$store.state.isGestureOpen = true; 
    		}
    		if(context.secureGetString("isFingerOpen") == "Y"){
    			this.$store.state.isFingerOpen = false;
    		}else{
    			this.$store.state.isFingerOpen = true; 
    		}
    		this.getGestureState();
		},
		mounted(){
		},
		data() {
			return {
				titleStyle: {
					"font-family": "PingFangSC-Semibold",
					"font-size": "36px",
					"color": "rgb(51,51,51)",
					"letter-spacing": "-0.64px"
				},
				leftBtn: "./imgs/back.png",
				leftBtnStyle: {
					width: "40px",
					height: "40px"
				},
				barStyle: {'height':'150px','padding-top': '60px'},
				name:"阳阳农"
			}
		},
		methods:{
			//查询手势 指纹状态
			getGestureState(){
		    	const param = {
		    		"LoginId":context.secureGetString("LoginId")
		    	}
		    	this.postDo("QryGestureStatus.do",param,data=>{
		    		context.secureSetString("isGestureOpen",data.TxPwdFlag);
		    		if(context.secureGetString("isGestureOpen") == "Y"){
		    			this.$store.state.isGestureOpen = false;
		    		}else{
		    			this.$store.state.isGestureOpen = true; 
		    		}
		    		context.secureSetString("isFingerOpen",data.FingerprintStatus);
    		
		    		if(context.secureGetString("isFingerOpen") == "Y"){
		    			this.$store.state.isFingerOpen = false;
		    		}else{
		    			this.$store.state.isFingerOpen = true; 
		    		}
		    		
		    		context.secureSetString("isFaceOpen",data.FaceStatus);
		    		if(context.secureGetString("isFaceOpen") == "Y"){
		    			this.$store.state.isFaceOpen = false;
		    		}else{
		    			this.$store.state.isFaceOpen = true; 
		    		}
		    		
		    	})
		    },
			//返回
			mpBarLeftBtnClick(){
				this.goBack();
			},
			//修改密码
			toChangePassword(){
				context.launchStage("main.ChangePwd");
			},
			//手势按钮
			gestureWitch(){
				if(this.$store.state.isGestureOpen){
					this.jump("/SetGersture");
//					context.launchStage("main.SetGersture");
				}else{
					this.closeGesture();
				}
			},
			//通知中心按钮
			informCenter(){
				this.jump("/SetGersture");
			},
			//指纹按钮
			fingerWitch(){
				if(this.$store.state.isFingerOpen){
					this.jump("/SetFinger");
				}else{
					this.closeFinger();
				}
			},
			//面容登录按钮
			faceWitch(){
				if(this.$store.state.isFaceOpen){
//					this.jump("/SetFace");
					this.setFace();
				}else{
					this.closeFace();
				}
			},
			//关闭手势
			closeGesture(){
				const param = {
					"Flag":"N"
				}
				this.postDo("GestureStatusSet.do",param,data=>{
					context.secureSetString("isGestureOpen","N")
					this.$store.state.isGestureOpen = true;
					this.alertMsg("关闭成功");
					
				});
			},
			//关闭指纹
			closeFinger(){
				const param = {
					"FingerprintStatus":"N"
				}
				this.postDo("CloseFingerprintlogin.do",param,data=>{
					this.alertMsg(JSON.stringify(data));
					context.secureSetString("isFingerOpen","N");
					this.$store.state.isFingerOpen = true;
					this.alertMsg("关闭指纹成功!");
				});
			},
			//关闭面容
			closeFace(){
				const param = {
					"FingerprintStatus":"N"
				}
				this.postDo("FaceStatusSet.do",param,data=>{
					context.secureSetString("isFaceOpen","N");
					this.$store.state.isFaceOpen = true;
				});
			},
			//开启面容
			setFace(){
				const param = {
					"FingerprintStatus":"Y"
				}
				this.postDo("FaceStatusSet.do",param,data=>{
					context.secureSetString("isFaceOpen","Y");
					this.$store.state.isFaceOpen = false;
				});
			},
			loginOut(){
				this.postDo("logout.do",{},data=>{
					context.sessionSetString("loginMsg","");
					context.sessionSetString("cifName","");  //用户名
					context.sessionSetString("secreNotice","");  //预留信息
					context.sessionSetString("lastLoginTime",""); //上次登录时间
					context.sessionSetString('isLogin', 'false');
					context.clearToken()
					this.goto();
				});
			}
		},
		
	}
</script>

<style scoped>
	.container{
		width: 750px;
		background-color: rgb(248,248,248);
	}
	.title{
		font-family: PingFangSC-Regular;
		font-size: 28px;
		color: rgb(51,51,51);
		letter-spacing: 0;
	}
	.menuItem {
		height: 100px;
		width: 720px;
		background-color: #fff;
		margin-left: 30px;
		border-bottom-width: 1px;
		border-bottom-color: rgb(229,229,229);
		flex-direction: row;
		padding-right: 30px;
		align-items: center;
		justify-content: space-between;
	}
	.menuItem1 {
		height: 100px;
		width: 720px;
		background-color: #fff;
		margin-left: 30px;
		padding-right: 30px;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
	.image {
		width: 15px;
		height: 25px;
	}
	.image1 {
		width: 45px;
		height: 45px;
	}
	.headImg{
		height: 104px;
		width: 114px;
	}
	.fontBox{
		margin-left: 10px;
	}
	.name{
		font-size: 30px;
		color: rgb(72,72,72);
		font-family: PingFangSC-Medium;
		letter-spacing: -0.64px;
		margin-top: 5px;
	}
	.lastTime{
		font-family: PingFangSC-Regular;
		font-size: 20px;
		color: rgba(147,147,147,0.7);
		margin-top: 10px;
	}
	.head{
		width: 750px;
		padding: 0 30px;
		flex-direction: row;
		align-items: center;
		background-color: #FFFFFF;
		margin-top: 20px;
	}
	.isClose{
		font-family:PingFangSc-Regular ;
		font-size: 26px;
		color: rgb(153,153,153);
	}
	.isOpen{
		font-family:PingFangSc-Regular ;
		font-size: 26px;
		color: rgb(51,51,51);
	}
	.btn{
		width: 750px;
		height: 142px;
		margin-top: 50px;
		margin-bottom: 50px;
		justify-content: center;
		align-items: center;
	}
	.loginBgimg{
		height: 142px;
		width: 690px;
		position: absolute;
		left: 30px;
		top: 0;
	}
	.btnFont{
		font-size: 32px;
		color: #FFFFFF;
		font-weight: 700;
		margin-top: -30px;
	}
</style>
