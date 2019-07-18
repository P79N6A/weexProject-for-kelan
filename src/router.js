// import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

//加载器
/*主页加载器*/
import Launcher from './views/launcher/launcher.vue'//主页加载器

import Tab_home from './views/tab_home/main.vue'//首页
import Tab_finance from './views/tab_finance/main.vue'//理财
import Tab_life from './views/tab_life/main.vue'//生活
import Tab_user from './views/tab_user/main.vue'//我的

import LauncherOther from './views/launcherOther/launcher.vue'//其他主页加载器
import Tab_homeOther from './views/tab_homeOther/main.vue'//首页
/*登录*/
import Login from './views/login/home_view.vue'//登录
import Equipment from './views/login/equipment.vue'// 设备验证
import fingerLogin from './components/login/fingerprintLogin.vue' //普通登录
/*注册*/
import RegisterFirst from './views/register/registerfirst.vue'//注册第一步
import RegisterCif from './views/register/registerCif.vue'//注册第二步（orc识别）
import RegisterSecond from './views/register/registersecond.vue'//注册第二步
import RegisterSuccess from './views/register/registersuccess.vue'//注册成功

/*他行卡注册 二类户开户*/
import regPre from "./views/register/regPre.vue" //他行卡注册
import regIDCardCon from "./views/register/regIDCardPre.vue"  //ocr身份证识别
import regAddNewAc from "./views/register/regAddNewAc.vue"   //绑定银行卡
import regMMSetting from "./views/register/regMMSetting.vue"  //设置交易密码

import TransactionRecord from './views/transactionRecord/main.vue'//交易记录
import PersonInfo from './views/personInfo/main.vue'//个人信息
import MyAssets from './views/myAssets/main.vue'//我的资产
import InfoSupplement from './views/infoSupplement/main.vue'//信息补录

/**
 * 安全中心 设置手势
 */
import SetGersture from './views/setGersture/setGersture.vue' //设置手势
import SetFinger from './views/setFinger/setFinger.vue' //设置手势
import SecurityCenter from './views/securityCenter/securityCenter.vue' //安全中心
import ChangePwd from './views/securityCenter/changePwd.vue' //修改登录密码

/**
 * 忘记密码
 */
import forgetPassword from './views/forgetPassword/forgetPassword1.vue' //忘记密码
import forgetPassword2 from './views/forgetPassword/forgetPassword2.vue' //忘记密码第二步
import forgetPassword3 from './views/forgetPassword/forgetPassword3.vue' //忘记密码
import forgetPassword4 from './views/forgetPassword/forgetPassword4.vue' //忘记密码第二步

/**
 * 消息中心
 */
import msgCenter from "./views/msgCenter/msgType.vue"  //消息中心首页msgList.vue
import msgList from "./views/msgCenter/msgList.vue"  //消息列表

/**
 * 理财
 */
import financeZM from "./views/financeCZ/financeCZ.vue"  //超值天添赢     
import immOpen from "./views/financeCZ/immOpen.vue"   //超值天天赢立即开通页面			
import mycztty from "./views/financeCZ/mycztty.vue"		//交易明细页面       
import mycztty1 from "./views/financeCZ/mycztty1.vue"	//收益明细页面
import rateShow from "./views/financeCZ/rateShow.vue"   //我的超值天天盈

import utilResult from "./views/resultPage.vue"  //结果页面

import czbHome from "./views/chaozhibao/czbHome.vue"   //超值宝活期首页
import buyCzb from "./views/chaozhibao/buyCzb.vue"   //超值宝活期购买页

import financeCYC from "./views/financeCYC/main.vue"  //诚意存
import financeCYCConfirm from "./views/financeCYC/financeCYCConfirm.vue" //诚意存确认页面
import resultPage from "./views/financeCYC/resultPage.vue" //诚意存结果页面
import myCYC from "./views/financeCYC/myCYC.vue" //我的诚意存页面
import myCundan from "./views/financeCYC/myCundan.vue"  //我的存单
import cundanDetails from "./views/financeCYC/cundanDetails.vue"  //存单详情

import financeInfo from "./views/finance/financeInfo.vue" //购买理财展示页面
import financeHome from "./views/finance/financeHome.vue" //理财首页  			
import buyProduce from "./views/finance/buyProduce.vue" //购买理财展示页面			
import myFinance from "./views/finance/myFinance.vue" //我的理财 		
import historyDetails from "./views/finance/historyDetails.vue" // 理财历史明细
import detailsInfo from "./views/finance/detailsInfor.vue"   //理财历史明细列表详情		
import payFinanceResult from "./views/finance/payFinanceResult.vue"  //购买理财结果页           

