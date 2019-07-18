<template>
	<div>
		<mp-footer jsonUrl="json/tab.json" @tabBarOnClick="tabBarOnClick"></mp-footer>
		<image :class="[active?'img':'img1']" src="./imgs/launcher/tabbar.png"></image>

	</div>
</template>

<script>
	import { MpFooter } from "madp-ui";
	const modal = weex.requireModule("modal");
	const context = weex.requireModule("context");
	const stream = weex.requireModule("stream");
	export default {
		data() {
			return {
				active: true
			};
		},
		components: {
			MpFooter
		},
		created() {
			if(this.isipx() == 1) {
				this.active = false;
			} else {
				this.active = true;
			}

			let localAppVersion = context.envGet("versionCode"); //缓存版本号
			let OSType = context.envGet("OSType"); //手机类型 android ios
			stream.fetch({
				method: "GET",
				url: "./json/version.json",
				type: "json"
			}, (response) => {
				if(response.status === 200) {
					let newVersionInfo = response.data;
					let refInfo = "" //更新信息

					if(OSType == "ios") {
						refInfo = newVersionInfo.ios;
					} else if(OSType == "android") {
						refInfo = newVersionInfo.android;
					}
					if(this.compareVersion(localAppVersion, refInfo.appVersion)) {
						//需要更新
						if(refInfo.isStrong == "1") {
							if(OSType == "ios") {
								this.confirm(refInfo.appDesc || '强制更新', value => {
									if(value == "确定") {
										context.launchStage("ext:" + refInfo.downloadUrl);
									} else {
										return;
									}
								})
							} else {
								this.confirm(refInfo.appDesc || '强制更新', value => {
									if(value == "确定") {
										context.launchStage("ext:" + refInfo.downloadUrl);
									} else {
										return;
									}
								})
							}
						} else { //强制更新
							this.alertMsg("44");
							if(OSType == 'ios') {
								this.alertMsgCallBack(refInfo.appDesc || '强制更新', () => {
									//									this.alertMsg("1212");
									context.launchStage("ext:" + refInfo.downloadUrl);
								})
							} else {
								this.alertMsgCallBack(refInfo.appDesc || '强制更新', () => {
									//									this.alertMsg("1212");
									context.launchStage("ext:" + refInfo.downloadUrl);
								})
							}
						}
					} else {

					}

				}
			}, function() {}); //..............

			//查询手势指纹状态
			if(context.secureGetString("LoginId")) {
				this.QryStatus();
			}
		},
		methods: {
			tabBarOnClick(){
				//    console.log("tabBarOnClick", e.index);
			},
			//判断是否需要更新版本
			compareVersion(oldVal, newVal) {
				let oldarr = (oldVal + "").split(".") //缓存版本号
				let newarr = (newVal + "").split(".") //服务器版本号
				let m = oldarr.length;
				let n = newarr.length;
				//根据最长版本号补“.0”  1.1:1.1.2 ==> 1.1.0:1.1.2
				for(var x = 0; x < Math.abs(m - n); x++) {
					if(m > n) {
						newVal = newVal + ".0"
					} else {
						oldVal = oldVal + ".0"
					}
				}
				
				oldarr = (oldVal + "").split(".") //缓存版本号补0后
				newarr = (newVal + "").split(".") //服务器版本号补0后
				for(var i = 0; i < oldarr.length; i++) {
					if(i > n) return false;
					if(oldarr[i] > newarr[i]) {
						//缓存版本大于服务版本
						return false;
					} else if(oldarr[i] < newarr[i]) {
						//缓存版本小于服务版本
						return true;
					}
				}

				return false;

			},
			QryStatus() {
				const param = {
					"LoginId": context.secureGetString("LoginId")
				}
				this.postDo("QryGestureStatus.do", param, data => {
					context.secureSetString("isGestureOpen", data.TxPwdFlag);
					context.secureSetString("isFingerOpen", data.FingerprintStatus);
					context.secureSetString("isFaceOpen", data.FaceStatus);
				})
			}
		}
	};
</script>

<style scoped>
	.img {
		height: 23px;
		width: 750px;
		position: fixed;
		bottom: 90px;
		left: 0px;
	}
	
	.img1 {
		height: 23px;
		width: 750px;
		position: fixed;
		bottom: 140px;
		left: 0px;
	}
</style>