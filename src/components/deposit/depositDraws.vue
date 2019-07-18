<template>
	<div class="container">
		<div class="big">
			<div class="item">
				<text class="font">购买账号</text>
				<text class="font">{{drawInfo.PayeeAccountNo}}</text>
			</div>
		</div>
		<div class="big">	
			<div class="item">
				<text class="font">存       期</text>
				<text class="font">{{drawInfo.TermName}}</text>
			</div>
			<div class="item">
				<text class="font">利       率</text>
				<text class="font">{{drawInfo.Rate}}%</text>
			</div>
			<div class="item">
				<text class="font">购买金额</text>
				<text class="font1">{{drawInfo.Balance | addDot}}元</text>
			</div>
			<div class="item">
				<text class="font">购买日期</text>
				<text class="font">{{drawInfo.OpenDate}}</text>
			</div>
			<div class="item">
				<text class="font">到期日期</text>
				<text class="font">{{drawInfo.ExpDate}}</text>
			</div>
		</div>
		<div class="bottom" v-if="TakeTYpeJudge">
			<div class="item1">
				<div class="title">
					<text class="font3">支取金额</text>
				</div>
				<div class="content">
					<div style="flex-direction: row;align-items: flex-end;">
						<image class="img" src="./imgs/finance/money.png"></image>
						<input class="input" type="number" placeholder="请输入支取金额" v-model="buyMoney" @input="changeMoney" />
					</div>
					<div>
						<text class="fontl" style="" @click="transAll()">全部转入</text>
					</div>
				</div>
			</div>
		</div>
		<div class="btn">
			<image class="loginBgimg" src="./imgs/securityCenter/loginBg.png" @click="gotoNext"></image>
			<text class="btnFont">支取</text>
		</div>
	</div>
</template>

<script>
	const stream = weex.requireModule("stream");
	const context = weex.requireModule("context");
	export default{
		props: {
			drawInfo: {
			    type: Object,
      			default: () => ({})
			},
			TakeTYpeJudge: {
				type: String,
				default: false
			}, 
		},
		data(){
			return{
				buyMoney:'',
			}
		},
		methods:{
			//全部转入
			transAll(){
				this.buyMoney = this.drawInfo.Balance;
			},
			changeMoney(event){
				this.buyMoney = event.value;
			},
			gotoNext(){
				this.$emit("depositDraw",this.buyMoney);
			}
		},
		filters: {
			addDot(val) {
				var Astr = val.toString();
				Astr = Astr.replace(/,/g, '');
				if(Astr.indexOf(".") != -1) {
					var str = Astr.split(".")[0]
					var afDot = Astr.split(".")[1]
					var newVal = "";
					for(var i = 0; i <= str.length - 1; i++) {
						if((str.length - i) % 3 == 1 && i != (str.length - 1)) {
							newVal = newVal + str.charAt(i) + ",";
						} else {
							newVal = newVal + str.charAt(i);
						}
					}
					return newVal + "." + afDot;
				} else {
					var str = val.toString();
					var newVal = "";
					for(var i = 0; i <= str.length - 1; i++) {
						if((str.length - i) % 3 == 1 && i != (str.length - 1)) {
							newVal = newVal + str.charAt(i) + ",";
						} else {
							newVal = newVal + str.charAt(i);
						}
					}
					return newVal + ".00";
				}
			},
			card(val){
				
			}
		}
	}
</script>

<style scoped>
	.container{
		width: 750px;
		background-color: rgb(248,248,248);
	}
	.big{
		width: 750px;
		background-color: #FFFFFF;
		margin-top: 20px;
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
	.font {
		font-size: 28px;
		color: rgb(51, 51, 51);
	}

	.bottom {
		width: 750px;
		background-color: #FFFFFF;
		margin-top: 20px;
	}
	.item1 {
		width: 720px;
		height: 180px;
		border-bottom-width: 1px;
		border-bottom-color: #f0f0f0;
		margin-left: 30px;
		padding-right: 30px;
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
		font-size: 28px;
		color: rgb(51, 51, 51);
		placeholder-color: rgb(159, 159, 159);
	}
	
	.fontl {
		font-family: PingFangSC-Regular;
		/* font-size: 22px; */
		letter-spacing: 1px;
		line-height: 40px;
		color: #EA9849;
		font-size:28px ;
		margin-top: 10px;
	}
	.font3 {
		font-family: PingFangSc-Regular;
		font-size: 28px;
		color: rgb(51, 51, 51);
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
		top: 0px;
	}
	
	.btnFont {
		font-size: 32px;
		color: #FFFFFF;
		font-weight: 700;
		margin-top: -30px;
	}
	.font1{
		font-size: 28px;
		color:#ED2222;
	}

</style>