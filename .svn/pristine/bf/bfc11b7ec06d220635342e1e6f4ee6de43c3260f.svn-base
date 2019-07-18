<template>
  <div class="container">
    <mp-bar :title="title" 
    	:titleStyle="titleStyle" 
    	:barStyle="barStyle"
    	:leftBtn="leftBtn" 
    	:leftBtnStyle="leftBtnStyle" 
    	@mpBarLeftBtnClick="mpBarLeftBtnClick"
    	:rightTxt="rightTxt"
    	:rightTxtStyle="rightTxtStyle"
    	@mpBarRightBtnClick="mpBarRightBtnClick"
    	></mp-bar>
    <list>
      <refresh class="refresh" @refresh="onrefresh" :display="refreshing ? 'show' : 'hide'">
        <text class="load_refresh">松开马上为您刷新</text>
        <loading-indicator class="indicator"></loading-indicator>
      </refresh>
      <cell v-for="(layout,key) in layoutlist" :key="key">
      	<mytreasure v-if="layout.type == 'MONEY'"></mytreasure>
        <!-- 主菜单 -->
        <mp-menu :jsonUrl="layout.url" v-if="layout.type == 'MENU'" @mpMenuItemClick="mpMenuItemClick"></mp-menu>
     		<mp-slider autoPlay="true" infinite="true" hasIndicator="true" :sliderStyle="sliderStyle" :jsonUrl="layout.url" :sliderImgStyle="sliderImgStyle" @mpSliderPageChanged="mpSliderPageChanged" @mpSliderClick="mpSliderClick" v-if="layout.type == 'AD'"></mp-slider>
      	<intell :jsonUrl="layout.url" v-if="layout.type == 'INTELL'"></intell>
      	<finance :jsonUrl="layout.url" v-if="layout.type == 'FINANCE'"></finance>
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
import Mytreasure from "@/components/tab_finance/myTreasure.vue";
import Intell from "@/components/tab_home/finRecommend.vue";
import Finance from "@/components/tab_finance/financeList.vue";

import { MpBar, MpMenu ,MpSlider} from "madp-ui";
const stream = weex.requireModule("stream");
const context = weex.requireModule("context");

export default {
  components: {
  	Mytreasure,
  	Finance,
    MpBar,
    MpMenu,
    MpSlider,
    Intell,
    Bottom
  },
  data() {
    return {
      title: "财富",
      titleStyle: {
				"font-family": "PingFangSC-Semibold",
				"font-size": "36px",
				"color": "rgb(51,51,51)",
				"letter-spacing": "-0.64px"
			},
			rows:"1",
			leftBtnStyle: {
				width: "35px",
				height: "35px"
			},
			leftBtn: "./imgs/tab_home/titlebar/qrcode.png",
			barStyle: {
				'height': '140px',
				'padding-top': '60px'
			},
			rightTxt:"交易明细",
			rightTxtStyle:{
				"font-size": "24px",
				"font-family": "PingFangSc-Regular",
				"color": "rgb(189, 193, 209)"
			},
			tabStyle:{
				"height":"140px"
			},
			sliderImgStyle:{
				width: "750px",
				height: "192px"
			},
			sliderStyle:{
				width: "750px",
				height: "192px"
			},
      refreshing: false,
      layoutlist: [],
      laytou_url: "./json/tab_finance/layout.json",
     
    };
  },
  created() {
    //查询楼层
    this.qry();
  },
  methods: {
    //点击顶部菜单右侧
    mpBarRightBtnClick(event) {},
    //点击主菜单触发事件
    mpMenuItemClick(item) {
      context.launchStage(item.url);
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
        () => {
        	 callback()
        }
      );
    },
    onrefresh(event) {
      this.refreshing = true;
      context.refreshRepo("");
      this.qry(() => {
        this.refreshing = false;
      });
    }
  }
};
</script>