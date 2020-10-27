import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap";
import "./assets/app.scss";
import titleMixin from "./mixins/titleMixin";

Vue.config.productionTip = false;
Vue.mixin(titleMixin);
new Vue({
	router,
	render: (h) => h(App),
}).$mount("#app");
