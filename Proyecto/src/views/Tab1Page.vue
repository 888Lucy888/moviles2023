<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Monitoreo de Claves</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <!--       <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Monitoreo de Claves</ion-title>
        </ion-toolbar>
      </ion-header>

      <ExploreContainer name="Tab 1 page" /> -->
      <ion-grid>
        <ion-row>
          <ion-col>
            <div>Claves</div>
          </ion-col>
          <ion-col>
            <div>Status</div>
          </ion-col>
          <ion-col>
            <div>Usuario</div>
          </ion-col>
        </ion-row>
        <ion-row v-for="(item, index) in listaClaves" :key="index">
          <ion-col>
            <div class="smaller-text">{{ listaKeys[index] }}</div>
          </ion-col>
          <ion-col>
            <div class="small-text">{{ item.status }}</div>
          </ion-col>
          <ion-col>
            <div class="smaller-text">{{ item.usuario }}</div>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCol,
  IonGrid,
  IonRow,
} from "@ionic/vue";
import { getDatabase, ref, onValue } from "firebase/database";
import { getAuth } from 'firebase/auth';
export default {
  name: "Tab1",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonCol,
    IonGrid,
    IonRow,
  },
  mounted() {
    const db = getDatabase();
    const auth = getAuth();
    const starCountRef = ref(db, "claves/");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      var cont = 0
      snapshot.forEach(element => {
        this.listaKeys[cont] = element.key
        this.listaClaves[cont] = element.toJSON()
        cont++
      });
    });
    console.log("lista de claves", this.listaClaves)
  },
  data() {
    return {
      listaClaves: [{ status: "", usuario: "" }],
      listaKeys: []
    }
  }
};
</script>

<style>
.smaller-text {
  font-size: 7px;
}

.small-text {
  font-size: 10px;
}

ion-col>div {
  background-color: #000000;
  border: solid 1px #df9ef0;
  color: #d18ec5;
  padding: 10px;
}
</style>