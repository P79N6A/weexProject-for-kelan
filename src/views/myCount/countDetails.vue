<template>
	<div class="container">
		<mp-bar 
			:title="title" 
			:titleStyle="titleStyle" 
			:barStyle="barStyle" 
			:leftBtn="leftBtn" 
			:leftBtnStyle="leftBtnStyle"></mp-bar>
		<scroller style="flex: 1;">
			<div class="big">
				<div class="item">
					<image class="bgImg" src="./imgs/myCount/dqczBg.png"></image>
					<div class="item_top">
						<div class="row">
							<image class="logoImg" src="./imgs/myCount/gyRCb.png"></image>
							<text class="fontName">活期存折</text>
						</div>
						<div class="row1">
							<image class="sBgimg" src="./imgs/myCount/sDqczBg.png"></image>
							<text class="sFontName">活期存折</text>
						</div>
					</div>
					<div class="center">
						<text class="font5">储蓄卡</text>
					</div>
					<div class="item_bottom">
						<text class="font3">6666 **** **** 9874</text>
					</div>
				</div>
			</div>
			<count-item style="background-color: #FFFFFF;"></count-item>
		</scroller>
	</div>
</template>

<script>
	import { MpBar } from "madp-ui";
	const stream = weex.requireModule("stream");
	const context = weex.requireModule("context");
	import countItem from "@/components/myCount/countItem1.vue"
	export default{
		components:{
			MpBar,
			countItem
		},
		data(){
			return {
				title: "我的账户详情",
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
				}
			}
		},
		created(){
		},
		methods:{
			mpBarLeftBtnClick(){
				this.goBack();
			},
			mpBarRightBtnClick(){
				
			},
		}
	}
</script>

<style scoped>
	.container{
		width: 750px;
		background-color: rgb(248, 248, 248);
	}
	.big{
		width: 750px;
		margin-top: 20px;
	}
	.item{
		width: 690px;
		height: 202px;
		margin-left: 30px;
		margin-bottom: 20px;
		padding: 20px 30px;
	}
	
	.bgImg{
		position: absolute;
		left: 0px;
		top: 0px;
		width: 690px;
		height: 202px;
	}
	.item_top{
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
	.row{
		flex-direction: row;
		align-items: center;
	}
	.logoImg{
		width: 62px;
		height: 62px;
	}
	.fontName{
		font-size: 28px;
		color: #FEFEFE;
		font-weight: 500;
		margin-left: 10px;
	}
	.sBgimg{
		width: 122px;
		height: 42px;
		position: absolute;
		top: 0px;
		left: 0px;
	}
	.sFontName{
		font-size: 24px;
		color: #FEFEFE;
	}
	.row1{
		width: 122px;
		height: 42px;
		align-items: center;
		justify-content: center;
	}
	.item_bottom{
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding-left: 72px;
		margin-top: 10px;
	}
	.font3{
		font-size: 28px;
		color: #FEFEFE;
	}
	.font4{
		font-size: 20px;
		color: #FEFEFE;
	}
	.xiangqi{
		width: 9px;
		height: 16px;
		margin-left: 5px;
	}
	.center{
		height: 50px;
		padding-left: 72px;
		justify-content: center;
	}
	.font5{
		font-size: 26px;
		color: #EFEFEF;
	}
</style>