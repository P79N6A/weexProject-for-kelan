<template>
	<div class="container">
		<div class="top">
				<div class="introduce">
					<div style="flex-direction: row;align-items: center;">
						<image class="img1" src="./imgs/finance/dotimg.png"></image>
						<text class="fontIn1">客户须知：</text>
					</div>
					<text class="fontIn">{{CYCInfor.Notice}}</text>
				</div>
			</div>

			<div class="center">
				<div class="item">
					<text class="font">存入口令</text>
					<text class="font">{{CYCInfor.ItemId}}</text>
				</div>
				<div class="item">
					<text class="font">利       率</text>
					<text class="font">{{CYCInfor.Rate}}%</text>
				</div>
				<div class="item" style="border-bottom-width: 0px;">
					<text class="font">存入金额</text>
					<div class="checkebox">
						<div class="check" v-for="(item,key) in numList" :key="key" @click="checkClick(item,key)">
							<image class="img2" v-if="id != key" src="./imgs/finance/radio1.png"></image>
							<image class="img2" v-else src="./imgs/finance/radio2.png"></image>
							<text class="font">{{item.Amount}}</text>
						</div>
						<!--<div class="check" @click="checkClick2">
							<image class="img2" v-if="check2" src="./imgs/finance/radio1.png"></image>
							<image class="img2" v-else src="./imgs/finance/radio2.png"></image>
							<text class="font">50000</text>
						</div>-->
					</div>
				</div>
				<div v-if="GradeFlag" style="margin-left: 30px;justify-content: center;margin-top: -1px;height: 98px;">
					<input type="number" v-model="showMoney" class="Moneyinput" placeholder="您可以在此设置您存入的金额" style="width: 690px;height: 70px;border-radius: 15px;background-color: #EEEEEE;padding-left: 30px;" @input="getMoney"/>
				</div>
				<div v-if="GradeFlag" style="flex-direction: row;align-items: center;">
					<image class="img1" src="./imgs/finance/dotimg.png"></image>
					<text class="fontIn1">{{content}}</text>
				</div>

			</div>
			<div class="wrapper">
				<div style="width: 78px;height: 30px;padding-left: 40px;" @click="checkedC">
					<image class="checkImg" v-if="!checked" src="./imgs/register/checkIn.png"></image>
					<image class="checkImg" v-else src="./imgs/register/checkOut.png"></image>
				</div>
				<div>
					<div style="flex-direction: row;">
						<text class="font1">我已阅读并同意《</text>
						<text class="font2">诚意存产品申请书</text>
						<text class="font1">》</text>
					</div>
					<!--<div style="flex-direction: row;">
						<text class="font1">本人已确认总计并同意签署《</text>
						<text class="font2">个人信息查询和使用授权书</text>
						<text class="font1">》、</text>
					</div>
					<div style="flex-direction: row;">
						<text class="font1">《</text>
						<text class="font2">个人征信查询授权书</text>
						<text class="font1">》。</text>
					</div>-->
 
				</div>
			</div>

			<div class="btn">
				<image class="loginBgimg" src="./imgs/securityCenter/loginBg.png" @click="gotoNext"></image>
				<text class="btnFont">下一步</text>
			</div>
	</div>
</template>

