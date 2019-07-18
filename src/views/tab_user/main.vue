<template>
	<div style="background-color:rgb(248,248,248);">
		<!--<title-bar :name="$store.state.name" :lastLoginTime="lastLoginTime"></title-bar>-->
		<!--<div style="background-color: #FFFFFF;flex: 1;">-->
			<title-bar></title-bar>
			<my-property style="background-color: #FFFFFF;"></my-property>
			<scroller style="flex: 1;">
				<menulist></menulist>
				<!--<hottalk></hottalk>-->
			</scroller>
		<!--</div>-->
		
	</div>
</template>
<style scoped>
	.home {
		width: 750px;
		flex: 1;
		background-color:#FFFFFF;
	}
</style>
<script>
	import Hottalk from "@/components/templet/hottalkTpl.vue";
	import TitleBar from "@/components/tab_user/titleBar.vue";
	import MyProperty from "@/components/tab_user/myProperty.vue";
	import Menulist from "@/components/tab_user/menuList.vue";

	const modal = weex.requireModule("modal");
	const context = weex.requireModule("context");
	export default {
		components: {
			TitleBar,
			MyProperty,
			Menulist,
			Hottalk
		},
		data() {
			return {
				dir: "examples",
				login: this.$store.state.login
			};
		},
		created() {},
		mounted() {},
		methods: {
			//点击主菜单触发事件
			mpMenuItemClick(item) {
				context.launchStage(item.url);
			}
		}
	};
</script>