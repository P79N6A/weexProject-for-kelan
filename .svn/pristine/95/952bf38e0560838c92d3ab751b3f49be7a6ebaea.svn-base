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
			<div class="big">
				<div class="item">
					<text class="font">产品名称</text>
					<text class="font">{{CYCInfor.ItemName}}</text>
				</div>
				<div class="item">
					<text class="font">产品编号</text>
					<text class="font">{{CYCInfor.ItemId}}</text>
				</div>
				<div class="item">
					<text class="font">利       率</text>
					<text class="font">{{CYCInfor.Rate}}%</text>
				</div>
				<div class="item">
					<text class="font">存入金额</text>
					<text class="font1">{{CYCInfor.TrsAmount | addDot}}元</text>
				</div>
				<div class="item">
					<text class="font">累积存入</text>
					<text class="font">{{CYCInfor.SumAmount | addDot}}元</text>
				</div>
			</div>
			<div class="btn">
				<image class="loginBgimg" src="./imgs/securityCenter/loginBg.png" @click="gotoNext"></image>
				<text class="btnFont">确认</text>
			</div>
		</scroller>
		<pay ref="pwdDialog" :show="showPay" @close="closePay" @getPwd="getPwd"></pay>
	</div>
</template>

<script>
	import { MpBar } from "madp-ui";
	import pay from "@/components/payPwdDialog.vue"
	const stream = weex.requireModule("stream");
	const context = weex.requireModule("context");
	export default {
		components: {
			MpBar,
			pay
		},
		data() {
			return {
				title: "诚意存",
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
				rightTxt: "交易明细",
				rightTxtStyle: {
					"font-size": "24px",
					"font-family": "PingFangSc-Regular",
					"color": "rgb(189, 193, 209)"
				},
				showPay:false,
				pwd:"",
				token:"",
				depositMoney:"0.00",
				CYCInfor:{
					ItemName:"",
					ItemId:"",
					Rate:"1.48",
					SumAmount:"0.00"
				}

			}
		},
		created(){
			if(this.$store.state.CYCInfor){
				this.CYCInfor = this.$store.state.CYCInfor;
			}
			this.getToken();
		},
		methods:{
			getToken(){
				this.postDo("GenToken.do",{},data=>{
					this.token = data._tokenName;
				});
			},
			mpBarLeftBtnClick(){
				this.goBack();
			},
			gotoNext(){
				this.showPay = true;
//				this.jump("/resultPage");
			},
			//关闭密码弹框
			closePay(){
				this.showPay = false;
			},
			getPwd(pwd){
				this.$refs.pwdDialog.close();
				const param = {
					"ItemId":this.CYCInfor.ItemId,
					"TrsAmount":this.CYCInfor.TrsAmount,
					"Rate":this.CYCInfor.Rate,
					"TrsPassword":pwd,
					"_tokenName":this.token
				}
				this.postDo("CYCDeposit.do",param,data=>{
					if(data.resultMap._RejCode == "000000"){
						this.$store.state.result = true;
						this.jump("/resultPage");
					}else{
						this.$store.state.result = false;
						this.jump("/resultPage");
					}
//					this.alertMsg(JSON.stringify(data));
				},()=>{
					this.getToken();
				});
			}
		},
		filters: {
			addDot(val) {
				var Astr = val.toString();
				Astr = Astr.replace(/,/g, '');
				if(Astr.indexOf(".") != -1) {
					var str = Astr.split(".")[0]
					var afDot = Astr.split(".")[1]
					var newVal = "";
					for(var i = 0; i <= str.length - 1; i++) {
						if((str.length - i) % 3 == 1 && i != (str.length - 1)) {
							newVal = newVal + str.charAt(i) + ",";
						} else {
							newVal = newVal + str.charAt(i);
						}
					}
					return newVal + "." + afDot.substring(0,2);
				} else {
					var str = val.toString();
					var newVal = "";
					for(var i = 0; i <= str.length - 1; i++) {
						if((str.length - i) % 3 == 1 && i != (str.length - 1)) {
							newVal = newVal + str.charAt(i) + ",";
						} else {
							newVal = newVal + str.charAt(i);
						}
					}
					return newVal + ".00";
				}
			}
		}
	}
</script>

<style scoped>
	.container{
		width: 750px;
		background-color: rgb(248,248,248);
	}
	.big{
		width: 750px;
		background-color: #FFFFFF;
		margin-top: 20px;
	}
	.item{
		width: 720px;
		height: 90px;
		border-bottom-width: 1px;
		border-bottom-color: #f0f0f0;
		margin-left: 30px;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding-right: 30px;
	}
	.font{
		font-size: 28px;
		color: rgb(51, 51, 51);	
	}
	.font1{
		font-size: 28px;
		color: #f02333;
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