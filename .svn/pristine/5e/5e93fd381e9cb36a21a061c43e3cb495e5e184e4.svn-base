<template>
	<div class="container">
		<mp-bar 
			:title="title" 
			:titleStyle="titleStyle" 
			:barStyle="barStyle" 
			:leftBtn="leftBtn" 
			:leftBtnStyle="leftBtnStyle" 
			@mpBarLeftBtnClick="mpBarLeftBtnClick" ></mp-bar>

		<scroller style="flex: 1;">
		<div class="row">
			<div class="item">
				<text class="font1">尊敬的客户您好，为了给您提供更好的安全保障尊敬的客户您好，为了给您提供更好的安全保障尊敬的客户您好，为了给您提供更好的安全保障</text>
			</div>
		</div>
        <!-- 序号1 -->
        <div class="row">
			<div class="item1">
				<text class="font">1. 以下哪项是适合您的投资风格？</text>
			</div>
            <div class="item2">
				<text class="font2">A. 进取：希望赚取高回报，能接受为期较长期间的负面波动，包括本金损失</text>
                <image class="img" src="./imgs/register/checkOut.png" v-if="imgCheck" @click="imgCheck=!imgCheck"></image>   
                <image class="img" src="./imgs/register/checkIn.png" v-else @click="imgCheck=!imgCheck"></image>  
			</div>
            <div class="item2">
				<text class="font2">B. 稳健：希望以平衡的投资方式，寻求资金的较高收益和成长性</text>
                <image class="img" src="./imgs/register/checkOut.png" v-if="imgCheck" @click="imgCheck=!imgCheck"></image>   
                <image class="img" src="./imgs/register/checkIn.png" v-else @click="imgCheck=!imgCheck"></image>  
			</div>
            <div class="item2">
				<text class="font2">C. 保守：希望保守投资，回报高于定期存款</text>
                <image class="img" src="./imgs/register/checkOut.png" v-if="imgCheck" @click="imgCheck=!imgCheck"></image>   
                <image class="img" src="./imgs/register/checkIn.png" v-else @click="imgCheck=!imgCheck"></image>  
			</div>
            <div class="item2">
				<text class="font2">D. 无风险：不希望本金承担风险</text>
                <image class="img" src="./imgs/register/checkOut.png" v-if="imgCheck" @click="imgCheck=!imgCheck"></image>   
                <image class="img" src="./imgs/register/checkIn.png" v-else @click="imgCheck=!imgCheck"></image>  
			</div>
		</div>
        <!-- 序号2 -->
        <div class="row">
			<div class="item1">
				<text class="font">2. 以下哪项最能说明您的投资经验？</text>
			</div>
            <div class="item2">
				<text class="font2">A. 经验丰富：我是活跃且有经验的投资者，希望自行进行投资决策</text>
                <image class="img" src="./imgs/register/checkOut.png" v-if="imgCheck" @click="imgCheck=!imgCheck"></image>   
                <image class="img" src="./imgs/register/checkIn.png" v-else @click="imgCheck=!imgCheck"></image>  
			</div>
            <div class="item2">
				<text class="font2">B. 经验适度：我有一些投资经验，但希望得到专业人士的进一步帮助</text>
                <image class="img" src="./imgs/register/checkOut.png" v-if="imgCheck" @click="imgCheck=!imgCheck"></image>   
                <image class="img" src="./imgs/register/checkIn.png" v-else @click="imgCheck=!imgCheck"></image>  
			</div>
            <div class="item2">
				<text class="font2">C. 经验有限：除存款、国债，我几乎没有其他投资经验</text>
                <image class="img" src="./imgs/register/checkOut.png" v-if="imgCheck" @click="imgCheck=!imgCheck"></image>   
                <image class="img" src="./imgs/register/checkIn.png" v-else @click="imgCheck=!imgCheck"></image>  
			</div>
		</div>
        <!-- 序号3 -->
        <div class="row">
			<div class="item1">
				<text class="font">3. 您希望您的投资目标在多长时间内实现？</text>
			</div>
            <div class="item2">
				<text class="font2">A. 5年以上</text>
                <image class="img" src="./imgs/register/checkOut.png" v-if="imgCheck" @click="imgCheck=!imgCheck"></image>   
                <image class="img" src="./imgs/register/checkIn.png" v-else @click="imgCheck=!imgCheck"></image>  
			</div>
            <div class="item2">
				<text class="font2">B. 3―5年</text>
                <image class="img" src="./imgs/register/checkOut.png" v-if="imgCheck" @click="imgCheck=!imgCheck"></image>   
                <image class="img" src="./imgs/register/checkIn.png" v-else @click="imgCheck=!imgCheck"></image>  
			</div>
            <div class="item2">
				<text class="font2">C. 1－2年</text>
                <image class="img" src="./imgs/register/checkOut.png" v-if="imgCheck" @click="imgCheck=!imgCheck"></image>   
                <image class="img" src="./imgs/register/checkIn.png" v-else @click="imgCheck=!imgCheck"></image>  
			</div>
            <div class="item2">
				<text class="font2">D. 25％以下</text>
                <image class="img" src="./imgs/register/checkOut.png" v-if="imgCheck" @click="imgCheck=!imgCheck"></image>   
                <image class="img" src="./imgs/register/checkIn.png" v-else @click="imgCheck=!imgCheck"></image>  
			</div>
		</div>
        <!-- 序号4 -->
        <div class="row">
			<div class="item1">
				<text class="font">4. 如果您要参与投资理财，您打算购买理财产品（含基金，下同）的资金占个人总资产的百分之几？</text>
			</div>
            <div class="item2">
				<text class="font2">A. 75％以上</text>
                <image class="img" src="./imgs/register/checkOut.png" v-if="imgCheck" @click="imgCheck=!imgCheck"></image>   
                <image class="img" src="./imgs/register/checkIn.png" v-else @click="imgCheck=!imgCheck"></image>  
			</div>
            <div class="item2">
				<text class="font2">B. 51％－75％</text>
                <image class="img" src="./imgs/register/checkOut.png" v-if="imgCheck" @click="imgCheck=!imgCheck"></image>   
                <image class="img" src="./imgs/register/checkIn.png" v-else @click="imgCheck=!imgCheck"></image>  
			</div>
            <div class="item2">
				<text class="font2">C. 25％－50％</text>
                <image class="img" src="./imgs/register/checkOut.png" v-if="imgCheck" @click="imgCheck=!imgCheck"></image>   
                <image class="img" src="./imgs/register/checkIn.png" v-else @click="imgCheck=!imgCheck"></image>  
			</div>
            <div class="item2">
				<text class="font2">D. 25％以下</text>
                <image class="img" src="./imgs/register/checkOut.png" v-if="imgCheck" @click="imgCheck=!imgCheck"></image>   
                <image class="img" src="./imgs/register/checkIn.png" v-else @click="imgCheck=!imgCheck"></image>  
			</div>
		</div>
        <!-- 序号5 -->
        <div class="row">
			<div class="item1">
				<text class="font">5. 您在产品持有期内是否有赎回产品的需求？</text>
			</div>
            <div class="item2">
				<text class="font2">A. 没有</text>
                <image class="img" src="./imgs/register/checkOut.png" v-if="imgCheck" @click="imgCheck=!imgCheck"></image>   
                <image class="img" src="./imgs/register/checkIn.png" v-else @click="imgCheck=!imgCheck"></image>  
			</div>
            <div class="item2">
				<text class="font2">B. 不确定</text>
                <image class="img" src="./imgs/register/checkOut.png" v-if="imgCheck" @click="imgCheck=!imgCheck"></image>   
                <image class="img" src="./imgs/register/checkIn.png" v-else @click="imgCheck=!imgCheck"></image>  
			</div>
            <div class="item2">
				<text class="font2">C. 有</text>
                <image class="img" src="./imgs/register/checkOut.png" v-if="imgCheck" @click="imgCheck=!imgCheck"></image>   
                <image class="img" src="./imgs/register/checkIn.png" v-else @click="imgCheck=!imgCheck"></image>  
			</div>
		</div>
        <!-- 序号6 -->
        <div class="row">
			<div class="item1">
				<text class="font">6. 未来五年，您预计自己每月可拿出多少资金用于投资理财？</text>
			</div>
            <div class="item2">
				<text class="font2">A. 预计未来每月可投资金额比现在高</text>
                <image class="img" src="./imgs/register/checkOut.png" v-if="imgCheck" @click="imgCheck=!imgCheck"></image>   
                <image class="img" src="./imgs/register/checkIn.png" v-else @click="imgCheck=!imgCheck"></image>  
			</div>
            <div class="item2">
				<text class="font2">B. 预计未来每月可投资金额</text>
                <image class="img" src="./imgs/register/checkOut.png" v-if="imgCheck" @click="imgCheck=!imgCheck"></image>   
                <image class="img" src="./imgs/register/checkIn.png" v-else @click="imgCheck=!imgCheck"></image>  
			</div>
            <div class="item2">
				<text class="font2">C. 预计未来每月可投资金额会减少（比如：退休）</text>
                <image class="img" src="./imgs/register/checkOut.png" v-if="imgCheck" @click="imgCheck=!imgCheck"></image>   
                <image class="img" src="./imgs/register/checkIn.png" v-else @click="imgCheck=!imgCheck"></image>  
			</div>
		</div>
        <!-- 序号7 -->
        <div class="row">
			<div class="item1">
				<text class="font">7. 您的年龄是？</text>
			</div>
            <div class="item2">
				<text class="font2">A. 高于61岁</text>
                <image class="img" src="./imgs/register/checkOut.png" v-if="imgCheck" @click="imgCheck=!imgCheck"></image>   
                <image class="img" src="./imgs/register/checkIn.png" v-else @click="imgCheck=!imgCheck"></image>  
			</div>
            <div class="item2">
				<text class="font2">B. 51-60</text>
                <image class="img" src="./imgs/register/checkOut.png" v-if="imgCheck" @click="imgCheck=!imgCheck"></image>   
                <image class="img" src="./imgs/register/checkIn.png" v-else @click="imgCheck=!imgCheck"></image>  
			</div>
            <div class="item2">
				<text class="font2">C. 41-50</text>
                <image class="img" src="./imgs/register/checkOut.png" v-if="imgCheck" @click="imgCheck=!imgCheck"></image>   
                <image class="img" src="./imgs/register/checkIn.png" v-else @click="imgCheck=!imgCheck"></image>  
			</div>
            <div class="item2">
				<text class="font2">D. 31-40</text>
                <image class="img" src="./imgs/register/checkOut.png" v-if="imgCheck" @click="imgCheck=!imgCheck"></image>   
                <image class="img" src="./imgs/register/checkIn.png" v-else @click="imgCheck=!imgCheck"></image>  
			</div>
            <div class="item2">
				<text class="font2">E. 18-30</text>
                <image class="img" src="./imgs/register/checkOut.png" v-if="imgCheck" @click="imgCheck=!imgCheck"></image>   
                <image class="img" src="./imgs/register/checkIn.png" v-else @click="imgCheck=!imgCheck"></image>  
			</div>
		</div>
        <!-- 序号8 -->
        <div class="row">
			<div class="item1">
				<text class="font">8. 对于不保本型理财产品，银行不承诺保证本金安全，您可能在产品到期收回本金并拿到较高收益，也可能无法获得任何收益且无法收回全部本金。对上述情况您是否了解并接受？</text>
			</div>
            <div class="item2">
				<text class="font2">A. 否</text>
                <image class="img" src="./imgs/register/checkOut.png" v-if="imgCheck" @click="imgCheck=!imgCheck"></image>   
                <image class="img" src="./imgs/register/checkIn.png" v-else @click="imgCheck=!imgCheck"></image>  
			</div>
            <div class="item2">
				<text class="font2">B. 是</text>
                <image class="img" src="./imgs/register/checkOut.png" v-if="imgCheck" @click="imgCheck=!imgCheck"></image>   
                <image class="img" src="./imgs/register/checkIn.png" v-else @click="imgCheck=!imgCheck"></image>  
			</div>
		</div>
        <!-- 序号9 -->
        <div class="row">
			<div class="item1">
				<text class="font">9. 您期望的投资理财回报是？ （附注：高回报附带高风险）</text>
			</div>
            <div class="item2">
				<text class="font2">A. 远超过定期存款利率</text>
                <image class="img" src="./imgs/register/checkOut.png" v-if="imgCheck" @click="imgCheck=!imgCheck"></image>   
                <image class="img" src="./imgs/register/checkIn.png" v-else @click="imgCheck=!imgCheck"></image>  
			</div>
            <div class="item2">
				<text class="font2">B. 比定期存款利率稍高</text>
                <image class="img" src="./imgs/register/checkOut.png" v-if="imgCheck" @click="imgCheck=!imgCheck"></image>   
                <image class="img" src="./imgs/register/checkIn.png" v-else @click="imgCheck=!imgCheck"></image>  
			</div>
            <div class="item2">
				<text class="font2">C. 跟银行存款利率大体相同</text>
                <image class="img" src="./imgs/register/checkOut.png" v-if="imgCheck" @click="imgCheck=!imgCheck"></image>   
                <image class="img" src="./imgs/register/checkIn.png" v-else @click="imgCheck=!imgCheck"></image>  
			</div>
		</div>
        <!-- 序号10 -->
        <div class="row">
			<div class="item1">
				<text class="font">10. 您是否已充分了解拟购买的投资理财产品的类型、风险、期限、收益计算方式以及提前终止的约定？</text>
			</div>
            <div class="item2">
				<text class="font2">A. 否</text>
                <image class="img" src="./imgs/register/checkOut.png" v-if="imgCheck" @click="imgCheck=!imgCheck"></image>   
                <image class="img" src="./imgs/register/checkIn.png" v-else @click="imgCheck=!imgCheck"></image>  
			</div>
            <div class="item2">
				<text class="font2">B. 是</text>
                <image class="img" src="./imgs/register/checkOut.png" v-if="imgCheck" @click="imgCheck=!imgCheck"></image>   
                <image class="img" src="./imgs/register/checkIn.png" v-else @click="imgCheck=!imgCheck"></image>  
			</div>
		</div>
        <!-- 序号11 -->
        <div class="row">
			<div class="item1">
				<text class="font">11. 您的投资目的是？</text>
			</div>
            <div class="item2">
				<text class="font2">A. 让财富保值增值</text>
                <image class="img" src="./imgs/register/checkOut.png" v-if="imgCheck" @click="imgCheck=!imgCheck"></image>   
                <image class="img" src="./imgs/register/checkIn.png" v-else @click="imgCheck=!imgCheck"></image>  
			</div>
            <div class="item2">
				<text class="font2">B. 个人目标（如置业、购车）</text>
                <image class="img" src="./imgs/register/checkOut.png" v-if="imgCheck" @click="imgCheck=!imgCheck"></image>   
                <image class="img" src="./imgs/register/checkIn.png" v-else @click="imgCheck=!imgCheck"></image>  
			</div>
            <div class="item2">
				<text class="font2">C. 子女教育费，退休计划</text>
                <image class="img" src="./imgs/register/checkOut.png" v-if="imgCheck" @click="imgCheck=!imgCheck"></image>   
                <image class="img" src="./imgs/register/checkIn.png" v-else @click="imgCheck=!imgCheck"></image>  
			</div>
		</div>
        <!-- 序号12 -->
        <div class="row">
			<div class="item1">
				<text class="font">12. 您可承受的价值波动幅度？</text>
			</div>
            <div class="item2">
				<text class="font2">A. 不能够承受本金损失</text>
                <image class="img" src="./imgs/register/checkOut.png" v-if="imgCheck" @click="imgCheck=!imgCheck"></image>   
                <image class="img" src="./imgs/register/checkIn.png" v-else @click="imgCheck=!imgCheck"></image>  
			</div>
            <div class="item2">
				<text class="font2">B. 能够承受本金10％以内的亏损</text>
                <image class="img" src="./imgs/register/checkOut.png" v-if="imgCheck" @click="imgCheck=!imgCheck"></image>   
                <image class="img" src="./imgs/register/checkIn.png" v-else @click="imgCheck=!imgCheck"></image>  
			</div>
            <div class="item2">
				<text class="font2">C. 能够承受本金20-50％的亏损</text>
                <image class="img" src="./imgs/register/checkOut.png" v-if="imgCheck" @click="imgCheck=!imgCheck"></image>   
                <image class="img" src="./imgs/register/checkIn.png" v-else @click="imgCheck=!imgCheck"></image>  
			</div>
            <div class="item2">
				<text class="font2">D. 能够承受本金50％以上亏损</text>
                <image class="img" src="./imgs/register/checkOut.png" v-if="imgCheck" @click="imgCheck=!imgCheck"></image>   
                <image class="img" src="./imgs/register/checkIn.png" v-else @click="imgCheck=!imgCheck"></image>  
			</div>
		</div>
        <!-- 序号13 -->
        <div class="row">
			<div class="item1">
				<text class="font">13. 您的家庭年收入为？</text>
			</div>
            <div class="item2">
				<text class="font2">A. 100万元以上</text>
                <image class="img" src="./imgs/register/checkOut.png" v-if="imgCheck" @click="imgCheck=!imgCheck"></image>   
                <image class="img" src="./imgs/register/checkIn.png" v-else @click="imgCheck=!imgCheck"></image>  
			</div>
            <div class="item2">
				<text class="font2">B. 50-100万元</text>
                <image class="img" src="./imgs/register/checkOut.png" v-if="imgCheck" @click="imgCheck=!imgCheck"></image>   
                <image class="img" src="./imgs/register/checkIn.png" v-else @click="imgCheck=!imgCheck"></image>  
			</div>
            <div class="item2">
				<text class="font2">C. 20-50万元</text>
                <image class="img" src="./imgs/register/checkOut.png" v-if="imgCheck" @click="imgCheck=!imgCheck"></image>   
                <image class="img" src="./imgs/register/checkIn.png" v-else @click="imgCheck=!imgCheck"></image>  
			</div>
            <div class="item2">
				<text class="font2">D. 5-20万元</text>
                <image class="img" src="./imgs/register/checkOut.png" v-if="imgCheck" @click="imgCheck=!imgCheck"></image>   
                <image class="img" src="./imgs/register/checkIn.png" v-else @click="imgCheck=!imgCheck"></image>  
			</div>
            <div class="item2">
				<text class="font2">E. 5万元以下 </text>
                <image class="img" src="./imgs/register/checkOut.png" v-if="imgCheck" @click="imgCheck=!imgCheck"></image>   
                <image class="img" src="./imgs/register/checkIn.png" v-else @click="imgCheck=!imgCheck"></image>  
			</div>
		</div>
        <!-- 序号14 -->
        <div class="row">
			<div class="item1">
				<text class="font">14. 当您购买的投资理财产品价值出现负收益时，您的反映是</text>
			</div>
            <div class="item2">
				<text class="font2">A. 无所谓</text>
                <image class="img" src="./imgs/register/checkOut.png" v-if="imgCheck" @click="imgCheck=!imgCheck"></image>   
                <image class="img" src="./imgs/register/checkIn.png" v-else @click="imgCheck=!imgCheck"></image>  
			</div>
            <div class="item2">
				<text class="font2">B. 可以接受</text>
                <image class="img" src="./imgs/register/checkOut.png" v-if="imgCheck" @click="imgCheck=!imgCheck"></image>   
                <image class="img" src="./imgs/register/checkIn.png" v-else @click="imgCheck=!imgCheck"></image>  
			</div>
            <div class="item2">
				<text class="font2">C. 稍有焦虑</text>
                <image class="img" src="./imgs/register/checkOut.png" v-if="imgCheck" @click="imgCheck=!imgCheck"></image>   
                <image class="img" src="./imgs/register/checkIn.png" v-else @click="imgCheck=!imgCheck"></image>  
			</div>
            <div class="item2">
				<text class="font2">D. 明显焦虑</text>
                <image class="img" src="./imgs/register/checkOut.png" v-if="imgCheck" @click="imgCheck=!imgCheck"></image>   
                <image class="img" src="./imgs/register/checkIn.png" v-else @click="imgCheck=!imgCheck"></image>  
			</div>
		</div>
		</scroller>
		
		<div class="btn" @click="gotoNext">
			<image class="btnBg" src="./imgs/finance/bottomBtnBg.png"></image>
			<text class="btnFont">立即投资</text>
		</div>
		
	</div>
