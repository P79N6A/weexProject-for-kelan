<template>
	<div class="container">
		<mp-bar :title="title" :titleStyle="titleStyle" :barStyle="barStyle" :leftBtn="leftBtn" :leftBtnStyle="leftBtnStyle" @mpBarLeftBtnClick="mpBarLeftBtnClick"></mp-bar>
		<scroller style="flex: 1;">
			<div class="top" @click="changeAcount">
				<div class="top-box">
					<image class="logoImg" src="./imgs/finance/logoImg.png"></image>
					<div style="justify-content: space-between;margin-left: 20px;">
						<text class="font1">阳农商</text>
						<text class="font2">账户余额：9483039元</text>
					</div>
				</div>
				<image class="rightImg" src="./imgs/finance/right.png"></image>
			</div>
			<div class="center">
				<div class="item">
					<text class="font3">产品名称</text>
					<text class="font4">农商财富稳40天</text>
				</div>
				<div class="item">
					<text class="font3">起点金额</text>
					<text class="font4">500,00.00元</text>
				</div>
				<div class="item">
					<text class="font3">递增金额</text>
					<text class="font4">100,000,0.00元</text>
				</div>
			</div>

			<div class="bottom">
				<div class="item1">
					<div class="title">
						<text class="font3">起点金额</text>
					</div>
					<div class="content">
						<div style="flex-direction: row;align-items: flex-end;">
							<image class="img" src="./imgs/finance/money.png"></image>
							<input class="input" type="number" placeholder="请输入购买理财金额" @input="changeMoney" />
						</div>
						<div>
							<text class="fontl" style="font-size:26px ;margin-top: 10px;">限额提示</text>
						</div>
					</div>
				</div>
				<div class="DXitem">
					<text class="font3">大写金额：</text>
					<text class="titleDx">{{moneyDX}}</text>
				</div>
			</div>

			<div class="wrapper">
				<div style="width: 78px;height: 30px;padding-left: 40px;" @click="checkedC">
					<image class="checkImg" v-if="!checked" src="./imgs/register/checkIn.png"></image>
					<image class="checkImg" v-else src="./imgs/register/checkOut.png"></image>
				</div>
				<div>
					<div style="flex-direction: row;">
						<text class="fonth">本人已确认总计并同意签署《</text>
						<text class="fontl">个人信息查询和使用授权书</text>
						<text class="fonth">》、</text>
					</div>
					<div style="flex-direction: row;">
						<text class="fonth">《</text>
						<text class="fontl">个人征信查询授权书</text>
						<text class="fonth">》。</text>
					</div>

				</div>
			</div>

			<div class="btn">
				<image class="loginBgimg" src="./imgs/securityCenter/loginBg.png" @click="nextPage"></image>
				<text class="btnFont">确认购买</text>
			</div>

		</scroller>
		<pwd-dialog :showMoney="showMoney" :money="payMoney" :show="showPwd" :title="pwdtitle" @close="closePwd" @getPwd="getPwd"></pwd-dialog>
		<bottom-dialog :show="showBottom" @closeBottomDialog="closeBottomDialog" @choose="choose"></bottom-dialog>
	</div>
</template>

<script>
	import { MpBar } from "madp-ui";
	import pwdDialog from "@/components/payPwdDialog.vue"
	import bottomDialog from "@/components/finance/bottomDialog.vue"
	const stream = weex.requireModule("stream");
	const context = weex.requireModule("context");
	export default {
		components: {
			MpBar,
			pwdDialog,
			bottomDialog
		},
		data() {
			return {
				title: "产品购买",
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
				moneyDX: "",
				showPwd:false,
				pwdtitle:"请输入取款密码",
				showMoney:true,
				payMoney:"100",
				showBottom:false
			}
		},
		methods: {
			//选择完毕
			choose(item){
				this.showBottom = false;
				this.alertMsg(JSON.stringify(item));
			},
			//关闭选择银行卡的弹框
			closeBottomDialog(){
				this.showBottom = false;
			},
			//更换银行卡
			changeAcount(){
				this.showBottom = true;
			},
			mpBarLeftBtnClick() {
				this.goBack();
			},
			changeMoney(event) {
				const money = event.value;
				this.moneyDX = this.smalltoBIG(money)
			},
			//打开密码控件
			nextPage(){
				this.showPwd = true;
			},
			//关闭密码弹框
			closePwd(){
				this.showPwd = false;
			},
			//获取密码
			getPwd(pwd){
				
			},
			/** 数字金额大写转换(可以处理整数,小数,负数) */
			smalltoBIG(n) {
				var fraction = ['角', '分'];
				var digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
				var unit = [
					['元', '万', '亿'],
					['', '拾', '佰', '仟']
				];
				var head = n < 0 ? '欠' : '';
				n = Math.abs(n);

				var s = '';

				for(var i = 0; i < fraction.length; i++) {
					s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
				}
				s = s || '整';
				n = Math.floor(n);

				for(var i = 0; i < unit[0].length && n > 0; i++) {
					var p = '';
					for(var j = 0; j < unit[1].length && n > 0; j++) {
						p = digit[n % 10] + unit[1][j] + p;
						n = Math.floor(n / 10);
					}
					s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
				}
				return head + s.replace(/(零.)*零元/, '元').replace(/(零.)+/g, '零').replace(/^整$/, '零元整');
			}
		}
	}
