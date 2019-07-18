<template>
	<div class="container">
		<mp-bar 
			:title="financeInfo.title" 
			:titleStyle="titleStyle" 
			:barStyle="barStyle" 
			:leftBtn="leftBtn" 
			:leftBtnStyle="leftBtnStyle" 
			@mpBarLeftBtnClick="mpBarLeftBtnClick"></mp-bar>
		<scroller style="flex: 1;background-color: rgb(248,248,248);">
			<div class="top">
				<div class="top_bg">
					<image class="bgimg" src="./imgs/finance/lcbg1.png"></image>
					<text class="font1">{{rate}}%</text>
					<text class="font2">最高年化收益率</text>
					<div class="Box">
						<div class="fontBox">
							<text class="font3">5000元</text>
							<text class="font3">起投金额</text>
						</div>
						<div class="fontBox">
							<text class="font3">活期</text>
							<text class="font3">理财期限</text>
						</div>
					</div>
				</div>
				<div class="menu">
					<div class="menulist" :style="{'width':itemWidth}" v-for="(item,key) in menuList" :key="key" @click="JumpTo(item.url)">
						<image class="menuImg" :src="item.src"></image>
						<text  class="menuname">{{item.name}}</text>
						<text class="context">{{item.context}}</text>
					</div>
				</div>
			</div>
			<!--<div class="center">
				<div class="center_top">
					<text class="font4">产品介绍</text>
					<text class="font5">本产品投资属于低风险，收益高</text>
				</div>
				<div style="align-items: center;">
					<div class ="font_box">
						<text class="font6">{{rate1}}</text>
						<text class="font7">%</text>
					</div>
					<text class="font5">进度百分比</text>
					<div class="father_xian">
						<div class="son_xian" :style="{'width':xianWidth}"></div>
					</div>
					<div class ="font_box" style="margin-top: 30px;margin-bottom: 20px;">
						<text class="font9">剩余可用额度:</text>
						<text class="font8">{{money}}</text>
					</div>
				</div>
			</div>-->
			<div class="bottom">
				<div class="item" v-for="(item,key) in list" :key="key" @click="">
					<text class="title">{{item.title}}</text>
					<text class="title">{{item.content}}</text>
				</div>
			</div>
				
		</scroller>
		<div class="btn" @click="gotoNext">
			<image class="btnBg" src="./imgs/finance/bottomBtnBg.png"></image>
			<text class="btnFont">立即投资</text>
		</div>

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
		mounted(){
			this.financeInfo = this.$store.state.financeInfo;
			this.getMenu();
			this.xianWidth = 690*0.2 + "px"
		},
		data() {
			return {
				title: "家商财富个人稳盈第93期人民币理财",
				titleStyle: {
					"font-family": "PingFangSC-Semibold",
					"font-size": "32px",
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
				rate:"4.88",
				rate1:"20",
				menuList:[],
				menuImgStyle:"",
				itemWidth:"",
				xianWidth:"",
				list:[
					{
						"title":"递增金额",
						"content":"100.00"
					},
					{
						"title":"募集期",
						"content":"2019年05年20日~2019年08年20日"
					},
					{
						"title":"产品成了日",
						"content":"2019年05年20日"
					},
					{
						"title":"产品结束日",
						"content":"2019年08年20日"
					},
					{
						"title":"递增金额",
						"content":"100.00"
					},{
						"title":"递增金额",
						"content":"100.00"
					},{
						"title":"递增金额",
						"content":"100.00"
					},
				],
				money:"500000.00",
				financeInfo:""

			}
		},
		methods:{
			mpBarLeftBtnClick(){
				this.goBack();
			},
			mpBarRightBtnClick(){
				this.alertMsg("333");
			},
			getMenu() {
				stream.fetch({
						method: "GET",
						url: "./json/finance/buyFinanceMenu.json",
						type: "json"
					},
					response => {
						if(response.status === 200) {
							var tmp = response.data.data;
							this.menuList = tmp.menuList;
							var menuItem = tmp.menuItem;
							this.itemWidth = 750/menuItem.columns + "px";
						}
					},
					() => {}
				);
			},
			gotoNext(){
				this.jump("/buyProduce");
			}
		}
	}
