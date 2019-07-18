<template>
	<div class="matte" :style="{'height':main_height}" :class="[show?'main-show':'main-hide']">
		<mp-shadow :show="show"></mp-shadow>
		<div class="spinner2" ref="one" :style="dotStyle">
			<div class="dot1" ref="two" :style="dotItemStyle"></div>
			<div class="dot2" ref="three" :style="dotItemStyle"></div>
		</div>
		<div class="loading-text">
			Loading&nbsp;.&nbsp;.&nbsp;.&nbsp;请稍等&nbsp;.&nbsp;.&nbsp;.
		</div>
	</div>
</template>

<script>
/**
 * @module loading组件
 * @description loading组件
 * @example  <mp-slider></mp-slider>
 * 例子如下:
 * <mp-mask :show="show"></mp-mask>
 * 
 */
const animation = weex.requireModule("animation");
const modal = weex.requireModule("modal");
import MpShadow from "../mp-shadow";
export default {
  components: { MpShadow },
  /**
   * Props 组件接收属性
   * @prop {Boolean} show 显示遮罩
   * @prop {Object} dotStyle 遮罩大小
   * @prop {Object} dotItemStyle 遮罩里面球的大小
   * 
   */
  props: {
    show: {
      type: Boolean,
      default: true
    },
    dotStyle: {
      type: Object,
      default: () => ({})
    },
    dotItemStyle: {
      type: Object,
      default: () => ({})
    },
  },
  data() {
    return {
      current_rotate: 0,
      scall2: 1,
      scall3: 0
    };
  },
  methods: {
    loading() {
      var self = this;
      self.current_rotate += 90;
      animation.transition(
        self.$refs.one,
        {
          styles: {
            transform: "rotate(" + self.current_rotate + "deg)"
          },
          duration: 250,
          timingFunction: "linear",
          needLayout: false,
          delay: 0
        },
        ()=> {
          if (this.show == true) {
            self.loading();
          }
        }
      );
    },
    loading2() {
      var self = this;
      if (self.scall2 == 0) {
        self.scall2 = 1;
      } else {
        self.scall2 = 0;
      }
      animation.transition(
        self.$refs.two,
        {
          styles: {
            transform: "scale(" + self.scall2 + ")"
          },
          duration: 375,
          timingFunction: "ease-in-out",
          needLayout: false,
          delay: 0
        },
        () =>{
          if (this.show == true) {
            self.loading2();
          }
        }
      );
    },
    loading3() {
      var self = this;
      if (self.scall3 == 0) {
        self.scall3 = 1;
      } else {
        self.scall3 = 0;
      }
      animation.transition(
        self.$refs.three,
        {
          styles: {
            transform: "scale(" + self.scall3 + ")"
          },
          duration: 375,
          timingFunction: "ease-in-out",
          needLayout: false,
          delay: 0
        },
        ()=> {
          if (this.show == true) {
            self.loading3();
          }
        }
      );
    }
  },
  computed: {
    main_height: function() {
      var height =
		750 / weex.config.env.deviceWidth * weex.config.env.deviceHeight - 100;
      return height;
    }
  },
  watch: {
    show: function(val) {
      if (val == true) {
        this.loading();
        this.loading2();
        this.loading3();
      }
    }
  }
};
</script>

<style scoped>
.matte {
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  bottom: 0;
  /*width: 750px;*/
  /*height: 1000px;*/
  justify-content: center;
  align-items: center;
}

.matte-main {
  width: 140px;
  height: 140px;
  position: relative;
}

.matte-bg {
  width: 140px;
  height: 140px;
  position: absolute;
}

.matte-cr {
  width: 100px;
  height: 100px;
  position: absolute;
  top: 20px;
  left: 20px;
}

.matte-logo {
  width: 50px;
  height: 50px;
  position: absolute;
  top: 45px;
  left: 45px;
}

.main-show {
  visibility: visible;
  /* display: block; */
}

.main-hide {
  visibility: hidden;
  /* display: none; */
}

.loading_text {
  text-align: center;
  line-height: 40px;
  color: #d2d2d2;
}

.spinner2 {
  /*margin: 0px auto;*/
  width: 90px;
  height: 90px;
  position: relative;
  border: 1px solid #000000;
  z-index: 10;
}

.dot1 {
  background-color: #f43223;
}

.dot2 {
  background-color: #ebeb0f;
}

.dot1,
.dot2 {
  width: 50%;
  height: 50%;
  display: inline-block;
  position: absolute;
  /*top: 0;*/
  border-radius: 100%;
}

.dot2 {
  top: auto;
  bottom: 0px;
  /*-webkit-animation-delay: -1.0s;
  animation-delay: -1.0s;*/
}
</style>