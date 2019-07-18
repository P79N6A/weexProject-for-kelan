<template>
  <div class="mp-dialog">
      <mp-shadow v-if="show" opacity="0.2"></mp-shadow>
    <div class="dialog-box" :style="{top:top+'px'}" v-if="show">
      <div>
        <slot name="title">
          <text class="dialog-title">{{title}}</text>
        </slot>
      </div>
      <div>
        <slot name="content">
          <text class="dialog-content" v-if="type!='prompt'">{{message}}</text>
          <!-- <input type="text" class="dialog-input" v-modal="dialogInput" @input="inputEvent" placeholder="请输入" v-if="type=='prompt'"/> -->
          <mp-input type="text" vModel="dialogInput" :defaultValue="dialogInput" @mpInputChange="mpInputChange" :closeIcon="closeIcon" :inputStyle="inputStyle" placeholder="请输入" v-if="type=='prompt'"></mp-input>
        </slot>
      </div>
      
      <div class="dialog-btn">
        <slot name="btn">
        <text class="btn-left" :class="[(type=='confirm'|| type=='prompt')&&'border-r']" @click="leftClick" v-if="type=='alert' || type=='confirm'|| type=='prompt'">{{leftBtn}}</text>
        <text class="btn-right" @click="rightClick" v-if="type=='confirm'|| type=='prompt'">{{rightBtn}}</text>
        </slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dialog-box {
  position: fixed;
  left: 96px;
  width: 558px;
  background-color: #ffffff;
  border-radius: 6px;
  box-shadow: 10px 10px 10px #999;
  z-index: 12;
}
.dialog-title {
  color: #000;
  font-size: 36px;
  text-align: center;
  margin-top: 24px;
  margin-bottom: 24px;
}
.dialog-content {
  padding-left:26px;
  padding-right:26px;
  padding-top:10px;
  padding-bottom:16px;
}
.dialog-input{
  width: 500px;
  height:90px;
  padding-left:26px;
  padding-right:26px;
  padding-top:10px;
  padding-bottom:16px;
}
.dialog-btn {
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: center;
  border-style: solid;
  border-top: #eee;
  border-top-width:1px; 
}
.btn-left {
  flex: 1;
  padding-top:20px;
  padding-bottom:20px;
  text-align: center;
  align-items: center;
  align-content: center;
  justify-content: center;
}
.btn-left:active{
  background-color: rgba(0,0,0,.1);
}
.btn-right {
  flex: 1;
 padding-top:20px;
  padding-bottom:20px;
  text-align: center;
  align-items: center;
  align-content: center;
  justify-content: center;
}
.btn-right:active{
  background-color: rgba(0,0,0,.1);
}
.border-r{
  border-style: solid;
  border-right: #eee;
  border-right-width:1px; 
}
</style>
<script>
/**
 * @module 对话框组件
 * @description 对话框组件
 * @example  <mp-dialog></mp-dialog>
 * 例子如下:
 * <mp-dialog :show="show" @mpDialogLeftClick="mpDialogLeftClick" @mpDialogRightClick="mpDialogRightClick"
            :type="type"
            :title="title"
            :message="message"
            :leftBtn="leftBtn"
            :rightBtn="rightBtn"
             ></mp-dialog>
 * 
 * slot插槽
 * title:头部内容
 * content:中部内容
 * btn:按钮内容
 */
const animation = weex.requireModule("animation");
const modal = weex.requireModule("modal");
import MpShadow from "../mp-shadow";
import MpInput from "../mp-input";
export default {
  components: { MpShadow,MpInput },
  /**
   * Props 组件接收属性
   * @prop {Boolean} show 是否显示对话框
   * @prop {String} type 对话框类型 alert confirm prompt
   * @prop {String} title 标题
   * @prop {String} message 内容
   * @prop {String} leftBtn 左侧按钮名称
   * @prop {String} rightBtn 右侧按钮名称
   * @prop {String} top 对话框距离顶部距离
   * 
   */
  props: {
    show: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "alert"
    },
    title: {
      type: String,
      default: "提示"
    },
    message: {
      type: String,
      default: "我是一条消息"
    },
    leftBtn: {
      type: String,
      default: "确认"
    },
    rightBtn: {
      type: String,
      default: "取消"
    },
    top: {
      type: String,
      default: "450"
    }
  },
  data() {
    return {
      // top:"450",
      dialogInput:"",
      inputStyle:{"margin-left":"10px","width":"500px"},
      closeIcon:"imgs/close.png",
    };
  },
  methods: {
    inputEvent(event){
      this.dialogInput=event.value
    },
    leftClick(){
      // if(this.type=="prompt"){
      //   modal.alert({message:"输入框不能为空"})
      // }
      this.$emit("mpDialogLeftClick",this.dialogInput)
    },
    rightClick(){
      this.$emit("mpDialogRightClick",this.dialogInput)
    },
    //获取输入框值
    mpInputChange(model,value){
      this[model]=value;
    },
  },
  computed: {
    main_height: function() {
      var height =
        750 / weex.config.env.deviceWidth * weex.config.env.deviceHeight - 100;
      return height;
    }
  }
};
</script>
