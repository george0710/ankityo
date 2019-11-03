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
          :key="word.id"
          cols="12"
          class="padding4"
        >
          <Word
            :word-id="word.id"
            is-action
            :word="word.data()"
            @set="openDetailModal"
            @addWordBook="showSelectWordBook"
            @addGood="addGood"
            @removeGood="removeGood"
          />
        </v-col>
      </v-row>
    </v-container>

    <WordModal ref="wordModal" />
    <WordBookSelect ref="wordBookSelectModal" />
  </div>
</template>

<script>
import SearchBar from '@/components/search/Bar.vue';
import Word from '@/components/word/Card.vue';
import WordModal from '@/components/word/Modal.vue';
import WordBookSelect from '@/components/word/book/Select.vue';
import SelectedChips from '@/components/chip/SelectedList.vue';
import WordModel from '@/model/Word.vue';
import UserModel from '@/model/User.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'SearchResult',
  components: {
    SearchBar,
    WordModal,
    Word,
    SelectedChips,
    WordBookSelect
  },
  mixins :[WordModel, UserModel],
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
    words: [],
    userGoods: [],
    dialog: false,
    isShowSelectWordBook: false
  }),
  async mounted() {
    this.words = await this.searchByWord(this.searchWord);
    var userGoods = await this.getGoods(this.$store.state.user.uid);
    // this.words.docs.map(function(word){
    //   userGoods.docs.
    //   word.
    //
    //   word.isGood =
    // })
  },
  methods:{
    openDetailModal(word){
      this.$refs.wordModal.open(word);
    },
    showSelectWordBook(word) {
      this.isShowSelectWordBook = true;
      this.$refs.wordBookSelectModal.open(word);
    },
    submitWordBook() {
      this.isShowSelectWordBook = false;
    },
    addGood(wordId) {
      this.addGoodToWord(this.$store.state.user.uid, wordId);
    },
    removeGood(wordId) {
      this.removeGoodToWord(this.$store.state.user.uid, wordId);
    },
    ...mapGetters(['uid'])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.padding4 {
  padding: 4px;
}
</style>
