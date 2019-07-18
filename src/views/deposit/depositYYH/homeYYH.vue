<template>
	<div class="container">
		<mp-bar 
			:title="title" 
			:titleStyle="titleStyle" 
			:barStyle="barStyle" 
			:leftBtn="leftBtn" 
			:leftBtnStyle="leftBtnStyle"
			@mpBarLeftBtnClick="mpBarLeftBtnClick"
			:rightTxt="rightTxt" 
			:rightTxtStyle="rightTxtStyle"
			@mpBarRightBtnClick="mpBarRightBtnClick"></mp-bar>
		<scroller style="flex: 1;">
			<top :list="list" :CommonPayerAcNoList="CommonPayerAcNoList" @depositBuy="depositBuy"></top>
			<center></center>
		</scroller>
		<!-- <div :class="[active?'btn':'btn1']" @click="gotoBuy">
			<image :class="[active?'btnBg':'btnBg1']" src="./imgs/finance/bottomBtnBg.png"></image>
			<text class="btnFont">立即购买</text>
		</div> -->
	</div>
</template>

<script>
	import { MpBar } from "madp-ui";
	import top from "@/components/deposit/depositYYH/top.vue";
	import center from "@/components/deposit/depositYYH/center.vue";
	const stream = weex.requireModule("stream");
	const context = weex.requireModule("context");
	export default{
		components:{
			MpBar,
			top,
			center
		},
		data(){
			return {
				title: "月月红",
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
				bgUrl:"./imgs/finance/barBgImg.png",
				bgStyle:{
					width:"750px",
					height:"150px"
				},
				rightTxt: "我的",
				rightTxtStyle: {
					"font-size": "26px",
					"font-family": "PingFangSc-Regular",
					"color": "rgb(87, 87, 87)",
					"font-weight":"500"
				},
				active:false,
				list:[],//后台接受的利率列表
				CommonPayerAcNoList:[],//后台接受的可购买账号列表
			}
		},
		created(){
			if(this.isipx() == 1) {
				this.active = false;
			} else {
				this.active = true;
			}
			
			this.listInit();
		},
		methods:{
			//
			listInit(){
				this.postDo("MonthProductBuyPre.do",{},data=>{
					// this.alertMsg(JSON.stringify(data))
					this.CommonPayerAcNoList = data.CommonPayerAcNoList
					this.list = data.List
				});
			},
			depositBuy(item){
				this.$store.state.buyitem = item;
				this.$store.state.CommonPayerAcNoList = this.CommonPayerAcNoList;
				this.jump("/buyYYH");
			},
			mpBarLeftBtnClick(){
				this.goBack();
			},
			mpBarRightBtnClick(){
				this.jump("/myYYH");
			},
		}
	}
</script>

<style scoped>
	.container{
		width: 750px;
		background-color: rgb(248, 248, 248);
	}
	.btn{
		height: 125px;
		width: 750px;
		align-items: center;
		justify-content: center;
		position: flex;
		bottom: 0px;
		left: 0px;
	}
	.btn1{
		height: 175px;
		width: 750px;
		align-items: center;
		justify-content: center;
		position: flex;
		bottom: 0px;
		left: 0px;
		padding-bottom: 50px;
	}
	.btnBg{
		position: absolute;
		width: 750px;
		height: 125px;
		top: 0px;
		left: 0px;
	}
	.btnBg1{
		position: absolute;
		width: 750px;
		height: 175px;
		top: 0px;
		left: 0px;
	}
	.btnFont{
		font-size: 30px;
		font-family: PingFangSc-Medlum;
		color: #FFFFFF;
		margin-top: 20px;
	}
</style>
