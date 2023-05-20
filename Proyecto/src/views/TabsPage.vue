<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon aria-hidden="true" :icon="desktop" />
          <ion-label>Monitoreo de Claves</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon aria-hidden="true" :icon="people" />
          <ion-label>Monitoreo de Usuarios</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon aria-hidden="true" :icon="key" />
          <ion-label>Claves nuevas</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>

    <!-- Logout button -->
    <ion-button @click="logout" expand="full">Logout</ion-button>
  </ion-page>
</template>

<script setup>
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet, IonButton } from '@ionic/vue';
import { desktop, key, people } from 'ionicons/icons';
import { getAuth, signOut } from 'firebase/auth';
import router from '../router/index';

const logout = async () => {
  try {
    const auth = getAuth();
    await signOut(auth);

    // Navigate to the login page or any other desired route
    router.push('/login'); // Replace '/login' with the desired route path
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
  }
};
</script>
