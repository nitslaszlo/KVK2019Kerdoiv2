<template>
  <div id="app">
    <v-app>
      <v-toolbar app>
        <v-icon large left>mdi-chart-line</v-icon>
        <v-toolbar-title>LMS keretrendszerek az iskolarendszerű szakképzésben - kérdőív tanárok/szakoktatók számára</v-toolbar-title>
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
                    <span>1. Melyik megyében / megyékben található az intézmény, ahol tanít?</span>
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
            <!-- 2. Melyik korcsoportba tarozik? -->
            <v-flex xs12 sm12 md12 lg12 xl12>
              <v-card class="mx-auto my-2" color="lightblue" max-width="600" elevation="18" dark>
                <v-img></v-img>
                <v-card-title primary-title>
                  <div>
                    <v-icon class="floatleft" large left>directions_walk</v-icon>
                    <span>2. Melyik korcsoportba tartozik?</span>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-select
                    :items="korcsoportokLista"
                    suffix="év"
                    clearable
                    label="Korcsoport"
                    outline
                    v-model="korcsoport"
                  />
                </v-card-actions>
              </v-card>
            </v-flex>
            <!-- 3. Milyen típusú tantárgyakat tanít? -->
            <v-flex xs12 sm12 md12 lg12 xl12>
              <v-card class="mx-auto my-2" color="lightblue" max-width="600" elevation="18" dark>
                <v-img></v-img>
                <v-card-title primary-title>
                  <div>
                    <v-icon class="floatleft" large left>mdi-library</v-icon>
                    <span>3. Milyen típusú tantárgyakat tanít?</span>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-select
                    :items="tantargyakTipusaLista"
                    clearable
                    chips
                    multiple
                    label="Tanárgyak típusa"
                    outline
                    v-model="tantargyakTipusa"
                  />
                </v-card-actions>
              </v-card>
            </v-flex>
            <!-- 4. Milyen képzési formában tanít -->
            <v-flex xs12 sm12 md12 lg12 xl12>
              <v-card class="mx-auto my-2" color="lightblue" max-width="600" elevation="18" dark>
                <v-img></v-img>
                <v-card-title primary-title>
                  <div>
                    <v-icon class="floatleft" large left>mdi-weather-sunset-down</v-icon>
                    <span>4. Milyen képzési formábnan tanít?</span>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-select
                    :items="kepzesiFormaLista"
                    suffix="fő"
                    clearable
                    chips
                    multiple
                    label="Képzési forma"
                    outline
                    v-model="kepzesiForma"
                  />
                </v-card-actions>
              </v-card>
            </v-flex>
            <!-- 5. LMS igen/nem -->
            <v-flex xs12 sm12 md12 lg12 xl12>
              <v-card class="mx-auto my-2" color="lightblue" max-width="600" elevation="18" dark>
                <v-img></v-img>
                <v-card-title primary-title>
                  <div>
                    <v-icon class="floatleft" large left>mdi-auto-fix</v-icon>
                    <span>5. Használ az Ön által tanított csoportokban LMS keretrendszert (pl.: Moodle, Ilias, Canvas, stb.)?</span>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-switch
                    color="success"
                    class="bordered pl-4 pt-4"
                    v-model="lmsYorN"
                    :label="`${lmsYorN ? 'Igen' : 'Nem'}`"
                  ></v-switch>
                </v-card-actions>
              </v-card>
            </v-flex>
            <!-- 6. Melyik LMS-t használja? -->
            <v-flex xs12 sm12 md12 lg12 xl12>
              <v-card class="mx-auto my-2" color="lightblue" max-width="600" elevation="18" dark>
                <v-img></v-img>
                <v-card-title primary-title>
                  <div>
                    <v-icon class="floatleft" large left>school</v-icon>
                    <span
                      :class="`${lmsYorN ? '' : 'disabledTitle'}`"
                    >6. Melyik LMS rendszert / rendszereket használja?</span>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-select
                    dark
                    :items="lmsRendszerekLista"
                    clearable
                    chips
                    :disabled="!lmsYorN"
                    multiple
                    label="LMS"
                    outline
                    v-model="lmsHasznal"
                  />
                </v-card-actions>
              </v-card>
            </v-flex>

            <!-- 7.	Hány éve használ LMS keretrendszert munkája támogatására -->
            <v-flex xs12 sm12 md12 lg12 xl12>
              <v-card class="mx-auto my-2" color="lightblue" max-width="600" elevation="18" dark>
                <v-img></v-img>
                <v-card-title primary-title>
                  <div>
                    <v-icon large left>mdi-account-question</v-icon>
                    <span
                      :class="`${lmsYorN ? '' : 'disabledTitle'}`"
                    >7. Hány éve használ LMS keretrendszert munkája támogatására?</span>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-select
                    :items="evekLista"
                    suffix="éve"
                    clearable
                    :disabled="!lmsYorN"
                    label="Évek száma"
                    outline
                    v-model="lsmHanyEve"
                  />
                </v-card-actions>
              </v-card>
            </v-flex>
            <!-- 8.	Milyen gyakran használja az LMS keretrendszert a szorgalmi időszakban? -->
            <v-flex xs12 sm12 md12 lg12 xl12>
              <v-card class="mx-auto my-2" color="lightblue" max-width="600" elevation="18" dark>
                <v-img></v-img>
                <v-card-title primary-title>
                  <div>
                    <v-icon large left>mdi-lan-connect</v-icon>
                    <span
                      :class="`${lmsYorN ? '' : 'disabledTitle'}`"
                    >8. Milyen gyakran használja az LMS keretrendszert a szorgalmi időszakban?</span>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-select
                    :items="gyakorisagLista"
                    suffix
                    clearable
                    :disabled="!lmsYorN"
                    label="Használat gyakorisága"
                    outline
                    v-model="lsmHasznalatGyakorisaga"
                  />
                </v-card-actions>
              </v-card>
            </v-flex>
            <!-- 9.	A következő LMS szolgáltatásokat milyen gyakran alkalmazza az Ön által tanított csoportokban? -->
            <v-flex xs12 sm12 md12 lg12 xl12>
              <v-card class="mx-auto my-2" color="lightblue" max-width="600" elevation="18" dark>
                <v-img></v-img>
                <v-card-title primary-title>
                  <div>
                    <v-icon large left>mdi-auto-fix</v-icon>
                    <span
                      :class="`${lmsYorN ? '' : 'disabledTitle'}`"
                    >9. A következő LMS szolgáltatásokat milyen gyakran alkalmazza az Ön által tanított csoportoknál?</span>
                  </div>
                </v-card-title>
                <!-- Quiz -->
                <v-card-actions>
                  <v-select
                    :items="gyakorisagLista2"
                    suffix
                    clearable
                    :disabled="!lmsYorN"
                    label="Tesztek tanulói teljesítmény méréséhez"
                    outline
                    v-model="tesztGyakorisaga"
                  />
                </v-card-actions>
                <!-- Assignment -->
                <v-card-actions>
                  <v-select
                    :items="gyakorisagLista2"
                    suffix
                    clearable
                    :disabled="!lmsYorN"
                    label="Tanulói munkák (órai / házi) feltöltése"
                    outline
                    v-model="feladatGyakorisaga"
                  />
                </v-card-actions>
                <!-- Forum -->
                <v-card-actions>
                  <v-select
                    :items="gyakorisagLista2"
                    suffix
                    clearable
                    :disabled="!lmsYorN"
                    label="Fórumok használata (aszinkron kommunikáció)"
                    outline
                    v-model="forumGyakorisaga"
                  />
                </v-card-actions>
                <!-- File -->
                <v-card-actions>
                  <v-select
                    :items="gyakorisagLista2"
                    suffix
                    clearable
                    :disabled="!lmsYorN"
                    label="Meglévő digitális tananyagok megosztása"
                    outline
                    v-model="tananyagGyakorisaga"
                  />
                </v-card-actions>
                <!-- Page -->
                <v-card-actions>
                  <v-select
                    :items="gyakorisagLista2"
                    suffix
                    clearable
                    :disabled="!lmsYorN"
                    label="Digitális tananyagok készítése az LMS keretrendszeren belül"
                    outline
                    v-model="oldalGyakorisaga"
                  />
                </v-card-actions>
                <!-- URL -->
                <v-card-actions>
                  <v-select
                    :items="gyakorisagLista2"
                    suffix
                    clearable
                    :disabled="!lmsYorN"
                    label="Hivatkozások (URL címek) megosztása"
                    outline
                    v-model="urlGyakorisaga"
                  />
                </v-card-actions>
                <!-- Glossary -->
                <v-card-actions>
                  <v-select
                    :items="gyakorisagLista2"
                    suffix
                    clearable
                    :disabled="!lmsYorN"
                    label="Fogalomtár készítése"
                    outline
                    v-model="fogalomtarGyakorisaga"
                  />
                </v-card-actions>
                <!-- Feedback -->
                <v-card-actions>
                  <v-select
                    :items="gyakorisagLista2"
                    suffix
                    clearable
                    :disabled="!lmsYorN"
                    label="Tanulói visszajelzések"
                    outline
                    v-model="visszajelzesGyakorisaga"
                  />
                </v-card-actions>
                <!-- Choice -->
                <v-card-actions>
                  <v-select
                    :items="gyakorisagLista2"
                    suffix
                    clearable
                    :disabled="!lmsYorN"
                    label="Tanulói választások"
                    outline
                    v-model="valasztasGyakorisaga"
                  />
                </v-card-actions>
                <!-- Database -->
                <v-card-actions>
                  <v-select
                    :items="gyakorisagLista2"
                    suffix
                    clearable
                    :disabled="!lmsYorN"
                    label="Adatbázisok létrehozása / kezelése"
                    outline
                    v-model="adatbazisGyakorisaga"
                  />
                </v-card-actions>
                <!-- Wiki -->
                <v-card-actions>
                  <v-select
                    :items="gyakorisagLista2"
                    suffix
                    clearable
                    :disabled="!lmsYorN"
                    label="Tanulói együttműködésen alapuló feladatok megoldása (pl. Wiki oldalak készítése)"
                    outline
                    v-model="wikiGyakorisaga"
                  />
                </v-card-actions>
              </v-card>
            </v-flex>
            <!-- 10. Mennyire tartja hasznos eszköznek az LMS keretrendszer alkalmazását a nappali képzésben? -->
            <v-flex xs12 sm12 md12 lg12 xl12>
              <v-card class="mx-auto my-2" color="lightblue" max-width="600" elevation="18" dark>
                <v-img></v-img>
                <v-card-title primary-title>
                  <div>
                    <v-icon class="floatleft" large left>school</v-icon>
                    <span
                      :class="`${lmsYorN ? '' : 'disabledTitle'}`"
                    >10. Mennyire tartja hasznos eszköznek az LMS keretrendszer alkalmazását a nappali képzésben?</span>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-select
                    dark
                    :items="hasznossagLista"
                    clearable
                    :disabled="!lmsYorN"
                    label="Nappali képzésben"
                    outline
                    v-model="hasznosNappali"
                  />
                </v-card-actions>
              </v-card>
            </v-flex>
            <!-- 11. Mennyire tartja hasznos eszköznek az LMS keretrendszer alkalmazását az esti képzésben? -->
            <v-flex xs12 sm12 md12 lg12 xl12>
              <v-card class="mx-auto my-2" color="lightblue" max-width="600" elevation="18" dark>
                <v-img></v-img>
                <v-card-title primary-title>
                  <div>
                    <v-icon class="floatleft" large left>school</v-icon>
                    <span
                      :class="`${lmsYorN ? '' : 'disabledTitle'}`"
                    >11. Mennyire tartja hasznos eszköznek az LMS keretrendszer alkalmazását az esti képzésben?</span>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-select
                    dark
                    :items="hasznossagLista"
                    clearable
                    :disabled="!lmsYorN"
                    label="Esti képzésben"
                    outline
                    v-model="hasznosEsti"
                  />
                </v-card-actions>
              </v-card>
            </v-flex>
            <!-- 12. Általánosságban mennyire elégedett az Ön által használt LMS keretrendszerrel? -->
            <v-flex xs12 sm12 md12 lg12 xl12>
              <v-card class="mx-auto my-2" color="lightblue" max-width="600" elevation="18" dark>
                <v-img></v-img>
                <v-card-title primary-title>
                  <div>
                    <v-icon class="floatleft" large left>people</v-icon>
                    <span
                      :class="`${lmsYorN ? '' : 'disabledTitle'}`"
                    >12. Általánosságban mennyire elégedett az Ön által használt LMS keretrendszerrel?</span>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-select
                    dark
                    :items="elegedettsegiLista"
                    clearable
                    :disabled="!lmsYorN"
                    label="Elégedettség"
                    outline
                    v-model="lmsElegedett"
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
                    <span>A kérdőív adatainak mentéséhez az 1-5. kérdésekre a választ legyen szíves megadni.</span>
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

  private korcsoportokLista: string[] = [
    "20-29",
    "30-39",
    "40-49",
    "50-59",
    "60-65",
    "65-feletti"
  ];

  private tantargyakTipusaLista: string[] = ["Közismereti", "Szakmai"];

  private kepzesiFormaLista: string[] = ["Nappali oktatás", "Esti oktatás"];

  private lmsRendszerekLista: string[] = [
    "Moodle",
    "CANVAS",
    "Ilias",
    "Blackboard Learn",
    "Sakai",
    "Egyéb"
  ];

  private evekLista: string[] = ["1", "2", "3", "4", "5-10", "10-"];

  private gyakorisagLista: string[] = [
    "Hetente több, mint 1 alkalommal",
    "Hetente 1 alkalommal",
    "Havonta 1-2 alkalommal",
    "2-3 havonta",
    "Szinte alíg"
  ];

  private gyakorisagLista2: string[] = [
    "Hetente legalább 1 alkalommal",
    "Havonta 1-2 alkalommal",
    "2-3 havonta",
    "Szinte alig",
    "Soha"
  ];

  private hasznossagLista: string[] = [
    "Nagyon hasznos",
    "Hasznos",
    "Kevésbé hasznos",
    "Nem hasznos",
    "Egyátalán nem hasznos"
  ];

  private elegedettsegiLista: string[] = [
    "Nagyon elégedett vagyok",
    "Elégedett vagyok",
    "Semleges",
    "Kissé elégedetlen vagyok",
    "Elégedetlen vagyok"
  ];

  private megyek: string[] = []; // 1
  private korcsoport: string = ""; // 2
  private tantargyakTipusa: string[] = []; // 3
  private kepzesiForma: string[] = []; // 4
  private lmsYorN: boolean = false; // 5
  private lmsHasznal: string[] = []; // 6
  private lsmHanyEve: string = ""; // 7
  private lsmHasznalatGyakorisaga: string = ""; // 8
  private tesztGyakorisaga: string = ""; // 9.1
  private feladatGyakorisaga: string = ""; // 9.2
  private forumGyakorisaga: string = ""; // 9.3
  private tananyagGyakorisaga: string = ""; // 9.4
  private oldalGyakorisaga: string = ""; // 9.5
  private urlGyakorisaga: string = ""; // 9.6
  private fogalomtarGyakorisaga: string = ""; // 9.7
  private visszajelzesGyakorisaga: string = ""; // 9.8
  private valasztasGyakorisaga: string = ""; // 9.9
  private adatbazisGyakorisaga: string = ""; // 9.10
  private wikiGyakorisaga: string = ""; // 9.11
  private hasznosNappali: string = ""; // 10
  private hasznosEsti: string = ""; // 11
  private lmsElegedett: string = ""; // 12

  // Új elem hozzáadása az adatbázishoz
  private add(): void {
    if (
      this.megyek.length === 0 ||
      this.korcsoport === "" ||
      this.tantargyakTipusa.length === 0 ||
      this.kepzesiForma.length === 0
    ) {
      alert(
        "A kérdőív adatainak mentéséhez az 1-5. kérdéseket legyen szíves megadni!"
      );
      return;
    }
    if (
      this.lmsYorN &&
      (this.lmsHasznal.length === 0 ||
        this.lsmHanyEve === "" ||
        this.lsmHasznalatGyakorisaga === "" ||
        this.tesztGyakorisaga === "" ||
        this.feladatGyakorisaga === "" ||
        this.forumGyakorisaga === "" ||
        this.tananyagGyakorisaga === "" ||
        this.oldalGyakorisaga === "" ||
        this.urlGyakorisaga === "" ||
        this.fogalomtarGyakorisaga === "" ||
        this.visszajelzesGyakorisaga === "" ||
        this.valasztasGyakorisaga === "" ||
        this.adatbazisGyakorisaga === "" ||
        this.wikiGyakorisaga === "" ||
        this.hasznosNappali === "" ||
        this.hasznosEsti === "" ||
        this.lmsElegedett === "")
    ) {
      alert(
        "A kérdőív adatainak mentéséhez az 7-12. kérdéseket legyen szíves megadni!"
      );
      return;
    }

    // Firestore objektum összeállítása
    const obj = {} as any;
    obj.K00_createdAt = new Date();
    obj.K01_megyek = this.megyek;
    obj.K02_korcsoport = this.korcsoport;
    obj.K03_tanargyakTipusa = this.tantargyakTipusa;
    obj.K04_kepzesiForma = this.kepzesiForma;
    obj.K05_lmsYorN = this.lmsYorN;
    if (this.lmsYorN) {
      obj.K06_lmsHasznal = this.lmsHasznal;
      obj.K07_lsmHanyEve = this.lsmHanyEve;
      obj.K08_lsmHasznalatGyakorisaga = this.lsmHasznalatGyakorisaga;
      obj.K09_tesztGyakorisaga = this.tesztGyakorisaga;
      obj.K10_feladatGyakorisaga = this.feladatGyakorisaga;
      obj.K11_forumGyakorisaga = this.forumGyakorisaga;
      obj.K12_tananyagGyakorisaga = this.tananyagGyakorisaga;
      obj.K13_oldalGyakorisaga = this.oldalGyakorisaga;
      obj.K14_urlGyakorisaga = this.urlGyakorisaga;
      obj.K15_fogalomtarGyakorisaga = this.fogalomtarGyakorisaga;
      obj.K16_visszajelzesGyakorisaga = this.visszajelzesGyakorisaga;
      obj.K17_valasztasGyakorisaga = this.valasztasGyakorisaga;
      obj.K18_adatbazisGyakorisaga = this.adatbazisGyakorisaga;
      obj.K19_wikiGyakorisaga = this.wikiGyakorisaga;
      obj.K20_hasznosNappali = this.hasznosNappali;
      obj.K21_hasznosEsti = this.hasznosEsti;
      obj.K22_lmsElegedett = this.lmsElegedett;
    }

    db.collection("valaszok2") // Elem feltöltése az adatbázisba
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
    this.korcsoport = "";
    this.tantargyakTipusa = [];
    this.kepzesiForma = [];
    this.lmsYorN = false;
    this.lmsHasznal = [];
    this.lsmHanyEve = "";
    this.lsmHasznalatGyakorisaga = "";
    this.tesztGyakorisaga = "";
    this.feladatGyakorisaga = "";
    this.forumGyakorisaga = "";
    this.tananyagGyakorisaga = "";
    this.oldalGyakorisaga = "";
    this.urlGyakorisaga = "";
    this.fogalomtarGyakorisaga = "";
    this.visszajelzesGyakorisaga = "";
    this.valasztasGyakorisaga = "";
    this.adatbazisGyakorisaga = "";
    this.wikiGyakorisaga = "";
    this.hasznosNappali = "";
    this.hasznosEsti = "";
    this.lmsElegedett = "";
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
