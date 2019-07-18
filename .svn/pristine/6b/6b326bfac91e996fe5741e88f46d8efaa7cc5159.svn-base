<template>
  <div class="lamp">
    <image class="lamp-image" :src="lampImg" :style="lampImgStyle" />
    <div class="lamp-marquee">
      <div :class="[type=='row'&&'lamp-marquee-r',type=='cols'&&'lamp-marquee-c']" ref="lamp" :lamp_list="lamp_list">
        <div v-for="(item,key1) in lampList" :key="key1+'-1'" @click="mpLampItemClick(item)">
          <text class="lamp-title">{{item.title}}</text>
        </div>
        <div v-for="(item,key2) in lampList" :key="key2+'-2'" @click="mpLampItemClick(item)">
          <text class="lamp-title">{{item.title}}</text>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.lamp {
  padding-left: 20px;
  padding-right: 20px;
  height: 80px;
  line-height: 80px;
  flex-direction: row;
  align-items: center;
  background-color: #ffffff;
  /*margin-bottom: 15px;*/
}
.lamp-image {
  width: 150px;
  height: 30px;
}
.lamp-marquee {
  width: 750px;
  height: 50px;
  margin-left: 30px;
  overflow: hidden;
}
.lamp-marquee-c {
  /* height: 300px; */
  /* position: absolute; */
  flex-direction: column;
}
.lamp-marquee-r{
  flex-direction: row;
}
.lamp-title {
  width: 750px;
  height: 50px;
  line-height: 50px;
  text-overflow: ellipsis;
  font-size: 28px;
  color: #404561;
}
</style>

<script>
/**
 * @module 跑马灯组件
 * @description 跑马灯weex组件
 * @example  <mp-lamp jsonurl="json/notice.json"></mp-lamp>   
 * notice.json数据格式如下:
 * {
    "data": [{
            "title": "手机银行成功上线",
            "url": "http://www.hxb.com.cn",
            "key":"手机银行成功上线,shoujiyinhangchenggongshangxian"
        },
        {
            "title": "唐山银行POC正式启动",
            "url": "http://www.hxb.com.cn",
            "key":"唐山银行POC正式启动,tangshanyinhangpoczhengshiqidong"
        }, {
            "title": "科蓝公司收购某数据库公司",
            "url": "http://www.hxb.com.cn",
            "key":"科蓝公司收购某数据库公司,kelangongsishougoumoushujukugongsi"
        }
    ]
}
 * 
 */
const stream = weex.requireModule("stream");
const context = weex.requireModule("context");
const animation = weex.requireModule("animation");

export default {
  /**
   * Props 接受父组件的传值
   * @prop {String} jsonurl 跑马灯组件的json文件路径
   * @prop {String} type 跑马灯类型 row cols 默认是cols
   * @prop {String} stoping 跑马灯完成一次停顿时间 默认是 3000
   * @prop {String} duration 跑马灯完成一次需要时间 默认是 1000
   * @prop {String} lampImg 跑马灯左部图片
   * @prop {String} lampImgStyle 跑马灯左部图片样式
   */
  props: {
    jsonUrl: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "row"
    },
    duration: {
      type: String,
      default: "1000"
    },
    stoping: {
      type: String,
      default: "3000"
    },
    lampImg:{
      type: String,
      default: "./componentsImg/black@3x.png"
    },
    lampImgStyle:{
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      lampList: [], //跑马灯数据
      lampLength: null, //跑马灯条数
      step:0,//当前所在第几条
      timer: null,
    };
  },
  computed: {
    lamp_list() {
      if (this.jsonUrl) {
        this.getJsonData();
      }
      return [];
    }
  },
  methods: {
    //获取轮播json数据
    getJsonData(callback) {
      stream.fetch(
        {
          method: "GET",
          url: this.jsonUrl,
          type: "json"
        },
        res => {
          this.lampList = res.data.data;
          this.lampLength = this.lampList.length;
          this.step=0;
          this.loading();
        }
      );
    },

    loading() {
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.step++;
        this.animateTranstion(this.step);
        
      }, this.stoping);
    },
    animateTranstion(step,duration=this.duration) {
      animation.transition(
        this.$refs["lamp"],
        {
          styles: {
            transform: this.transformStyle(step)
          },
          duration: duration,
          timingFunction: "ease-out",
          delay: 0
        },
        () => {
          if(this.step==this.lampLength){
            this.step=0;
            this.animateTranstion(this.step,0);
          }
          this.loading()
        }
      );
    },
    transformStyle(range) {
      let style="";
      if(this.type=="row"){
        style = "translateX(-" + 750 * range + "px)";
      }else if(this.type=="cols"){
        style = "translateY(-" + 50 * range + "px)";
      }
      return style;
    },
    /**
     * @event mpLampItemClick
     * @description 跑马灯点击触发事件
     * @param {Object} item  item是当前所选列表数据
     */
    mpLampItemClick(item){
      this.$emit("mpLampItemClick", item);
    }
  }
};
</script>
