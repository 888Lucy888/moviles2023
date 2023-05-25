<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Login</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <div class="logo-container">
        <img src="../images/logo.png" alt="Logo">
      </div>

      <ion-item>
        <ion-label position="stacked" class="login">Email</ion-label>
        <ion-input class="login" v-model="email" type="email" placeholder="Enter your email"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label class="login" position="stacked">Password</ion-label>
        <ion-input class="login" v-model="password" type="password" placeholder="Enter your password"></ion-input>
      </ion-item>

      <ion-button class="bold-button" expand="full" @click="login" :disabled="isLoading">Login</ion-button>

      <ion-text v-if="error" color="danger" class="ion-padding-top">
        {{ error }}
      </ion-text>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref } from 'vue';
import router from '../router/index';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput, IonButton, IonText } from '@ionic/vue';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth();
const email = ref('');
const password = ref('');
const error = ref('');
const isLoading = ref(false);

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is authenticated, navigate to other routes
    router.push('/tabs/');
  }
});

async function login() {
  try {
    isLoading.value = true;
    error.value = '';

    const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value);
    const user = userCredential.user;

    if (user) {
      // User is authenticated, navigate to other routes
      router.push('/tabs/');
    }
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
    error.value = errorMessage;
  } finally {
    isLoading.value = false;
  }
}
</script>


<style>
.login {
  font-size: 14px;
}

.bold-button {
  font-weight: bold;
}

.logo-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.logo-container img {
  max-width: 200px;
}
</style>