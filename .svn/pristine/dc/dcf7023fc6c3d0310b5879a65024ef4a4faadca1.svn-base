<template>
  <div class="mpInput">
    <input class="mpInput-txt" :style="inputStyle"  :type="type" :value="inputValue"  :placeholder="placeholder" @input="mpInputChange" @focus="inputFocus" @blur="inputBlur" />
    <div class="mpInput-close" @click="clearAll">
      <image class="mpInput-img" :style="closeStyle" :class="[!closeFlag?'close':'',closeClass]" :src="closeIcon"  v-if="hasCloseBtn" @click="clearAll"/>
    </div>
  </div>
</template>

<style scoped>
.mpInput {
  flex-direction: row;
  align-items: center;
}
.mpInput-txt {
  width: 750px;
  height: 60px;
  padding-right: 80px;
}
.mpInput-close{
  position: relative;
  width: 60px;
  height: 60px;
  right: 80px;
  align-items: center;
  justify-content: center;
}
.mpInput-img {
  
  width: 34px;
  height: 34px;
  visibility: visible;
}
.close {
  visibility: hidden;
}
</style>
<script>
/**
 * @module 输入组件
 * @description 输入组件
 * @example  <mp-input></mp-input>
 * 例子如下:
 *  <mp-input type="text" vModel="test" @mpInputChange="mpInputChange"></mp-input>
 *
 */
const modal = weex.requireModule("modal");
export default {
  /**
   * Props 组件接收属性
   * @prop {String} type 输入框的类型 默认为text
   * @prop {String} vModel 输入框的v-model值
   * @prop {String} defaultValue 输入框的默认值
   * @prop {String} placeholder 输入框的placeholder值
   * @prop {String} closeIcon 输入框的清空按钮
   * @prop {Boolean} hasCloseBtn 是否有清空按钮 默认 true

   * @prop {String} closeClass 清空按钮样式名称
   * @prop {Object} inputStyle 输入框样式
   * @prop {Object} closeStyle 清空按钮样式
   */
  props: {
    type: {
      type: String,
      default: "text"
    },
    vModel: {
      type: String,
      default: ""
    },
    defaultValue:{
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: "请输入"
    },
    closeIcon: {
      type: String,
      default: ""
    },
    hasCloseBtn: {
      type: Boolean,
      default: true
    },

    closeClass: {
      type: String,
      default: ""
    },
    inputStyle: {
      type: Object,
      default: () => ({})
    },
    closeStyle: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      inputModel:"",
      closeFlag: false
    };
  },
  computed: {
    inputValue(){
      return this.defaultValue;
    }
  },
 watch:{

 },
  methods: {
    /**
     * @event mpInputChange
     * @description 输入框内容改变触发事件
     * @param {String} vModel 输入框的model名称
     * @param {String} value 输入框输入值
     */
    mpInputChange(event) {
      this.closeFlag = event.value != "" ? true : false;
      this.inputModel=event.value;
      this.$emit("mpInputChange", this.vModel, event.value);
    },
    inputFocus(event) {
      this.closeFlag = event.value != "" ? true : false;
    },
    inputBlur() {
      this.closeFlag = false;
    },
    clearAll() {
      this.inputModel = "";
      this.closeFlag = false;
      this.$emit("mpInputChange", this.vModel, "");
    }
  }
};
</script>