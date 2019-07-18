<template>
	<div class="container1">
		<!--<image style="position: fixed; top:81px;right:105px;height: 35px;width: 35px;" src="./imgs/tab_home/titlebar/head.png"></image>-->
		<mp-bar title="贵阳农商银行" :barStyle="barStyle" 
		:titleStyle="titleStyle" 
		:leftBtn="leftBtn" 
		:leftBtnStyle="leftBtnStyle" 
		:rightBtn="rightBtn"
		:rightBtn1="rightBtn1"  
		:rightBtnStyle="rightBtnStyle"
		:rightBtnStyle1="rightBtnStyle1"
		 @mpBarLeftBtnClick="mpBarLeftBtnClick" 
		 @mpBarLeftBtn1Click='mpBarLeftBtn1Click'
		@mpBarRightBtnClick="mpBarRightBtnClick"></mp-bar>
		<list>
			<refresh class="refresh" @refresh="onrefresh" :display="refreshing?'show':'hide'">
		        <text class="load_refresh">松开马上为您刷新</text>
		        <loading-indicator class="indicator"></loading-indicator>
		     </refresh>
			<!--<div class="container-content" v-if="!$store.state.isSearch">-->
				<cell v-for="(layout,key) in layoutlist" :key="key">
					<!-- 轮播广告 -->
					<mp-slider autoPlay="true" infinite="true" hasIndicator="true" :sliderStyle="sliderStyle" :jsonUrl="layout.url" :sliderImgStyle="sliderImgStyle" @mpSliderPageChanged="mpSliderPageChanged" @mpSliderClick="mpSliderClick" v-if="layout.type == 'AD'">
					</mp-slider>
					<!-- 主菜单 -->
					<mp-menu :jsonUrl="layout.url" v-if="layout.type == 'MENU'" @mpMenuItemClick="mpMenuItemClick"></mp-menu>
					<!-- 广告跑马灯 -->
					<mp-lamp class="lamp" :jsonUrl="layout.url" :lampImgStyle="lampImgStyle" lampImg="./imgs/tab_home/notice/notice.png" type="cols" v-if="layout.type == 'NOTICE'"></mp-lamp>
					<!-- 金推荐 -->
					<!-- <mp-slider :jsonUrl="layout.url" sliderType="half" @mpSliderInnerClick="mpSliderInnerClick" v-if="layout.type == 'GOLD'">
          </mp-slider> -->
					<!-- 智能推荐模板 -->
					<intell style="margin-top: 20px;" :jsonUrl="layout.url" v-if="layout.type == 'INTELL'"></intell>
					<!-- 优选基金模板 -->
					<!--<mp-preferfund :jsonUrl="layout.url" v-if="layout.type == 'PREFERFUND'"></mp-preferfund>-->

					<mp-slider interval="6000" autoPlay="true" infinite="true" hasIndicator="true"  :jsonUrl="layout.url" :sliderImgStyle="sliderImgStyle1" :sliderStyle='{ width: "750px", height: "250px" }' @mpSliderClick="mpSliderClick" v-if="layout.type == 'AD1'">
					</mp-slider>
					<!-- 热销理财模板 -->
					<!--<hot-finance :jsonurl="layout.url" v-if="layout.type == 'HOTFINANCE'"></hot-finance>
					<hot-recommend :jsonurl="layout.url" v-if="layout.type == 'HOTRECOMMEND'"></hot-recommend>-->
				</cell>
				<cell>
					<bottom></bottom>
				</cell>
				
			<!--</div>-->
		</list>
	</div>
</template>
<style scoped>
	.container1 {
		width: 750px;
		background-color: rgb(243,243,243);
	}
	.lamp{
		height: 100px;
		padding: 0 30px;
		flex-direction: row;
		align-items: center;
		margin-top: 2px;
		margin-bottom: 2px;
	}
	
	.refresh {
		width: 750px;
		align-items: center;
		/* background-color: #323232; */
		background-color: #ffffff;
	}
	
	.indicator {
		margin-top: 30px;
		margin-bottom: 30px;
		height: 40px;
		width: 40px;
		color: #0000ff;
	}
	
	.load_refresh {
		color: #888888;
		font-size: 28px;
		text-align: center;
	}
