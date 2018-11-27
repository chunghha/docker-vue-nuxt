<template>
  <v-layout row wrap>
    <v-flex xs12 class="flag-flex">
      <v-hover>
        <v-card
          slot-scope="{ hover }"
          :class="`elevation-${hover ? 12 : 2}`"
          class="flag-card">
          <v-img :src="country.flag" height="200px" width="300px" class="flag">
            <v-expand-transition>
              <div
                v-if="hover"
                class="d-flex transition-fast-in-fast-out grey lighten-4 v-card--reveal
                  display-2 indigo--text text-xs-center" style="height: 100%;">
                {{ country.capital }}
              </div>
            </v-expand-transition>
          </v-img>
          <v-card-title primary-title class="grow">
            <div>
              <div class="headline mb-0">{{ country.name }}</div>
              <div class="country-data">{{ country.capital }}</div>
              <div class="country-data">{{ !!country.population ? country.population.toLocaleString() : '' }}</div>
              <div class="country-data">{{ country.subregion }}</div>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-layout align-center justify-space-between row>
              <v-btn flat color="deep-purple">Share</v-btn>
              <v-btn flat color="deep-purple" @click="dialog = true">Explore</v-btn>
            </v-layout>
          </v-card-actions>
        </v-card>
      </v-hover>
    </v-flex>

    <v-dialog
      v-model="dialog"
      max-width="370"
    >
      <v-card>
        <v-card-title class="headline">Use Google's location service?</v-card-title>

        <v-card-text>
          <div>Latitude  : {{ !!country.latlng ? country.latlng[0] : '' }}</div>
          <div>Longitude : {{ !!country.latlng ? country.latlng[1] : '' }}</div>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            flat="flat"
            @click="dialog = false"
          >
            Disagree
          </v-btn>

          <v-btn
            color="green darken-1"
            flat="flat"
            @click="dialog = false"
          >
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </v-layout>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component({})
export default class Card extends Vue {
  @Prop()
  country;
  dialog = false;
}
</script>
<style scoped>
.card {
  font-family: 'IBM Plex Sans', Lato, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.country-data {
  font-family: 'IBM Plex Sans', Lato, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 16px;
}

.flag {
  border: 2px solid #fbfbfb;
  margin-left: 10px;
}

.flag-card {
  background: #f4f4f4;
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  margin: 0.3rem;
  min-height: 460px;
  padding-top: 1rem;
}

.flag-flex {
  width: 320px;
}

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .92;
  position: absolute;
  width: 100%;
}
</style>
