<template>
  <div class="container1">
    <mp-bar :titleBg="titleBg" :titleBgStyle="titleBgStyle" :leftBtn="leftBtn" :leftBtnStyle="leftBtnStyle" :rightBtn="rightBtn" :rightBtnStyle="rightBtnStyle" @mpBarLeftBtnClick="mpBarLeftBtnClick" @mpBarRightBtnClick="mpBarRightBtnClick"></mp-bar>
    <scroller>
      <refresh class="refresh" @refresh="onrefresh" :display="refreshing ? 'show' : 'hide'">
        <text class="load_refresh">松开马上为您刷新</text>
        <loading-indicator class="indicator"></loading-indicator>
      </refresh>
      <div class="container-content" v-if="!$store.state.isSearch">
        <div v-for="(layout,key) in layoutlist" :key="key">
          <!-- 轮播广告 -->
          <mp-slider :jsonUrl="layout.url" @mpSliderPageChanged="mpSliderPageChanged" @mpSliderClick="mpSliderClick" v-if="layout.type == 'AD'">
          </mp-slider>
          <!-- 主菜单 -->
          <mp-menu :jsonUrl="layout.url" v-if="layout.type == 'MENU'" @mpMenuItemClick="mpMenuItemClick"></mp-menu>
          <!-- 换肤菜单 -->
          <mp-menu :jsonUrl="layout.url" v-if="layout.type == 'MENU1'" @mpMenuItemClick="mpMenuItemClick"></mp-menu>
          <!-- 广告跑马灯 -->
          <mp-lamp :jsonUrl="layout.url" lampImg="./imgs/tab_home/notice/black@3x.png" type="cols" v-if="layout.type == 'NOTICE'"></mp-lamp>
          <!-- 金推荐 -->
          <mp-slider :jsonUrl="layout.url" sliderType="half" v-if="layout.type == 'GOLD'">
          </mp-slider>
          <!-- 理财模板 -->
          <intell :jsonurl="layout.url" v-if="layout.type == 'INTELL'"></intell>
          <!-- 热销理财模板 -->
          <hot-finance :jsonurl="layout.url" v-if="layout.type == 'HOTFINANCE'"></hot-finance>
          <hot-recommend :jsonurl="layout.url" v-if="layout.type == 'HOTRECOMMEND'"></hot-recommend>
        </div>
        <bottom></bottom>
      </div>
    </scroller>
  </div>
</template>
<style scoped>
.container1 {
  width: 750px;
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
import Intell from "@/components/templet/intellTpl.vue";
import Gold from "@/components/templet/goldTpl.vue";
import HotFinance from "@/components/templet/hotfinanceTpl.vue";
import HotRecommend from "@/components/templet/hotrecommendTpl.vue";
import Bottom from "@/components/templet/bottomTpl.vue";

import { MpBar, MpSlider, MpMenu, MpLamp } from "madp-ui";

const stream = weex.requireModule("stream");
const modal = weex.requireModule("modal");
const context = weex.requireModule("context");
const qrCode = weex.requireModule("qr-code");
export default {
  components: {
    MpBar,
    MpSlider,
    MpMenu,
    MpLamp,

    Intell,
    Gold,
    HotFinance,
    HotRecommend,
    Bottom
  },
  data() {
    return {
      titleBg: "./imgs/tab_home/titlebar/logo@3x.png",
      titleBgStyle: { width: "206px", height: "43px" },
      leftBtn: "./imgs/tab_home/titlebar/qrcode@3x.png",
      leftBtnStyle: { width: "50px", height: "50px" },
      rightBtn: "./imgs/search@3x.png",
      rightBtnStyle: { width: "50px", height: "50px" },
      barStyle: { "background-color": "#ccc" },
      sliderIndex: "0",
      refreshing: false,
      layoutlist: [],
      theme: "./json/themeVersion.json",
      laytou_url: "./json/tab_home/layout.json"
    };
  },
  created() {
    //查询楼层
    this.queryTheme(() => {
      this.qry();
    });
  },
  methods: {
    //点击顶部菜单左侧
    mpBarLeftBtnClick(event) {
      this.qrCodeClick();
    },
    //点击顶部菜单右侧
    mpBarRightBtnClick(event) {},

    //扫码
    qrCodeClick() {
      qrCode.scanQRcode(data => {
        this.alertMsg(data);
      });
    },
    //轮播切换触发事件
    mpSliderPageChanged(event) {
      this.sliderIndex = event.index + "";
    },
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
    queryTheme(callback) {
      stream.fetch(
        {
          method: "GET",
          url: this.theme,
          type: "json"
        },
        response => {
          if (response.status === 200) {
            this.laytou_url = "./json/tab_home/" + response.data.data.theme1;
            if (callback) {
              callback();
            }
          }
        }
      );
    },
    qry(callback) {
      stream.fetch(
        {
          method: "GET",
          url: this.laytou_url + "?v=" + Math.random(),
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
      context.refreshRepo("");
      this.queryTheme(() => {
        this.qry(() => {
          this.refreshing = false;
        });
      });
    }
  }
};
</script>