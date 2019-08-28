<template>
  <div class="search-results">
    <SearchBar :word="word" />
    <Chips />

    <v-container
      class="pa-2"
      fluid
    >
      <v-row>
        <v-col
          v-for="card in cards"
          :key="card.title"
          cols="12"
        >
          <v-card @click="openModal(card)">
            <v-card-title
              class="fill-height align-end"
              v-text="card.title"
            />
            <v-card-actions>
              <div class="flex-grow-1" />

              <v-btn icon>
                <v-icon>thumb_up_alt</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>save_alt</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <WordDetail ref="wordModal" />
  </div>
</template>

<script>
import SearchBar from '@/components/home/SearchBar.vue';
import Chips from '@/components/common/Chips.vue';
import WordDetail from '@/components/common/WordDetail.vue';

export default {
  name: 'SearchResult',
  components: {
    SearchBar,
    Chips,
    WordDetail
  },
  props: ['word'],
  data: () => ({
    cards: [
      { title: 'Pre-fab homes', content: 'content'},
      { title: 'Favorite road trips', content: 'content'},
      { title: 'Best airlines', content: 'content'},
    ],
    dialog: false
  }),
  methods:{
    openModal(word){
      this.$refs.wordModal.open(word);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
