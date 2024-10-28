import './bootstrap';
import { createApp } from 'vue';
import App from './components/App.vue';
import App3 from './components/App3.vue';
import router from './router';
// import '../css/app.css';
import '/public/css/app.css';
import { library} from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faUser, faInfoCircle, faBriefcase, faEnvelope, faChartColumn, faBookOpen, faUserDoctor, faStethoscope, faLanguage, faHouseMedicalCircleCheck} from '@fortawesome/free-solid-svg-icons';
import i18n from './i18n';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import '/node_modules/flowbite-vue/dist/index.css';


library.add(faUser, faInfoCircle, faBriefcase, faEnvelope, faChartColumn, faBookOpen, faUserDoctor, faStethoscope, faLanguage, faHouseMedicalCircleCheck);

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);

app.use(router).use(i18n).use(VueSweetalert2).mount('#app');
