<template>
  <div class="search-detail">
    <v-row>
      <v-col
        align-self="end"
        cols="2"
      >
        <v-icon
          large
          @click="$router.push({ name: 'Home' })"
        >
          keyboard_arrow_left
        </v-icon>
      </v-col>
      <v-col cols="10">
        <v-text-field
          v-model="searchWord"
          class="mx-4"
          flat
          hide-details
          label="キーワード検索"
          prepend-inner-icon="search"
          autofocus
          clearable
          @keyup.enter="search"
        />
      </v-col>
    </v-row>

    <Chips />

    <v-layout class="justify-start">
      <h3>
        検索履歴
      </h3>
    </v-layout>
    <v-row>
      <v-col cols="12">
        <SearchHistory />
      </v-col>
    </v-row>
    </v-row>
  </div>
</template>

<script>
import SearchHistory from '@/components/home/SearchHistory.vue';
import Chips from '@/components/common/Chips.vue';

export default {
  name: 'SearchDetail',
  components: {
    SearchHistory,
    Chips
  },
  data: () => ({
    tags: [
      'Work',
      'Home Improvement',
      'Vacation',
      'Food',
      'Drawers',
      'Shopping',
      'Art',
      'Tech',
      'Creative Writing',
    ],
    searchWord: ''
  }),
  methods: {
    search() {
      //call search api
      this.$router.push({name: 'SearchResult',params : { word: this.searchWord }});
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
