<template>
  <v-layout row wrap>
    <v-flex xs12 class="flag-flex">
      <v-card class="flag-card">
        <v-card-media :src="country.flag" height="200px" width="300px" class="flag">
        </v-card-media>
        <v-card-title primary-title class="grow">
          <div>
            <div class="headline mb-0">{{ country.name }}</div>
            <div>{{ country.capital }}</div>
            <div>{{ !!country.population ? country.population.toLocaleString() : '' }}</div>
            <div>{{ country.subregion }}</div>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-layout align-center justify-space-between row>
            <v-btn flat color="deep-purple">Share</v-btn>
            <v-btn flat color="deep-purple">Explore</v-btn>
          </v-layout>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script lang="ts">
import {
  Component,
  Prop,
  Vue
} from "nuxt-property-decorator"

@Component({})
export default class Card extends Vue {
  @Prop() country
}
</script>
<style scoped>
.card {
  font-family: Lato, "Segoe UI", Tahoma, Geneva, Verdana,
    sans-serif;
}

.flag {
  border: 0.25rem solid #f8f6fb;
  margin-left: 12px;
}

.flag-card {
  background: #e8e6eb;
  border: 0.05rem solid whitesmoke;
  display: flex;
  flex-direction: column;
  margin: 0.15rem;
  min-height: 460px;
  padding-top: 1rem;
}

.flag-flex {
  width: 320px;
}
</style>
