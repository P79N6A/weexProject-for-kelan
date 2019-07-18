<template>
	<div class="container">
		<div class="top">
			<text class='font1'>理财产品</text>
			<text class="font2">您的专属秒到账贷款服务</text>
		</div>
		<div class="center">
			<div class="item" v-for="(item,key) in financeList" :key="key" @click="gotoInfo(item)">
				<image class="bgimg" src="./imgs/finance/financeListbg.png"></image>
				<div class="item-right">
					<div class="dateBox">
						<text class="font3">{{item.date}}</text>
						<text class="font4">%</text>
					</div>
					<text class="font5">{{item.name}}</text>
				</div>
				
				<div class="item-right">
					<text class="font6">{{item.title}}</text>
					<div class="fontBox">
						<text class="font5">{{item.cont1}}</text>
						<text class="font5" style="font-size:22px ;margin-left: 20px;margin-right: 20px;">|</text>
						<text class="font5">{{item.cont2}}</text>
					</div>
				</div>
			</div>
			
		</div>
	</div>
</template>

<script>
	const stream = weex.requireModule("stream");
	const context = weex.requireModule("context");
	export default {
		data(){
			return{
				financeList:[
					{
						"date":"4.88",
						"name":"预计年化收益率",
						"title":"农商财富个人稳赢第95期理财产品",
						"cont1":"5万元起投金额",
						"cont2":"96天理财期限"
					}
				]
			}
		},
		methods:{
			gotoInfo(item){
				this.$store.state.financeInfo = item;
				this.jump("/financeInfo");
			}
		}
	}
</script>

<style scoped>
	.container{
		width: 750px;
	}
	.top{
		display: flex;
		width: 750px;
		height: 80px;
		padding: 0 30px;
		flex-direction: row;
		align-items: center;
	}
	.font1{
		font-family: PingFangSc-Regular;
		font-size: 30px;
		color: rgb(31,31,31);
	}
	.font2{
		font-family: PingFangSc-Regular;
		font-size: 26px;
		color: rgb(187, 187, 187);
		margin-left: 20px;
		margin-top: 5px;
	}
	.bgimg{
		position:absolute;
		width: 745px;
		height: 207px;
		top: 0px;
		left: 0px;
	}
	.item{
		width: 745px;
		height: 207px;
		flex-direction: row;
		align-items: center;
		padding-left: 45px;
		padding-right: 45px;
		justify-content: space-between;
	}
	.item-right{
		height: 207px;
		padding: 50px 0px;
		justify-content: space-between;
	}
	.dateBox{
		flex-direction: row;
	}
	.font3{
		font-family: PingFangSc-Regular;
		font-size: 48px;
		color:#F02333 ;
		font-weight: 700;
	}
	.font4{
		font-family: PingFangSc-Regular;
		font-size: 30px;
		color:#F02333 ;
		font-weight: 500;
		margin-top:16px;
	}
	.font5{
		font-family: PingFangSc-Regular;
		font-size: 24px;
		color:#8791A4;
	}
	.font6{
		font-family: PingFangSc-Regular;
		font-size: 30px;
		color: rgb(51,51,51);
		font-weight: 500;
	}
	.fontBox{
		flex-direction: row;
		align-items: center;
	}
</style>