<template>
	<div class="container">
		<mp-bar 
			:title="title" 
			:titleStyle="titleStyle" 
			:barStyle="barStyle" 
			:leftBtn="leftBtn" 
			:leftBtnStyle="leftBtnStyle"
			@mpBarLeftBtnClick="mpBarLeftBtnClick"></mp-bar>
		<scroller style="flex: 1;">
			<desposit-draws :drawInfo="drawInfo" @depositDraw="depositDraw"></desposit-draws>
		</scroller>
		<pwd-dialog :showMoney="showMoney" :money="payMoney"  ref="pwdDialog" :show="showPwd" :title="pwdtitle" @close="closePwd" @getPwd="getPwd"></pwd-dialog>
	</div>
</template>

<script>
	import { MpBar } from "madp-ui";
	import despositDraws from "@/components/deposit/depositDraws.vue";
	import pwdDialog from "@/components/payPwdDialog.vue";
	const stream = weex.requireModule("stream");
	const context = weex.requireModule("context");
	export default{
		components:{
			MpBar,
			despositDraws,
			pwdDialog
		},
		data(){
			return {
				title: "节节高支取",
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
				showMoney:true,
				showPwd:false,
				pwdtitle:"支取",
				list:[,,],
				drawInfo:[],
				payMoney:'',//支取金额
			}
		},
		created(){
			this.getToken();
			this.drawInfo = this.$store.state.drawInfo;
			this.payMoney = this.drawInfo.Balance;
		},
		methods:{
			getToken() {
				this.postDo("GenToken.do", {}, data => {
					this.token = data._tokenName;
				});
			},
			mpBarLeftBtnClick(){
				this.goBack();
			},
			depositDraw(){
				this.showPwd = true;
			},
			//关闭密码弹框
			closePwd(){
				this.showPwd = false;
			},
			//获取密码
			getPwd(pwd){
				this.$refs.pwdDialog.close();
				const param = {
					"AccountNo" : this.drawInfo.PayeeAccountNo, // 转出账号
					// "PayerAccountName" : this.drawInfo.PayerAccountName, //账户名称
					"AcctNo" : this.drawInfo.PayerSubAccountNo, // 子账户序号
					"TranAmt" : this.drawInfo.Balance, // 金额
					"TrsPassword" : pwd, // 密码
					"_tokenName" : this.token,
				};
				// this.alertMsg(JSON.stringify(param))
				this.postDo("FestProductCancel.do",param,data=>{
					// this.alertMsg(JSON.stringify(data))
					const param = {
						"title":"节节高支取",
						"type":"ZQ",
						"context":"交易处理成功"
					}
					this.$store.state.resultMsg = param;
					this.jump("/utilResult");
				},()=>{
					this.getToken();
				});
			},
			
		}
	}
</script>

<style scoped>
	.container{
		width: 750px;
		background-color: rgb(248, 248, 248);
	}
</style>