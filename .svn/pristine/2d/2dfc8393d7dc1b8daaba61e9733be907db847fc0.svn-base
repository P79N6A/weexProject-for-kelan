<template>
  <div class="container">
    <!--<image style="position: fixed; top:81px;right:105px;height: 35px;width: 35px;" src="./imgs/tab_home/titlebar/head.png"></image>-->
		<mp-bar title="生活" 
			:barStyle="barStyle" 
			:titleStyle="titleStyle" 
			:leftBtn="leftBtn" 
			:leftBtnStyle="leftBtnStyle" 
			:rightBtn="rightBtn" 
			:rightBtn1="rightBtn1"  
			:rightBtnStyle="rightBtnStyle"
			:rightBtnStyle1="rightBtnStyle1"
			 @mpBarLeftBtn1Click='mpBarLeftBtn1Click'
			@mpBarLeftBtnClick="mpBarLeftBtnClick" 
			@mpBarRightBtnClick="mpBarRightBtnClick"></mp-bar>
    <list>
      <refresh class="refresh" @refresh="onrefresh" :display="refreshing?'show':'hide'">
        <text class="load_refresh">松开马上为您刷新</text>
        <loading-indicator class="indicator"></loading-indicator>
      </refresh>
      <cell v-for="(layout,key) in layoutlist" :key="key">
        <!-- 轮播广告  infinite="true" -->
        <mp-slider autoPlay="true" infinite="true" hasIndicator="true" :sliderStyle="sliderStyle" :jsonUrl="layout.url" :sliderImgStyle="sliderImgStyle" @mpSliderPageChanged="mpSliderPageChanged" @mpSliderClick="mpSliderClick" v-if="layout.type == 'AD'">
				</mp-slider>
        <!-- 主菜单 -->
        <menu :jsonUrl="layout.url" v-if="layout.type == 'MENU'" @mpMenuItemClick="mpMenuItemClick"></menu>
        <mp-slider autoPlay="true" infinite="true" hasIndicator="true" :sliderStyle="sliderStyle1" :jsonUrl="layout.url" :sliderImgStyle="sliderImgStyle1" @mpSliderPageChanged="mpSliderPageChanged" @mpSliderClick="mpSliderClick" v-if="layout.type == 'AD1'"></mp-slider>
        <top-up style="margin-top: 20px;" :jsonUrl="layout.url" v-if="layout.type == 'TOPUP'"></top-up>
        <special-offer style="margin-top: 20px;" :jsonUrl="layout.url" v-if="layout.type == 'YOUHUI'"></special-offer>
      </cell>
      <cell>
      	<bottom></bottom>
      </cell>
      
    </list>
  </div>
</template>
<style scoped>
.container {
  width: 750;
  background-color: rgb(243,243,243);
}
.refresh {
  width: 750px;
  align-items: center;
  /* background-color: #323232; */
  background-color: #ffffff;
}
.indicator {
  margin-top: 30px;
  margin-bottom: 30px;
  height: 40px;
  width: 40px;
  color: #0000ff;
}
.load_refresh {
  color: #888888;
  font-size: 28px;
  text-align: center;
}
</style>
<script>
import Bottom from "@/components/templet/bottomTpl.vue";
import Menu from "@/components/tab_life/menu.vue";
import TopUp from "@/components/tab_life/topUp.vue";
import SpecialOffer from "@/components/tab_life/specialOffer.vue"; //优惠活动

import { MpBar, MpSlider} from "madp-ui";
const stream = weex.requireModule("stream");
const context = weex.requireModule("context");

export default {
  components: {
    MpBar,
    MpSlider,
    
		Menu,
		TopUp,
		SpecialOffer,
    Bottom
  },
  data() {
    return {
    	sliderImgStyle1:{
				width: "750px",
				height: "156px"
			},
			sliderStyle1:{
				width: "750px",
				height: "156px"
			},
      titleStyle: {
					"font-family": "PingFangSC-Semibold",
					"font-size": "36px",
					"color": "rgb(51,51,51)",
					"letter-spacing": "-0.64px"
				},
				leftBtn: "./imgs/tab_home/titlebar/qrcode.png",
				barStyle: {
					'height': '150px',
					'padding-top': '60px'
				},
				rows:"1",
				tabStyle:{
					"height":"140px"
				},
				rightBtn1: "./imgs/tab_home/titlebar/head.png",
				rightBtnStyle1:{
					width: "35px",
					height: "35px",
				},
				lampImgStyle:{
					'height': '30px',
					'width': '117px',
					"margin-left":"10px"
				},
				leftBtnStyle: {
					width: "35px",
					height: "35px"
				},
				rightBtn: "./imgs/tab_home/titlebar/message.png",
				rightBtnStyle: {
					width: "42px",
					height: "42px"
				},
				sliderStyle: {
					"width": "750px",
					"height": "246px",
					"background-color":"#ffffff"
				},
				sliderImgStyle: {
					"width": "690px",
					"height": "246px",
					"border-radius":"10px",
					"margin-left":"30px"
				},
      refreshing: false,
      layoutlist: [],
      laytou_url: "./json/tab_life/layout.json",
      // 手机充值
    };
  },
  created() {
    //查询楼层
    this.qry();
  },
  methods: {
    //点击顶部菜单右侧
    mpBarRightBtnClick(event) {},
    //点击轮播触发事件
    mpSliderClick(item) {
      if (item.url.indexOf("http") != -1) {
        location.href = item.url;
      } else {
        context.launchStage(item.url);
      }
    },
    //点击主菜单触发事件
    mpMenuItemClick(item) {
      context.launchStage(item.url);
    },
    //点击顶部菜单1右侧
	mpBarLeftBtn1Click(){
		context.launchStage("main.SecurityCenter")
		// this.alertMsg(1);
	},
    qry(callback) {
      stream.fetch(
        {
          method: "GET",
          url: this.laytou_url,
          type: "json"
        },
        response => {
          if (response.status === 200) {
            this.layoutlist = response.data.data;
            if (callback) {
              callback();
            }
          }
        },
        () => {}
      );
    },
    //下拉刷新布局
    onrefresh(event) {
      this.refreshing = true;
//    context.refreshRepo("");
      this.qry(() => {
        this.refreshing = false;
      });
    },
    mpButtonClick(){

    },
    mpInputChange(){

    }
  }
};
</script>