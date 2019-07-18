<template>
  <div class="tab" :style="tabStyle">
    <image class="image-bg" :src="bgImgC" :style="bgImgStyle" v-if="bgImgC" />
    <slider class="slider" :scrollable="scrollable" :style="tabStyleC" v-if="isScroll">
      <div class="slider-box" v-for="(item,index) in menu_list" :key="index" :style="tabStyleC">
        <div class="menu-item" :style="menuItemStyleC" v-for="(i,key) in item" :key="key" @click="mpMenuItemClick(i,key)" v-if="sortType">
          <image class="image" :src="i.src" :style="menuImgStyleC" />
          <text class="title" :style="menuTitleStyleC">{{i.name}}</text>
        </div>
        <div class="menu-item" :style="menuItemStyleC" v-for="(i,key) in item" :key="key" @click="mpMenuItemClick(i,key)" v-if="!sortType">
          <text class="title" :style="menuTitleStyleC">{{i.name}}</text>
          <image class="image" :src="i.src" :style="menuImgStyleC" />
        </div>
      </div>
      <indicator class="indicator" v-if="hasIndicator"></indicator>
    </slider>

    <div class="slider" :scrollable="scrollable" :style="tabStyleC" v-if="!isScroll">
      <div class="slider-box" v-for="(item,index) in menu_list" :key="index" :style="tabStyleC">
        <div class="menu-item" :style="menuItemStyleC" v-for="(i,key) in item" :key="key" @click="mpMenuItemClick(i,key)" v-if="sortType">
          <image class="image" :src="i.src" :style="menuImgStyleC" />
          <text class="title" :style="menuTitleStyleC">{{i.name}}</text>
        </div>
        <div class="menu-item" :style="menuItemStyleC" v-for="(i,key) in item" :key="key" @click="mpMenuItemClick(i,key)" v-if="!sortType">
          <text class="title" :style="menuTitleStyleC">{{i.name}}</text>
          <image class="image" :src="i.src" :style="menuImgStyleC" />
        </div>
      </div>
      <indicator class="indicator" v-if="hasIndicator"></indicator>
    </div>



  </div>
</template>

<style scoped>
.slider-box {
  width: 750px;
  /* height: 320px; */
  flex-direction: row;
  flex-wrap: wrap;
}
.slider {
  width: 750px;
  height:290px;
}
.tab {
  width: 750px;
  background-color: #ffffff;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
}
.image-bg {
  width: 750px;
  height: 320px;
  position: absolute;
  top: 0;
}
.menu-item {
  width: 187.5px;
  height: 100px;
  align-items: center;
  margin-top: 30px;
  justify-content: center;
}

.image {
  width: 50px;
  height: 50px;
  margin-bottom: 20px;
}

.title {
  font-size: 24px;
  color: #404561;
}
.indicator {
  position: absolute;
  bottom: 20px;
  width: 750px;
  height: 44px;
}
</style>
<script>
/**
 * @module 主菜单组件
 * @description 菜单组件 5*2 4*2 3*2
 * @example  <mp-menu ></mp-menu>
 * 例子如下:
 * <mp-menu jsonUrl="json/menu.json"></mp-menu>

    menu.json格式如下：
    {
    "data": {
        "menuList": [{
                "url": "main.newmain",
                "src": "imgs/ping@3x.png",
                "name": "账户管理"
            },
            {
                "url": "main.transferaccouts",
                "src": "imgs/deposit@3x.png",
                "name": "转账汇款"
            },
            {
                "url": "main.plnv",
                "src": "imgs/money@3x.png",
                "name": "投资理财"
            },
            {
                "url": "main.deposit",
                "src": "imgs/life@3x.png",
                "name": "特色定活"
            },
            {
                "url": "",
                "src": "imgs/safe@3x.png",
                "name": "安全中心"
            },
            {
                "url": "main.loan",
                "src": "imgs/key@3x.png",
                "name": "贷款管理"
            },
            {
                "url": "main.businesscard",
                "src": "imgs/cards@3x.png",
                "name": "公务卡"
            },
            {
                "url": "main.businesscard",
                "src": "imgs/cards@3x.png",
                "name": "111"
            },
            {
                "url": "main.businesscard",
                "src": "imgs/cards@3x.png",
                "name": "222"
            },
            {
                "url": "main.allmenu",
                "src": "imgs/more@3x.png",
                "name": "更多"
            }
        ],
        "menuItem": {
            "bgImg":"imgs/tab_home/menu/banner@3x.png",
            "columns": 5,
            "imgWidth": 60,
            "imgHeight": 60,
            "fontSize": 24,
            "fontColor": "#fff"
        }
    }
}
 * 
 */

