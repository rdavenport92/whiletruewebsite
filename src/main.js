import { createApp } from 'vue';
import { plugin, defaultConfig } from '@formkit/vue';
import App from './App.vue';
import router from './router';

createApp(App)
  .use(plugin, defaultConfig({ theme: 'genesis' }))
  .use(router)
  .mount('#app');
