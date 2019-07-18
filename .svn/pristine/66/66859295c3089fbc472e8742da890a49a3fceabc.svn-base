<template>
  <div class="wrapper">
    <embed v-for="(item , index) in tabItems" :src="item.src" :key="index" type="weex" :style="{ visibility: item.visibility }" :class="[active?'content':'content1']" />
    <div :class="[active?'tabbar':'tabbar1']" append="tree">
      <tabitem v-for="(item , index) in tabItems" :key="index" :index="index" :icon="item.icon" :title="item.title" :titleColor="item.titleColor" @tabItemOnClick="tabItemOnClick">
      </tabItem>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  width: 750px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin-top: 0;
  margin-bottom: 100px;
}
.content1 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin-top: 0;
  margin-bottom: 150px;
}

.tabbar {
  flex-direction: row;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100px;
}
.tabbar1 {
  flex-direction: row;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 150px;
}
</style>

<script>
import tabitem from "./tabitem.vue";

export default {
  props: {
    tabItems: { default: [] },
    selectedColor: { default: "" },
    unselectedColor: { default: "" }
  },
  data: function() {
    return {
      selectedIndex: 0,
      tabLength: 4
    };
  },
  components: { tabitem },
  created: function() {
  	if(this.isipx()==1){
	  		this.active=false;
	  	}else{
	  		this.active=true;
	  	}
    this.initState();
  },
  methods: {
  	  //是否是iphoneX iphoneXS iphoneXSMax
	    isipx() {
	      let [deviceList, deviceModel] = [
	        [
	          'iPhone10,3',
	          'iPhone10,6',
	          'iPhone11,8',
	          'iPhone11,2',
	          'iPhone11,4',
	          'iPhone11,6'
	        ],
	        weex.config.env.deviceModel
	      ];
	      return deviceList.indexOf(deviceModel) != '-1';
	    },
    initState() {
      // var baseURL = weex.config.bundleUrl.replace("/weex/index.weex.js?Page=Launcher", "");
      var baseURL = weex.config.bundleUrl.replace(/\/weex\/index.weex.js\/?.*/,'')
      this.tabLength = this.tabItems.length;
      for (let i = 0; i < this.tabLength; i++) {
        this.tabItems[i].src=baseURL+this.tabItems[i].src
        if (this.tabItems[i].visibility == "visible") {
          this.selectedIndex = i;
          // break;
        }
      }
      this.select(this.selectedIndex);
    },
    tabItemOnClick: function(e) {
      this.selectedIndex = e.index;
      // if(this.selectedIndex == 1){
      //   return;
      // }
      this.select(e.index);
      this.$emit("tabBarOnClick", e);
    },
    select: function(index) {
      for (var i = 0; i < this.tabLength; i++) {
        var tabItem = this.tabItems[i];
        if (i == index) {
          tabItem.icon = tabItem.selectedImage;
          tabItem.titleColor = this.selectedColor;
          tabItem.visibility = "visible";
        } else {
          tabItem.icon = tabItem.image;
          tabItem.titleColor = this.unselectedColor;
          tabItem.visibility = "hidden";
        }
      }
    }
  },
  watch: {
    tabItems() {
      this.initState();
      this.select(this.selectedIndex);
    }
  }
};
</script>
