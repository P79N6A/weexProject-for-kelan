// import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as filters from './filters'
import mixins from './mixins'

// register global utility filters.
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})

// register global mixins.
Vue.mixin(mixins)

// create the app instance.
// here we inject the router and store to all child components,
// making them available everywhere as `this.$router` and `this.$store`.

new Vue(Vue.util.extend({ el: '#root', router, store }, App))
// router.push('/')

var indexRouter = weex.config.bundleUrl.match(/\w*Page=(\w*)$/);

Vue.Cancel=[];
router.beforeEach((to,from,next)=>{
    while(Vue.Cancel.length>0){
        Vue.Cancel.shift()('cancel');
    }
    next();
})


if(indexRouter){
    router.push(indexRouter[1])
}else{
    
    router.push('/')
}
