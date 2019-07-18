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
				<mp-slider 
					autoPlay="true" 
					infinite="true" 
					hasIndicator="true" 
					:sliderStyle="sliderStyle" 
					:sliderList="sliderList" 
					:sliderImgStyle="sliderImgStyle" 
					@mpSliderClick="mpSliderClick">
					</mp-slider>
				<finance-list></finance-list>
			</scroller>

	</div>
</template>

<script>
	import { MpBar, MpSlider } from "madp-ui";
	import FinanceList from "@/components/finance/financeHome/financeList.vue"
	const stream = weex.requireModule("stream");
	const context = weex.requireModule("context");
	export default {
		components: {
			MpBar,
			MpSlider,
			FinanceList
		},
		created(){
			this.getJsonData();
		},
		data() {
			return {
				title: "理财产品",
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
					"color": "rgb(87, 87, 87)",
					"font-weight":"500"
				},
				sliderStyle: {
					"width": "750px",
					"height": "271px",
//					"padding-left":"30px",
//					"padding-right":"30px",
					"background-color":"#ffffff"
				},
				sliderImgStyle: {
					"width": "689px",
					"height": "271px",
					"margin-left":"30px"
				},
				sliderList:[]
			}
		},
		methods:{
			getJsonData() {
			    stream.fetch(
			        {
			          method: "GET",
			          url:"json/finance/ad.json",
			          type: "json"
			        },
			        res => {
			            this.sliderList = res.data.data;
			        }
			    );
			},
			mpBarLeftBtnClick(){
				this.goBack();
			},
			mpBarRightBtnClick(){
				
			},
			mpSliderClick(item){
				if(item.url.indexOf("http") != -1) {
					location.href = item.url;
				} else {
					context.launchStage(item.url);
				}
			}
		}
	}
</script>

<style scoped>
	.container{
		width: 750px;
	}

</style>

