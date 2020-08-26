import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      requiresFooter: true,
      requiresHeader: true
    }
  },
  {
    path: "/shops",
    name: "Shops",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Shops.vue")
  },
  {
    path: "/menu",
    name: "Menu",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Menu.vue")
  },
  {
    path: "/takeaway",
    name: "Takeaway",
    meta: {
      requiresFooter: true,
      requiresHeader: true
    },
    component: () =>
      import(/* webpackChunkName: "new" */ "../views/Takeaway.vue")
  },
  {
    path: "/about",
    name: "About",
    meta: {
      requiresFooter: true,
      requiresHeader: true
    },
    component: () =>
      import(/* webpackChunkName: "new" */ "../views/About.vue")
  },
  {
    path: "/contact",
    name: "Contact",
    meta: {
      requiresFooter: true,
      requiresHeader: true
    },
    component: () =>
      import(/* webpackChunkName: "new" */ "../views/Contact.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
