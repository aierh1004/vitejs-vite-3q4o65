import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import store from './store/index.js';
import { router } from './utils/router.js';
import BaseCard from './components/ui/BaseCard.vue';
import BaseButton from './components/ui/BaseButton.vue';
import BaseBadge from './components/ui/BaseBadge.vue';
import BaseSpinner from './components/ui/BaseSpinner.vue';

const app = createApp(App);
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-badge', BaseBadge);
app.component('base-spinner', BaseSpinner);

app.use(router);
app.use(store);
app.mount('#app');
