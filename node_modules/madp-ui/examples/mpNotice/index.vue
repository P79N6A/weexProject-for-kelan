<template>
  <div>
    <text style="width:750px;text-align:center;">-------------1--------------</text>
    <div v-for="(item,index) in paramsData" :key="index" >
      <mp-notice :adImg="adImg" :paramsData="item" @getItemClick="getItemClick(index)">

      </mp-notice>
    </div>
    <text style="width:750px;text-align:center;">-------------2--------------</text>
    <mp-notice :adImg="adImg" :paramsData="paramsData[0]" :sortFlag="sortFlag">

    </mp-notice>
    <text style="width:750px;text-align:center;">-------------3--------------</text>
    <mp-notice :adImg="adImg" :adStyle="adStyle" :sortFlag="sortFlag">
      <div class="text_area" slot="content">
        <text class="face_text">测试</text>
        <text class="hua_text">天台很挤，要给股民留位置,欢迎使用唐山银行理财天台很挤，要给股民留位置,欢迎使用唐山银行理财天台很挤，要给股民留位置,欢迎使用唐山银行理财</text>
        <text class="hours">1小时前</text>
      </div>
    </mp-notice>
  </div>
</template>
<style scoped>
.text_area {
  width: 450px;
  margin-left: 50px;
}

.face_text {
  font-size: 28px;
  color: #404561;
}

.hua_text {
  margin-top: 20px;
  font-size: 26px;
  color: #848996;
}

.hours {
  margin-top: 20px;
  color: #a6aeb4;
  font-size: 26px;
}
</style>
<script>
import { MpNotice } from "../../index";
export default {
  components: { MpNotice },
  data() {
    return {
      adImg: "./imgs/ad.png",
      sortFlag: false,
      adStyle: { height: "auto" },
      paramsData: [
        {
          url: "http://www.csii.com.cn",
          src: "imgs/tab_finance/gold/ad.png",
          title: "赌球危险！",
          short: "天台很挤，要给股民留位置,欢迎使用唐山银行理财",
          time: "1小时前",
          key:
            "赌球危险！天台很挤，要给股民留位置,欢迎使用唐山银行理财,tangshanyinhanglicai"
        },
        {
          url: "http://www.csii.com.cn",
          src: "imgs/tab_finance/gold/ad.png",
          title: "股市危险！",
          short: "天台很挤，要给球迷留位置,欢迎使用唐山银行活动",
          time: "1小时前",
          key: "股市危险！天台很挤，要给球迷留位置,tangshanyinhanghuodong"
        }
      ]
    };
  },
  methods: {
    getItemClick(index){
      alert(index);
    }
  }
};
</script>

