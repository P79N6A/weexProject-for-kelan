<template>
	<div class="conatainer">
		<wxc-overlay v-if="show" :show="true" :hasAnimation="false" opacity="0.5"></wxc-overlay>
		<div class="big" v-if="show">
			<div class="title">
				<div class="chahao" @click="closeDialog">
					<image style="width: 45px;height: 45px;" src="./imgs/finance/chahao.png"></image>
				</div>
				<text class="font1">变更您的银行卡</text>
			</div>
			<scroller style="flex: 1;">
				<div class="item" v-for="(item,key) in list" :key="key" @click="choose(item)">
					<div class="row">
						<image class="logoImg" src="./imgs/finance/logoImg.png"></image>
						<text class="font3">{{item.AccountNo}}</text>
						<text class="font4">{{item.type}}</text>
					</div>
					<div class="slectImgBox" v-if="item.isselect">
						<image class="slectImg" src="./imgs/finance/duihao.png"></image>
					</div>
				</div>
				<div style="width: 750px;height: 100px;"></div>
			</scroller>
		</div>
	</div>
</template>

<script>
	import { WxcOverlay } from "weex-ui";
	export default{
		props:{
			show:{
				type:Boolean,
				default:false
			}
		},
		components:{
			WxcOverlay
		},
		data(){
			return{
				list:[
					{
						"AccountNo":"贵阳农商银行(8888)",
						"type":"快捷",
						"isselect":true
					},
					{
						"AccountNo":"贵阳农商银行(6688)",
						"type":"快捷",
						"isselect":false
					},
					{
						"AccountNo":"贵阳农商银行(6968)",
						"type":"快捷",
						"isselect":false
					},{
						"AccountNo":"贵阳农商银行(3333)",
						"type":"快捷",
						"isselect":false
					},{
						"AccountNo":"贵阳农商银行(6868)",
						"type":"快捷",
						"isselect":false
					}
					
				]
			}
		},
		methods:{
			closeDialog(){
				this.$emit("closeBottomDialog");
			},
			choose(item){
				this.$emit("choose",item);
			}
		}
	}
</script>

<style scoped>
	.big{
		position: fixed;
		bottom: 0px;
		left: 0px;
		width: 750px;
		height: 450px;
		background-color: #FFFFFF;
	}
	.title{
		width: 750px;
		height: 100px;
		border-bottom-width: 1px;
		border-bottom-color:#e5e5e5 ;
		align-items: center;
		justify-content: center;
	}
	.font1{
		font-size: 30px;
		color: #333333;
	}
	.chahao{
		width: 60px;
		height: 60px;
		position: absolute;
		top: 20px;
		left: 30px;
		justify-content: center;
		align-items: center;
	}
	.slectImgBox{
		width: 60px;
		height: 60px;
		justify-content: center;
		align-items: center;
	}
	.row{
		flex-direction: row;
		align-items: center;
	}
	.item{
		width: 690px;
		height: 89px;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		margin-left: 30px;
		border-bottom-width: 1px;
		border-bottom-color: #e5e5e5;
		padding-right: 20px;
	}
	.logoImg{
		width: 45px;
		height: 45px;
	}
	.font3{
		font-size: 26px;
		color: #333333;
		margin-left: 20px;
	}
	.font4{
		font-size: 26px;
		color: #999999;
		margin-left: 20px;
	}
	.slectImg{
		width: 27px;
		height: 19px;
	}
</style>