<template>
	<div class="container">
		<div class="item">
			<text class="fontIL">账户余额</text>
			<text class="fontIR">92343.33</text>
		</div>
		<div class="item">
			<text class="fontIL">资金转入</text>
			<image class="img" src="./imgs/img_right.png"></image>
		</div>
		<div class="item">
			<text class="fontIL">资金转出</text>
			<image class="img" src="./imgs/img_right.png"></image>
		</div>
		<div class="item">
			<text class="fontIL">账户类型</text>
			<image class="img" src="./imgs/img_right.png"></image>
		</div>
		<div class="item">
			<text class="fontIL">子账户详情</text>
			<image class="img" src="./imgs/img_right.png"></image>
		</div>
		<div class="item">
			<text class="fontIL">账户别名</text>
			<image class="img" src="./imgs/img_right.png"></image>
		</div>
		<div class="item">
			<text class="fontIL">绑定卡管理</text>
			<image class="img" src="./imgs/img_right.png"></image>
		</div>
	</div>
</template>

<script>
	export default {
		props:{
			itemList:{
				type:Object,
				default:()=>{}
			}
		},
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped>
	.container{
		width: 750px;
		background-color: #FFFFFF;
	}
	.item {
		width: 720px;
		height: 90px;
		border-bottom-width: 1px;
		border-bottom-color: #f0f0f0;
		margin-left: 30px;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding-right: 30px;
	}
	
	.fontIL {
		font-family: PingFangSc-Regular;
		font-size: 28px;
		color: rgb(51, 51, 51);
	}
	
	.fontIR {
		font-family: PingFangSc-Regular;
		font-size: 28px;
		color: #FC8109;
	}
	.img{
		width: 17px;
		height: 30px;
	}
</style>