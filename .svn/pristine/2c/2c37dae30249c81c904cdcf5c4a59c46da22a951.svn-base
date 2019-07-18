<template>
  <div>
    <mp-bar title="话费充值" leftBtn="imgs/arrow-left.png" leftTxt="返回" rightTxt="使用手册" :isBack="true" @mpBarRightBtnClick="mpBarRightBtnClick"></mp-bar>
    <scroller>
      <text style="width:750px;text-align:center;">-----话费充值---------</text>
      <mp-topup :list="testData1" :single="true" @select="params => onSelect('res1', params)" sub-title="话费充值" button-msg="立即充值" @mpButtonClick="mpButtonClick" @mpInputChange="mpInputChange"></mp-topup>
    </scroller>
  </div>
</template>
<style scoped>
</style>
<script>
import { MpTopup, MpBar } from "../../index";
const context = weex.requireModule("context");
const modal = weex.requireModule("modal");
export default {
  components: { MpTopup, MpBar },
  data() {
    return {
      res1: "",
      res2: "",
      res3: "",
      checked:"",
      testData1: [
        {
          title: "10元"
        },
        {
          title: "30元"
        },
        {
          title: "50元"
        },
        {
          title: "100元"
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
      // alert(this.res1)
      // modal.toast(checkedList.map(item => item.title).join(','))
    },
    //获取输入框值
    mpInputChange(model,value){
      this.res2=value;
    },
    mpButtonClick() {
      alert("checked====="+this.checked +"********res1====="+this.res1 +"***********res2====="+this.res2);
    }
  }
};
</script>

