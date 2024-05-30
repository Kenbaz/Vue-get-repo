import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import { FontAwesomeIcon } from "./fontawesome";
import router from './router';

const app = createApp(App);

app.use(router)

app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");