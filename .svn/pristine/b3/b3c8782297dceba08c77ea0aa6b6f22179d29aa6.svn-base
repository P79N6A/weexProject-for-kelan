<template>
  <div class="mp-bar" :style="barStyle">
    <image class="background-bg" :src="bgUrl" :style="bgStyle" v-if="bgUrl" />
    <div class="left-box" @click="mpBarLeftBtnClick">
      <slot name="left">
        <image class="left-btn" :src="leftBtn" :style="leftBtnStyle" v-if="leftBtn" />
        <text class="left-txt" :style="leftTxtStyle" v-if="leftTxt">{{leftTxt}}</text>
      </slot>
    </div>
    <div class="center-box">
      <slot name="center">
        <image :src="titleBg" :style="titleBgStyle" v-if="titleBg" />
        <text class="center" :style="titleStyle" v-if="title">{{title}}</text>
      </slot>
    </div>
    <div class="right-box" @click="mpBarRightBtnClick">
      <slot name="right">
        <div @click="mpBarRightBtn1Click">
          <image class="right-btn" :src="rightBtn1" :style="rightBtnStyle1" 
        style="marginRight:20px" v-if="rightBtn1" />
          <text class="right-txt" :style="rightTxtStyle1" v-if="rightTxt1">{{rightTxt1}}</text>
        </div>
        <div @click="mpBarRightBtnClick">
          <image class="right-btn" :src="rightBtn" :style="rightBtnStyle" v-if="rightBtn" />
          <text class="right-txt" :style="rightTxtStyle" v-if="rightTxt">{{rightTxt}}</text>
        </div>
        
      </slot>
    </div>
  </div>
</template>

<style scoped>
.mp-bar {
  height: 120px;
  line-height: 120px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
}
.background-bg {
  position: absolute;
  top: 0;
  left:0;
  width: 750px;
  height: 120px;
}
.left-box {
	width: 150px;
  /* position: absolute; */
  left: 30px;
  /* width: 180px; */
  /* height: 120px; */
  line-height: 120px;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
}
.left-btn {
  width: 21px;
  height: 36px;
  margin-right: 6px;
}
.left-txt {
  height: 120px;
  line-height: 120px;
  font-size: 30px;
}
.center {
  font-size: 36px;
}
.right-box {
	width: 150px;
  /* position: absolute; */
  right: 30px;
  /* height: 120px;
  line-height: 120px; */
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
}
.right-btn {
  width: 21px;
  height: 36px;
  margin-right: 6px;
}
.right-btn1{
  margin-right: 4px;
}
.right-txt {
  height: 120px;
  line-height: 120px;
  font-size: 30px;
}
</style>
<script>
/**
 * @module 头部组件
 * @description 头部组件
 * @example  <mp-bar></mp-bar>
 * 例子如下:
 *  <mp-bar 
    title="标题"
    leftTxt="返回"
    rightBtn="..."
   ></mp-bar>

   slot插槽：
   left:编辑左侧内容
   center:编辑中间内容
   right:编辑右侧内容
 *
 */
const navigator = weex.requireModule("navigator");
export default {
  /**
   * Props 组件接收属性
   * 
   * @prop {String} bgUrl 头部背景图片
   * @prop {Object} bgStyle 头部背景图样式
   * @prop {String} leftBtn 左侧按钮图片 默认是返回箭头图标
   * @prop {String} leftTxt 左侧文字
   * @prop {Object} leftBtnStyle 左侧按钮样式
   * @prop {Object} leftTxtStyle 左侧文字样式
   * @prop {String} titleBg 标题图片
   * @prop {String} title 标题文字
   * @prop {Object} titleBgStyle 标题图片样式
   * @prop {Object} titleStyle 标题文字样式
   * @prop {String} rightBtn1 右侧按钮图片1
   * @prop {String} rightBtn 右侧按钮图片
   * @prop {String} rightTxt 右侧文字1
   * @prop {String} rightTxt 右侧文字
   * @prop {Object} rightBtnStyle 右侧按钮样式
   * @prop {Object} rightBtnStyle1 右侧按钮1样式
   * @prop {Object} rightTxtStyle1 右侧文字样式1
   * @prop {Object} rightTxtStyle 右侧文字样式
   * @prop {Object} barStyle 头部整体样式
   * @prop {Boolean} isBack 是否允许系统返回 默认为false
   *
   *
   */
  props: {
    bgUrl: {
      type: String,
      default: ""
    },
    bgStyle: {
      type: Object,
      default: () => ({})
    },
    leftBtn: {
      type: String,
      default: ""
    },
    leftTxt: {
      type: String,
      default: ""
    },
    leftBtnStyle: {
      type: Object,
      default: () => ({})
    },
    leftTxtStyle: {
      type: Object,
      default: () => ({})
    },
    titleBg: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    titleBgStyle: {
      type: Object,
      default: () => ({})
    },
    titleStyle: {
      type: Object,
      default: () => ({})
    },
    rightBtn1:{
      type: String,
      default: ""
    },
    rightBtn: {
      type: String,
      default: ""
    },
    rightTxt: {
      type: String,
      default: ""
    },
    rightTxt1: {
      type: String,
      default: ""
    },
    rightBtnStyle1:{
      type: Object,
      default: () => ({})
    },
    rightBtnStyle: {
      type: Object,
      default: () => ({})
    },
    rightTxtStyle1:{

    },
    rightTxtStyle: {
      type: Object,
      default: () => ({})
    },
    barStyle: {
      type: Object,
      default: () => ({})
    },
    isBack: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      // ad_list: []
    };
  },
  computed: {},

  methods: {
    /**
     * @event mpBarLeftBtnClick
     * @description 点击左部区域触发事件
     * @param {Object} event  dom节点
     */
    mpBarLeftBtnClick(event) {
      if (this.isBack) {
        this.goBack();
        return;
      }
      this.$emit("mpBarLeftBtnClick", event);
    },
    /**
     * @event mpBarLeftBtn1Click
     * @description 点击左部区域触发事件
     * @param {Object} event  dom节点
    */
    mpBarRightBtn1Click(event){
      this.$emit("mpBarLeftBtn1Click", event);
    },
    /**
     * @event mpBarRightBtnClick
     * @description 点击右部区域触发事件
     * @param {Object} event  event
     */
    mpBarRightBtnClick(event) {
      this.$emit("mpBarRightBtnClick", event);
    },
    goBack() {
      navigator.pop();
    }
  }
};
</script>