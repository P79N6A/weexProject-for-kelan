<template>
  <div>
    <mp-bar title="热门资讯"  leftTxt="返回" rightTxt="使用手册" :isBack="true" @mpBarRightBtnClick="mpBarRightBtnClick"></mp-bar>
    <scroller>
      <text style="width:750px;text-align:center;">-----热门资讯---------</text>
      <mp-hotnews :list="testData1" :single="true" @select="params => onSelect('res1', params)" sub-title="热门资讯" has-more="我的收藏" jsonurl="json/gold.json" :select-label="res1"></mp-hotnews>
    </scroller>
  </div>
</template>
<style scoped>
</style>
<script>
import { MpHotnews, MpBar } from "../../index";
const context = weex.requireModule("context");
const modal = weex.requireModule("modal");
export default {
  components: { MpHotnews, MpBar },
  data() {
    return {
      res1: "",
      res2: "",
      res3: "",
      checked:"",
      testData1: [
        {
          title: "全部",
          checked:true
        },
        {
          title: "学堂"
        },
        {
          title: "投资理财"
        },
        {
          title: "股票基金"
        },
        {
          title: "股票"
        }
      ]
    };
  },
  methods: {
    mpBarRightBtnClick() {
      let url = "";
      if (weex.config.env.osName.toLocaleLowerCase() == "android") {
        url =
          "http://192.168.1.57:8088/docs/module-%25E4%25B8%25BB%25E8%258F%259C%25E5%258D%2595%25E7%25BB%2584%25E4%25BB%25B6.html";
      } else {
        url = decodeURI(
          "http://192.168.1.57:8088/docs/module-%25E4%25B8%25BB%25E8%258F%259C%25E5%258D%2595%25E7%25BB%2584%25E4%25BB%25B6.html"
        );
      }
      context.launchStage("ext:" + url);
    },
    onSelect(res, { selectIndex, checked, checkedList }) {
      this.checked = checked
      this.res1 = checkedList.map(item => item.title).join(",");
    }
  }
};
</script>

