<template>
  <div class="search-results">
    <SearchBar
      :search-word="searchWord"
      :selected-chips="selectedChips"
    />
    <SelectedChips :selected-chips="selectedChips" />

    <v-container
      class="pa-2"
      fluid
    >
      <v-row>
        <v-col
          v-for="word in words"
          :key="word.title"
          cols="12"
        >
          <Word
            :word="word"
            is-action
            @set="openModal"
          />
        </v-col>
      </v-row>
    </v-container>

    <WordDetail ref="wordModal" />
  </div>
</template>

<script>
import SearchBar from '@/components/home/SearchBar.vue';
import Chips from '@/components/common/Chips.vue';
import Word from '@/components/common/Word.vue';
import WordDetail from '@/components/common/WordDetail.vue';
import SelectedChips from '@/components/home/SelectedChips.vue';

export default {
  name: 'SearchResult',
  components: {
    SearchBar,
    Chips,
    WordDetail,
    Word,
    SelectedChips
  },
  props: {
    searchWord: {
      type: String,
      required: true,
      default: ''
    },
    selectedChips: {
      type: Array,
      required: false,
      default: () => {[];}
    },
  },
  data: () => ({
    words: [
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
