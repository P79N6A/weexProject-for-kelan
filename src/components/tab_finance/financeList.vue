<template>
	<div class="container">
		<div class="top_title">
			<div class="top_title_left">
				<image src="./imgs/tab_home/intell/suxian.png" style="height: 30px;width: 6px;margin-top: 2px;"></image>
				<text class="name">理财列表</text>
				<text class="introduce1">高收益</text>
				<text class="introduce2">低风险</text>
			</div>
			<text class="more" @click="goto">{{details.title}}</text>
		</div>
		<div class="center">
			<div class="item" v-for="(item,key) in adList">
				<div class="itemleft">
					<div style="flex-direction: row; margin-top: 20px;">
						<text class="Number">{{item.rate}}</text>
						<text class="Number1">%</text>
					</div>
					<text class="font1">{{item.rateType}}</text>
				</div>
				<div class="itemCenter">
					<text class="financeDetail">{{item.detail}}</text>
					<text class="payType">{{item.payType}}</text>
				</div>
				<image src="./imgs/tab_finance/finance/rightBtn3.png" class="itemRight"></image>
			</div>
		</div>
	</div>
</template>

<script>
	const stream = weex.requireModule("stream");
	const context = weex.requireModule("context");
	export default{
		props: {
			jsonUrl: {
				type: String,
				default: ""
			}
		},
		data(){
			return {
				adList:[],
				details:""
			}
		},
		created() {
			if(this.jsonUrl) {
				this.getList();
			}
		},
		methods: {
			getList() {
				stream.fetch({
						method: "GET",
						url: this.jsonUrl,
						type: "json"
					},
					res => {
						this.adList = res.data.data.financeList;
						this.details = res.data.data.details;
					}
				);
			},
			goto() {
				if(this.details) {
					context.launchStage(this.details.url);
				}

			}
		}
	}
</script>

<style scoped>
	.container {
		width: 750px;
		background-color: #FFFFFF;
	}
	
	.top_title {
		width: 750px;
		height: 80px;
		flex-direction: row;
		padding: 0 30px;
		align-items: center;
		justify-content: space-between;
	}
	
	.top_title_left {
		flex-direction: row;
		justify-content: space-between;
	}
	
	.name {
		font-size: 30px;
		font-family: PingFangSc-Medlum;
		color: rgb(57, 57, 57);
		margin-left: 5px;
	}
	
	.introduce1 {
		font-size: 20px;
		font-family: PingFangSc-Regular;
		color: rgb(187, 187, 187);
		margin-left: 10px;
		margin-top: 10px;
	}
	
	.introduce2 {
		font-size: 20px;
		font-family: PingFangSc-Regular;
		color: rgb(187, 187, 187);
		margin-left: 20px;
		margin-top: 10px;
	}
	
	.font {
		font-size: 22px;
		font-family: PingFangSc-Regular;
		color: rgb(166, 166, 166);
		margin-top: -5px;
	}
	
	.more {
		font-size: 24px;
		font-family: PingFangSc-Regular;
		color: rgb(189, 193, 209);
		margin-top: 6px;
	}
	.item{
		width: 750px;
		flex-direction: row;
		padding-left:40px ;
		padding-right: 26px;
		padding-bottom: 15px;
		justify-content: space-between;
		border-bottom-color: rgb(243,243,243);
		border-bottom-width: 1px;
	}
	.Number {
		font-size: 50px;
		font-family: PingFangSc-Medlum;
		color: rgb(237, 32, 32);
		font-weight: 700;
	}
	
	.Number1 {
		font-size: 24px;
		font-family: PingFangSc-Medlum;
		color: rgb(237, 32, 32);
		margin-top: 26px;
	}
	.font1{
		font-size: 24px;
		font-family: PingFangSc-Regular;
		color: rgb(189, 193, 209);
		margin-top: 5px;
	}
	.financeDetail{
		font-size: 28px;
		font-family: PingFangSc-Medlum;
		color: rgb(57, 57, 57);
		margin-top: 25px;
	}
	.payType{
		font-size: 24px;
		font-family: PingFangSc-Regular;
		color: rgb(189, 193, 209);
		margin-top: 30px;
	}
	.itemRight{
		width: 12px;
		height: 20px;
		margin-top: 30px;
	}
	
</style>