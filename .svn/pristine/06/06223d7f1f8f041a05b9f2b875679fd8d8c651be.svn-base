<template>

  <slider :class="[sliderType=='full'&&'slider',sliderType=='half'&&'sliderB',sliderType=='four'&&'sliderS',hasImgTxt&&`slider-${sliderType}`]" :jsonUrl="jsonUrl" :style="sliderStyle" :interval="interval" :index="defaultIndex" :auto-play="autoPlay" :infinite="infinite" @change="mpSliderPageChanged" >
    <slot>
      <div class="slider-box" v-for="(item,index) in ad_list" :key="index" v-if="sliderType=='full'" @click="mpSliderClick(item)">
        <div :class="[hasImgTxt&&`slider-item-${sliderType}`]">
          <image class="slider-img" :class="[hasImgTxt&&`slider-img-${sliderType}`]" :style="sliderImgStyle" :src="item.src" />
          <text :class="[`slider-txt-${sliderType}`]" v-if="hasImgTxt">{{item.mark}}</text>
        </div>
      </div>
      <div class="slider-box" v-for="(item,index) in ad_list" :key="index" v-if="sliderType=='half'">
        <div :class="[hasImgTxt&&`slider-item-${sliderType}`]" v-for="(arr,i) in item" :key="i" v-if="!hasImgTxt" @click="mpSliderInnerClick(arr,i)">
          <image :class="['slider-imgB',hasImgTxt&&`slider-imgB-${sliderType}`]" :src="arr.src" :style="sliderImgStyle"/>
        </div>
        <div :class="[hasImgTxt&&`slider-item-${sliderType}`]" v-for="(arr,i) in item" :key="i" v-if="hasImgTxt" @click="mpSliderInnerClick(arr,i)">
          <image :class="['slider-imgB',hasImgTxt&&`slider-imgB-${sliderType}`]" :src="arr.src" :style="sliderImgStyle"/>
          <text :class="[`slider-txt-${sliderType}`]">{{arr.mark}}</text>
        </div>
      </div>
      <div class="slider-boxS" v-for="(item,index) in ad_list" :key="index" v-if="sliderType=='four'">
        <image :class="['slider-imgB',hasImgTxt&&`slider-imgB-${sliderType}`]" :src="arr.src" v-for="(arr,i) in item" :key="i" v-if="!hasImgTxt" @click="mpSliderInnerClick(arr,i)"/>
        <div :class="[hasImgTxt&&`slider-item-${sliderType}`]" v-for="(arr,i) in item" :key="i" v-if="hasImgTxt" @click="mpSliderInnerClick(arr,i)">
          <image :class="['slider-imgB',hasImgTxt&&`slider-imgB-${sliderType}`]" :src="arr.src" :style="sliderImgStyle"/>
          <text :class="[`slider-txt-${sliderType}`]" v-if="hasImgTxt">{{arr.mark}}</text>
        </div>
      </div>
    </slot>
    <indicator class="indicator" v-if="hasIndicator"></indicator>
  </slider>

</template>

<style scoped>
.slider {
  width: 750px;
  height: 320px;
}
.sliderB {
  width: 750px;
  height: 160px;
}
.sliderS {
  width: 750px;
  height: 320px;
}
.slider-full {
  height: 400px;
}
.slider-half {
  height: 240px;
}
.slider-four {
  height: 480px;
}
.slider-box {
  flex-direction: row;
}
.slider-boxS {
  width: 750px;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}
.slider-item-full {
  width: 750px;
  height: 400px;
}
.slider-item-half {
  width: 375px;
  height: 240px;
}
.slider-item-four {
  width: 375px;
  height: 240px;
}
.slider-img {
  width: 750px;
  height: 320px;
}
.slider-imgB {
  width: 375px;
  height: 160px;
}
.slider-img-full {
  margin-top: 0;
}
.slider-imgB-half {
  margin-top: 0;
}
.slider-imgB-four {
  width: 375px;
  height: 160px;
}
.indicator {
  position: absolute;
  bottom: 10px;
  width: 750px;
  height: 34px;
  item-color:rgb(232,232,234);
	item-selected-color:rgb(251,124,81);
	item-size:9;
}
.slider-txt-full {
  width: 750px;
  height: 80px;
  align-content: center;
  align-items: center;
  text-align: center;
  justify-content: center;
  lines: 2;
  text-overflow: ellipsis;
  text-align: center;
  font-size: 26px;
}
.slider-txt-half {
  width: 375px;
  height: 80px;
  align-items: center;
  text-align: center;
  justify-content: center;
  lines: 2;
  text-overflow: ellipsis;
  text-align: center;
  font-size: 26px;
}
.slider-txt-four {
  width: 375px;
  height: 80px;
  align-items: center;
  text-align: center;
  justify-content: center;
  lines: 2;
  text-overflow: ellipsis;
  text-align: center;
  font-size: 26px;
}
</style>
<script>
/**
 * @module 轮播组件
 * @description 轮播图片weex组件
 * @example  <mp-slider></mp-slider>
 * 例子如下:
 * <mp-slider @mpSliderPageChanged="mpSliderPageChanged" jsonUrl="json/ad.json">
   </mp-slider>
   <mp-slider @mpSliderPageChanged="mpSliderPageChanged">
        <div class="slider-box" v-for="(item,index) in imageList" :key="index">
            <image class="slider-img" :src="item.src" />
        </div>
    </mp-slider>

slot插槽：
  轮播的内容
 * 
 */

