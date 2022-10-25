import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import MainPage from "@/components/MainPage";
import 'material-icons/iconfont/material-icons.css';
import ProductionPage from "@/components/ProductionPage";
import BoardPage from "@/components/BoardPage";
import BoardAutomaticPage from "@/components/BoardAutomaticPage";
import NotCreatedPage from "@/components/NotCreatedPage";
import KipaPage from "@/components/KipaPage";
import AutomatizationPage from "@/components/AutomatizationPage";
import ElectricityPage from "@/components/ElectricityPage";
import ServicePage from "@/components/ServicePage";
import ObjectsPage from "@/components/ObjectsPage";
import ContactPage from "@/components/ContactPage";
import ElectricdrivePage from "@/components/ElectricdrivePage";

Vue.config.productionTip = false
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: MainPage },
    { path: '/production', component: ProductionPage },
    { path: '/board', component: BoardPage },
    { path: '/boardautomatic', component: BoardAutomaticPage },
    { path: '/notcreated', component: NotCreatedPage },
    { path: '/kipa', component: KipaPage },
    { path: '/automatization', component: AutomatizationPage },
    { path: '/electricity', component: ElectricityPage },
    { path: '/service', component: ServicePage },
    { path: '/objects', component: ObjectsPage },
    { path: '/contact', component: ContactPage },
    { path: '/electricdrive', component: ElectricdrivePage },
  ]
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
