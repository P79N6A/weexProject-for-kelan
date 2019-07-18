<template>
  <div>
    <mp-footer jsonUrl="json/tabOther.json" @tabBarOnClick="tabBarOnClick"></mp-footer>
  </div>
</template>

<script>
import {MpFooter} from "madp-ui";
const modal = weex.requireModule("modal");

export default {
  data() {
    return {
    };
  },
  components: { MpFooter },
  created: function() {
  },
  methods: {
    tabBarOnClick: function(e) {
      console.log("tabBarOnClick", e.index);
    }
  }
};
</script>