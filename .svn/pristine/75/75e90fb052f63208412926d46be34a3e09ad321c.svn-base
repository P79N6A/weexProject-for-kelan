<template>
	<div class="container">
		<image src="./imgs/tab_finance/myTreasure/propertyBgimg.png" class="bgImg"></image>
		<div class="big">
			<div class="leftBox">
				<div style="flex-direction: row;align-items: center;margin-top: 54px;"> 
					<text class="font4">{{money}}</text>
				</div>
				<text class="leftFont2">我的理财（元）</text>
				<text class="leftFont3">风险类型&nbsp; {{type}}</text>
				<text class="leftFont4">有效期&nbsp; {{time}}</text>
			</div>
			<div class="rightBox">
				<div class="menuBox" @click="Getdetails">
					<image src="./imgs/tab_finance/myTreasure/menubg.png" class="rightImg"></image>
					<image src="./imgs/tab_finance/myTreasure/mone.png" class="img1"></image>
					<text class="fontRight1">历史明细</text>
					<image src="./imgs/tab_finance/myTreasure/rightBtn2.png" class="img2"></image>
				</div>
				<div class="menuBox" @click="gotofenx">
					<image src="./imgs/tab_finance/myTreasure/menubg.png" class="rightImg"></image>
					<image src="./imgs/tab_finance/myTreasure/finance.png" class="img1"></image>
					<text class="fontRight2">重新评估</text>
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
				money:"12394950.78",
				type:"平衡型",
				time:"2020-01-20"
			}
		},
		methods:{
			Getdetails(){
				this.jump("/historyDetails");
			},
			gotofenx(){
				this.jump("/myRiskAssessment");
			}
		}
	}
</script>

<style scoped>
	.container{
		width: 750px;
		padding-bottom: 20px;
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
	.leftFont2{
		font-family:PingFangSC-Regular ;
		font-size: 26px;
		color: rgba(255,255,255,0.8);
		margin-top: 10px;
	}
	.leftFont3{
		font-family:PingFangSC-Regular ;
		font-size: 24px;
		color: rgba(255,255,255,0.8);
		margin-top: 15px;
	}
	.leftFont4{
		font-family:PingFangSC-Regular ;
		font-size: 24px;
		color: rgba(255,255,255,0.8);
		margin-top: 5px;
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
	.font4{
		font-family:AdobeHeitiStd-Regular ;
		font-size: 46px;
		color:rgb(255,252,242);
		font-weight: 500;
	}
</style>