<template>
  <div>
    <div @touchend="touchendAction">
      <mp-shadow v-if="showAnimate" opacity="0.2" @mpShadowClick="mpPopupClick"></mp-shadow>
    </div>
    <div class="mp-popup" ref="popup" :style="popupStyle" v-if="showAnimate" >
      <slot>
        <div class="mp-content-r" v-if="type=='top'">
        <text>top1</text>
        </div>
        <div class="mp-content-c" :style="{'height':getHeight+'px'}" v-if="type=='left'">
        <text>left1</text>
        </div>
        <div class="mp-content-c" :style="{'height':getHeight+'px'}" v-if="type=='right'">
        <text>right</text>
        </div>
        <div class="mp-content-r" v-if="type=='bottom'">
        <text>bottom</text>
        </div>
      </slot>
    </div>
    
  </div>
</template>
<style scoped>
.mp-popup {
  position: fixed;
  background-color: #eee;
  z-index:11;
}
.mp-content-r{
  width: 750px;
  height:150px;
  background-color: #eee;
}
.mp-content-c{
  width: 250px;
  height:150px;
  background-color: #eee;
}
</style>
<script>
/**
   * @module 弹出框组件
   * @description 弹出框组件
   * @example  <mp-popup></mp-popup>
   * 例子如下:
   * <mp-popup :show="isShowTop" type="top" @mpPopupClick="mpPopupTopClick"></mp-popup>
   */
const modal = weex.requireModule("modal");
const animation = weex.requireModule("animation");
import MpShadow from "../mp-shadow";
export default {
  
  /**
   * Props 组件接收属性
   * @prop {Boolean} show 显示隐藏弹出框
   * @prop {String} type 弹出框方向 top bottom left right
   * @prop {Number} height 弹出框高度 默认150
   * @prop {Number} width 弹出框宽度 默认250
   * 
   */
  components: { MpShadow },
  
  props: {
    show: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "top"
    },
    height: {
      type:[Number,String],
      default: -1
    },
    width: {
      type: [Number,String],
      default: -1
    },
    
  },
  data() {
    return {
      once:true,
      shadowStyle:{},
    };
  },
  computed: {
    showAnimate() {
        setTimeout(() => {
          this.mpPopupAnimate(this.show);
        }, 50);
      return this.show;
    },
    getHeight() {
      let clientHeight=750/weex.config.env.deviceWidth*weex.config.env.deviceHeight
      return clientHeight;
    },
    popupStyle() {
      let clientHeight=weex.config.env.deviceHeight
      let clientWidth=weex.config.env.deviceWidth
      let height=this.height;
      let width=this.width;
      if(width==-1){
        width=250;
      }
      if(height==-1){
        height=150;
      }
      let style = {
        width:width+"px",
        height:height+"px"
      };
      if (this.type == "top") {
        style.top=-height+"px"
        // style.width=width+"px"
        style.height=height+"px"
      } else if (this.type == "bottom") {
        style.bottom=-height+"px"
        style.height=height+"px"
      } else if (this.type == "left") {
        style.left=-width+"px"
        style.top="0px"
      } else if (this.type == "right") {
        style.right=-width+"px"
        style.top="0px"
      } else {
      }
      return style;
    }
  },
  methods: {
    
    touchendAction() {
      
    },
    /**
     * @event mpPopupClick
     * @description 点击弹出蒙版触发事件
     */
    mpPopupClick() {
      this.mpPopupAnimate(false);
      this.$emit("mpPopupClick");
    },
    mpPopupAnimate(flag,durationTime=300) {
      if(!this.$refs["popup"]){
        return;
      }
      animation.transition(
        this.$refs["popup"],
        {
          styles: {
            transform: this.transformStyle(flag)
          },
          duration: durationTime,
          timingFunction: "ease-out",
          delay: 0
        },
        () => {}
      );
    },
    transformStyle(flag){
      let clientHeight=weex.config.env.deviceHeight
      let clientWidth=weex.config.env.deviceWidth
      let height=this.height;
      let width=this.width;
      let style="translateY(0px)"
      // if(width==-1){
      //   width=250;
      // }
      // if(height==-1){
      //   height=150;
      // }
      if (this.type == "top") {
        if(flag){
          style="translateY("+height+"px)"
          this.shadowStyle={top:height+"px"}
        }else{
          style="translateY(0px)"
          this.shadowStyle={top:"0px"}
        }
      } else if (this.type == "bottom") {
        if(flag){
          style="translateY(-"+height+"px)"
          this.shadowStyle={bottom:height+"px"}
        }else{
          style="translateY(0px)"
          this.shadowStyle={bottom:"0px"}
        }
      } else if (this.type == "left") {
        if(flag){
          style="translateX("+width+"px)"
          this.shadowStyle={left:width+"px"}
        }else{
          style="translateX(0px)"
          this.shadowStyle={left:"0px"}
        }
      } else if (this.type == "right") {
        if(flag){
          style="translateX(-"+width+"px)"
          this.shadowStyle={left:-width+"px"}
        }else{
          style="translateX(0px)"
          this.shadowStyle={right:"0px"}
        }
      } else {
      }
      return style
    }
  }
};
</script>

