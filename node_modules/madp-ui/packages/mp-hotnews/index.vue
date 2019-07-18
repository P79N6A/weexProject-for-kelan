
<template>
  <div class="container">
    <mp-bar :leftTxt="subTitle" :barStyle="barStyle" :rightTxt="hasMore" :rightTxtStyle="rightTxtStyle"></mp-bar>
    <div class="grid-select">
      <option v-for="(item, index) in dList" v-bind="Object.assign({}, customStyles, item)" :key="index" :index="index" :style="{marginTop: index >= cols ? lineSpacing : null}" @select="onSelect(index)"></option>
      <option v-for="(item, index) in cHackList" v-bind="Object.assign({}, customStyles, item)" :key="id + index" :style="{opacity: 0, marginTop: dList.length >= cols ? lineSpacing : null}"></option>
    </div>
    <news-list :jsonurl="jsonurl" class="newsList" :select-label="selectLabel"></news-list>
    
  </div>
</template>

<script>
import Option from "./option.vue";
import NewsList from "./hotnewslist.vue";
import MpBar from "../mp-bar";


export default {
  components: { Option, MpBar, NewsList },
  props: {
    //内容标题
    subTitle: {
      type: String,
      default: ""
    },
    //内容标题右侧更多
    hasMore: {
      type: String,
      default: ""
    },
    // 标识, 当界面展示多个grid, 防止v-for :key重复
    id: {
      type: String,
      default: "one"
    },
    // 列数
    cols: {
      type: Number,
      default: 5
    },
    // 是否单选
    single: {
      type: Boolean,
      default: false
    },
    // 数据
    list: {
      type: Array,
      default: () => []
    },
    // 选择个数限制
    limit: {
      type: Number
    },
    //newsList`s json
    jsonurl: {
      type: String,
      default: ""
    },
    //newsList`s json
    selectLabel: {
      type: String,
      default: ""
    },
    // 用户自定义样式，用于个性化设置option样式
    customStyles: {
      type: Object,
      default: () => ({
        "height":"62px",
        "width":"124px"
      })
    }, 
    rightTxtStyle: {
      type: Object,
      default: () => ({
        "font-size": "26px",
        "color": "#848996"
      })
    }, 
    barStyle: {
      type: Object,
      default: () => ({
        
      })
    }
    
  },
  data() {
    return {
      dList: this.initList(),
    };
  },
  computed: {
    cHackList() {
      const { list, cols } = this;
      const remainder = list.length % cols;
      const len = remainder ? cols - remainder : 0;

      return Array.apply(null, { length: len });
    }
  },
  watch: {
    list() {
      this.dList = this.initList();
    }
  },
  created() {
    // 行间距
    this.lineSpacing = this.customStyles.lineSpacing || "12px";
  },
  methods: {
    onSelect(index) {
      const checked = this.dList[index].checked;
      if (this.limit <= this.checkedCount && !checked) {
        this.$emit("overLimit", this.limit);
      } else {
        this.updateList(index);
        this.$emit("select", {
          selectIndex: index,
          checked: !checked,
          checkedList: this.dList.filter(item => item.checked)
        });
      }
    },
    initList() {
      const single = this.single;
      let checkedCount = 0;

      const dList = this.list.map((item, i) => {
        let { checked, disabled } = item;
        disabled = !!disabled;
        // disabled为true时认为checked无效，同时单选模式下只认为第一个checked为true的为有效值
        checked = !disabled && !!checked && (!single || checkedCount === 0);
        if (item.checked) checkedCount += 1;
        return {
          ...item,
          checked,
          disabled
        };
      });

      this.checkedCount = checkedCount;
      return dList;
    },
    updateList(index) {
      const single = this.single;
      let checkedCount = 0;
      this.dList = this.dList.map((item, i) => {
        if (single) {
          item.checked = index === i && !item.checked;
        } else {
          if (i === index) item.checked = !item.checked;
        }
        if (item.checked) checkedCount += 1;
        return item;
      });
      this.checkedCount = checkedCount;
    }
    
    
    
  }
};
</script>

<style scoped>
.grid-select {
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
}
.container {
  width: 750px;
}
.newsList{
  margin-top: 20px;
}




</style>
