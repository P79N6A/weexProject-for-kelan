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
			@mpBarRightBtnClick="mpBarRightBtnClick" 
			:rightTxtStyle="rightTxtStyle"></mp-bar>
		<scroller style="flex: 1;background-color: rgb(248, 248, 248);">
			<finance-list style="margin-top: 20px;" :showRight="showRight" :list="list"></finance-list>
		</scroller>
		
		<popup 
			:show="isBottomShow"
			@mpBarLeftBtnClick="mpBarLeftBtnClick"
			@mpBarRightBtnClick="mpBarRightBtnClick"
			></popup>

	</div>
</template>

<script>
	import { MpBar } from "madp-ui";
	import financeList from "@/components/finance/myFinance/financeList.vue"
	import popup from "@/components/finance/myFinance/popup.vue"
	const stream = weex.requireModule("stream");
	const context = weex.requireModule("context");
	export default {
		components: {
			MpBar,
			financeList,
			popup,
		},
		data() {
			return {
				isBottomShow: false,
				title: "历史明细",
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
				rightTxt: "筛选",
				rightTxtStyle: {
					"font-size": "26px",
					"font-family": "PingFangSc-Regular",
					"color": "rgb(112, 112, 112)"
				},
				showRight: false,
				list: [{
						"title": "家商财富个人稳盈第93期人民币理财",
						"money": "12312",
						"time": "2019-02-25"
					},
					{
						"title": "家商财富个人稳盈第93期人民币理财",
						"money": "12312",
						"time": "2019-02-25"
					},
					{
						"title": "家商财富个人稳盈第93期人民币理财",
						"money": "12312",
						"time": "2019-02-25"
					},
					{
						"title": "家商财富个人稳盈第93期人民币理财",
						"money": "12312",
						"time": "2019-02-25"
					},
					{
						"title": "家商财富个人稳盈第93期人民币理财",
						"money": "12312",
						"time": "2019-02-25"
					},
					{
						"title": "家商财富个人稳盈第93期人民币理财",
						"money": "12312",
						"time": "2019-02-25"
					},
					{
						"title": "家商财富个人稳盈第93期人民币理财",
						"money": "12312",
						"time": "2019-02-25"
					}
				]

			}
		},
		methods: {
			mpBarLeftBtnClick() {
				this.goBack();
			},
			//筛选
			mpBarRightBtnClick(){
				if(this.isBottomShow){
					this.isBottomShow = false;
				}else{
					this.isBottomShow = true;
				}
			}
		}
	}
</script>

<style scoped>
	.container {
		width: 750px;
	}
</style>