</script>

<style scoped>
	.container {
		width: 750px;
		background-color: rgb(248, 248, 248);
	}
	
	.top {
		height: 160px;
		width: 690px;
		margin: 20px 30px;
		padding: 0 40px;
		background-color: #FFFFFF;
		border-radius: 10px;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	
	.top-box {
		flex-direction: row;
		height: 100px;
		align-items: center;
	}
	
	.logoImg {
		width: 65px;
		height: 65px;
	}
	
	.font1 {
		font-family: PingFangSc-Regular;
		font-size: 28px;
		color: rgb(31, 31, 31);
	}
	
	.font2 {
		font-family: PingFangSc-Regular;
		font-size: 24px;
		color: rgb(159, 159, 159);
	}
	
	.rightImg {
		width: 15px;
		height: 25px;
	}
	
	.center {
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
	
	.font3 {
		font-family: PingFangSc-Regular;
		font-size: 28px;
		color: rgb(51, 51, 51);
	}
	
	.font4 {
		font-family: PingFangSc-Regular;
		font-size: 28px;
		color: rgb(120, 120, 120);
	}
	
	.item1 {
		width: 720px;
		height: 180px;
		border-bottom-width: 1px;
		border-bottom-color: #f0f0f0;
		margin-left: 30px;
		padding-right: 30px;
	}
	
	.bottom {
		width: 750px;
		background-color: #FFFFFF;
		margin-top: 20px;
	}
	
	.title {
		height: 60px;
		justify-content: center;
	}
	
	.img {
		width: 42px;
		height: 50px;
	}
	
	.content {
		height: 120px;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
	
	.input {
		margin-left: 20px;
		height: 60px;
		padding-top: 20px;
		width: 500px;
		font-size: 32px;
		color: rgb(51, 51, 51);
		placeholder-color: rgb(159, 159, 159);
	}
	
	.wrapper {
		width: 750px;
		flex-direction: row;
		margin-top: 30px;
	}
	
	.checkImg {
		width: 18px;
		height: 18px;
		margin-top: 10px;
	}
	
	.fonth {
		font-family: PingFangSC-Regular;
		font-size: 22px;
		letter-spacing: 1px;
		line-height: 40px;
		color: rgb(170, 170, 170);
	}
	
	.fontl {
		font-family: PingFangSC-Regular;
		font-size: 22px;
		letter-spacing: 1px;
		line-height: 40px;
		color: #EA9849;
	}
	
	.btn {
		width: 750px;
		height: 142px;
		margin-top: 50px;
		margin-bottom: 50px;
		justify-content: center;
		align-items: center;
	}
	
	.loginBgimg {
		height: 142px;
		width: 690px;
		position: absolute;
		left: 30px;
		top: 0;
	}
	
	.btnFont {
		font-size: 32px;
		color: #FFFFFF;
		font-weight: 700;
		margin-top: -30px;
	}
	
	.DXitem {
		width: 720px;
		height: 120px;
		margin-left: 30px;
		flex-direction: row;
		align-items: center;
		padding-right: 30px;
	}
	
	.titleDx {
		lines: 2;
		width: 550px;
		text-overflow: ellipsis;
		font-family: PingFangSc-Regular;
		font-size: 28px;
		color: rgb(51, 51, 51);
	}
</style>