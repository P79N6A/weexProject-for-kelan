<template>
  
    <div class="banker-middle" :style="boxStyle">
      <image class="finance-big-img" :src="bgImg" :style="bgImgStyle" />
      <slot name="innerContent">
      <!-- <div class="banker-middle-text">
        <text class="banker-middle-left">稳盈1816期35天 （ZXWY186132）</text>
        <text class="banker-middle-center">3.88</text>
        <text class="banker-middle-middle">预期收益率</text>
        <text class="banker-middle-right">5万元起购 期限91天 额度紧张</text>
      </div> -->
      </slot>
      <slot name="bottomBtn">
      <!-- <image class="insert" :src="getimg" /> -->
      </slot>
    </div>

</template>

<style scoped>
.banker-middle {
  height: 360px;
  margin-bottom: 16px;
  border-bottom-color: #eeeeee;
  border-bottom-width: 1px;
}
.finance-big-img {
  width: 750px;
  height: 378px;
}


</style>
<script>
/**
 * @module 理财模板组件1[待讨论]
 * @description 理财模板组件1
 * @example  <mp-financal1></mp-financal1>
 * 例子如下:
 * <mp-financal1 :boxStyle="boxStyle" :bgImg="bgImg">
      <div slot="innerContent">
        <div class="banker-middle-text">
          <text class="banker-middle-left">稳盈1816期35天 （ZXWY186132）</text>
          <text class="banker-middle-center">3.88</text>
          <text class="banker-middle-middle">预期收益率</text>
          <text class="banker-middle-right">5万元起购 期限91天 额度紧张</text>
        </div>
      </div>
      <div slot="bottomBtn">
        <image class="insert" :src="getImg" />
      </div>
    </mp-financal1>
    <style scoped>
.banker-middle-text {
  margin-top: -335px;
  justify-content: center;
  align-items: center;
}
.baker {
  background-color: #ffffff;
  height: 80px;
}
.banker-middle-left {
  font-size: 30px;
  color: #404561;
}
.banker-middle-center {
  font-size: 64px;
  font-weight: bolder;
  color: #ef3034;
  text-align: center;
  margin-top: 8px;
}
.banker-middle-middle {
  font-size: 28px;
  color: #8e939f;
  text-align: center;
}
.banker-middle-right {
  font-size: 28px;
  margin-top: 20px;
  color: #404561;
}
.insert {
  margin-left: 220px;
  margin-top: -40px;
  width: 317px;
  height: 52px;
}
</style>
 * 
 */

export default {
  /**
   * Props 组件接收属性
   * 
   * @prop {Object} boxStyle 整体样式
   * @prop {String} bgImg 背景图片
   * @prop {Object} bgImgStyle 背景样式
   *
   */
  props: {
    boxStyle: {
      type: Object,
      default: () => ({})
    },
    bgImg: {
      type: String,
      default: ""
    },
    bgImgStyle: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
    };
  },
  computed: {},
  methods: {
    
  }
};
</script>