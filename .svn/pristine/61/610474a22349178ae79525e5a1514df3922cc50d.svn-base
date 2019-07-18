<template>
	<div style="width: 750px;">
		<!--<div class="top_title">
			<div class="top_title_left">
				<image src="./imgs/tab_home/intell/suxian.png" style="height: 30px;width: 6px;margin-top: 2px;"></image>
				<text class="name">信息中心</text>
				<text class="introduce1">方便、</text>
				<text class="introduce2">快捷、</text>
				<text class="introduce2">查看您的所有财产</text>
			</div>
		</div>-->
		<!--<scroller style="flex: 1;">-->
		<div style="width: 750px;background-color: #FFFFFF;">
			<div class="cell" @click="open1">
				<div style="flex-direction: row;align-items: center;height: 90px;">
					<image class="img" src="./imgs/tab_user/menu/wdlc.png"></image>
					<text class="menuName">我的存蓄</text>
				</div>
				<image class="img_right" src="./imgs/tab_user/menu/img_right.png" v-if="financeShow"></image>
				<image class="img_bottom" src="./imgs/tab_user/menu/img_bottom.png" v-else></image>
			</div>
			<div class="cell1" v-for="(item,key) in LIst" :key="key" @click="" v-if="!financeShow">
				<text class="itemName">{{item.name}}</text>
				<text class="result">{{item.money}}</text>
			</div>

			<div class="cell" @click="myDeposit">
				<div style="flex-direction: row;align-items: center;height: 90px;">
					<image class="img" src="./imgs/tab_user/menu/wddk.png"></image>
					<text class="menuName">我的贷款</text>
				</div>
				<image class="img_right" src="./imgs/tab_user/menu/img_right.png" v-if="depositShow"></image>
				<image class="img_bottom" src="./imgs/tab_user/menu/img_bottom.png" v-else></image>
			</div>

			<div class="cell" @click="myDeposit">
				<div style="flex-direction: row;align-items: center;height: 90px;">
					<image class="img" src="./imgs/tab_user/menu/wdcf.png"></image>
					<text class="menuName">我的理财</text>
				</div>
				<image class="img_right" src="./imgs/tab_user/menu/img_right.png" v-if="depositShow"></image>
				<image class="img_bottom" src="./imgs/tab_user/menu/img_bottom.png" v-else></image>
			</div>
			<div class="cell1" v-for="(item,key) in depositList" :key="key" @click="gotoDetails(item)" v-if="!depositShow">
				<text class="itemName">{{item.name}}</text>
				<text class="result">{{item.money}}</text>
			</div>
			<div class="cell">
				<div style="flex-direction: row;align-items: center;height: 90px;">
					<image class="img" src="./imgs/tab_user/menu/bzzx.png"></image>
					<text class="menuName">我的数字权益</text>
				</div>
				<image class="img_right" src="./imgs/tab_user/menu/img_right.png" v-if="financeShow"></image>
				<image class="img_bottom" src="./imgs/tab_user/menu/img_bottom.png" v-else></image>
			</div>
		</div>
		
		<div style="width: 750px;background-color: #FFFFFF;margin-top: 20px;">
			<div class="cell">
				<div style="flex-direction: row;align-items: center;height: 90px;">
					<image class="img" src="./imgs/tab_user/menu/tzzx.png"></image>
					<text class="menuName">我的账户</text>
				</div>
				<image class="img_right" src="./imgs/tab_user/menu/img_right.png" v-if="financeShow"></image>
				<image class="img_bottom" src="./imgs/tab_user/menu/img_bottom.png" v-else></image>
			</div>
			
			<div class="cell">
				<div style="flex-direction: row;align-items: center;height: 90px;">
					<image class="img" src="./imgs/tab_user/menu/jymx.png"></image>
					<text class="menuName">交易明细</text>
				</div>
				<image class="img_right" src="./imgs/tab_user/menu/img_right.png" v-if="financeShow"></image>
				<image class="img_bottom" src="./imgs/tab_user/menu/img_bottom.png" v-else></image>
			</div>
		</div>
		
		<div style="width: 750px;background-color: #FFFFFF;margin-top: 20px;">
			<div class="cell" @click="gotoAq">
				<div style="flex-direction: row;align-items: center;height: 90px;">
					<image class="img" src="./imgs/tab_user/menu/zhsz.png"></image>
					<text class="menuName">个人设置</text>
				</div>
				<image class="img_right" src="./imgs/tab_user/menu/img_right.png"></image>
				<!--<image class="img_bottom" src="./imgs/tab_user/menu/img_bottom.png" v-else></image>-->
			</div>
			
			
			<div class="cell" @click="">
				<div style="flex-direction: row;align-items: center;height: 90px;">
					<image class="img" src="./imgs/tab_user/menu/wdyy.png"></image>
					<text class="menuName">网点预约</text>
				</div>
				<image class="img_right" src="./imgs/tab_user/menu/img_right.png"></image>
				<!--<image class="img_bottom" src="./imgs/tab_user/menu/img_bottom.png" v-else></image>-->
			</div>
		</div>
		
		<div style="width: 750px;background-color: #FFFFFF;margin-top: 20px;">
			<div class="cell" @click="toMsgCenter">
				<div style="flex-direction: row;align-items: center;height: 90px;">
					<image class="img" src="./imgs/tab_user/menu/xxzx.png"></image>
					<text class="menuName">消息中心</text>
				</div>
				<image class="img_right" src="./imgs/tab_user/menu/img_right.png"></image>
				<!--<image class="img_bottom" src="./imgs/tab_user/menu/img_bottom.png" v-else></image>-->
			</div>
			
			<div class="cell">
				<div style="flex-direction: row;align-items: center;height: 90px;">
					<image class="img" src="./imgs/tab_user/menu/wdkf.png"></image>
					<text class="menuName">客服服务</text>
				</div>
				<image class="img_right" src="./imgs/tab_user/menu/img_right.png" v-if="financeShow"></image>
				<image class="img_bottom" src="./imgs/tab_user/menu/img_bottom.png" v-else></image>
			</div>
		</div>
		<hottalk></hottalk>
		<!--</scroller>-->

	</div>
