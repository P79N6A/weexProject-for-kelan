
<template>
	<div class="container">
		<mp-bar 
			:title="title" 
			:titleStyle="titleStyle" 
			:barStyle="barStyle" 
			:leftBtn="leftBtn" 
			:leftBtnStyle="leftBtnStyle" 
			@mpBarLeftBtnClick="mpBarLeftBtnClick" ></mp-bar>
		<scroller style="flex: 1;">
			<buy-page @nextPage="nextPage"></buy-page>
		</scroller>
		<pwd-dialog :showMoney="showMoney" :money="payMoney" :show="showPwd" :title="pwdtitle" @close="closePwd" @getPwd="getPwd"></pwd-dialog>
		<bottom-dialog :show="showBottom" @closeBottomDialog="closeBottomDialog" @choose="choose"></bottom-dialog>
		<Fingerprint v-if="showFinger" @NofingerLogin="NofingerLogin" @confirm="confirm"></Fingerprint>
	</div>
</template>

<script>
	import { MpBar } from "madp-ui";
	import pwdDialog from "@/components/payPwdDialog.vue"
	import bottomDialog from "@/components/finance/bottomDialog.vue"
	import Fingerprint from "@/components/fingerPayDialog.vue";
	import buyPage from "@/components/deposit/depositBuy";
	const fingerprint = weex.requireModule("fingerprint");
	const stream = weex.requireModule("stream");
	const context = weex.requireModule("context");
	export default {
		components: {
			MpBar,
			bottomDialog,
			pwdDialog,
			Fingerprint,
			buyPage
		},
		data() {
			return {
				title: "超享存产品购买",
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
				barStyle: {
					'height': '150px',
					'padding-top': '60px'
				},
				showPwd:false,
				pwdtitle:"请输入取款密码",
				showMoney:true,
				payMoney:"100",
				showBottom:false,
				showFinger:false

			}
		},
		methods:{
			mpBarLeftBtnClick(){
				this.goBack();
			},
			//选择完毕
			choose(item){
				this.showBottom = false;
				this.alertMsg(JSON.stringify(item));
			},
			//关闭选择银行卡的弹框
			closeBottomDialog(){
				this.showBottom = false;
			},
			//更换银行卡
			changeAcount(){
				this.showBottom = true;
			},
			changeMoney(event) {
				const money = event.value;
				this.moneyDX = this.smalltoBIG(money)
			},
			//打开密码控件
			nextPage(){
				const param = {
					"title":"超享存",
					"type":"CK",
					"context":"您已成功购买"
				}
				this.$store.state.resultMsg = param;
				this.jump("/utilResult");
//				this.showPwd = true;
//				this.openFinger();
			},
			openFinger(){
				if(WXEnvironment.platform != "iOS"){
					this.showFinger = true;
				}
				fingerprint.identify(data => {
					if(data == "1") {
						this.showFinger = false;
						this.alertMsg(data);
					}else{
						this.errorTime++;
						this.toastMsg(data);
						if(this.errorTime == 5){
							this.showFinger = false;
						}
					}
				})
			},
			//关闭指纹弹框
			NofingerLogin(){
				fingerprint.cancelIdentify();
				this.showFinger = false;
			},
			//关闭密码弹框
			closePwd(){
				this.showPwd = false;
			},
			//获取密码
			getPwd(pwd){
				this.alertMsg("1111");
			},
		}
	}
</script>

<style scoped>
	.container{
		width: 750px;
		background-color: rgb(248,248,248);
	}
	
	.btn {
		width: 750px;
		height: 142px;
		margin-top: 50px;
		margin-bottom: 50px;
		justify-content: center;
		align-items: center;
	}
	
	.loginBgimg {
		height: 142px;
		width: 690px;
		position: absolute;
		left: 30px;
		top: 0;
	}
	
	.btnFont {
		font-size: 32px;
		color: #FFFFFF;
		font-weight: 700;
		margin-top: -30px;
	}
	
	
</style>