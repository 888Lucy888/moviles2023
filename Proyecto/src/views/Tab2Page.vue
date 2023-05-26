<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Monitoreo de Usuarios</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-grid>
        <ion-row>
          <ion-col>
            <div class="title">Nombre</div>
          </ion-col>
          <ion-col>
            <div class="title">Apellido</div>
          </ion-col>
          <ion-col>
            <div class="title">Carrera</div>
          </ion-col>
          <ion-col>
            <div class="title">Semestre</div>
          </ion-col>
        </ion-row>
        <ion-row v-for="(item, index) in listaUsuarios" :key="index">
          <ion-col>
            <div class="small-text">{{ item.name }}</div>
          </ion-col>
          <ion-col>
            <div class="small-text">{{ item.lastname }}</div>
          </ion-col>
          <ion-col>
            <div class="small-text">{{ item.career }}</div>
          </ion-col>
          <ion-col>
            <div class="small-text">{{ item.semester }}</div>
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
    const starCountRef = ref(db, "user/");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      var cont = 0
      snapshot.forEach(element => {
        this.listaKeys[cont] = element.key
        this.listaUsuarios[cont] = element.toJSON()
        cont++
      });
    });
    console.log("lista de usuarios", this.listaUsuarios)
  },
  data() {
    return {
      listaUsuarios: [{ career: "", name: "", semester: "" }],
      listaKeys: []
    }
  }
};
</script>

<style>
.small-text {
  font-size: 12px;
}

.title {
  font-size: 14px;
}

ion-col>div {
  background-color: #000000;
  border: solid 1px #df9ef0;
  color: #d18ec5;
  padding: 8px;
}
</style>