<template>
  <div class="container" @click="getItemClick">
    <div class="ad_area" :style="adStyle" v-if="sortFlag">
      <slot name="content">
        <div class="text_area">
          <text class="face_text">{{paramsData.title}}</text>
          <text class="hua_text">{{paramsData.short}}</text>
          <text class="hours">{{paramsData.time}}</text>
        </div>
      </slot>
      <slot name="img">
        <image class="ad" :src="adImg" />
      </slot>
    </div>
    <div class="ad_area" :style="adStyle" v-if="!sortFlag">
      <slot name="img">
        <image class="ad" :src="adImg" />
      </slot>
      <slot name="content">
        <div class="text_area">
          <text class="face_text">{{paramsData.title}}</text>
          <text class="hua_text">{{paramsData.short}}</text>
          <text class="hours">{{paramsData.time}}</text>
        </div>
      </slot>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 750px;
}
.ad_area {
  background-color: #ffffff;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  height: 200px;
  border-bottom-color: #eeeeee;
  border-bottom-width: 1px;
}

.text_area {
  width: 450px;
  margin-right: 50px;
}

.face_text {
  font-size: 28px;
  color: #404561;
}

.hua_text {
  margin-top: 20px;
  font-size: 26px;
  color: #848996;
}

.hours {
  margin-top: 20px;
  color: #a6aeb4;
  font-size: 26px;
}

.ad {
  width: 200px;
  height: 140px;
  border-radius: 5px;
}
</style>
<script>
/**
 * @module 广告模板组件
 * @description 广告模板组件
 * @example  <mp-notice></mp-notice>
 * 例子如下:
 * <mp-notice :adImg="adImg" :paramsData="paramsData[0]" :sortFlag="sortFlag">

    </mp-notice>
    <style scoped>
.text_area {
  width: 450px;
  margin-left: 50px;
}

.face_text {
  font-size: 28px;
  color: #404561;
}

.hua_text {
  margin-top: 20px;
  font-size: 26px;
  color: #848996;
}

.hours {
  margin-top: 20px;
  color: #a6aeb4;
  font-size: 26px;
}
</style>
slot插槽：
  content：广告具体内容包括（标题，内容，时间）
  img：广告图片

 * 
 */

export default {
  /**
   * Props 组件接收属性
   * @prop {String} adImg 广告图片路径
   * @prop {Boolean} sortFlag 图片与文字顺序,默认true:左文右图,false:左图右文
   * @prop {String} adStyle 广告图片路径
   * @prop {Object} paramsData 广告json数据
   *
   */
  props: {
    adImg: {
      type: String,
      default: ""
    },
    sortFlag: {
      type: Boolean,
      default: true
    },
    adStyle: {
      type: Object,
      default: () => ({})
    },
    paramsData: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    /**
     * @event getItemClick
     * @description 点击广告触发事件
     */
    getItemClick() {
      this.$emit("getItemClick");
    }
  }
};
</script>