import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App.vue'

// plugins
import store from './store/Store';
import audio from './sound/vue-audio-plugin';

import sounds from './config/sounds';

const app = createApp(App);
app.use(store);
app.use(audio, sounds);
app.mount('#app');
