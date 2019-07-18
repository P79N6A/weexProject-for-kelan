<template>
	<div class="container">
		<div class="top_title">
			<div class="top_title_left">
				<text class="name">全部产品</text>
				<text class="introduce1">高收益</text>
				<text class="introduce2">低风险</text>
			</div>
		</div>
		<div class="center" v-for="(item,key) in depositList" :key="key" @click="gotoDeposit(item)">
			<div class="item">
				<div class="item_left">
					<div class="row">
						<text class="font1">{{item.date}}</text>
						<text class="font2">%</text>
					</div>
					<text class="font3">最高年化收益率</text>
				</div>
				<div class="item_right">
					<div class="row">
						<text class="font5">{{item.name}}</text>
						<div class="leftT">
							<text class="font6">{{item.tese1}}</text>
						</div>
						<div class="rightT">
							<text class="font7">{{item.tese2}}</text>
						</div>
						
					</div>
					<div class="row1">
						<text class="font3">{{item.tese3}}</text>
						<text class="font4">{{item.FirstMoney}}</text>
						<text class="font3">存起</text>
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
		data() {
			return {
				depositList:[],
			}
		},
		created() {
			this.getList();
		},
		methods: {
			getList() {
				//查询产品列表
				stream.fetch({
						method: "GET",
						url: "./json/deposit/depositList.json",
						type: "json"
					},
					response => {
//						this.alertMsg(JSON.stringify(response.data));
						if(response.status === 200) {
							this.depositList = response.data.data;
						}
					},
					() => {}
				)
			},
			gotoDeposit(item){
				context.launchStage(item.url);
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
		height: 98px;
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
	
	.center {
		width: 750px;
	}
	
	.item {
		width: 720px;
		height: 150px;
		border-bottom-width: 1px;
		border-bottom-color: #f0f0f0;
		margin-left: 30px;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding-right: 30px;
	}
	
	.font1 {
		font-size: 48px;
		font-family: PingFangSc-Medlum;
		color: rgb(237, 32, 32);
		font-weight: 700;
	}
	
	.font2 {
		font-size: 24px;
		font-family: PingFangSc-Medlum;
		color: rgb(237, 32, 32);
		margin-top: 24px;
	}
	
	.font3 {
		font-size: 24px;
		font-family: PingFangSc-Regular;
		color: rgb(166, 166, 166);
	}
	
	.font5 {
		font-size: 24px;
		font-family: PingFangSc-Regular;
		color: rgb(51, 51, 51);
	}
	
	.font4 {
		font-size: 24px;
		font-family: PingFangSc-Regular;
		color: #FE9513;
		margin-left: 10px;
	}
	
	.row1 {
		flex-direction: row;
		align-items: center;
		margin-top: 20px;
	}
	
	.row {
		flex-direction: row;
		align-items: center;
	}
	
	.item_right {
		justify-content: flex-start;
	}
	.leftT{
		border-width: 1px;
		border-color: #FE9513;
		padding: 2px 5px;
		border-radius: 10px;
		margin-left: 10px;
	}
	.font6{
		font-size: 16px;
		color: #FE9513 ;
	}
	.rightT{
		border-width: 1px;
		border-color: #FF9994;
		padding: 2px 5px;
		border-radius: 10px;
		margin-left: 10px;
	}
	.font7{
		font-size: 16px;
		color: #FF9994 ;
	}
</style>