<template>
  <div>
    <div class="mp-tab" :pageChange="pageChange">
      <scroller class="scroller" scroll-direction="horizontal" show-scrollbar="false" v-if="isAbleScroll">
        <div class="tab-box" :style="tabBoxStyle">
          <div class="tab-item" :ref="'mp-tab-item'+index" :style="tabItemStyle" :class="[index ==tabList.length-1  && 'no-border']" v-for="(item,index) in tabList" :key="index" @click="mpTabClick(index)">
            <text class="tab-item-txt" :style="defaultIndex==index ?tabItemTxtSelStyle:tabItemTxtStyle">{{item.title}}</text>
          </div>
        </div>
      </scroller>
      <div class="tab-box" :style="tabBoxStyle"  v-if="!isAbleScroll">
          <div class="tab-item" :ref="'mp-tab-item'+index" :style="tabItemStyle" :class="[index ==tabList.length-1  && 'no-border']" v-for="(item,index) in tabList" :key="index" @click="mpTabClick(index)">
            <text class="tab-item-txt" :style="defaultIndex==index ?tabItemTxtSelStyle:tabItemTxtStyle">{{item.title}}</text>
          </div>
        </div>
    </div>
  </div>
</template>

<style scoped>
.mp-tab {
}
.scroller {
  width: 750px;
  /* height: 100px; */
}
.tab-box {
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: center;
}
.tab-item {
  width: 150px;
  height: 90px;
  align-items: center;
  align-content: center;
  justify-content: center;
  border-right-width: 1px;
  border-right-style: solid;
  border-right-color: #eee;
}
.no-border {
  border-right-width: 0px;
}
.on {
  color: #a00;
  border-bottom-width: 4px;
  border-bottom-style: solid;
  border-bottom-color: #a00;
}
.tab-item-txt {
  /* width: 90px; */
  height: 60px;
  text-align: center;
  align-items: center;
  justify-content: center;
}
</style>
<script>
/**
 * @module tab组件
 * @description tab组件
 * @example  <mp-tab></mp-tab>
 * 例子如下:
 *  <mp-tab :tabList="tabList" :defaultIndex="defaultIndex0" @mpTabClick="mpTabClick0" :isAutoOffset="true"></mp-tab>
 *  
 *  tabList: [
        { title: "全部" },
        { title: "推荐" },
        { title: "视频" },
        { title: "热点" },
        { title: "北京" },
        { title: "新时代" },
        { title: "娱乐" }
      ],
    defaultIndex0:0,
    mpTabClick0(index){
      console.log("点击了"+index)
      this.defaultIndex0=index;
    },
 */
import MpSlider from "../mp-slider";
const dom = weex.requireModule("dom");
export default {
  components: { MpSlider },
  /**
   * Props 组件接收属性
   * @prop {Object} tabBoxStyle 整个tab样式
   * @prop {Object} tabItemStyle tab每一项样式
   * @prop {Object} tabItemTxtStyle 文字样式
   * @prop {Object} tabItemTxtSelStyle 选中文字样式
   * @prop {Array}  tabList tab的json数据
   * @prop {Object} defaultIndex 默认选中第几项
   * @prop {Boolean} isAutoOffset tab标签是否自动切换位移 默认true
   *@prop {Boolean} isAbleScroll 是否允许滑动 默认true
   *
   *
   */
  props: {
    tabBoxStyle: {
      type: Object,
      default: () => ({})
    },
    tabItemStyle: {
      type: Object,
      default: () => ({})
    },
    tabItemTxtStyle: {
      type: Object,
      default: () => ({})
    },
    tabItemTxtSelStyle: {
      type: Object,
      default: () => ({
        color: "#a00",
        "border-bottom-width": "4px",
        "border-bottom-style": "solid",
        "border-bottom-color": "#a00"
      })
    },
    tabList: {
      type: Array,
      default: () => []
    },
    defaultIndex: {
      type: Number,
      default: -1
    },
    isAutoOffset: {
      type: Boolean,
      default: false
    },
    isAbleScroll: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {};
  },
  computed: {
    pageChange() {
      if (this.defaultIndex >= 0) {
        if (this.isAutoOffset) {
          this.itemChanged(this.defaultIndex);
        }
      }
      return this.defaultIndex;
    }
  },

  methods: {
    /**
     * @event mpTabClick
     * @description 点击tab触发事件
     */
    mpTabClick(index) {
      // this.defaultIndex=index;
      this.$emit("mpTabClick", index);
    },
    itemChanged(index) {
      let itemIndex;
      let el;
      let offsets;
      if (index == 0) {
        itemIndex = 0;
        el = this.$refs[`mp-tab-item${itemIndex}`];
        if (!el) {
          return;
        }
        offsets = 0;
      } else {
        itemIndex = index - 1;
        el = this.$refs[`mp-tab-item${itemIndex}`];
        if (!el) {
          return;
        }
        offsets = el[0].offsetWidth;
      }
      dom.scrollToElement(el[0], {
        offset: offsets,
        animated: true
      });
    }
  }
};
</script>