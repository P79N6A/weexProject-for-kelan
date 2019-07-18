<template>
	<div class="Bg">
		<image class="bg_image" src="./imgs/login/loginBg.png"></image>
		<div class="big">
			<image class="logoImg" src="./imgs/login/logoImg.png"></image>
			<text class="font">尊敬的用户您好</text>
		</div>
		<!--<div style="align-items: center;width: 750px;margin-top: 60px;">-->
			<text :class="[active?'message1':'message2']">{{message}}</text>
			<weex-lockview ref="lockview" class="active" @onComplete="onComplete" lineWidth="3" normalColor="#e9e7e4" selectColor="#ffad00" errorColor="#ff2e13" ratio="0.5"></weex-lockview>
		<!--</div>-->
		<text class="more-txt" @click="moreLogin">切换登录方式</text>
	</div>

</template>

<style scoped>
	.big{
		/*position: absolute;*/
		width: 750px;
		/*top: 50px;*/
		align-items: center;
	}
	.more-txt {
		position: absolute;
		bottom: 40px;
		width: 750px;
		line-height: 80px;
		text-align: center;
		height: 80px;
		font-size: 26px;
		color: rgb(243, 80, 75);
	}
	.Bg {
		width: 750px;
		flex: 1;
		/*justify-content: center;*/
		align-items: center;
		padding-bottom:200px ;
		justify-content: center;
	}
	
	.bg_image {
		/*width: 750px;*/
		/*height:1500px;*/
		flex: 1;
		position: absolute;
		top: 0px;
		left: 0px;
		bottom: 0px;
		right: 0px;
	}
	.active {
		margin-top:30px;
		width: 550px;
		height: 550px;
	}
	.logoImg{
		height: 176px;
		width: 176px;
	}
	.message1{
		font-size: 30px;
		font-family: PingFangSc-Regular;
		color: rgb(189, 193, 209);
		margin-top: 60px;
	}
	.font{
		font-size: 30px;
		font-family: PingFangSc-Regular;
		color: rgb(51, 51, 51);
	}
	.message2{
		font-size: 30px;
		font-family: PingFangSc-Regular;
		color: rgb(255, 46, 19);
		margin-top: 60px;
	}
</style>
<script>
	// import Title from '../components/title.vue'

	const modal = weex.requireModule('modal')
	const stream = weex.requireModule('stream')
	const context = weex.requireModule('context')
	const fingerprint = weex.requireModule("fingerprint")
	const picker = weex.requireModule("picker");
	export default {
		components: {
			// Title
		},
		data() {
			return {
				message:"请绘制您的解锁密码",
				active:true
			}
		},
		created() {
		},
		methods: {
			onComplete(event) {
				if(event.text.length < 4){
					this.message = "至少连接4个点，请重新绘制";
					this.active = false;
					this.$refs.lockview.error();
					setTimeout(()=>{
						this.$refs.lockview.clear();
					},1000);
					return;
				}
				this.$refs.lockview.clear();
				var gesturePwd = event.text;
        		this.toLogin(gesturePwd);
			},
			//获取用户名
			getName(event) {
				this.UserName = event.value;
			},
			//获取密码
			getPwd(event) {
				this.UserPwd = event.value;
			},
			//忘记密码
			toForget() {
				this.jump("/forgetpwdone")
			},
			//立即登录
			toLogin(id) {
				const param = {
					"LoginNo":context.secureGetString("LoginId"),
		       		"TuxPassword": id,
			        "PreLoginType":"IdNo",
			        "TransName":"LoginByIdNo"
				}
				this.postDo("TXlogin.do",param,data=>{
					context.sessionSetString("loginMsg",JSON.stringify(data));
					context.sessionSetString("cifName",data.CifName);  //用户名
					context.sessionSetString("secreNotice",data.SecreNotice);  //预留信息
					context.sessionSetString("lastLoginTime",data.LastLoginTime); //上次登录时间
					context.setToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.cThIIoDvwdueQB468K5xDc5633seEFoqwxjF_xSJyQQ");
					context.sessionSetString('isLogin', 'true');
					if(context.getParam("return") == "finish"){
						context.finish();
					}else if(context.getParam("return") == "changePwd"){
						context.replaceStage("main.launcher");
					}else{
						context.next();
					}
				});
			
				//注册
			},
			//更多登录
			moreLogin() {
				let items = ["指纹登录", "人脸登录", "密码登录"];
				picker.pick({
						confirmTitle: "确认",
						cancelTitle: "取消",
						index: 0,
						items
					},
					event => {
						if(event.result === "success") {
							if(event.data == 0) {
								this.$emit("FingerLogin");
							} else if(event.data == 1) {
								
							} else if(event.data == 2) {
								this.$emit("PwdLogin");
							}
						}
					}
				);
			},
		}
	}
</script>