<template>
	<div class="login">
		<image class="bg_image" src="./imgs/login/loginBg.png"></image>

		<image class="logoImg" src="./imgs/login/logo.png"></image>

		<div class="input_area">
			<div class="inputBox">
				<image class="usernameImg" src="./imgs/login/userImg.png"></image>
				<div class="line_y"></div>
				<input class="username" type="text" :value="showUserName" maxLength="18" placeholder="请输入手机号/证件号" @input="getName">
			</div>
			<div class="inputBox" style="margin-top: 30px;">
				<image class="usernameImg" src="./imgs/login/pwdImg.png"></image>
				<div class="line_y"></div>
				<password-input class="psw" kbdType="Full" placeholderColor="#ababab" minLength="6" maxLength="16" encryptType="0" ref="Pwd1" kbdName="logingPw1" placeholder="请输入您的登录密码"></password-input>
			</div>
		</div>
		<div style="width: 750px;padding-right: 65px;align-items: flex-end;">
			<div class="checkebox" @click="check">
				<image v-if="login" class="unckecked" src="./imgs/login/unchecked.png" />
				<image v-else class="unckecked" src="./imgs/login/checked.png" />
				<text class="memory_text">记住用户名</text>
			</div>
		</div>

		<div class="loginBox">
			<image class="loginImg" src="./imgs/login/loginImg.png" @click="variableVerify"></image>
			<text class="loginText">立即登录</text>
		</div>

		<div class="down_title">
			<text class="color" @click="goTo('main.register')">自助注册</text>
			<text class="color" @click="goTo('main.forgetPassword')">忘记密码?</text>
		</div>
		<text class="more-txt" @click="moreLogin">切换登录方式</text>
	</div>

</template>

<style scoped>
	.login {
		width: 750px;
		align-items: center;
		justify-content: space-around;
		flex: 1;
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
	
	.input_area {
		width: 750px;
		align-items: center;
		/*margin-top: 145px*/
		margin-top: 50px;
	}
	
	.inputBox {
		height: 89px;
		width: 620px;
		border-width: 1px;
		border-color: rgb(163, 163, 163);
		border-radius: 10px;
		padding: 0 20px;
		flex-direction: row;
		align-items: center;
	}
	
	.line_y {
		width: 2px;
		height: 30px;
		background-color: rgb(163, 163, 163);
		margin-left: 20px;
	}
	
	.usernameImg {
		width: 40px;
		height: 40px;
	}
	
	.username {
		height: 80px;
		width: 500px;
		margin-left: 20px;
		placeholder-color: rgb(163, 163, 163);
	}
	
	.psw {
		height: 80px;
		width: 500px;
		margin-left: 20px;
	}
	
	.loginBtn {
		height: 80px;
		width: 690px;
		margin-left: 30px;
		background-color: #00A0E8;
		font-size: 32px;
		line-height: 80px;
		border-radius: 15px;
		text-align: center;
	}
	
	.logoImg {
		width: 324px;
		height: 245px;
		margin-top: 80px;
	}
	
	.checkebox {
		flex-direction: row;
		align-items: center;
		/*margin-top: 30px;*/
	}
	
	.unckecked {
		height: 26px;
		width: 26px;
		margin-right: 15px;
	}
	
	.memory_text {
		font-size: 26px;
		color: rgb(240, 51, 20);
	}
	
	.loginBox {
		width: 750px;
		height: 142px;
		align-items: center;
		justify-content: center;
		/*margin-top: 100px;*/
	}
	
	.loginImg {
		position: absolute;
		top: 10px;
		left: 30px;
		height: 142px;
		width: 690px;
	}
	
	.loginText {
		font-size: 32px;
		color: #FFFFFF;
		font-weight: 700;
		margin-top: -5px;
	}
	
	.down_title {
		width: 690px;
		/*margin-top: 80px;*/
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
	}
	
	.color {
		font-size: 26px;
		color: rgb(101, 101, 101);
	}
	
	.more-txt {
		/*margin-top: 150px;*/
		/*margin-bottom: 50px;*/
		height: 80px;
		font-size: 26px;
		color: rgb(240, 51, 20);
	}
</style>

<script>
	const context = weex.requireModule("context");
	const modal = weex.requireModule("modal");
	const stream = weex.requireModule("stream");
	const picker = weex.requireModule("picker");
	export default {
		data() {
			return {
				login: false,
				userName: "",
				pwd:"",
				showUserName:""
				//18667104570
			}
		},
		created() {
			if(context.secureGetString("userName")){
				this.userName = context.secureGetString("userName");
				this.showUserName = context.secureGetString("userName");
			}
		},
		methods: {
			variableVerify() {
//				this.toLogin();
				if(this.userName.length == 0 || this.userName.length == null) {
					this.alertMsg('用户名不能为空!');
					return;
				} else {
					this.postDo("Timestamp.do", {}, data => {
						this.$refs.Pwd1.getValue(data.Timestamp, data => {
							data = JSON.parse(data);
							if(parseInt(data.Length) == 0) {
								this.alertMsg("密码不能为空!");
								return true;
							} else if(parseInt(data.Length) < 6) {
								this.alertMsg("密码不能小于六位");
								return true;
							} else {
								this.pwd = data.Value;
								this.toLogin();
							}
						});
					});
				}

			},
			toLogin() {
				const param = {
					"LoginNo": this.userName,
//					"Password": "a1111111",
					"Password": this.pwd,
					"PreLoginType": "IdNo",
					"TransName": "LoginByIdNo"
				}
				this.postDo("login.do", param, data => {
//					if(data.DoBind == "Y"){
//						context.launchStage("main.Equipment?MobilePhone="+data.MobilePhone);
//						return;
//					}
//					this.alertMsg(JSON.stringify(data));
//					return;

//					this.jump("/Equipment");
					context.sessionSetString("loginMsg",JSON.stringify(data));
					context.secureSetString('userName',this.userName)
					context.secureSetString("LoginId",data.MobilePhone);
					context.sessionSetString("cifName",data.CifName);  //用户名
					context.sessionSetString("secreNotice",data.SecreNotice);  //预留信息
					context.sessionSetString("lastLoginTime",data.LastLoginTime); //上次登录时间
 					context.setToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.cThIIoDvwdueQB468K5xDc5633seEFoqwxjF_xSJyQQ");
					context.sessionSetString('isLogin', 'true');
//					if(data.ispasmodf == "0"){
//						context.replaceStage("main.changePwd");
//					}
					if(context.getParam("return") == "finish"){
						context.finish();
					}else if(context.getParam("return") == "changePwd"){
						context.replaceStage("main.launcher");
					}else{
						context.next();
					}
//					context.replaceStage("main.launcher");
				})
			},
			// 登录名
			getName(event) {
				this.userName = event.value;
				this.showUserName = event.value;
			},
			check() {
				this.login = !this.login;
				if(!this.login) {
					context.secureSetString('userName', this.userName)
				}
			},
			toggle() {
				this.getImgCode();
			},

			goTo(id) {
				context.launchStage(id);
			},

			//更多登录
			moreLogin() {
				let items = ["手势登录", "指纹登录", "人脸登录"];
				picker.pick({
						confirmTitle: "确认",
						cancelTitle: "取消",
						index: 0,
						items:items
					},
					event => {
						if(event.result == "success") {
							if(event.data == 0) {
								this.$emit("GerstureLogin");
							} else if(event.data == 1) {
								this.$emit("FingerLogin");
							} else if(event.data == 2) {

							}
						}
					}
				);
			},
		}

	};
</script>