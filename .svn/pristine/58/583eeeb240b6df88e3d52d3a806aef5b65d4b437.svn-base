<template>
	<div class="container">
		<div class="top">
			<image class="bgImg" src="./imgs/finance/lcbg3.png"></image>
			<div class="moneyBox">
				<text class="money1">¥</text>
				<text class="money2">{{money | addDot}}</text>
			</div>
			<text class="content">存单总金额(元)</text>
		</div>
		<div>
			<div v-for="(items,key) in list" :key="key">
				<div class ="item" v-for="(item,id) in items.subList" :key="id" @click="gotoCundan(items)">
					<div class="font_box">
						<div style="flex-direction: row;align-items: center;">
							<image class="img" src="./imgs/finance/tittleimg5.png"></image>
							<text class="font1">存入口令</text>
						</div>
						<text class="font1">¥ {{item.TrsAmount | addDot}} 元</text>
					</div>
					<div class="font_box">
						<text class="font2" style="margin-left: 5px;">{{items.ItemId}}</text>
						<text class="font2">尾号  {{item.AcctSubseq}}</text>
					</div>
				</div>
			</div>
		</div>
		
	</div>
</template>

<script>
	export default{
		data(){
			return {
				money:"0.00",
				list:[
				]
			}
		},
		mounted(){
			this.getMyCYCList();
		},
		methods:{
			gotoCundan(items){
				this.$emit("gotoCundan",items);
			},
			getMyCYCList(){
				this.postDo("MyCYCProdListQry.do",{},data=>{
//					this.alertMsg(JSON.stringify(data));
					this.money = data.resultMap.DepositTotalAmt;
					this.list = data.resultMap.List;
				});
			}
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
	.top{
		width: 750px;
		height:292px ;
		align-items: center;
		justify-content: center;
	}
	.bgImg{
		width: 693px;
		height: 272px;
		position: absolute;
		top: 20px;
		left: 28.5px;
	}
	.moneyBox{
		flex-direction: row;
		align-items: center;
	}
	.money1{
		font-family: PingFangSc-Medlum;
		font-size: 28px;
		color: #FFFFFF;
		margin-top: 5px;
	}
	.money2{
		font-family: PingFangSc-Medlum;
		font-size: 40px;
		color: #FFFFFF;
		margin-left: 20px;
	}
	.content{
		font-family: PingFangSc-Medlum;
		font-size: 26px;
		color: #FFFFFF;
		margin-top: 20px;
	}
	.img{
		width: 5px;
		height: 24px;
		margin-right: 5px;
		margin-top: 5px;
	}
	.item{
		width: 750px;
		height: 98px;
		justify-content: space-around;
		margin-top: 20px;
		background-color: #fff;
	}
	.font1{
		font-family: PingFangSC, sans-serif;
		font-size: 28px;
		color: #333333;		
	}
	.font_box{
		width: 750px;
		padding: 0 30px;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
	.font2{
		font-family: PingFangSC, sans-serif;
		font-size: 24px;
		color: #bbb;
	}
</style>