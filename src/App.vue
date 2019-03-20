<template>
  <div id="app">
    <v-app>
      <v-toolbar app>
        <v-icon large left>mdi-chart-line</v-icon>
        <v-toolbar-title>LMS keretrendszerek az iskolarendszerű szakképzésben - kérdőív</v-toolbar-title>
        <v-spacer/>
      </v-toolbar>
      <v-content>
        <v-container fluid>
          <v-layout row wrap justify-center>
            <!-- 1. Melyik megyében / megyékben található az intézmény? -->
            <v-flex xs12 sm12 md12 lg12 xl12>
              <v-card class="mx-auto my-2" color="lightblue" max-width="600" elevation="18" dark>
                <v-img></v-img>
                <v-card-title primary-title>
                  <div>
                    <v-icon class="floatleft" large left>place</v-icon>
                    <span>1. Melyik megyében / megyékben található az intézmény?</span>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-select
                    dark
                    :items="megyekLista"
                    clearable
                    chips
                    multiple
                    label="Megye"
                    outline
                    v-model="megyek"
                  />
                </v-card-actions>
              </v-card>
            </v-flex>
            <!-- 2. Tanulók száma a nappali tagozaton -->
            <v-flex xs12 sm12 md12 lg12 xl12>
              <v-card class="mx-auto my-2" color="lightblue" max-width="600" elevation="18" dark>
                <v-img></v-img>
                <v-card-title primary-title>
                  <div>
                    <v-icon class="floatleft" large left>group_add</v-icon>
                    <span>2. Tanulók száma a nappali tagozaton</span>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-select
                    :items="tanulokSzamaLista"
                    suffix="fő"
                    clearable
                    label="Tanulók száma"
                    outline
                    v-model="tanulokSzama"
                  />
                </v-card-actions>
              </v-card>
            </v-flex>
            <!-- 3. Fő állású tanárok / szakoktatók száma az intézményben -->
            <v-flex xs12 sm12 md12 lg12 xl12>
              <v-card class="mx-auto my-2" color="lightblue" max-width="600" elevation="18" dark>
                <v-img></v-img>
                <v-card-title primary-title>
                  <div>
                    <v-icon class="floatleft" large left>person</v-icon>
                    <span>3. Fő állású tanárok / szakoktatók száma az intézményben</span>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-select
                    :items="tanarokSzamaLista"
                    suffix="fő"
                    clearable
                    label="Tanárok száma"
                    outline
                    v-model="tanarokSzama"
                  />
                </v-card-actions>
              </v-card>
            </v-flex>
            <!-- 4. Főállású rendszergazdák száma -->
            <v-flex xs12 sm12 md12 lg12 xl12>
              <v-card class="mx-auto my-2" color="lightblue" max-width="600" elevation="18" dark>
                <v-img></v-img>
                <v-card-title primary-title>
                  <div>
                    <v-icon class="floatleft" large left>person_add</v-icon>
                    <span>4. Főállású rendszergazdák száma</span>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-select
                    :items="rendszergazdakSzamaLista"
                    suffix="fő"
                    clearable
                    label="Rendszergazdák száma"
                    outline
                    v-model="rendszergazdakSzama"
                  />
                </v-card-actions>
              </v-card>
            </v-flex>
            <!-- 5. Internet kapcsolat letöltési sávszélessége -->
            <v-flex xs12 sm12 md12 lg12 xl12>
              <v-card class="mx-auto my-2" color="lightblue" max-width="600" elevation="18" dark>
                <v-img></v-img>
                <v-card-title primary-title>
                  <div>
                    <v-icon class="floatleft" large left>cloud_download</v-icon>
                    <span>5. Internet kapcsolat letöltési sávszélessége</span>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-text-field
                    type="text"
                    suffix="Mbit/sec"
                    v-model="letoltesiSebesseg"
                    label="Sávszélesség"
                    mask="#######"
                    clearable
                    outline
                  />
                </v-card-actions>
              </v-card>
            </v-flex>
            <!-- 6. Tanulók által használt, LAN hálózatba kötött számítógépek száma -->
            <v-flex xs12 sm12 md12 lg12 xl12>
              <v-card class="mx-auto my-2" color="lightblue" max-width="600" elevation="18" dark>
                <v-img></v-img>
                <v-card-title primary-title>
                  <div>
                    <v-icon class="floatleft" large left>desktop_mac</v-icon>
                    <span>6. Tanulók által használt, LAN hálózatba kötött számítógépek száma</span>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-text-field
                    type="text"
                    suffix="darab"
                    v-model="szamitogepekSzama"
                    label="Számítógépek száma"
                    mask="#######"
                    clearable
                    outline
                  />
                </v-card-actions>
              </v-card>
            </v-flex>
            <!-- 7. Saját telepítésű LMS keretrendszer telepítéséhez és üzemeltetésre rendelkeznek megfelelően képzett szakemberrel -->
            <v-flex xs12 sm12 md12 lg12 xl12>
              <v-card class="mx-auto my-2" color="lightblue" max-width="600" elevation="18" dark>
                <v-img></v-img>
                <v-card-title primary-title>
                  <div>
                    <v-icon large left>mdi-account-question</v-icon>
                    <span>7. Saját telepítésű LMS keretrendszer telepítéséhez és üzemeltetésre rendelkeznek megfelelően képzett szakemberrel</span>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-switch
                    color="success"
                    class="bordered pl-4 pt-4"
                    v-model="lmsEE"
                    :label="`${lmsEE ? 'Igen' : 'Nem'}`"
                  ></v-switch>
                </v-card-actions>
              </v-card>
            </v-flex>
            <!-- 8. Saját telepítésű LMS keretrendszer üzemeltetésre rendelkeznek megfelelő hardver eszközökkel? -->
            <v-flex xs12 sm12 md12 lg12 xl12>
              <v-card class="mx-auto my-2" color="lightblue" max-width="600" elevation="18" dark>
                <v-img></v-img>
                <v-card-title primary-title>
                  <div>
                    <v-icon large left>mdi-lan-connect</v-icon>
                    <span>8. Saját telepítésű LMS keretrendszer üzemeltetésre rendelkeznek megfelelő hardver eszközökkel?</span>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-switch
                    color="success"
                    class="bordered pl-4 pt-4"
                    v-model="lmsHW"
                    :label="`${lmsHW ? 'Igen' : 'Nem'}`"
                  ></v-switch>
                </v-card-actions>
              </v-card>
            </v-flex>
            <!-- 9.	Üzemeltetnek LMS keretrendszert az intézmény LAN hálózatán? -->
            <v-flex xs12 sm12 md12 lg12 xl12>
              <v-card class="mx-auto my-2" color="lightblue" max-width="600" elevation="18" dark>
                <v-img></v-img>
                <v-card-title primary-title>
                  <div>
                    <v-icon large left>mdi-auto-fix</v-icon>
                    <span>9. Üzemeltetnek LMS keretrendszert az intézmény LAN hálózatán?</span>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-switch
                    color="success"
                    class="bordered pl-4 pt-4"
                    v-model="lmsLAN"
                    :label="`${lmsLAN ? 'Igen' : 'Nem'}`"
                    @change="lmsValasztott=''; lmsHasznalloTanarok='';"
                  ></v-switch>
                </v-card-actions>
              </v-card>
            </v-flex>
            <!-- 10. Melyik LMS rendszert / rendszereket választották? -->
            <v-flex xs12 sm12 md12 lg12 xl12>
              <v-card class="mx-auto my-2" color="lightblue" max-width="600" elevation="18" dark>
                <v-img></v-img>
                <v-card-title primary-title>
                  <div>
                    <v-icon class="floatleft" large left>school</v-icon>
                    <span
                      :class="`${lmsLAN ? '' : 'disabledTitle'}`"
                    >10. Melyik LMS rendszert / rendszereket választották?</span>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-select
                    dark
                    :items="lmsRendszerekLista"
                    clearable
                    chips
                    :disabled="!lmsLAN"
                    multiple
                    label="LMS"
                    outline
                    v-model="lmsValasztott"
                  />
                </v-card-actions>
              </v-card>
            </v-flex>
            <!-- 11. A főállású tanárok / szakoktatók közül hányan használják aktívan az iskola hálózatán működő LMS keretrendszert? -->
            <v-flex xs12 sm12 md12 lg12 xl12>
              <v-card class="mx-auto my-2" color="lightblue" max-width="600" elevation="18" dark>
                <v-img></v-img>
                <v-card-title primary-title>
                  <div>
                    <v-icon class="floatleft" large left>people</v-icon>
                    <span
                      :class="`${lmsLAN ? '' : 'disabledTitle'}`"
                    >11. A főállású tanárok / szakoktatók közül hányan használják aktívan az iskola hálózatán működő LMS keretrendszert?</span>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-select
                    dark
                    :items="lmsHasznalloTanarokLista"
                    clearable
                    :disabled="!lmsLAN"
                    label="Használók száma"
                    outline
                    v-model="lmsHasznalloTanarok"
                  />
                </v-card-actions>
              </v-card>
            </v-flex>
            <!-- 12. Tanárok / szakoktatók használnak NEM saját üzemeltetésű LMS keretrendszert? -->
            <v-flex xs12 sm12 md12 lg12 xl12>
              <v-card class="mx-auto my-2" color="lightblue" max-width="600" elevation="18" dark>
                <v-img></v-img>
                <v-card-title primary-title>
                  <div>
                    <v-icon large left>school</v-icon>
                    <span>12. Tanárok / szakoktatók használnak NEM saját üzemeltetésű LMS keretrendszert?</span>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-switch
                    color="success"
                    class="bordered pl-4 pt-4"
                    v-model="kulsoLMS"
                    :label="`${kulsoLMS ? 'Igen' : 'Nem'}`"
                    @change="kulsoLMSHasznalloTanarok='';"
                  ></v-switch>
                </v-card-actions>
              </v-card>
            </v-flex>
            <!-- 13.  A főállású tanárok / szakoktatók közül hányan használnak aktívan NEM saját üzemeltetésű LMS keretrendszert? -->
            <v-flex xs12 sm12 md12 lg12 xl12>
              <v-card class="mx-auto my-2" color="lightblue" max-width="600" elevation="18" dark>
                <v-img></v-img>
                <v-card-title primary-title>
                  <div>
                    <v-icon class="floatleft" large left>people</v-icon>
                    <span
                      :class="`${kulsoLMS ? '' : 'disabledTitle'}`"
                    >13. A főállású tanárok / szakoktatók közül hányan használnak aktívan NEM saját üzemeltetésű LMS keretrendszert?</span>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-select
                    dark
                    :items="lmsHasznalloTanarokLista"
                    clearable
                    :disabled="!kulsoLMS"
                    label="Használók száma"
                    outline
                    v-model="kulsoLMSHasznalloTanarok"
                  />
                </v-card-actions>
              </v-card>
            </v-flex>
            <!-- MENTÉS -->
            <v-flex xs12 sm12 md12 lg12 xl12>
              <v-card class="mx-auto my-2" color="lightblue" max-width="600" elevation="18" dark>
                <v-img></v-img>
                <v-card-title primary-title>
                  <div>
                    <v-icon class="floatleft" large left>save</v-icon>
                    <span>A kérdőív adatainak mentéséhez az 1-6. kérdéseket legyen szíves megadni.</span>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn class="mx-auto" dark color="red" @click="add()">Kérdőív adatainak mentése</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
      <v-footer/>
    </v-app>
  </div>