const modal = weex.requireModule("modal");
const stream = weex.requireModule("stream");
export default {
  /**
   * Props 组件接收属性
   * @prop {String} jsonUrl 菜单的json路径(与menuList不能共同使用)
   * @prop {Array} menuList 菜单json数据(与jsonUrl不能共同使用)
   * @prop {String} pageSize 一页显示的条数，默认8条
   * @prop {String} rows 一页显示的行数，默认2条
   * @prop {String} columns 一页显示的列数，默认4条
   * @prop {Object} tabStyle 整个菜单样式
   * @prop {String} bgImg 菜单背景图
   * @prop {Object} bgImgStyle 菜单背景图样式
   * @prop {Object} menuItemStyle 一个菜单样式
   * @prop {Object} menuImgStyle 菜单图片样式
   * @prop {Object} menuTitleStyle 菜单文字样式
   * @prop {Boolean} sortType 菜单文字图片顺序 默认true 图上字下,false 图下字上
   * @prop {Boolean} isScroll 是否允许滑动 默认true
   *
   */
  props: {
    jsonUrl: {
      type: String,
      default: ""
    },
    menuList: {
      type: Array,
      default: () => []
    },
    pageSize: {
      type: String,
      default: "8"
    },
    rows: {
      type: String,
      default: "2"
    },
    columns: {
      type: String,
      default: "4"
    },
    tabStyle: {
      type: Object,
      default: () => ({})
    },
    bgImg: {
      type: String,
      default: ""
    },
    bgImgStyle: {
      type: Object,
      default: () => ({})
    },
    menuItemStyle: {
      type: Object,
      default: () => ({})
    },
    menuImgStyle: {
      type: Object,
      default: () => ({})
    },
    menuTitleStyle: {
      type: Object,
      default: () => ({})
    },
    sortType: {
      type: Boolean,
      default: true
    },
    isScroll:{
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      jsonList: [], //json数据
      scrollable: false, //是否可以滑动
      hasIndicator: false, //是否有指示器
      bgImgP:"",//json数据中的背景图片
      // imgSizeP:{},//json数据中的每个菜单的图片大小
      columnsP:"",//json数据中的一行的菜单个数
      rowsP:"",//json数据中的菜单行数
      // fontSizeP:"",//json数据中的文字大小
      // fontColorP:"",//json数据中的文字颜色
      menuImgStyleP:{},
      menuTitleStyleP:{},
      menuItemStyleP:{},
      menuAllHeight:"",
    };
  },
  computed: {
    menu_list() {
      if (this.jsonUrl) {
        let list = this.jsonList;
        if (list.length > 0) {
          return this.reSetMenuList(list, this.rowsC*this.columnsC);
        }
        return [];
      } else {
        return this.reSetMenuList(this.menuList, this.rowsC*this.columnsC);
      }
    },
    bgImgC(){
      let imgsrc="";
      if(this.bgImg){
        imgsrc=this.bgImg
      }else{
        imgsrc=this.bgImgP
      }
      return imgsrc;
    },
    menuItemStyleC(){
      return Object.assign(this.menuItemStyleP,this.menuItemStyle)
    },
    menuImgStyleC(){
      return Object.assign(this.menuImgStyleP,this.menuImgStyle)
    },
    menuTitleStyleC(){
      // this.menuTitleStyleP["font-size"]?this.menuTitleStyleP["font-size"]:this.fontSizeP
      // this.menuTitleStyleP["color"]?this.menuTitleStyleP["color"]:this.fontColorP
      // return this.menuTitleStyleP
      return Object.assign(this.menuTitleStyleP,this.menuTitleStyle)
    },
    rowsC(){
      return this.rowsP?this.rowsP:this.rows
    },
    columnsC(){
      return this.columnsP?this.columnsP:this.columns
    },
    tabStyleC(){
      let itemHeight=this.menuItemStyleP.height?this.menuItemStyleP.height:this.menuItemStyle.height;
      let num=this.rowsP?this.rowsP:this.rows;
      if(itemHeight){
        this.tabStyle.height=parseFloat(itemHeight)*num;
      }
      return this.tabStyle;
    }

  },
  created() {
    if (this.jsonUrl) {
      this.getJsonData();
    }
  },
  methods: {
    /**
     * @event mpMenuItemClick
     * @description 点击某一项菜单触发事件
     * @param {Object} item  item是菜单json某一项 key 是索引值
     */
    mpMenuItemClick(item,key) {
      this.$emit("mpMenuItemClick", item,key);
    },
    //获取菜单json数据
    getJsonData() {
      stream.fetch(
        {
          method: "GET",
          url: this.jsonUrl,
          type: "json"
        },
        res => {
          this.jsonList = res.data.data.menuList;
          this.bgImgP=res.data.data.menuItem.bgImg
          this.columnsP=res.data.data.menuItem.columns||4
          this.rowsP=res.data.data.menuItem.rows||2
          this.menuImgStyleP["width"]=res.data.data.menuItem.imgWidth+"px"
          this.menuImgStyleP["height"]=res.data.data.menuItem.imgHeight+"px"
          this.menuTitleStyleP["font-size"]=res.data.data.menuItem.fontSize+"px"
          this.menuTitleStyleP["color"]=res.data.data.menuItem.fontColor
          if(res.data.data.menuItem.menuWidth){
            this.menuItemStyleP["width"]=res.data.data.menuItem.menuWidth+"px"
          }
          if(res.data.data.menuItem.menuHeight){
            this.menuItemStyleP["height"]=res.data.data.menuItem.menuHeight+"px"
          }
          
          // this.menuItemStyleP["height"]=res.data.data.menuItem.imgHeight+res.data.data.menuItem.fontSize+"px"
        }
      );
    },
    //获取一页显示条数，是否有翻页
    reSetMenuList(list, len) {
      let arr = [];
      if (list.length > len) {
        //菜单数据大于一页显示最大条数
        let l = Math.ceil(list.length / len); //
        for (let i = 0; i < l; i++) {
          arr.push(list.slice(i * len, i * len + len));
        }
        this.scrollable = true; //可以翻页
        this.hasIndicator = true; //有指示器
        return arr;
      } else {
        //菜单数据小于等于一页显示最大条数
        arr.push(list);
        this.scrollable = false; //不可以翻页
        this.hasIndicator = false; //没有指示器
        return arr;
      }
    }
  },
  watch: {
    jsonUrl() {
      this.getJsonData();
    }
  }
};
</script>