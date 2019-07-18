<template>
	<div class="container">
		<mp-bar 
			:title="title" 
			:titleStyle="titleStyle" 
			:barStyle="barStyle" 
			:leftBtn="leftBtn" 
			:leftBtnStyle="leftBtnStyle"
			@mpBarLeftBtnClick="mpBarLeftBtnClick"></mp-bar>
		<div class="topBtn">
			<div @click="changeBtn">
				<div class="topBtn_left" v-if="clickLeftBtn">
					<text class="font1">已加挂账户</text>
				</div>
				<div class="topBtn_left" v-if="!clickLeftBtn">
					<text class="font2">已加挂账户</text>
					<div class="xian"></div>
				</div>
			</div>
			<div @click="changeBtn">
				<div class="topBtn_left" v-if="!clickLeftBtn">
					<text class="font1">未加挂账户</text>
				</div>
				<div class="topBtn_left" v-if="clickLeftBtn">
					<text class="font2">未加挂账户</text>
					<div class="xian"></div>
				</div>
			</div>
			
		</div>
		<scroller style="flex: 1;">
			<div class="big">
				<div class="item" v-for="(item,key) in bgImg" :key="key">
					<image class="bgImg" :src="item.src"></image>
					<div class="item_top">
						<div class="row">
							<image class="logoImg" src="./imgs/myCount/gyRCb.png"></image>
							<text class="fontName">活期存折</text>
						</div>
						<div class="row1">
							<image class="sBgimg" :src="sBgImg[key].src"></image>
							<text class="sFontName">活期存折</text>
						</div>
					</div>
					<div class="center">
						<text class="font5">储蓄卡</text>
					</div>
					<div class="item_bottom">
						<text class="font3">6666 **** **** 9874</text>
						<div class="row" @click="gotoCountDetials">
							<text class="font4">详情</text>
							<image class="xiangqi" src="./imgs/rightImg_white.png"></image>
						</div>
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
	const animation = weex.requireModule('animation');
	export default{
		components:{
			MpBar
		},
		data(){
			return {
				title: "我的账户",
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
				clickLeftBtn:false,
				bgImg:[],
				sBgImg:[]
				
			}
		},
		created(){
			this.getBgImgList();
		},
		methods:{
			mpBarLeftBtnClick(){
				this.goBack();
			},
			changeBtn(){
				this.clickLeftBtn = !this.clickLeftBtn;
			},
			getBgImgList(){
				stream.fetch(
			        {
			          method: "GET",
			          url:"json/myCount/bgImg.json",
			          type: "json"
			        },
			        res => {
			            this.bgImg = res.data.bgImg;
			            this.sBgImg = res.data.sBgImg;
			        }
			    );
			},
			gotoCountDetials(){
				this.jump("/countDetails");
			},
			appearPopup() {
				const popupEl = this.$refs['popup'];
				animation.transition(popupEl, {
					styles: {
//						transform: 'translateY(' + data + ')',
						transform:'translateY(500px)'
					},
					duration,
					delay: 0,
					timingFunction:"ease-in"
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
	.topBtn{
		height: 98px;
		margin-top: 1px;
		background-color: #FFFFFF;
		padding: 0 50px;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
	}
	.topBtn_left{
		height: 98px;
		align-items: center;
		justify-content: center;
		padding: 10px 0px;
	}
	.font1{
		font-size: 26px;
		color: rgb(86,86,86);
	}
	.font2{
		font-size: 26px;
		color: #FC8109;
	}
	.xian{
		height: 5px;
		width: 140px;
		background-color: #FC8109;
		border-radius: 2.5px;
		margin-top: 5px;
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