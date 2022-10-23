import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import NavbarmenuComponent from '@/components/NavbarmenuComponent.vue';

const app = createApp(App);
app.use(router);
app.use(store);
app.component('navbarmenu-component', NavbarmenuComponent);
app.mount('#app');