</style>
<script>
	import Intell from "@/components/tab_home/finRecommend.vue";
	import Gold from "@/components/templet/goldTpl.vue";
	import HotFinance from "@/components/templet/hotfinanceTpl.vue";
	import HotRecommend from "@/components/templet/hotrecommendTpl.vue";
	import Bottom from "@/components/templet/bottomTpl.vue";

	import { MpBar, MpSlider, MpMenu, MpLamp, MpPreferfund } from "madp-ui";

	const stream = weex.requireModule("stream");
	const modal = weex.requireModule("modal");
	const context = weex.requireModule("context");
	const qrCode = weex.requireModule("qr-code");
	export default {
		components: {
			MpBar,
			MpSlider,
			MpMenu,
			MpLamp,
			MpPreferfund,
			Intell,
			Gold,
			HotFinance,
			HotRecommend,
			Bottom
		},
		data() {
			return {
				// titleBg: "./imgs/tab_home/titlebar/logo@3x.png",
				// titleBgStyle: { width: "206px", height: "43px" },
				titleStyle: {
					"font-family": "PingFangSC-Semibold",
					"font-size": "36px",
					"color": "rgb(51,51,51)",
					"letter-spacing": "-0.64px"
				},
				leftBtn: "./imgs/tab_home/titlebar/qrcode.png",
				barStyle: {
					'height': '150px',
					'padding-top': '60px'
				},
				sliderImgStyle1:{
						"width": "750px",
					"height": "250px"
				},
				lampImgStyle:{
					'height': '30px',
					'width': '117px',
					"margin-left":"10px"
				},
				leftBtnStyle: {
					width: "35px",
					height: "35px"
				},
				rightBtn: "./imgs/tab_home/titlebar/message.png",
				rightBtn1: "./imgs/tab_home/titlebar/head.png",
				rightBtnStyle: {
					width: "42px",
					height: "42px"
				},
				rightBtnStyle1:{
					width: "35px",
					height: "35px",
				},
				sliderStyle: {
					"width": "750px",
					"height": "246px",
//					"padding-left":"30px",
//					"padding-right":"30px",
					"background-color":"#ffffff"
				},
				sliderImgStyle: {
					"width": "690px",
					"height": "246px",
					"margin-left":"30px"
				},
				//    barStyle: { "background-color": "#ccc" },
				sliderIndex: "0",
				refreshing: false,
				layoutlist: [],
				theme: "./json/themeVersion.json",
				laytou_url: "./json/tab_home/layout1.json"
			};
		},
		created() {
			//查询楼层
			this.qry();
//			this.queryTheme(() => {
//				
//			});
		},
		methods: {
			//点击顶部菜单左侧
			mpBarLeftBtnClick(event) {
				this.qrCodeClick();
			},
			//点击顶部菜单右侧
			mpBarRightBtnClick(event) {
				context.launchStage("main.QRdraw")
			},
			//点击顶部菜单1右侧
			mpBarLeftBtn1Click(){
				context.launchStage("main.SecurityCenter")
				// this.alertMsg(1);
			},

			//扫码
			qrCodeClick() {
				qrCode.scanQRcode(data => {
					this.alertMsg(data);
					var name =  data.split(":")[0];
					if(name == "cyc"){
						context.sessionSetString("productInfo",data.split(":")[1]);
						context.launchStage("main.financeCYC");
					}else if(name == "PATM"){
						context.sessionSetString("productInfo",data.split(":")[1]);
						context.launchStage("main.QRdraw");
					}
//					context.next("main.QRdraw");
				});
			},
			//轮播切换触发事件
			mpSliderPageChanged(event) {
				this.sliderIndex = event.index + "";
			},
			//点击轮播触发事件
			mpSliderClick(item) {
//				this.alertMsg("111"+JSON.stringify(item));
				if(item.url.indexOf("http") != -1) {
					location.href = item.url;
				} else {
					context.launchStage(item.url);
				}
			},
			mpSliderInnerClick(item, index) {
				if(item.url.indexOf("http") != -1) {
					location.href = item.url;
				} else {
					context.launchStage(item.url);
				}
			},
			//点击主菜单触发事件
			mpMenuItemClick(item) {
				context.launchStage(item.url);
			},
//			queryTheme(callback) {
//				stream.fetch({
//						method: "GET",
//						url: this.theme,
//						type: "json"
//					},
//					response => {
//						if(response.status === 200) {
//							this.laytou_url = "./json/tab_home/" + response.data.data.theme1;
//							if(callback) {
//								callback();
//							}
//						}
//					}
//				);
//			},
			qry(callback) {
				stream.fetch({
						method: "GET",
//						url: this.laytou_url + "?v=" + Math.random(),
						url: this.laytou_url,
						type: "json"
					},
					response => {
						if(response.status === 200) {
							this.layoutlist = response.data.data;
							if(callback) {
								callback();
							}
						}
					},
					() => {}
				);
			},
			//下拉刷新布局
			onrefresh(event) {
				this.alertMsg("正在刷新");
				this.refreshing = true;
				context.refreshRepo("main");
				this.qry(() => {
					this.refreshing = false;
				});
			}
		}
	};
</script>