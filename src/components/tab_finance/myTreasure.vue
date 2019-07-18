<template>
	<div class="container">
		<image src="./imgs/tab_finance/myTreasure/propertyBgimg.png" class="bgImg"></image>
		<div class="big">
			<div class="leftBox">
				<div v-if="!$store.state.login" style="flex-direction: row;align-items: center;margin-top: 54px;" @click="gotoLogin">
					<text class="leftFont1">请登录后查看</text>
					<image src="./imgs/tab_finance/myTreasure/rightBtn1.png" style="height: 28px;width: 17px;margin-left: 30px;"></image>
				</div>
				
				<div v-else style="flex-direction: row;align-items: center;margin-top: 54px;"> 
					<text class="font3">¥</text>
					<text class="font4">{{money}}</text>
				</div>
				<text class="leftFont2">总持仓(元)</text>
				<text class="leftFont3">次统计，只统计本金部分</text>
			</div>
			<div class="rightBox">
				<div class="menuBox">
					<image src="./imgs/tab_finance/myTreasure/menubg.png" class="rightImg"></image>
					<image src="./imgs/tab_finance/myTreasure/mone.png" class="img1"></image>
					<text class="fontRight1">我的存款</text>
					<image src="./imgs/tab_finance/myTreasure/rightBtn2.png" class="img2"></image>
				</div>
				<div class="menuBox">
					<image src="./imgs/tab_finance/myTreasure/menubg.png" class="rightImg"></image>
					<image src="./imgs/tab_finance/myTreasure/finance.png" class="img1"></image>
					<text class="fontRight2">我的理财</text>
					<image src="./imgs/tab_finance/myTreasure/rightBtn2.png" class="img2"></image>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	const context = weex.requireModule("context");
	const modal = weex.requireModule("modal");
	const stream = weex.requireModule("stream");
	export default{
		data(){
			return{
				money:"12394950.78"
			}
		},
		methods:{
			gotoLogin(){
				this.goto();
			}
		}
	}
</script>

<style scoped>
	.container{
		width: 750px;
		height: 271px;
		background-color: #FFFFFF;
	}
	.bgImg{
		position: absolute;
		height: 271px;
		width: 690px;
		left: 30px;
		top: 0px;
	}
	.big{
		flex-direction: row;
		margin-left: 30px;
		height: 271px;
		width: 690px;
		padding-left: 50px;
		padding-right: 30px;
		justify-content: space-between;
		
	}
	.leftFont1{
		font-family: PingFangSC-Medlum;
		font-size: 36px;
		color: rgb(255,250,246);
	}
	.leftFont2{
		font-family:PingFangSC-Regular ;
		font-size: 26px;
		color: rgba(255,255,255,0.8);
		margin-top: 40px;
	}
	.leftFont3{
		font-family:PingFangSC-Regular ;
		font-size: 20px;
		color: rgba(255,255,255,0.8);
		margin-top: 23px;
	}
	.rightImg{
		position: absolute;
		top: 0px;
		right: 0px;
		width: 194px;
		height: 54px;
	}
	.menuBox{
		width: 194px;
		height: 54px;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
		padding: 0 13px;
	}
	.img1{
		width: 23px;
		height: 23px;
	}
	.img2{
		width: 11px;
		height: 18px;
	}
	.fontRight1{
		font-family:PingFangSC-Regular ;
		font-size: 22px;
		color: rgb(218,100,0);
	}
	.fontRight2{
		font-family:PingFangSC-Regular ;
		font-size: 22px;
		color: rgb(221,47,12);
	}
	.rightBox{
		height: 271px;
		margin-left: 120px;
		padding: 50px 0;
		justify-content: space-around;
	}
		.font3{
		font-family:AdobeHeitiStd-Regular ;
		font-size: 26px;
		margin-top: 12px;
		color:rgb(255,252,242);
		margin-right: 8px;
	}
	.font4{
		font-family:AdobeHeitiStd-Regular ;
		font-size: 46px;
		color:rgb(255,252,242);
		font-weight: 500;
	}
</style>