</template>

<script  lang="ts">
import { Component, Vue } from "vue-property-decorator";
import firebase, { storage } from "firebase";
import db from "@/firebaseApp";

@Component({
  firestore: {
    locations: db.collection("kvk2019")
  }
})
export default class App extends Vue {
  private megyekLista: string[] = [
    "Budapest",
    "Bács-Kiskun megye",
    "Baranya megye",
    "Békés megye",
    "Borsod-Abaúj-Zemplén megye",
    "Csongrád megye",
    "Fejér megye",
    "Győr-Moson-Sopron megye",
    "Hajdú-Bihar megye",
    "Heves megye",
    "Jász-Nagykun-Szolnok megye",
    "Komárom-Esztergom megye",
    "Nógrád megye",
    "Pest megye",
    "Somogy megye",
    "Szabolcs-Szatmár-Bereg megye",
    "Tolna megye megye",
    "Vas megye",
    "Veszprém megye",
    "Zala megye"
  ];

  private tanulokSzamaLista: string[] = [
    "1-50",
    "51-100",
    "101-150",
    "151-200",
    "201-500",
    "501-1000",
    "1001-2000",
    "2001-"
  ];

  private tanarokSzamaLista: string[] = [
    "1-40",
    "41-80",
    "81-120",
    "121-150",
    "151-200",
    "200-"
  ];

