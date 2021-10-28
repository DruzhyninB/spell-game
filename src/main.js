import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App.vue'

// plugins
import store from './store/Store';
import audio from './sound/audio';
import directives from './directives/directives';

const app = createApp(App);
app.use(store);
app.use(directives);
app.use(audio);
app.mount('#app');
