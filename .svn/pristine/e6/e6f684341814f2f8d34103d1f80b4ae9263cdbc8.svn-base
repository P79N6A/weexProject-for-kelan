<template>
	<div class="container">
		<div class="top" @click="changeAcount">
			<div class="top-box">
				<image class="logoImg" src="./imgs/finance/logoImg.png"></image>
				<div style="justify-content: space-between;margin-left: 20px;">
					<text class="font1">{{AcNameFirst}}</text>
					<text class="font2">账户余额：{{AvailBal|addDot}}元</text>
				</div>
			</div>
			<image class="rightImg" src="./imgs/finance/right.png"></image>
		</div>
		<div class="center" v-if="depositType" >
			<div class="item">
				<text class="fontIL">产品名称</text>
				<text class="fontIR">{{buyitem.Desc2}}</text>
			</div>
			<div class="item">
				<text class="fontIL">购买期限</text>
				<text class="fontIR">{{buyitem.Term}}</text>
			</div>
			<div class="item">
				<text class="fontIL">存款利率</text>
				<text class="fontIR">{{buyitem.Interest}}%</text>
			</div>
		</div>
		<div class="bottom">
			<div class="item1">
				<div class="title">
					<text class="font3">购买金额</text>
				</div>
				<div class="content">
					<div style="flex-direction: row;align-items: flex-end;">
						<image class="img" src="./imgs/finance/money.png"></image>
						<input class="input" type="number" placeholder="请输入购买理财金额" v-model="buyMoney" @input="changeMoney" />
					</div>
					<div>
						<text class="fontl" style="" @click="transAll()">全部转入</text>
					</div>
				</div>
			</div>
		</div>
		
		<div style="margin-top:10px">
			<div class="item2">
				<div style="width: 45px;height: 60px;justify-content: center;margin-left: 30px;" @click="isAgreeProtocol">
					<image class="img1" src="./imgs/register/checkIn.png"  v-if="imgshow" ></image>
					<image class="img1" src="./imgs/register/checkOut.png" v-else></image>
				</div>
				
				<text class="font4">本人已阅读《</text>
				<text class="font5" @click="toProtocol">超值天添盈用户协议</text>
				<text class="font4">》</text>
			</div>
		</div>

		<div class="btn">
			<image class="loginBgimg" src="./imgs/securityCenter/loginBg.png" @click="nextPage"></image>
			<text class="btnFont">确认购买</text>
		</div>

	</div>
</template>

<script>
	export default {
		props:{
			buyitem: {
				type: Object,
				default: () => ({})
			},
			AcNameFirst: {
				type: String,
				default: ""
			}, // 余额
			AvailBal: {
				type: String,
				default: ""
			}, 
			depositType: {
				type: Boolean,
				default: true
			}, 
		},
		data() {
			return {
				imgshow:false,
				buyMoney:'',
				allMoney:'',
			}
		},
		methods:{
			//全部转入
			transAll(){
				this.buyMoney = this.AvailBal;
			},
			changeMoney(event){
				this.buyMoney = event.value;
			},
			isAgreeProtocol(){
				this.imgshow = !this.imgshow;
				this.$emit("isAgreeProtocol",this.imgshow);
			},
			changeAcount(){
				this.$emit("changeAcount");
			},
			toProtocol(){
				this.$emit("toProtocol");
			},
			nextPage(){
				this.$emit("nextPage",this.buyMoney);
			}
		},
		filters:{
			addDot(val){
				if(val == "" || val == undefined){
					return "0.00"
				}else{
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
		    },
		    sub(val){
		    	var str = val.toString();
		    	return val.substring(0,6)+"****"+val.substring(val.length-4,val.length)
		    
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
	
	.font3 {
		font-family: PingFangSc-Regular;
		font-size: 28px;
		color: rgb(51, 51, 51);
	}
	
	.item1 {
		width: 720px;
		height: 180px;
		border-bottom-width: 1px;
		border-bottom-color: #f0f0f0;
		margin-left: 30px;
		padding-right: 30px;
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
	
	.fontIL {
		font-family: PingFangSc-Regular;
		font-size: 28px;
		color: rgb(51, 51, 51);
	}
	
	.fontIR {
		font-family: PingFangSc-Regular;
		font-size: 28px;
		color: rgb(120, 120, 120);
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
	
	
	.item2 {
		width: 720px;
		height: 70px;
		/*margin-left: 30px;*/
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		padding-right: 30px;
	}
	.font4 {
		flex-direction: row;
		font-size: 24px;
		color: #BDC3CD;
	}
	.font5 {
		font-size: 24px;
		color: #ECA35D;
		margin-left: 10px;
		margin-right: 10px;
	}

	.img1 {
		width: 20px;    
 		height: 20px;
	}
</style>