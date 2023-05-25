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
            <div class="title">Usuario</div>
          </ion-col>
          <ion-col>
            <div class="title">Nombre</div>
          </ion-col>
          <ion-col>
            <div class="title">Carrera</div>
          </ion-col>
          <ion-col>
            <div>Semestre</div>
          </ion-col>
        </ion-row>
        <ion-row v-for="(item, index) in listaUsuarios" :key="index">
          <ion-col>
            <div class="small-text">{{ listaKeys[index] }}</div>
          </ion-col>
          <ion-col>
            <div class="small-text">{{ item.nombre }}</div>
          </ion-col>
          <ion-col>
            <div class="small-text">{{ item.carrera }}</div>
          </ion-col>
          <ion-col>
            <div class="small-text">{{ item.semestre }}</div>
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
    const starCountRef = ref(db, "usuarios/");
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
      listaUsuarios: [{ carrera: "", nombre: "", semestre: "" }],
      listaKeys: []
    }
  }
};
</script>

<style>
.small-text {
  font-size: 14px;
}

.title {
  font-size: 14px;
}

ion-col>div {
  background-color: #000000;
  border: solid 1px #df9ef0;
  color: #d18ec5;
  padding: 10px;
}
</style>