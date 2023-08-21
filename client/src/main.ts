import { createApp } from "vue";
import PortalVue from 'portal-vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue3} from "bootstrap-vue-3";
import IconsPlugin from "bootstrap-vue-3"


import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import './assets/main.css'

const app = createApp(App)

app.use(PortalVue)
app.use(router)
app.use(BootstrapVue3);
app.use(IconsPlugin);

app.mount('#app')
