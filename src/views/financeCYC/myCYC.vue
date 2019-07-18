<template>
	<div class="container">
		<mp-bar :title="title" :titleStyle="titleStyle" :barStyle="barStyle" :leftBtn="leftBtn" :leftBtnStyle="leftBtnStyle" @mpBarLeftBtnClick="mpBarLeftBtnClick"></mp-bar>
		<scroller style="flex: 1;">
			<my-cyc @gotoCundan="gotoCundan"></my-cyc>
		</scroller>
	</div>
</template>

<script>
	import { MpBar } from "madp-ui";
	import myCyc from "@/components/financeCYC/myCYC.vue";
	
	const stream = weex.requireModule("stream");
	const context = weex.requireModule("context");
	export default {
		components: {
			MpBar,
			myCyc
		},
		data() {
			return {
				title: "我的诚意存",
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
			}
		},
		created(){
			
		},
		methods: {
			mpBarLeftBtnClick() {
				this.goBack();
			},
			gotoCundan(items){
 				this.$store.state.CYCInfo = items;
				this.jump("/myCundan");
			}
			
		}
	}
</script>

<style scoped>
	.container {
		width: 750px;
		background-color: rgb(248, 248, 248);
	}
</style>