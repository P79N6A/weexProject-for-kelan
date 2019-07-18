<template>
  <div ref="shadowing" class="shadowing" :style="shadowStyle" @click="mpShadowClick"  v-if="shadowFlag">
  </div>
</template>
<style scoped>
.shadowing {
  width: 750px;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 10;
}
</style>
<script>
const modal = weex.requireModule("modal");
const animation = weex.requireModule("animation");
export default {
  /**
   * @module 蒙版组件
   * @description 蒙版组件
   * @example  <mp-shadow></mp-shadow>
   * 例子如下:
   *
   **/
  components: {},
  /**
   * Props 组件接收属性
   * @prop {Boolean} show 显示隐藏蒙版
   * @prop {Boolean} isAbleClose 是否可以手动关闭蒙版
   * @prop {String} opacity 透明度
   */
  props: {
    show: {
      type: Boolean,
      default: true
    },
    isAbleClose: {
      type: Boolean,
      default: false
    },
    opacity: {
      type: String,
      default: "0.2"
    }
  },
  data() {
    return {};
  },
  computed: {
    shadowFlag() {
      setTimeout(() => {
        if(this.show){
          this.mpShadowAnimate(this.show);
        }
      }, 50);

      return this.show;
    },
    shadowStyle() {
      return {
        opacity: 0,
        backgroundColor: "rgba(0, 0, 0, "+this.opacity+")"
      };
    }
  },
  methods: {
    /**
     * @event mpShadowClick
     * @description 点击蒙版触发事件
     */
    mpShadowClick() {
      if (this.isAbleClose) {
        //允许手动关闭
        this.mpShadowAnimate(false);
      } else {
        //不允许手动关闭
        this.$emit("mpShadowClick");
      }
    },
    mpShadowAnimate(flag) {
      animation.transition(
        this.$refs["shadowing"],
        {
          styles: {
            opacity: flag ? 1 : 0
          },
          duration: 300,
          timingFunction: "ease-out",
          delay: 0
        },
        () => {
          // this.$emit("mpShadowClick");
        }
      );
    }
  }
};
</script>

