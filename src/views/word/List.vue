<template>
  <div class="word-list">
    <WordListBar
      :id="id"
      :title="wordBook.title"
    />

    <Checkbox
      :checkbox="{
        state : false,
        label : '順番をランダムで出題',
      }"
    />

    <Checkbox
      :checkbox="{
        state : false,
        label : 'カード裏面を先に表示',
      }"
    />

    <v-btn
      rounded
      color="primary"
      dark
      @click="studyStart()"
    >
      学習する
    </v-btn>

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
          <WordCard
            :word="word.data()"
            @set="openModal"
          />
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
import Checkbox from '@/components/common/Checkbox.vue';
import WordCard from '@/components/word/Card.vue';

import WordBookModel from '@/model/WordBook.vue';
import { mapActions } from 'vuex';

export default {
  name: 'WordList',
  components: {
    WordModal,
    WordListBar,
    AddIcon,
    Checkbox,
    WordCard
  },
  mixins :[WordBookModel],
  props: {
    id: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    words: [],
    dialog: false,
    isSearchActive: false,
    wordBook: {
      title: ''
    }
  }),
  created() {
    this.setWordBookId(this.id);
  },
  mounted() {
    this.findByIdWordBook(this.id).then(doc => {
      this.wordBook = doc.data();
    });
    this.snapShotWordsInWordBook(this.id, p => this.words = p.docs);
  },
  methods:{
    openModal(word){
      this.$refs.wordModal.open(word);
    },
    studyStart(){
      this.$router.push({name:'Study',params:{'id':this.$props.id}});
    },
    ...mapActions([
      'setWordBookId'
    ])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.padding4 {
  padding: 4px;
}
</style>
