<template>
	<div class="container">
		<div style="flex-direction: row;align-items: center;">
			<image class="headImg" src="./imgs/tab_user/titlebar/hand.png"></image>
			<div class="fontBox">
				<text class="name">{{$store.state.name}}</text>
				<text class="lastTime">{{$store.state.lastLoginTime}}</text>
			</div>
		</div>
		<text v-if="$store.state.login" class="leftbtn" @click="loginOut">退出</text>
		<text v-else class="leftbtn" @click="login">登录</text>
	</div>
</template>

<script>
	const context = weex.requireModule("context");
	const modal = weex.requireModule("modal");
	const stream = weex.requireModule("stream");
	export default {
		data(){
		 	return {
		 	}
		},
		created(){
		},
		 methods:{
		 	//退出登录
		 	loginOut(){
				this.postDo("logout.do",{},data=>{
					context.sessionSetString("loginMsg","");
					context.sessionSetString("cifName","");  //用户名
					context.sessionSetString("secreNotice","");  //预留信息
					context.sessionSetString("lastLoginTime",""); //上次登录时间
					context.sessionSetString('isLogin', 'false');
					context.clearToken();
					this.goto();
				});
			},
		 	login(){
		 		this.goto();
		 	}
		 }
	}
</script>

<style scoped>
	.container{
		width: 750px;
		background-color: #FFFFFF;
		padding-top: 70px;
		flex-direction: row;
		padding-left: 30px;
		padding-right: 30px;
		justify-content: space-between;
		align-items: center;
	}
	.headImg{
		height: 104px;
		width: 114px;
	}
	.fontBox{
		margin-left: 10px;
	}
	.name{
		font-size: 30px;
		color: rgb(72,72,72);
		font-family: PingFangSC-Medium;
		letter-spacing: -0.64px;
		margin-top: 5px;
	}
	.lastTime{
		font-family: PingFangSC-Regular;
		font-size: 20px;
		color: rgba(147,147,147,0.7);
		margin-top: 10px;
	}
	.leftbtn{
		height: 41px;
		width: 75px;
		font-size: 24px;
		font-family: PingFangSC-Regular;
		color: rgb(255,104,57);
		border-width: 1px;
		border-color: rgb(255,104,57);
		line-height: 39px;
		text-align: center;
		border-radius: 5px;
	}
</style>