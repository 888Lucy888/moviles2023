import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';

////////////////////////////////////////
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6Jvtc7y9EO1V_BVWobpXQKMZyz7Rep9M",
  authDomain: "androidpracticas-984d1.firebaseapp.com",
  databaseURL: "https://androidpracticas-984d1-default-rtdb.firebaseio.com",
  projectId: "androidpracticas-984d1",
  storageBucket: "androidpracticas-984d1.appspot.com",
  messagingSenderId: "333059696032",
  appId: "1:333059696032:web:7561bc4a53f26ad71d30c5"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
///////////////////////////////////////

const app = createApp(App)
  .use(IonicVue)
  .use(router)
  .use(appFirebase);
  
router.isReady().then(() => {
  app.mount('#app');
});