  private lmsRendszerekLista: string[] = [
    "Moodle",
    "CANVAS",
    "Ilias",
    "Blackboard Learn",
    "Sakai",
    "Egyéb"
  ];

  private igenNem: string[] = ["Igen", "Nem"];

  private rendszergazdakSzamaLista: string[] = ["0", "1", "2", "3-"];

  private lmsHasznalloTanarokLista: string[] = [
    "1-5",
    "6-10",
    "11-20",
    "21-30",
    "31-40",
    "41-50",
    "51-100",
    "101-"
  ];

  private megyek: string[] = [];
  private tanulokSzama: string = "";
  private tanarokSzama: string = "";
  private rendszergazdakSzama: string = "";
  private letoltesiSebesseg: string = "";
  private szamitogepekSzama: string = "";
  private lmsEE: boolean = false;
  private lmsHW: boolean = false;
  private lmsLAN: boolean = false;
  private lmsValasztott: string[] = [];
  private lmsHasznalloTanarok = "";
  private kulsoLMS: boolean = false;
  private kulsoLMSHasznalloTanarok = "";

  // Új elem hozzáadása az adatbázishoz
  private add(): void {
    if (this.megyek.length === 0 ||
        this.tanulokSzama === "" ||
        this.tanarokSzama === "" ||
        this.rendszergazdakSzama === "" ||
        this.letoltesiSebesseg === "" ||
        this.szamitogepekSzama === "") {
            alert("A kérdőív adatainak mentéséhez az 1-6. kérdéseket legyen szíves megadni!");
            return;
        }
    const obj = {} as any;
    obj.createdAt = new Date();
    obj.megyek = this.megyek;
    obj.tanulokSzama = this.tanulokSzama;
    obj.tanarokSzama = this.tanarokSzama;
    obj.rendszergazdakSzama = this.rendszergazdakSzama;
    obj.letoltesiSebesseg = this.letoltesiSebesseg;
    obj.szamitogepekSzama = this.szamitogepekSzama;
    obj.lmsEE = this.lmsEE;
    obj.lmsHW = this.lmsHW;
    obj.lmsLAN = this.lmsLAN;
    obj.lmsValasztott = this.lmsValasztott;
    obj.lmsHasznalloTanarok = this.kulsoLMSHasznalloTanarok;
    obj.kulsoLMS = this.kulsoLMS;
    obj.kulsoLMSHasznalloTanarok = this.kulsoLMSHasznalloTanarok;

    db.collection("valaszok1") // Elem feltöltése az adatbázisba
      .add(obj)
      .then(docRef => {
        alert(
          `Adatok mentése sikeres!\nRekord azonosítója: ${
            docRef.id
          }\nKöszönöm a kérdőív kitöltését!`
        );
      })
      .catch(error => {
        alert(`Hiba az adatok mentésekor: ${error}`);
        return;
      });
    this.megyek = [];
    this.tanulokSzama = "";
    this.tanarokSzama = "";
    this.rendszergazdakSzama = "";
    this.letoltesiSebesseg = "";
    this.szamitogepekSzama = "";
    this.lmsEE = false;
    this.lmsHW = false;
    this.lmsLAN = false;
    this.lmsValasztott = [];
    this.lmsHasznalloTanarok = "";
    this.kulsoLMS = false;
    this.kulsoLMSHasznalloTanarok = "";
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  background-color: #eeeeee;
}
.myLink {
  text-decoration: none;
}
.floatleft {
  float: left;
}

.bordered {
  border: 2px solid #a5a5a5;
  border-radius: 4px;
}

.disabledTitle {
  color: rgba(175, 175, 175, 0.5);
}
</style>
