<template>
	<div class="wrapper">
		<wxc-overlay :show="true" :hasAnimation="false" opacity="0.5"></wxc-overlay>
		<div v-if="show" class="container" :style="{top:top}">
			<image class="img" :src="fingerprintImageurl"></image>
			<text class="content-text">请验证已有指纹</text>
			<div class="bottom">
				<!--<div class="bottom-left" @click="cancel">
					<text class="bottom-left-text">取消</text>
				</div>-->
				<div class="bottom-right" @click="confirm">
					<text class="bottom-right-text">取消</text>
				</div>
			</div>
		</div>
	</div>
	</div>
</template>

<script>
	import { WxcOverlay } from "weex-ui";
	const modal = weex.requireModule('modal')
	const stream = weex.requireModule('stream')
	const context = weex.requireModule('context')
	const fingerprint = weex.requireModule("fingerprint")
	const picker = weex.requireModule("picker");
	export default {
		components: {
			WxcOverlay
		},
		props: {
			show: {
				type: Boolean,
				default: true,
			}
		},
		data() {
			return {
				top: "0px",
				fingerprintImageurl: this.$store.state.imgBaseUrl + "login/finger.png",
				errorTime:0
			};
		},
		mounted() {
			this.getHeight();
		},
		created() {
			this.fingerprintAction();
		},
		methods: {
			confirm() {
				this.$emit("confirm");
			},
			cancel() {
				this.$emit("cancel");
			},
			
			fingerprintAction() {
				fingerprint.identify(data => {
					if(data == "1") {
						this.$emit("NofingerLogin");
						this.toLogin();
					}else{
						if(WXEnvironment.platform != "iOS"){
							this.errorTime++;
							this.toastMsg(data);
							if(this.errorTime == 5){
								this.$emit("NofingerLogin");
							}
						}else{
							this.errorTime++;
							this.toastMsg(data);
							if(this.errorTime == 5){
								this.$emit("NofingerLogin");
							}
						}
					}
				})
			},
			//立即登录
			toLogin(){
				const param = {
					"LoginNo":context.secureGetString("LoginId"),
				 	"PreLoginType":"IdNo",
			        "TransName":"LoginByIdNo",
			        "FingerprintStatus":"Y"
				}
				this.postDo("loginFinger.do",param,data=>{
					context.sessionSetString("loginMsg",JSON.stringify(data));
					context.sessionSetString("cifName",data.CifName);  //用户名
					context.sessionSetString("secreNotice",data.SecreNotice);  //预留信息
					context.sessionSetString("lastLoginTime",data.LastLoginTime); //上次登录时间
//					this.alertMsg(JSON.stringify(data));
					context.setToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.cThIIoDvwdueQB468K5xDc5633seEFoqwxjF_xSJyQQ");
					context.sessionSetString('isLogin', 'true');
//					context.replaceStage("main.launcher");
					if(context.getParam("return") == "finish"){
						context.finish();
					}else if(context.getParam("return") == "changePwd"){
						context.replaceStage("main.launcher");
					}else{
						context.next();
					}
				})
			},
			getHeight() {
				var pageHeight = 750 / weex.config.env.deviceWidth * weex.config.env.deviceHeight - 360;
				this.top = pageHeight / 2 + "px";
			}
		}
	};
</script>

<style scoped>
	.wrapper {
		position: fixed;
		width: 750px;
		/*兼容H5异常*/
		z-index: 99999;
	}

	.container {
		position: fixed;
		left: 91px;
		width: 568px;
		height: 360px;
		background-color: #fff;
		border-radius: 24px;
		align-items: center;
	}

	.img {
		margin-top: 30px;
		width: 115px;
		height: 114px;
	}

	.content-text {
		margin-top: 30px;
		width: 360px;
		text-align: center;
		font-size: 26px;
		color: rgb(94,93,93);
	}

	.bottom {
		margin-top: 30px;
		width: 568px;
		height: 99px;
		border-top-width: 1px;
		border-top-color: #ddd;
		border-top-style: solid;
		justify-content: center;
		flex-direction: row;
		align-items: center;
	}

	.bottom-left {
		width: 283px;
		height: 99px;
		margin-right: 10px;
		border-right-color: #ddd;
		border-right-style: solid;
		border-right-width: 1px;
		justify-content: center;
		align-items: center;
		border-radius: 6px;
	}

	.bottom-right {
		width: 568px;
		height: 99px;
		line-height: 99px;
		text-align: center;
		justify-content: center;
		align-items: center;
		border-radius: 6px;
	}

	.bottom-left-text {
		font-size: 32px;
		color: #3277fa;
	}

	.bottom-right-text {
		font-family: PingFangSC-Regular;
		font-size: 32px;
		font-weight: 500;
		color: rgb(232,136,46);
	}
</style>
