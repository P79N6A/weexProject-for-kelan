<template>
  <div class="mp-button" :class="[btnClass]" :style="btnStyle" @click="mpButtonClick">
    <text class="button-txt" :style="btnTxtStyle">{{title}}</text>
  </div>
</template>

<style scoped>
.mp-button{
    width: 700px;
    height: 88px;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
}
.button-txt{
    text-overflow: ellipsis;
    font-size: 36px;
    color: #fff;
}
</style>
<script>
/**
 * @module 按钮组件
 * @description 按钮组件
 * @example  <mp-button></mp-button>
 * 例子如下:
 *  <mp-button title="按钮"></mp-button>
 *
 */
export default {
  /**
   * Props 组件接收属性
   * @prop {Object} btnStyle 按钮文字样式
   * @prop {Object} btnTxtStyle 按钮整体样式
   * @prop {String} btnClass 按钮名称
   * @prop {String} title 按钮名称
   * 
   *
   *
   */
  props: {
    btnStyle: {
      type: Object,
      default: () => ({"background-color":"#a00"})
    },
    btnTxtStyle: {
      type: Object,
      default: () => ({})
    },
    btnClass: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
  },
  data() {
    return {
    };
  },
  computed: {},

  methods: {
    /**
     * @event mpButtonClick
     * @description 点击按钮触发事件
     */
    mpButtonClick() {
      this.$emit("mpButtonClick");
    }
  }
};
</script>