</template>

<script>
	import { MpBar } from "madp-ui";
	const stream = weex.requireModule("stream");
	const context = weex.requireModule("context");
	export default{
		components:{
			MpBar
		},
		data(){
			return {
				title: "重新测评",
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
				imgCheck:true,
			}
		},
		methods:{
			mpBarLeftBtnClick(){
				this.goBack();
			},
			gotoNext(){
				this.jump("/riskTips");
			}
		}
	}
</script>

<style scoped>
	.container{
		width: 750px;
		background-color: rgb(248, 248, 248);
	}
    .row{
		margin-top:20px;
        flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 15px 0px;
		border-radius: 5px;background-color: #FFFFFF;
		width: 690px;
		margin-left: 30px;
	}
	.item {
		width: 690px;
		/* height: 90px; */
		margin: 0 auto;
        padding: 16px 30px;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
        background-color:#ffffff;
	}
    .item1 {
		width: 690px;
		/* height: 90px; */
		margin: 0 auto;
        border-bottom-width: 1px;
        border-bottom-color: #cccccc;
        padding: 16px 26px;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
        background-color:#ffffff;
	}
    .item2 {
		width: 690px;
		/* height: 90px; */
		margin: 0 auto;
        padding: 16px 30px;
		flex-direction: row;
		align-items: flex-start;
		justify-content: space-between;
        background-color:#ffffff;
	}
	
	.font {
        width: 630px;
		font-size: 28px;
		color: #666666;
	}
    .font1 {
        width: 630px;
		font-size: 28px;
		color: #666666;
	}
    .font2 {
        width: 580px;
		font-size: 26px;
		color: #999999;
	}

	.img {
        width: 26px;
        height: 26px;
        margin-top: 5px;
	}
	.btn{
		height: 125px;
		width: 750px;
		align-items: center;
		justify-content: center;
		position: flex;
		bottom: 0px;
		left: 0px;
	}
	.btnBg{
		position: absolute;
		width: 750px;
		height: 125px;
		top: 0px;
		left: 0px;
	}
	.btnFont{
		font-size: 30px;
		font-family: PingFangSc-Medlum;
		color: #FFFFFF;
		margin-top: 20px;
	}

</style>