</template>

<script>
	import Hottalk from "@/components/templet/hottalkTpl.vue";
	const context = weex.requireModule("context");
	const modal = weex.requireModule("modal");
	const stream = weex.requireModule("stream");
	export default {
		components: {
			Hottalk
		},
		data() {
			return {
				financeShow: true,
				depositShow: true,
				LIst: [{
						"name": "芝米天添盈",
						"money": "23.00"
					},
					{
						"name": "亨利多理财",
						"money": "23.00"
					}
				],
				depositList: [{
					"name": "享利多",
					"money": "23.00",
					"url": "main.myXLD"
				}]
			}
		},
		methods: {
			open1() {
				if(this.financeShow) {
					this.financeShow = false;
				} else {
					this.financeShow = true;
				}
			},
			//调转详情页面
			gotoDetails(item) {
				context.launchStage(item.url);
			},
			//我的财富
			myDeposit() {
				if(this.depositShow) {
					this.depositShow = false;
				} else {
					this.depositShow = true;
				}
			},
			//跳转账户设置
			gotoAq() {
				context.launchStage("main.SecurityCenter");
			},
			toMsgCenter() {
				context.launchStage("main.msgCenter");
			},
			toLoans() {
				context.launchStage("main.Loans");
			}
		}
	}
</script>

<style scoped>
	.top_title {
		width: 750px;
		height: 80px;
		flex-direction: row;
		padding: 0 30px;
		align-items: center;
		justify-content: space-between;
		border-bottom-width: 1px;
		border-color: #EFEFEF;
		background-color: #FFFFFF;
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
		font-size: 22px;
		font-family: PingFangSc-Regular;
		color: rgb(182, 182, 182);
		margin-left: 10px;
		margin-top: 8px;
	}
	
	.introduce2 {
		font-size: 22px;
		font-family: PingFangSc-Regular;
		color: rgb(182, 182, 182);
		/*margin-left: 20px;*/
		margin-top: 8px;
	}
	
	.cell {
		width: 706px;
		height: 100px;
		margin-left: 44px;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		border-bottom-width: 1px;
		border-color: #EFEFEF;
		padding-right: 48px;
		background-color: #FFFFFF;
	}
	
	.img {
		width: 36px;
		height: 37px;
	}
	
	.menuName {
		font-family: PingFangSc-Regular;
		font-size: 28px;
		color: rgb(42, 42, 42);
		margin-left: 30px;
	}
	
	.img_right {
		width: 15px;
		height: 25px;
	}
	
	.img_bottom {
		width: 24px;
		height: 14px;
	}
	
	.cell1 {
		width: 660px;
		height: 100px;
		margin-left: 100px;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		border-bottom-width: 1px;
		border-color: #EFEFEF;
		padding-right: 48px;
	}
	
	.result {
		font-family: PingFangSc-Regular;
		font-size: 26px;
		color: rgb(255, 104, 57);
	}
	
	.itemName {
		font-family: PingFangSc-Regular;
		font-size: 26px;
		color: rgb(180, 180, 180);
	}
</style>