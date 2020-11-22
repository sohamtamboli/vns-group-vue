import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},

	{
		path: "/contact",
		name: "Contact Us",
		// route level code-splitting
		// this generates a separate chunk (contact.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "contact" */ "../views/contact.vue"),
	},
	{
		path: "/about",
		name: "About",
		component: () =>
			import(/* webpackChunkName: "about" */ "../views/about.vue"),
	},
	{
		path: "/admin",
		name: "admin",
	},

	{
		path: "/vnssolutions",
		name: "VnsSolution",
		// route level code-splitting
		// this generates a separate chunk (company.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "Solutions" */ "../views/vnssolutions.vue"),
	},
	{
		path: "/vnsenterprises",
		name: "vnsenterprise",
		// route level code-splitting
		// this generates a separate chunk (company.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(
				/* webpackChunkName: "enterprises" */ "../views/vnsenterprises.vue"
			),
	},
	{
		path: "/subproducts",
		name: "subproducts",
		// route level code-splitting
		// this generates a separate chunk (company.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "subproducts" */ "../views/subproducts.vue"),
	},
	{
		path: "*",
		name: "notD",
		component: () =>
			import(/* webpackChunkName: "Error" */ "../views/Notfound.vue"),
	},
	{
		path: "/privacypolicy",
		name: "PrivacyPolicy",
		component: () =>
			import(
				/* webpackChunkName: "privacypolicy" */ "../views/privacypolicy.vue"
			),
	},
];

const router = new VueRouter({
	mode: "history",

	routes,
});

export default router;
