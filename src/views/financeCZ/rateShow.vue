<template>
	<div class="container">
		<mp-bar 
			:title="title" 
			:titleStyle="titleStyle" 
			:barStyle="barStyle" 
			:leftBtn="leftBtn" 
			:leftBtnStyle="leftBtnStyle"
			@mpBarLeftBtnClick="mpBarLeftBtnClick"></mp-bar>
		<scroller style="flex: 1;">
			<div v-for="(item,key) in list" :key="key" class="item">
				<image class="bgImg" src="./imgs/finance/bgImg4.png"></image>
				<div class="top">
					<image class="img1" src="./imgs/finance/shuxian.png"></image>
					<text class="font1">转入期限</text>
					<text class="font2">{{item.describe}}</text>
				</div>
				<div class="bottom">
					<div class="bottom-item" style="margin-bottom: 10px;">
						<text class="font3">收益利率</text>
						<text class="font4">{{item.intrin}}%</text>
					</div>
					<div class="bottom-item">
						<text class="font3">购买金额</text>
						<text class="font5">{{item.acblnc |addDot}}元</text>
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
	export default{
		components:{
			MpBar
		},
		data(){
			return {
				title: "我的超值天添盈",
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
				list:[]
			}
		},
		created(){
			this.list = this.$store.state.rateList;
		},
		methods:{
			mpBarLeftBtnClick(){
				this.goBack();
			},
		},
		filters:{
			addDot(val){
		        var Astr = val.toString();
		        Astr = Astr.replace(/,/g,'');
		        if(Astr.indexOf(".") != -1){
		            var str = Astr.split(".")[0]
		            var afDot = Astr.split(".")[1]
		            var newVal = "";
		            for(var i=0;i<=str.length-1;i++){
		                if((str.length-i)%3 == 1 && i!=(str.length-1)){
		                    newVal = newVal + str.charAt(i) + ",";
		                }else{
		                    newVal = newVal + str.charAt(i);
		                }
		            }
		            return newVal+"."+afDot;
		        }else{
		            var str = val.toString();
		            var newVal = "";
		            for(var i=0;i<=str.length-1;i++){
		                if((str.length-i)%3 == 1 && i!=(str.length-1)){
		                    newVal = newVal + str.charAt(i) + ",";
		                }else{
		                    newVal = newVal + str.charAt(i);
		                }
		            }
		            return newVal+".00";
		        }
		    }

		}
	}
</script>

<style scoped>
	.container{
		width: 750px;
		background-color: rgb(248, 248, 248);
	}
	.item{
		width: 736px;
		height: 252px;
		margin-left: 7px;
	}
	.bgImg{
		position: absolute;
		width: 736px;
		height: 252px;
		top: 0;
		left: 0;
	}
	.top{
		height: 80px;
		width: 695px;
		margin-left: 20px;
		flex-direction: row;
		border-bottom-width: 1px;
		border-bottom-color: rgb(230,230,230);
		align-items: center;
		padding-top: 15px;
		padding-left: 20px;
	}
	.img1{
		width: 4px;
		height: 26px;
	}
	.font1{
		font-size: 26px;
		color: rgb(120,120,120);
		margin-left: 20px;
	}
	.font2{
		font-size: 26px;
		color: rgb(114,114,114);
		margin-left: 20px;
	}
	.bottom{
		height: 160px;
		align-items: center;
		justify-content: center;
	}
	.bottom-item{
		width: 690px;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding: 0 20px;
	}
	.font3{
		font-size: 26px;
		color: rgb(161,161,161);
	}
	.font4{
		font-size: 28px;
		color: rgb(241,38,55);
	}
	.font5{
		font-size: 26px;
		color: rgb(31,31,31);
	}
</style>