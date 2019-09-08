<template>
  <div class="word-list">
    <WordListBar
      :id="id"
      title="test"
    />
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
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <WordModal
      ref="wordModal"
      is-word
    />
    <AddIcon
      is-word
    />
  </div>
</template>

<script>
import WordModal from '@/components/word/Modal.vue';
import WordListBar from '@/components/word/Bar';
import AddIcon from '@/components/common/AddIcon';
export default {
  name: 'WordList',
  components: {
    WordModal,
    WordListBar,
    AddIcon
  },
  props: {
    id: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    cards: [
      { title: 'Pre-fab homes', content: 'content'},
      { title: 'Favorite road trips', content: 'content'},
      { title: 'Best airlines', content: 'content'},
    ],
    dialog: false,
    isSearchActive: false,
    word: ''
  }),
  created() {
    console.log(this.$props.id);
  },
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
