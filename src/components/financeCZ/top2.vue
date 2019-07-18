<template>
	<div class="container">
		<div class="top_bg">
			<image class="bgimg" src="./imgs/finance/lcbg1.png"></image>
			<text class="font1" @click="gotosyxq">{{yesterdayMoney | addDot}}</text>
			<text class="font2" @click="gotosyxq">昨日结算(元)</text>
			<div class="Box">
				<div class="fontBox" @click="gotosyxq">
					<text class="font3">{{allAccount | addDot}}</text>
					<text class="font3">累积结算(元)</text>
				</div>
				<div class="fontBox" @click="gotojymx">
					<text class="font3">{{allMoney | addDot}}</text>
					<text class="font3">总金额(元)</text>
				</div>
			</div>
		</div>		
	</div>
</template>

<script>
	export default{
//		props:{
//			yesterdayMoney:{
//				type:String,
//				default:"0.00"
//			},
//			allAccount:{
//				type:String,
//				default:"0.00"
//			},
//			allMoney:{
//				type:String,
//				default:"0.00"
//			}
//		},
		created(){
			this.getAccuQuery();
		},
		data(){
			return{
				yesterdayMoney:"0.00",
				allAccount:"0.00",
				allMoney:"0.00"
			}
		},
		methods:{
			//跳转交易明细页面
			gotojymx(){
				this.jump("/mycztty");
			},
			//跳转收益详情页面
			gotosyxq(){
				this.jump("/mycztty1");
			},
			//获取产品下的账户明细查询
			getAccuQuery(){
				const param = {
					"Frbgsq":"1",
					"Qrycnt":"10"
				}
				this.postDo("ZMTTYDepositSumQuery.do",param,data=>{
//					this.alertMsg(JSON.stringify(data));
					this.yesterdayMoney = data.resultMap.icinte;
					this.allAccount = data.resultMap.ljzfsy;
					this.allMoney = data.resultMap.acblc1;
					this.$store.state.rateList = data.resultMap.List;
				});
			},
		},
		filters:{
			addDot(val){
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

		}
	}
</script>

<style scoped>
	.container {
		width: 750px;
		background-color: rgb(248, 248, 248);
	}
	.top_bg {
		width: 750px;
		height: 272px;
		align-items: center;
		justify-content: center;
		padding-bottom: 10px;
	}
	
	.bgimg {
		width: 693px;
		height: 272px;
		position: absolute;
		top: 0px;
		left: 28.5px;
	}
	
	.Box {
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
	
	.fontBox {
		width: 300px;
		align-items: center;
	}
	
	.font1 {
		font-size: 48px;
		font-family: PingFangSc-Medlum;
		color: #FFFFFF;
	}
	
	.font2 {
		font-size: 30px;
		font-family: PingFangSc-Medlum;
		color: #FFFFFF;
		margin-bottom: 40px;
	}
	
	.font3 {
		font-size: 26px;
		font-family: PingFangSc-Medlum;
		color: #FFFFFF;
	}
</style>