</script>

<style scoped>
	.container{
		width: 750px;
		background-color: rgb(248,248,248);
	}
	.top{
		width: 750px;
		background-color: #FFFFFF;
	}
	.top_bg{
		width: 750px;
		height: 272px;
		align-items: center;
		justify-content: center;
		padding-bottom: 10px;
	}
	.bgimg{
		width: 693px;
		height: 272px;
		position: absolute;
		top: 0px;
		left: 28.5px;
	}
	.Box{
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
	.fontBox{
		width: 300px;
		align-items: center;
	}
	.font1{
		font-size: 48px;
		font-family: PingFangSc-Medlum;
		color: #FFFFFF;
	}
	.font2{
		font-size: 30px;
		font-family: PingFangSc-Medlum;
		color: #FFFFFF;
		margin-bottom: 40px;
	}
	.font3{
		font-size: 26px;
		font-family: PingFangSc-Medlum;
		color: #FFFFFF;
	}
	.menu{
		width: 750px;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
		padding-bottom: 30px;
	}
	.bottom{
		margin-bottom: 50px;
	}
	.menulist{
		align-items: center;
		justify-content: center;
	}
	.menuImg{
		height: 52px;
		width: 52px;
		margin-top: 30px;
	}
	.menuname{
		font-family: PingFangSC-Regular;
		font-size: 24px;
		color: #7B7B7B;
		letter-spacing: 0;
		margin-top: 10px;
	}
	.context{
		font-size: 20px;
		font-family: PingFangSC-Regular;
		color:rgba(176,176,176,0.7);
		margin-top: 10px;
	}
	.center{
		width: 750px;
		margin-top: 20px;
		background-color: #FFFFFF;
	}
	.center_top{
		width: 750px;
		height: 90px;
		flex-direction: row;
		align-items: center;
		padding: 0 30px;
	}
	.font4{
		font-size: 26px;
		font-family: PingFangSC-Regular;
		color: rgb(51,51,51);
	}
	.font5{
		font-size: 20px;
		font-family: PingFangSC-Regular;
		color: #AFB1B3;
		margin-left: 20px;
		margin-top: 6px;
	}
	.font9{
		font-size: 24px;
		font-family: PingFangSC-Regular;
		color: #AFB1B3;
		margin-left: 20px;
		margin-top: 2px;
	}
	.item{
		width: 750px;
		height: 90px;
		background-color: #FFFFFF;
		padding: 0 30px;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		margin-top: 20px;
	}
	.rightBtn{
		width: 30px;
		height: 30px;
	}
	.title{
		font-family: PingFangSC-Regular;
		font-size: 24px;
		color: #7B7B7B;
		letter-spacing: 0;
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
	.btnBg{
		position: absolute;
		width: 750px;
		height: 125px;
		top: 0px;
		left: 0px;
	}
	.btnFont{
		font-size: 30px;
		font-family: PingFangSc-Medlum;
		color: #FFFFFF;
		margin-top: 20px;
	}
	.font_box{
		width: 750px;
		align-items: center;
		flex-direction: row;
		justify-content: center;
	}
	.font6{
		font-family: PingFangSC-Regular;
		font-size: 28px;
		color: rgb(51,51,51);
	}
	.font7{
		font-family: PingFangSC-Regular;
		font-size: 20px;
		color: rgb(51,51,51);
		margin-top: 6px;
		margin-left: 5px;
	}
	.font8{
		font-family: PingFangSC-Regular;
		font-size: 32px;
		color:#f02333!important;
		margin-left: 5px;
	}
	.father_xian{
		width: 690px;
		height: 10px;
		background-color: #F1F1F1;
		border-radius: 5px;
		box-shadow: 0px 1px 2px 1px #dedede inset;
		margin-top: 30px;
	}
	.son_xian{
		height: 10px;
		border-radius: 5px;
		background-image: linear-gradient(to right, #FFC601 , #FF9C0E);
	}
</style>