import myRiskAssessment from "./views/finance/myRiskAssessment .vue"  //我的风险评估
import riskRating from "./views/finance/riskRating.vue"     //重新测评

/*
 * 贷款
 */
import Loans from "./views/loans/main.vue"  //贷款列表页面

import applyforLimitZM from "./views/loansZM/applyforLimit.vue"  //芝米好贷额度申请
import resultPageZM from "./views/loansZM/resultPage.vue" //芝米好贷结果页面
/**
 * 存款
 */
import depositHome from"./views/deposit/main.vue"  //存款首页
import myXLD from "./views/deposit/depositXLD/myXLD.vue"   //我的享利多
import drawXLD from "./views/deposit/depositXLD/drawXLD.vue"   //享利多支取

import homeJJG from "./views/deposit/depositJJG/homeJJG.vue"  //节节高首页
import buyJJG from "./views/deposit/depositJJG/buyJJG.vue"  //节节高购买页面
import myJJG from "./views/deposit/depositJJG/myJJG.vue"    //我的节节高
import drawJJG from "./views/deposit/depositJJG/drawJJG.vue"  //节节高支取

import homeFMD from "./views/deposit/depositFMD/homeFMD.vue"  //福满多首页
import buyFMD from "./views/deposit/depositFMD/buyFMD.vue"  //福满多购买页面
import myFMD from "./views/deposit/depositFMD/myFMD.vue"    //我的福满多
import drawFMD from "./views/deposit/depositFMD/drawFMD.vue"  //福满多支取

import homeYYH from "./views/deposit/depositYYH/homeYYH.vue"  //月月红首页
import buyYYH from "./views/deposit/depositYYH/buyYYH.vue"  //节节高购买页面
import myYYH from "./views/deposit/depositYYH/myYYH.vue"    //我的节节高
import drawYYH from "./views/deposit/depositYYH/drawYYH.vue"  //节节高支取

import homeCXC from "./views/deposit/depositCXC/homeCXC.vue" //超享存首页
import buyCXC from "./views/deposit/depositCXC/buyCXC.vue"  //超享存购买页面
import myCXC from "./views/deposit/depositCXC/myCXC.vue"    //我的超享存
import drawCXC from "./views/deposit/depositCXC/drawCXC.vue"  //超享存支取

/*
 * 协议
 */
import personalInfoBook from "./views/protocol/personalInfoBook.vue"

/*
 * 二维码取款
 */
import QRdraw from "./views/QRcodeATM/draw.vue"  //二维码取款		
import drawConfirm from "./views/QRcodeATM/drawConfirm.vue"  //二维码取款确认

/*
 * 协议
 */
import utilProtocol1 from "./views/webProtocol/utilProtocol1.vue"

