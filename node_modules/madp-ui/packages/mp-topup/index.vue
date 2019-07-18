
<template>
  <div class="container">
    <mp-bar :leftTxt="subTitle" :barStyle="barStyle" :rightTxt="hasMore"></mp-bar>
    <div class="line"></div>
    <div class="numberinput" :style="numberinputStyle">
      <input type="number"  :maxlength="inputMaxlength" class="codetext"  :placeholder="promptMsg" :style="codetextStyle" @input="mpInputChange" />
      <image class="imgCode" :src="imgCodeUrl" @click="getContacts" :style="rightImgStyle"></image>
    </div>
    <div class="grid-select">
      <option v-for="(item, index) in dList" v-bind="Object.assign({}, customStyles, item)" :key="index" :index="index" :style="{marginTop: index >= cols ? lineSpacing : null}" @select="onSelect(index)"></option>
      <option v-for="(item, index) in cHackList" v-bind="Object.assign({}, customStyles, item)" :key="id + index" :style="{opacity: 0, marginTop: dList.length >= cols ? lineSpacing : null}"></option>
    </div>
    <div class="buttonClass">
      <mp-button :title="buttonMsg" :btnClass="btnClass" :btnStyle="btnStyle" :btnTxtStyle="btnTxtStyle" @mpButtonClick="mpButtonClick"></mp-button>
    </div>

  </div>
</template>

<script>
import Option from "./option.vue";
import MpBar from "../mp-bar";
import MpButton from "../mp-button";

export default {
  components: { Option, MpBar, MpButton },
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
    //输入提示信息
    promptMsg: {
      type: String,
      default: "请输入手机号码"
    },
    inputMaxlength: {
      type: Number,
      default: 11
    },
    // 标识, 当界面展示多个grid, 防止v-for :key重复
    id: {
      type: String,
      default: "one"
    },
    // 列数
    cols: {
      type: Number,
      default: 4
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
    //按钮文字
    buttonMsg: {
      type: String,
      default: "立即充值"
    },
    //图片资源
    imgCodeUrl: {
      type: String,
      default: "./componentsImg/phonecharge.png"
    },
    //inputText
    defaultValue:{
      type: String,
      default: ""
    },
    vModel: {
      type: String,
      default: ""
    },
    // 用户自定义样式，用于个性化设置option样式
    customStyles: {
      type: Object,
      default: () => ({})
    },
    //输入手机号整体样式
    numberinputStyle: {
      type: Object,
      default: () => ({})
    },
    // 手机号样式
    codetextStyle: {
      type: Object,
      default: () => ({})
    },
    //右侧图片样式
    rightImgStyle: {
      type: Object,
      default: () => ({})
    },
    //按钮样式
    btnStyle: {
      type: Object,
      default: () => ({
        // "background-image": "linear-gradient(to bottom, #F35BB6, #7B79F9)",
        "height":"80px",
        "margin-top": "40px",
        "justify-content": "center"
      })
      
    },
    btnTxtStyle: {
      type: Object,
      default: () => ({
        // "background-image": "linear-gradient(to bottom, #F35BB6, #7B79F9)",
        "color":"#848996",
        "justify-content": "center",
        "font-size":"30px"
      })
      
    },
    //内容栏整体样式
    barStyle: {
      type: Object,
      default: () => ({
        "height": "100px"
      })
      
    }
  },
  data() {
    return {
      dList: this.initList(),
      btnClass: "shadow",
      
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
    },
    getContacts() {
      this.$emit("getContacts");
    },
    mpButtonClick() {
      this.$emit("mpButtonClick");
    },
    mpInputChange(event) {
      this.inputModel=event.value;
      this.$emit("mpInputChange", this.vModel, event.value);
    },
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
.line {
  background-color: #f1f1f1;
  height: 1px;
  margin-bottom: 10px;
}
.numberinput {
  width: 750px;
  height: 120px;
  padding-left: 30px;
  flex-direction: row;
  position: relative;
  align-items: center;
  justify-content: space-between;
}
.codetext {
  width: 400px;
  font-size: 36px;
}
.imgCode {
  width: 50px;
  height: 54px;
  /* position: absolute; */
  right: 28px;
}
.buttonClass{
  align-items: center
}
</style>