<script>
	const stream = weex.requireModule("stream");
	const context = weex.requireModule("context");
	export default {
		data(){
			return {
				id:"-1",
//				check0:true,
//				check1: true,
//				check2: true,
				checked: true,
				GradeFlag:false,
				showMoney:"",   //显示input的值
				depositMoney:"",    //存入金额
				CYCInfor:{    			//产品信息
					Notice:"",
					ItemId:"",
					Rate:""
				},
				productNum:"",
				numList:[], //金额档次
				FirstAmount:"",  //起始金额
				IncreasAmt:"",   //递增金额
				content:"",      //金额输入提示
			}
		},
		mounted(){
			this.productNum = context.sessionGetString("productInfo");
//			context.sessionSetString("productInfo","");
			this.getProduct();
		},
		methods:{
			getMoney(event){
				if(event.value != ""){
					this.id = "-1";
					this.depositMoney = event.value;
				}
			},
			checkClick(item,id){
				if(id == this.id){
					this.id = "-1";
					this.depositMoney = "";
				}else{
					this.id = id;
					this.depositMoney = item.Amount;
					this.showMoney = "";
				}
			},
			checkedC() {
				this.checked = !this.checked;
			},
			gotoNext() {
//				this.postDo("IntelligentSignConfirm.do",{},data=>{
//					if(data.resultMap.Flag == "1"){  //有电子账户
//						context.sessionSetString("CZinfor",JSON.stringify(data));
//						this.jump("/immOpen");
//					}else{   //无电子账户 需要电子账户开立
//						
//					}
//					
//				})
				if(this.checked){
					this.toastMsg1("请认真阅读《诚意存产品申请书》，并确认勾选!");
					return;
				}else if(this.depositMoney == ""){
					if(this.GradeFlag){
						this.alertMsg("请选择或者输入存入金额!");
					}else{
						this.alertMsg("请选择存入金额!");
					}
					return;
				}else if(this.depositMoney  != ""){
					if(this.depositMoney.indexOf(".") != "-1"){
						this.alertMsg("所存金额必须为整数!");
					}else if(this.depositMoney.indexOf("-") != "-1"){
						this.alertMsg("所存金额必须为正数!");
					}else if(parseInt(this.depositMoney)  < parseInt(this.FirstAmount)){
						this.alertMsg("所存金额必须大于或等于起始金额!");
						return
					}else{
						var amount = this.depositMoney - this.FirstAmount;
						var sun = parseInt(amount)%parseInt(this.IncreasAmt);
						if(sun > 0){
							this.alertMsg("所存金额必须符合递增金额!");
							return;
						}
					}
				}
//				this.$store.state.depositMoney = this.depositMoney;
				const param = {
					"ItemId":this.productNum,
					"TrsAmount":this.depositMoney,
					"Rate":this.CYCInfor.Rate,
					"SumAmount":this.CYCInfor.SumAmount,
					"ItemName":this.CYCInfor.ItemName
				}
				this.postDo("CYCDepositConfirm.do",param,data=>{
					this.$store.state.CYCInfor = data.resultMap;
					this.jump("/financeCYCConfirm");
				});
				
			},
			getProduct(){
				const param = {
					"ItemId":this.productNum
				}
				this.postDo("CYCProductQry.do",param,data=>{
					this.FirstAmount = data.resultMap.FirstAmount;
					this.IncreasAmt = data.resultMap.IncreasAmt;
					this.numList = data.resultMap.List;
					this.content = "本产品起购金额为  "+this.FirstAmount +"元 递增金额为 "+this.IncreasAmt+"元。"
					this.CYCInfor = data.resultMap;
					if(data.resultMap.GradeFlag == "1"){
						this.GradeFlag = true;
					}
				});
			}
		},
		filters:{
			Va(val){
				return val.substring(5,val.length);
			}
		}
	}
</script>

<style scoped>
	.top {
		width: 750px;
	}
	
	.introduce {
		width: 690px;
		margin-top: 20px;
		margin-left: 30px;
		margin-bottom: 20px;
		background-color: #F9F3EB;
		border-radius: 2px;
		padding-top: 10px;
		padding-bottom: 10px;
	}
	
	.fontIn {
		font-size: 22px;
		color: #868686;
		line-height: 50px;
		width: 630px;
		letter-spacing: 0.64px;
		margin-left: 50px;
	}
	
	.fontIn1 {
		font-size: 22px;
		color: #f8972f;
		line-height: 50px;
		letter-spacing: 0.64px;
		margin-left: 20px;
	}
	.Moneyinput{
		font-size: 26px;
		color: rgb(51, 51, 51);
	}
	
	.img1 {
		height: 10px;
		width: 10px;
		margin-left: 30px;
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
	
	.font {
		font-size: 28px;
		color: rgb(51, 51, 51);
	}
	
	.checkebox {
		flex-direction: row;
		align-items: center;
	}
	
	.check {
		flex-direction: row;
		align-items: center;
		padding-left: 30px;
	}
	
	.img2 {
		width: 18px;
		height: 18px;
		margin-right: 20px;
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
	
	.font1 {
		/*font-family: PingFangSC-Regular;*/
		font-size: 22px;
		letter-spacing: 1px;
		line-height: 40px;
		color: rgb(170, 170, 170);
	}
	
	.font2 {
		/*font-family: PingFangSC-Regular;*/
		font-size: 22px;
		letter-spacing: 1px;
		line-height: 40px;
		color: rgb(51, 142, 218);
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
</style>