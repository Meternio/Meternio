import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faInstagram, faWhatsapp, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import '@fontsource/roboto/400.css';

library.add(faInstagram, faEnvelope, faWhatsapp, faGithub, faBars, faXmark);

const pinia = createPinia();

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).use(pinia)
  .mount('#app');
