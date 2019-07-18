<template>
	<div class="container">
		<mp-bar :title="title" :titleStyle="titleStyle" :barStyle="barStyle" :leftBtn="leftBtn" :leftBtnStyle="leftBtnStyle" @mpBarLeftBtnClick="mpBarLeftBtnClick" :rightTxt="rightTxt" :rightTxtStyle="rightTxtStyle" @mpBarRightBtnClick="mpBarRightBtnClick"></mp-bar>
		<scroller style="flex: 1;background-color: rgb(248,248,248);" show-scrollbar="false">
			<div class="top">
				<mytop v-if="this.$store.state.CZisSign == '1'"></mytop>
				<top v-else></top>
				<div class="menu">
					<div class="menulist" :style="{'width':itemWidth}" v-for="(item,key) in menuList" :key="key" @click="JumpTo(item.url)">
						<image class="menuImg" :src="item.src"></image>
						<text class="menuname">{{item.name}}</text>
						<text class="context">{{item.context}}</text>
					</div>
				</div>
			</div>
			<div class="center">
				<div class="center_top">
					<text class="font4">{{littleTitle}}</text>
					<text class="font5">按对应期限试算收益天天见</text>
				</div>
				<div style="background-color: #FFFFFF">
					<dian-xian :cswidth="cswidth" :showTry="showTry" :prestoreMoney="prestoreMoney"></dian-xian>
				</div>
			</div>
			<div class="bottom">
				<div class="item" v-for="(item,key) in list" :key="key" @click="">
					<text class="title">{{item.title}}</text>
					<image class="rightBtn" src="./imgs/finance/next1.png"></image>
				</div>
			</div>

		</scroller>
		
		<div :class="[active?'btn':'btn1']" v-if="this.$store.state.CZisSign == '1'" @click="gotoMyCZ">
			<image :class="[active?'btnBg':'btnBg1']" src="./imgs/finance/bottomBtnBg.png"></image>
			<text class="btnFont">我的超值天添盈</text>
		</div>
		<div :class="[active?'btn':'btn1']" v-else @click="gotoImmOpen">
			<image :class="[active?'btnBg':'btnBg1']" src="./imgs/finance/bottomBtnBg.png"></image>
			<text class="btnFont">立即开通</text>
		</div>

	</div>
</template>

<script>
	import dianXian from "@/components/financeCZ/dianXian.vue";
	import top from "@/components/financeCZ/top1.vue";
	import mytop from "@/components/financeCZ/top2.vue";

	import { MpBar } from "madp-ui";
	const stream = weex.requireModule("stream");
	const context = weex.requireModule("context");
	export default {
		components: {
			MpBar,
			dianXian,
			top,
			mytop
		},
		mounted() {
			this.getMenu();
		},
		created(){
			if(this.isipx() == 1) {
				this.active = false;
			} else {
				this.active = true;
			}
		},
		data() {
			return {
				active: true,
				showTry:true,
				prestoreMoney:"100000",
				title: "超值天添盈",
				littleTitle:"投资试算",
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
				rightTxt: "我的理财",
				rightTxtStyle: {
					"font-size": "26px",
					"font-family": "PingFangSc-Regular",
					"color": "rgb(51, 51, 51)"
				},
				menuList: [],
				menuImgStyle: "",
				itemWidth: "",
				list: [{
						"title": "产品说明",
						"url": ""
					}
				],
				cswidth:"500px"

			}
		},

		methods: {
			mpBarLeftBtnClick() {
				this.goBack();
			},
			mpBarRightBtnClick() {
			},
			//立即开通
			gotoImmOpen(){
				if(this.$store.state.login){
					this.postDo("IntelligentSignConfirm.do",{},data=>{
						if(data.resultMap.Flag == "1"){  //有电子账户
							context.sessionSetString("CZinfor",JSON.stringify(data));
							this.jump("/immOpen");
						}else{   //无电子账户 需要电子账户开立
							
						}
						
					})
				}else{
					this.goto();
				}
				
			},
			//我的超值天添赢
			gotoMyCZ(){
				if(this.$store.state.rateList){
					this.jump("/rateShow");
				}else{
					this.alertMsg("");
				}
				
			},
			getMenu() {
				stream.fetch({
						method: "GET",
						url: "./json/financeCZ/MenuCZ.json",
						type: "json"
					},
					response => {
						if(response.status === 200) {
							var tmp = response.data.data;
							this.menuList = tmp.menuList;
							var menuItem = tmp.menuItem;
							this.itemWidth = 750 / menuItem.columns + "px";
						}
					},
					() => {}
				);
			},

		}
	}
</script>

<style scoped>
	.container {
		width: 750px;
		background-color: rgb(248, 248, 248);
	}
	
	.top {
		width: 750px;
		background-color: #FFFFFF;
	}
	
	.bottom {
		margin-bottom: 50px;
	}
	
	.menulist {
		align-items: center;
		justify-content: center;
	}
	
	.menuImg {
		height: 52px;
		width: 52px;
		margin-top: 30px;
	}
	
	.menuname {
		font-family: PingFangSC-Regular;
		font-size: 24px;
		color: #7B7B7B;
		letter-spacing: 0;
		margin-top: 10px;
	}
	
	.context {
		font-size: 20px;
		font-family: PingFangSC-Regular;
		color: rgba(176, 176, 176, 0.7);
		margin-top: 10px;
	}
	
	.center {
		width: 750px;
		margin-top: 20px;
		background-color: #FFFFFF;
	}
		
	.menu {
		width: 750px;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
		padding-bottom: 30px;
	}
	
	
	.center_top {
		width: 750px;
		height: 90px;
		flex-direction: row;
		align-items: center;
		padding: 0 30px;
	}
	
	.font4 {
		font-size: 26px;
		font-family: PingFangSC-Regular;
		color: rgb(51, 51, 51);
	}
	
	.font5 {
		font-size: 20px;
		font-family: PingFangSC-Regular;
		color: #AFB1B3;
		margin-left: 20px;
		margin-top: 6px;
	}
	
	.xialaBtn {
		width: 300px;
		height: 60px;
		border-radius: 5px;
		background-color: #FAAC3C;
		margin-left: 225px;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		margin-bottom: 50px;
	}
	
	.font6 {
		font-size: 30px;
		font-family: PingFangSc-Medlum;
		color: #FFFFFF;
	}
	
	.xialaImg {
		width: 26px;
		height: 13px;
		margin-left: 10px;
		margin-top: 5px;
	}
	
	.item {
		width: 750px;
		height: 90px;
		background-color: #FFFFFF;
		padding: 0 30px;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		margin-top: 20px;
	}
	
	.rightBtn {
		width: 30px;
		height: 30px;
	}
	
	.title {
		font-family: PingFangSC-Regular;
		font-size: 24px;
		color: #7B7B7B;
		letter-spacing: 0;
	}
	
	.dianxian {
		width: 750px;
		padding: 0 30px;
		align-items: center;
		flex-direction: row;
		justify-content: space-between;
		height: 35px;
	}
	
	.xian {
		height: 15px;
		width: 690px;
		border-radius: 1px;
		background-color: #EEEEEE;
		position: absolute;
		top: 10px;
		left: 30px;
	}
	
	.yuedian {
		height: 26px;
		width: 26px;
	}
	
	.font7 {
		font-family: PingFangSC-Regular;
		font-size: 16px;
		color: rgb(51, 51, 51);
		letter-spacing: 0;
	}
	
	.font8 {
		font-family: PingFangSC-Regular;
		font-size: 16px;
		color: #AFB1B3;
		letter-spacing: 0;
	}
	
	.centeritem {
		align-items: center;
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