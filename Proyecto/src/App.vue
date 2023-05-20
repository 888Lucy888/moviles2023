<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script setup>
import { ref } from 'vue';
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const auth = getAuth();
const isAuthenticated = ref(false);

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is authenticated
    isAuthenticated.value = true;
  } else {
    // User is not authenticated
    isAuthenticated.value = false;
  }
});

async function login() {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, 'lucy@lucy.com', 'lucylucy');
    const user = userCredential.user;
    if (user) {
      // User is authenticated
      isAuthenticated.value = true;
    }
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
  }
}

async function logout() {
  try {
    await signOut(auth);
    isAuthenticated.value = false;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
  }
}
</script>
