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
			<div>
				<image class="topImg" src="./imgs/finance/dkbanner.png"></image>
			</div>
			<div class="listBox">
				<div class="listBox_top">
					<text class="font1">贷款列表</text>
					<text class="font2">您的专属秒到账贷款服务</text>
				</div>
				<div class="item" v-for="(item,key) in list">
					<div class="item_left">
						<text class="font3">超e贷</text>
						<div class="fontbox">
							<text class="font4">最优年化利率</text>
							<text class="font5">5.88</text>
							<text class="font6">%</text>
						</div>
						<div class="fontbox" style="margin-top: 20px;">
							<text class="font7">借款期限10年 | 最高借款额度</text>
							<text class="font8">30万</text>
						</div>
					</div>
					<div class="item_right">
						<text class="inforBtn">查看</text>
					</div>
				</div>
			</div>
			 
		</scroller>

	</div>
</template>

<script>
	import { MpBar } from "madp-ui";
	const stream = weex.requireModule("stream");
	const context = weex.requireModule("context");
	export default {
		components: {
			MpBar
		},
		data() {
			return {
				title: "贷款",
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
				list:[,,],
			}
		},
		methods:{
			mpBarLeftBtnClick(){
				this.goBack();
			},
		}
	}
</script>

<style scoped>
	.container{
		width: 750px;
		/*background-color: rgb(248,248,248);*/
		background-color: #FFFFFF
	}
	.topImg{
		height: 271px;
		width: 690px;
		margin-left: 30px;
	}
	.listBox_top{
		height: 60px;
		flex-direction: row;
		padding-left: 35px;
		align-items: flex-end;
	}
	.font1{
		font-size: 28px;
		color: #333333;
	}
	.font2{
		font-size: 22px;
		color: #b4b4b4;
		margin-left: 5px;
	}
	.item{
		width: 690px;
		height: 250px;
		border-width: 1px;
		border-color: rgba(233,233,233,0.82);
		border-radius: 10px;
		margin-left: 30px;
		margin-top: 20px;
		box-shadow: 0px 0px 10px 0px rgba(233,233,233,0.82);
	}
	.fontbox{
		flex-direction: row;
		align-items: flex-end;
	}
	.font3{
		font-family: PingFangSc-Medlum;
		font-size: 26px;
		color: #333333;
	}
	.font4{
		font-family: PingFangSc-Medlum;
		font-size: 28px;
		color: #333333;
	}
	.font5{
		font-family: PingFangSc-Medlum;
		font-size: 48px;
		color: #f02333;
		margin-bottom: -4px;
		margin-left: 5px;
	}
	.font6{
		font-family: PingFangSc-Medlum;
		font-size: 26px;
		color: #f02333;
		margin-left: 5px;
	}
	.font7{
		font-family: PingFangSc-Medlum;
		font-size: 26px;
		color: #A6AEBC;
		align-items: center;
	}
	.font8{
		font-family: PingFangSc-Medlum;
		font-size: 26px;
		color: #f8972f;
	}
	.item{
		flex-direction: row;
		padding: 0px 28px;
		align-items: center;
		justify-content: space-between;
	}
	.item_right{
		width: 120px;
		height: 60px;
		background-color: #f8972f;
		border-radius: 40px;
		align-items: center;
		justify-content: center;
	}
	.inforBtn{
		font-size: 28px;
		color: #FFFFFF;
	}
</style>