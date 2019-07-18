<template>
	<div class="container">
		<mp-bar 
			:title="title" 
			:titleStyle="titleStyle" 
			:barStyle="barStyle" 
			:leftBtn="leftBtn" 
			:leftBtnStyle="leftBtnStyle" 
			@mpBarLeftBtnClick="mpBarLeftBtnClick" ></mp-bar>
		<div class="big">
			<div class="item" @click="select">
				<text class="font">取款账户</text>
				<text class="font1">{{Acount}}</text>
				<image class="img" src="./imgs/tab_user/menu/img_right.png"></image>
			</div>
			<div class="item">
				<text class="font">取款金额</text>
				<input class="input" v-model="money" type="number" placeholder="请输入所取金额" @input="getMoney"/>
			</div>
		</div>
		<div class="btn">
			<image class="loginBgimg" src="./imgs/securityCenter/loginBg.png" @click="ScanWithDrawConfirm"></image>
			<text class="btnFont">下一步</text>
		</div>
	</div>
</template> 

<script>
	import { MpBar } from "madp-ui";
	const stream = weex.requireModule("stream");
	const context = weex.requireModule("context");
	const picker = weex.requireModule("picker");
	export default {
		components: {
			MpBar
		},
		data() {
			return {
				title: "二维码取款",
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
				AcountList:[],
				Acount:"请选择你的银行卡",
				BankAcType:"",
				money:"",
				AcountNoList:[],
				AtmNo:"",   //ATM序号
				ScanSeq:"",   //扫码取款序号
				ATMMoney:"",   //ATM预留金额
				
			}
		},
		created(){
			if(context.sessionGetString("productInfo")){
				this.ScanSeq = context.sessionGetString("productInfo");
			}
			//账户信息
			if(this.$store.state.AcountInfo){
				this.Acount = this.$store.state.AcountInfo.AccountNo;
				this.BankAcType = this.$store.state.AcountInfo.BankAcType;
				this.money = this.$store.state.AcountInfo.AppointAmount;
			}
			this.getCountLIst();
		},
		methods:{
			getMoney(event){
				this.money = event.value;
			},
			//查询账户列表
			getCountLIst(){
				const param = {
					"ScanSeq":this.ScanSeq
				}
				this.postDo("ScanWithDrawPre.do",param,data=>{
					this.ATMMoney = data.AtmLeftCash;
					this.AcountList = data.List;
					this.AcountNoList = [];
					for(var i=0;i<this.AcountList.length;i++){
						this.AcountNoList.push(this.AcountList[i].AcNo)
					}
				});
			},
			//确认接口 ScanWithDrawConfirm
			ScanWithDrawConfirm(){
				if(this.money.indexOf(".") != "-1"){
					this.alertMsg("输入金额必须为整数!");
				}else if(this.money.indexOf("-") != "-1"){
					this.alertMsg("输入金额必须为正数!");
				}else if(this.money % 100 != 0){
					this.alertMsg("请输入100或者100的倍数!");
					return;
				}else if(this.money > this.ATMMoney){
					this.alertMsg("设备余额不足!");
					return;
				}
				const param = {
					"AccountNo":this.Acount,    //账户
					"BankAcType":this.BankAcType,   //账户类型
//					"AtmNo":"93600001",        //ATM编号
					"ScanSeq":this.ScanSeq,      //扫码取款序号
					"AppointAmount":this.money  //预约金额
				}
				this.postDo("ScanWithDrawConfirm.do",param,data=>{
					this.$store.state.AcountInfo = data;
					this.jump("/drawConfirm");
				});
			},
			
			mpBarLeftBtnClick(){
				this.goBack();
			},
			select() {
				picker.pick({
					items: this.AcountNoList
				}, event => {
					if(event.result === 'success') {
						var i = event.data
						this.Acount = this.AcountList[i].AcNo;
						this.BankAcType = this.AcountList[i].BankAcType;
					}
				})

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
		background-color: #FFFFFF;
		margin-top: 20px;
	}
	.item{
		width: 720px;
		height: 100px;
		border-bottom-width: 1px;
		border-bottom-color: #f0f0f0;
		margin-left: 30px;
		flex-direction: row;
		align-items: center;
		padding-right: 30px;
	}
	.font{
		font-size: 28px;
		color: rgb(51, 51, 51);	
	}
	.font1{
		font-size: 28px;
		color: rgb(51, 51, 51);	
		margin-left: 30px;
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
	.input{
		width: 500px;
		height: 90px;
		font-size: 28px;
		color: rgb(51, 51, 51);	
		margin-left: 30px;
	}
	.img{
		position: absolute;
		right: 30px;
		top: 37.5px;
		width: 15px;
		height: 25px;
	}
</style>
