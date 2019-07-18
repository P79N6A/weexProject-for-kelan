<template>
  <div class="cell row" :style="cellStyle" @click="mpCellClick" :class="[ hasTopBorder && 'cell-top-border',hasBottomBorder && 'cell-bottom-border']">
    <slot name="left">
      <div class="row-left" :style="leftStyle" @click="mpCellLeftClick">
        <image class="arrow" v-if="leftIcon=='null'" :style="leftIconStyle" />
        <image class="arrow" v-if="leftIcon && leftIcon!='null'" :src="leftIcon" :style="leftIconStyle" />
        <text class="title" :style="leftTitleStyle">{{leftTxt}}</text>
      </div>
    </slot>
    <slot name="right">
      <div class="row-right" :style="rightStyle" @click="mpCellRightClick">
        <text class="title" :style="titleStyle" v-if="title">{{title}}</text>
      </div>
    </slot>
    <slot name="btn">
      <div class="row-btn" :style="btnStyle" @click="mpCellBtnClick">
        <text class="content" v-if="btnTxt" :style="btnTxtStyle">{{btnTxt}}</text>
        <image class="arrow" v-if="arrowIcon=='null'" :style="btnIconStyle" />
        <image class="arrow" v-if="arrowIcon && arrowIcon!='null'" :src="arrowIcon" :style="btnIconStyle" />
      </div>
    </slot>
  </div>
</template>

<style scoped>
.cell {
  width: 750px;
}
.row {
  height: 120px;
  width: 750px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  padding-left: 20px;
  padding-right: 43px;
}
.m-btm0 {
  margin-bottom: 0px;
}
.title {
  font-size: 28px;
  color: #404561;
}
.row-left {
  width: 188px;
  margin-right: 10px;
  align-items: center;
  flex-direction: row;
}
.row-right {
  flex: 1;
  flex-direction: row;
}
.row-btn {
  align-items: center;
  flex-direction: row;
  height: 100%;
}
.content {
  margin-right: 27px;
  font-size: 28px;
  color: #b0b0b0;
}
.arrow {
  width: 26px;
  height: 26px;
  margin-right: 10px;
}
.cell-top-border {
  border-top-color: #e2e2e2;
  border-top-width: 1px;
}

.cell-bottom-border {
  border-bottom-color: #e2e2e2;
  border-bottom-width: 1px;
}
</style>
<script>
/**
 * @module 单元格组件
 * @description 单元格组件
 * @example  <mp-cell ></mp-cell>
 * 例子如下:
 * <mp-cell leftTxt="标题" hasTopBorder="1" hasBottomBorder="1"></mp-cell>
 *
 * slot插槽
 * left:编辑左侧内容
 * right:编辑中间内容
 * btn:编辑右侧内容
 */

export default {
  /**
   * Props 组件接收属性
   * @prop {Object} cellStyle 单元格整体样式
   * 
   * @prop {String} leftIcon 左侧图标 leftIcon='null'会空出图标的位置
   * @prop {Object} leftStyle 单元格左部整体样式
   * @prop {Object} leftTitleStyle 单元格左部文字样式
   * @prop {Object} leftIconStyle 单元格左侧图片样式
   * 
   * @prop {Object} rightStyle 单元格标题部整体样式
   * @prop {Object} titleStyle 单元格标题文字样式
   * 
   * @prop {Object} btnStyle 单元格右部整体样式
   * @prop {Object} btnTxtStyle 单元格右侧文字样式
   * @prop {Object} btnIconStyle 单元格右侧图片样式
   * @prop {String} arrowIcon 右侧图标 arrowIcon='null'会空出图标的位置
   * 
   * 
   * @prop {String} leftTxt 左侧标题内容
   * @prop {String} title 标题文字内容
   * @prop {String} btnTxt 右侧按钮文字内容
   * 
   * @prop {String} hasTopBorder 是否有顶部边框 默认空字符串是无边框
   * @prop {String} hasBottomBorder 是否有底部边框 默认空字符串是无边框

   * 
   */
  props: {
    cellStyle: {
      type: Object,
      default: () => ({})
    },
    leftStyle: {
      type: Object,
      default: () => ({})
    },
    leftTitleStyle: {
      type: Object,
      default: () => ({})
    },
    rightStyle: {
      type: Object,
      default: () => ({})
    },
    titleStyle: {
      type: Object,
      default: () => ({})
    },
    btnStyle: {
      type: Object,
      default: () => ({})
    },
    btnIconStyle: {
      type: Object,
      default: () => ({})
    },
    leftIconStyle: {
      type: Object,
      default: () => ({})
    },
    btnTxtStyle: {
      type: Object,
      default: () => ({})
    },
    leftIcon: {
      type: String,
      default: ""
    },
    arrowIcon: {
      type: String,
      default: ""
    },
    leftTxt: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    btnTxt: {
      type: String,
      default: ""
    },
    hasTopBorder: {
      type: String,
      default: ""
    },
    hasBottomBorder: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    /**
     * @event mpCellClick
     * @description 点击单元格触发事件
     */
    mpCellClick() {
      this.$emit("mpCellClick");
    },
    /**
     * @event mpCellLeftClick
     * @description 点击左侧部分触发事件
     */
    mpCellLeftClick() {
      // this.$emit("mpCellClick");
      this.$emit("mpCellLeftClick");
    },
    /**
     * @event mpCellRightClick
     * @description 点击中间部分触发事件
     */
    mpCellRightClick() {
      // this.$emit("mpCellClick");
      this.$emit("mpCellRightClick");
    },
    /**
     * @event mpCellBtnClick
     * @description 点击最右侧触发事件
     */
    mpCellBtnClick() {
      // this.$emit("mpCellClick");
      this.$emit("mpCellBtnClick");
    }
  }
};
</script>