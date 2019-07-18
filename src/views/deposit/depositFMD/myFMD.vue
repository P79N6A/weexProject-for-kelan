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
			<my-deposits :bankCardList="bankCardList" :AcNameFirst="AcNameFirst" @gotoDetail="gotoDetail" @changeAcount="changeAcount"></my-deposits>
		</scroller>
		<bottom-dialog :show="showBottom" @closeBottomDialog="closeBottomDialog" @choose="choose" :CommonPayerAcNoList="CommonPayerAcNoList"></bottom-dialog>
	</div>
</template>

<script>
	import { MpBar } from "madp-ui";
	import myDeposits from "@/components/deposit/myDeposits.vue";
	import bottomDialog from "@/components/deposit/bottomDialog.vue";
	const stream = weex.requireModule("stream");
	const context = weex.requireModule("context");
	export default{
		components:{
			MpBar,
			myDeposits,
			bottomDialog,
		},
		data(){
			return {
				title: "我的福满多",
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
				showBottom:false,
				CommonPayerAcNoList:[],
				// AvailBal:'',
				bankCardList:[],
				AcNameFirst:'',
				
			}
		},
		created(){
			this.bankListQry();

		},
		methods:{
			//查询银行卡列表
			bankListQry(){
				this.postDo("MonthProductCancelPre.do",{},data=>{
					this.CommonPayerAcNoList = data.CommonPayerAcNoList
					this.AcNameFirst = this.CommonPayerAcNoList[0].AcNo;//初始查卡号
					// this.getlastmoney(this.AcNameFirst,this.CommonPayerAcNoList[0].BankAcType);//初始查余额
					this.myListQry(this.AcNameFirst);//初始查列表
				});
			},
			//查询我的福满多产品列表
			myListQry(AcNo){
				const param={
					"AccountNo" : AcNo,
				}
				this.postDo("BlessingProductQry.do",param,data=>{
					this.bankCardList = data.List
				});
			},
			//关闭选择银行卡的弹框
			closeBottomDialog(){
				this.showBottom = false;
			},
			//选择完毕
			choose(item){
				this.showBottom = false;
				this.AcNameFirst = item.AcNo;//选择的转出卡号
				// this.getlastmoney(item.AcNo,item.BankAcType);
				this.myListQry(item.AcNo);
			},
			//更换银行卡
			changeAcount(){
				this.showBottom = true;
			},
			mpBarLeftBtnClick(){
				this.goBack();
			},
			gotoDetail(item){
				// this.alertMsg(JSON.stringify(item))
				this.$store.state.drawInfo = item;
				this.jump("/drawFMD");
			}
		}
	}
</script>

<style scoped>
	.container{
		width: 750px;
		background-color: rgb(248, 248, 248);
	}
</style>