const modal = weex.requireModule("modal");
const stream = weex.requireModule("stream");
export default {
  /**
   * Props 组件接收属性
   *
   * @prop {String} jsonUrl 轮播的json路径(与sliderList不能共同使用),无slot才可使用
   * @prop {Array} sliderList 轮播的json数据(与jsonUrl不能共同使用),无slot才可使用
   * @prop {Object} sliderType 轮播类型 full：一张图，half：两张图，four:四张图两行两列,默认full,无slot才可使用
   * @prop {Array} hasImgTxt 是否显示轮播图片对应文字,默认false,无slot才可使用
   *
   * @prop {Object} sliderStyle 轮播整体样式
   * @prop {Object} sliderImgStyle 轮播图片样式
   * @prop {String} interval 轮播间隔时间 默认值：5000
   * @prop {Boolean} autoPlay 轮播是否自动执行 默认值：false
   * @prop {Boolean} infinite 轮播是否无限循环 默认值：false
   * @prop {Boolean} hasIndicator 是否显示轮播指示器 默认值：false
   * @prop {Number} defaultIndex 显示第几页 默认值：0
   * 
   */
  props: {
    jsonUrl: {
      type: String,
      default: ""
    },
    sliderList: {
      type: Array,
      default: () => []
    },
    sliderType: {
      type: String,
      default: "full"
    },
    hasImgTxt: {
      type: Boolean,
      default: false
    },
    sliderStyle: {
      type: Object,
      default: () => ({})
    },
    sliderImgStyle: {
      type: Object,
      default: () => ({})
    },
    interval: {
      type: String,
      default: "5000"
    },
    autoPlay: {
      type: Boolean,
      default: false
    },
    infinite: {
      type: Boolean,
      default: false
    },
    hasIndicator: {
      type: Boolean,
      default: false
    },
    defaultIndex: {
      type: Number,
      default: 0
    },
    
  },
  data() {
    return {
      adList: [],
      sliderIndex:0
    };
  },
  computed: {
    ad_list() {
      if (this.jsonUrl) {
        if (this.sliderType == "half") {
          //一页显示2条
          return this.reSetAdList(2);
        } else if (this.sliderType == "four") {
          //一页显示4条
          return this.reSetAdList(4);
        }
        return this.adList;
      } else {
        return this.sliderList;
      }
    }
  },
  created() {
    if (this.jsonUrl) {
      this.getJsonData();
    }
  },
  methods: {
    /**
     * @event mpSliderPageChanged
     * @description 轮播完成一次后执行
     * @param {Object} event  event.index是当前索引
     */
    mpSliderPageChanged(event) {
      this.sliderIndex=event.index;
      this.$emit("mpSliderPageChanged", event);
    },
    /**
     * @event mpSliderClick
     * @description 点击轮播触发事件
     * @param {Object} item 当前数据
     * @param {Object} event  当前元素
     */
    mpSliderClick(item) {
    	 this.$emit("mpSliderClick",item);
//    this.$emit("mpSliderClick", this.ad_list[this.sliderIndex],event);
    },
    /**
     * @event mpSliderInnerClick
     * @description 一个页面有多项时点击某一项触发事件
     * @param {String} item 当前项数据
     * @param {String} index 当前索引 从0开始
     */
    mpSliderInnerClick(item,index){
      this.$emit("mpSliderInnerClick", item,index);
    },
    //获取轮播json数据
    getJsonData() {
      stream.fetch(
        {
          method: "GET",
          url: this.jsonUrl,
          type: "json"
        },
        res => {
          this.adList = res.data.data;
        }
      );
    },
    //当一页显示多条数据时，需重新组装每页json数据
    reSetAdList(index) {
      let arr = [];
      let subList = [];
      for (var i in this.adList) {
        if (i != 0 && i % index == 0) {
          arr.push(subList);
          subList = [this.adList[i]];
        } else {
          subList.push(this.adList[i]);
        }
      }
      if (this.adList.length - 1 == i) {
        arr.push(subList);
      }
      return arr;
    }
  },
  watch: {
    jsonUrl() {
      this.getJsonData();
    }
  }
};
</script>