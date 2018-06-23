<template>
  <v-layout>
    <v-flex xs12>
      <v-card>
        <v-card-media :src="'https://robohash.org/' + person.first_name + '_' + person.last_name" height="300px">
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{ person.first_name }}</h3>
            <div>{{ person.contact.email }}</div>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
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
  @Prop() person
}
</script>
<style scoped>
.card {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana,
    sans-serif;
  padding: 1rem;
  margin: 0.25rem;
  border: 0.25rem solid gainsboro;
}
</style>