export default new Router({	
    // mode: 'abstract',
    routes: [
    	{
			path: '/myFMD',
			component: myFMD
    	},
    	{
    		path: '/drawFMD',
			component: drawFMD
    	},
    	{
    		path: '/buyFMD',
			component: buyFMD
    	},
    	{
    		path: '/homeFMD',
			component: homeFMD
    	},
    	{
    		path: '/myYYH',
			component: myYYH
    	},
    	{
    		path: '/drawYYH',
			component: drawYYH
    	},
    	{
    		path: '/buyYYH',
			component: buyYYH
    	},
    	{
    		path: '/regPre',
			component: regPre
    	},
    	{
    		path: '/regIDCardCon',
			component: regIDCardCon
    	},
    	{
    		path: '/regAddNewAc',
			component: regAddNewAc
    	},
    	{
    		path: '/regMMSetting',
			component: regMMSetting
    	},
    	{
    		path: '/homeCXC',
			component: homeCXC
    	},
    	{
    		path: '/buyCXC',
			component: buyCXC
    	},
    	{
    		path: '/myCXC',
			component: myCXC
    	},
    	{
    		path: '/drawCXC',
			component: drawCXC
    	},
    	{
    		path: '/homeYYH',
			component: homeYYH
    	},
    	{
    		path: '/myJJG',
			component: myJJG
    	},
    	{
    		path: '/drawJJG',
			component: drawJJG
    	},
    	{
    		path: '/buyJJG',
			component: buyJJG
    	},
    	{
    		path: '/homeJJG',
			component: homeJJG
    	},
    	{
    		path: '/drawXLD',
			component: drawXLD
    	},
    	{
    		path: '/depositHome',
			component: depositHome
    	},
    	{
    		path: '/myXLD',
			component: myXLD
    	},
    	{
    		path: '/cundanDetails',
			component: cundanDetails
    	},
    	{
    		path: '/myCundan',
			component: myCundan
    	},
    	{
    		path: '/utilResult',
			component: utilResult
    	},
    	{
    		path: '/rateShow',
			component: rateShow
    	},
    	{
    		path: '/buyCzb',
			component: buyCzb
    	},
    	{
    		path: '/utilProtocol1',
			component: utilProtocol1
    	},
    	{
    		path: '/czbHome',
			component: czbHome
    	},
    	{
    		path: '/drawConfirm',
			component: drawConfirm
    	},
    	{
    		path: '/QRdraw',
			component: QRdraw
    	},
    	{
    		path: '/riskRating',
			component: riskRating
    	},
    	{
    		path: '/myRiskAssessment',
			component: myRiskAssessment
    	},
    	{
    		path: '/payFinanceResult',
			component: payFinanceResult
    	},
    	{
    		path: '/detailsInfo',
			component: detailsInfo
    	},
    	{
    		path: '/mycztty1',
			component: mycztty1
    	},
    	{
    		path: '/mycztty',
			component: mycztty
    	},
    	{
    		path: '/immOpen',
			component: immOpen
    	},
    	{
    		path: '/historyDetails',
			component: historyDetails,
    	},
    	{
    		path: '/buyProduce',
			component: buyProduce
    	},
    	{
    		path: '/myFinance',
			component: myFinance
    	},
    	{
    		path: '/financeHome',
			component: financeHome
    	},
    	{
    		path: '/personalInfoBook',
			component: personalInfoBook
    	},
    	{
    		path: '/financeInfo',
			component: financeInfo
    	},
    	{
    		path: '/resultPageZM',
			component: resultPageZM
    	},
    	{
    		path: '/applyforLimitZM',
			component: applyforLimitZM
    	},
    	{
    		path: '/Loans',
			component: Loans
    	},
    	{
    		path: '/financeZM',
			component: financeZM
    	},
    	{
    		path: '/resultPage',
			component: resultPage
    	},
    	{
    		path: '/financeCYC',
			component: financeCYC
    	},
    	{
    		path: '/myCYC',
			component: myCYC
    	},
    	{
    		path: '/financeCYCConfirm',
			component: financeCYCConfirm
    	},
    	{
			path: '/msgCenter',
			component: msgCenter
		},
		{
			path: '/msgList',
			component: msgList
		},
    	{
			path: '/ChangePwd',
			component: ChangePwd
		},
    	{
			path: '/SetFinger',
			component: SetFinger
		},
    	{
			path: '/fingerLogin',
			component: fingerLogin
		},
    	{
    		path:"/SecurityCenter",
    		 component: SecurityCenter
    	},
    	{
    		path:"/forgetPassword2",
    		 component: forgetPassword2
    	},
    	{
    		path:"/forgetPassword3",
    		 component: forgetPassword3
    	},
    	{
    		path:"/forgetPassword4",
    		 component: forgetPassword4
    	},
    	{
    		path:"/forgetPassword",
    		 component: forgetPassword
    	},
    	{
    		path:"/Equipment",
    		 component: Equipment
    	},
        {
            path: '/Launcher',
            component: Launcher
        },
        {
            path: '/LauncherOther',
            component: LauncherOther
        },
        {
            path: '/Tab_home',
            component: Tab_home
        },
        {
            path: '/Tab_homeOther',
            component: Tab_homeOther
        },
        {
            path: '/Tab_finance',
            component: Tab_finance
        },
        {
            path: '/Tab_life',
            component: Tab_life
        },
        {
            path: '/Tab_user',
            component: Tab_user
        },
		

        {
            path: '/Login',
            component: Login
        },
        {
            path: '/RegisterFirst',
            component: RegisterFirst
        },{
            path: '/RegisterSecond',
            component: RegisterSecond
        },
        {
            path: '/RegisterSuccess',
            component: RegisterSuccess
        },
        {
            path: '/RegisterCif',
            component: RegisterCif
        },

        {
            path: '/InfoSupplement',
            component: InfoSupplement
        },
        {
            path: '/MyAssets',
            component: MyAssets
        },
        {
            path: '/PersonInfo',
            component: PersonInfo
        },
        {
            path: '/TransactionRecord',
            component: TransactionRecord
        },
         {
            path: '/SetGersture',
            component: SetGersture
        },
        // {
        //     path: '/',
        //     redirect: '/myCundan'
        // },
		{
            path: '/',
            redirect: '/Tab_life'
        }
    ]
})