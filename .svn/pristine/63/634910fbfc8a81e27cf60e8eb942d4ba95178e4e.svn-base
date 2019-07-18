<template>
	<div class="container">
		<mp-bar title="设置指纹" 
			:barStyle="barStyle" 
			:titleStyle="titleStyle" 
			:leftBtn="leftBtn" 
			:leftBtnStyle="leftBtnStyle" 
			@mpBarLeftBtnClick="mpBarLeftBtnClick"></mp-bar>
			
			<text style="margin-top: 100px;margin-left: 100px;" @click="OpenFinger">点击开启指纹</text>
			
			<Fingerprint v-if="showFinger" @NofingerLogin="NofingerLogin" @confirm="confirm"></Fingerprint>
	</div>
</template>

<script>
	import Fingerprint from "@/components/setFinger/fingerStretch.vue"
	import { MpBar} from "madp-ui";
	const fingerprint = weex.requireModule("fingerprint");
	const context = weex.requireModule("context");
	export default{
		 components: {
		  	Fingerprint,
		  	MpBar
		 },
		data(){
			return{
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
				showFinger: false,
				errorTime:0
			}
		},
		methods:{
			//返回
			mpBarLeftBtnClick(){
				this.goBack();
			},
			OpenFinger() {
				fingerprint.isHardwareEnable(data => {
					if(data == "1") {
						if(WXEnvironment.platform != "iOS"){
							this.showFinger = true;
						}
						fingerprint.identify(data => {
							if(data == "1") {
								this.showFinger = false;
								this.SetFinger();
							}else{
								this.errorTime++;
								this.toastMsg(data);
								if(this.errorTime == 5){
									this.showFinger = false;
								}
							}
						})
					} else {
						this.showFinger = false;
						this.alertMsg("您的设备不支持指纹呦!");
					}
				})
			},
			SetFinger(){
				const param = {
					"FingerprintStatus":"Y"
				}
				this.postDo("OpenFingerprintlogin.do",param,data=>{
					this.alertMsgCallBack("指纹开通成功",()=>{
						context.secureSetString("isFingerOpen","Y")
						this.$store.state.isFingerOpen = false;
						this.showFinger = false;
						this.goBack();
					});
				});
				
			},
			NofingerLogin(){
				fingerprint.cancelIdentify();
				this.showFinger = false;
			}
		}
	}
</script>

<style scoped>
</style>