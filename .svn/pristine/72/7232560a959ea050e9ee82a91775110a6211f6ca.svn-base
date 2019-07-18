<template>
	<div class="container">
		<div class="item" v-for="(item,key) in List" :key="key" @click="gotoDetail(item)">
			<div class="top">
				<text class="font1">购买日期：{{item.Acopdt}}</text>
			</div>
			<div class="center">
				<div class="center_left">
					<div class="item1">
						<text class="font2">存款金额</text>
						<text class="font3">{{item.Prtdam | addDot}}元</text>
					</div>
					<div class="item1">
						<text class="font2">存款期限</text>
						<text class="font1">{{item.Acterm}}月</text>
					</div>
				</div>
				<div class="center_right">
					<text class="font4">详情</text>
					<image class="img_right" src="./imgs/tab_user/menu/img_right.png"></image>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	const stream = weex.requireModule("stream");
	const context = weex.requireModule("context");
	export default{
		props: {
			List: {
			    type: Array,
			    default: () => []
		    },
		},
		data(){
			return{
				
			}
		},
		methods:{
			gotoDetail(item){
				this.$emit("gotoDetail",item)
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
	.item{
		width: 750px;
		background-color: #FFFFFF;
		margin-top: 20px;
	}
	.top{
		width: 720px;
		height: 90px;
		border-bottom-width: 1px;
		border-bottom-color: #f0f0f0;
		margin-left: 30px;
		flex-direction: row;
		align-items: center;
	}
	.font1{
		font-size: 28px;
		color: rgb(138,148,167);
	}
	.font2{
		font-size: 28px;
		color: rgb(51,51,51);
		margin-right: 50px;
	}
	.center{
		height: 120px;
		width: 750px;
		padding: 0 30px;
		align-items: center;
		flex-direction: row;
		justify-content: space-between;
	}
	.item1{
		flex-direction: row;
		align-items: center;
		height: 40px;
	}
	.font3{
		font-size: 28px;
		color: #ED2020;
	}
	.center_right{
		flex-direction: row;
		align-items: center;
	}
	.img_right{
		width: 15px;
		height: 25px;
		margin-top: 5px;
		margin-left: 10px;
	}
	.font4{
		font-size: 28px;
		color: rgb(51,51,51);
	}
</style>