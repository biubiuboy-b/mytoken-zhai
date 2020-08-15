import { createApp } from 'vue';
import { router } from './router';
import { initStore } from './store';
import "regenerator-runtime";

import App from "./App.vue";

// app 入口，插件都在此导入

const store = initStore();

createApp(App)
    .use(router)
    .use(store)
    .mount('#app');
