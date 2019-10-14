<template>
  <div class="word-list">
    <WordListBar
      :id="id"
      :title="wordBook.title"
    />

    <Checkbox
      :checkbox="random"
    />

    <Checkbox
      :checkbox="reverse"
    />

    <Checkbox
      :checkbox="red"
    />

    <Checkbox
      :checkbox="yellow"
    />

    <Checkbox
      :checkbox="green"
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
            :word-id="word.id"
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
    <Study ref="modal" />

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
import Study from '@/views/word/book/Study.vue';
import { mapActions } from 'vuex';

export default {
  name: 'WordList',
  components: {
    WordModal,
    WordListBar,
    AddIcon,
    Checkbox,
    WordCard,
    Study
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
    },
    random: {
      state : false,
      label : '順番をランダムで出題'
    },
    reverse: {
      state : false,
      label : 'カード裏面を先に表示',
    },
    red: {
      state : false,
      label : '赤のみ表示',
    },
    yellow: {
      state : false,
      label : '黄色のみ表示',
    },
    green: {
      state : false,
      label : '青のみ表示',
    },

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
      var sendWords = this.words.concat();
      if (this.random.state) {
        // ランダムにシャッフル
        sendWords = this.randomSort(sendWords);
      }
      if (this.red.state || this.yellow.state || this.green.state) {
        sendWords = this.fillterWords(sendWords);
      }
      const option = {
        isReverse: this.reverse.state
      };

      this.$refs.modal.open(sendWords, this.wordBook.title, option);
    },
    randomSort(sendWords) {
      for(var i = sendWords.length - 1; i > 0; i--){
        var r = Math.floor(Math.random() * (i + 1));
        var tmp = sendWords[i];
        sendWords[i] = sendWords[r];
        sendWords[r] = tmp;
      }
      return sendWords;
    },
    fillterWords(sendWords) {
      const storeWord = this.$store.state.words;
      const _this = this;
      return sendWords.filter(word => {
        return word.id in storeWord && (
          (_this.red.state && storeWord[word.id].red === 'bookmark') ||
          (_this.yellow.state && storeWord[word.id].yellow === 'bookmark') ||
          (_this.green.state && storeWord[word.id].green === 'bookmark')
        );
      });
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
