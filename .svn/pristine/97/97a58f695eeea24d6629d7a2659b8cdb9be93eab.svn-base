<template>

  <osc-tabbar :unselectedColor="unSelColor" :selectedColor="selColor" :tabItems="tab_list" @mpFooterClick="mpFooterClick" />

</template>

<style scoped>
</style>
<script>
/**
 * @module 底部导航组件
 * @description 底部导航组件
 * @example  <mp-footer></mp-footer>
 * 例子如下:
 * <mp-footer jsonUrl="json/tab.json" @mpFooterClick="mpFooterClick"></mp-footer>
 * <mp-footer :tabItems="tabItems" @mpFooterClick="mpFooterClick"></mp-footer>
 * tabItems json数据如下：
 * [{
                "title": "首页", 
                "image": "imgs/home_nor.png",
                "selectedImage": "imgs/home_sel.png",
                "src": "index.weex.js?Page=Tab_home",
                "visibility": "visible"
            },
            {
                "title": "理财",
                "image": "imgs/wealth_nor.png",
                "selectedImage": "imgs/wealth_sel.png",
                "src": "index.weex.js?Page=Tab_finance",
                "visibility": "hidden"
            },
            {
                "title": "生活",
                "image": "imgs/life_nor.png",
                "selectedImage": "imgs/life_sel.png",
                "src": "index.weex.js?Page=Tab_life",
                "visibility": "hidden"
            },
            {
                "title": "我的",
                "image": "imgs/user_nor.png",
                "selectedImage": "imgs/user_sel.png",
                "src": "index.weex.js?Page=Tab_user",
                "visibility": "hidden"
            }
        ]
 * 
 */
const stream = weex.requireModule("stream");
import oscTabbar from "./tabbar.vue";
export default {
  components: { oscTabbar },
  /**
   * Props 组件接收属性
   * @prop {String} jsonUrl 底部导航的json路径(与tabItems不能共同使用)
   * @prop {String} unselectedColor 未选中颜色
   * @prop {String} selectedColor  选中颜色
   * @prop {String} tabItems 菜单json数据(与jsonUrl不能共同使用)
   */
  props: {
    jsonUrl: {
      type: String,
      default: ""
    },
    unselectedColor: {
      type: String,
      default: ""
    },
    selectedColor: {
      type: String,
      default: ""
    },
    tabItems: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      tabList: [],
      selectedColorP:"",
      unSelectedColorP:""
    };
  },
  computed: {
    tab_list() {
      if (this.jsonUrl) {
        return this.tabList;
      } else {
        return this.tabItems;
      }
    },
    selColor(){
      return this.selectedColor?this.selectedColor:this.selectedColorP
    },
    unSelColor(){
      return this.unSelectedColor?this.unSelectedColor:this.unSelectedColorP
    },
  },
  created() {
    if (this.jsonUrl) {
      this.getJsonData();
    }
  },
  methods: {
    /**
     * @event mpFooterClick
     * @description 点击底部导航触发事件
     * @param {Object} event
     */
    mpFooterClick(event) {
      this.$emit("mpFooterClick", event);
    },
    //获取底部导航json数据
    getJsonData() {
      stream.fetch(
        {
          method: "GET",
          url: this.jsonUrl,
          type: "json"
        },
        res => {
          this.tabList = res.data.data.tabs;
          this.selectedColorP=res.data.data.selectedColor
          this.unSelectedColorP=res.data.data.unSelectedColor
        }
      );
    }
  },
  watch: {
    jsonUrl() {
      this.getJsonData();
    }
  }
};
</script>