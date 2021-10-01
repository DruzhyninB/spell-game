import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App.vue'

import store from './store/Store';

const app = createApp(App);
app.use(store);
app.mount('#app');
