<template>
<v-layout row>
  <v-flex xs12>
    <v-card>
      <v-toolbar dark color="primary" class="toolbar">
       <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-toolbar-title class="white--text">Docker Vue Nuxt</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>search</v-icon>
        </v-btn>
      </v-toolbar>
    </v-card>
    <div class="cards">
      <Card v-for="country in countries" :key="country.name" :country="country"></Card>
    </div>
  </v-flex>
</v-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { State } from 'vuex-class';
import Card from '~/components/Card.vue';

@Component({
  components: {
    Card
  }
})
export default class extends Vue {
  @State countries;
}
</script>
<style scoped>
.header {
  font-family: 'IBM Plex Sans', Lato, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.cards {
  display: flex;
  flex-wrap: wrap;
}

.toolbar {
  background: #7986cb;
}
</style>
