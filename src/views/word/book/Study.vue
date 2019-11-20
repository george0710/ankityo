<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar
          flat
        >
          <v-btn
            icon
            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>{{ wordBookTitle }}</v-toolbar-title>
        </v-toolbar>
        <v-card-text style="margin-top: 15%;">
          <template
            v-for="word in words"
            class="position-absolute"
          >
            <StudyCard
              :key="word.id"
              :word="word.data()"
              :word-id="word.id"
              @changeActiveCard="changeActiveCard"
              @mistakeWord="mistakeWord"
            />
          </template>
          <v-btn
            v-show="isStudyFinished"
            :disabled="mistakeWords.length === 0"
            @click="reStudyOnlyMistake"
          >
            間違えた問題のみ、もう一度解く
          </v-btn>
          <v-btn
            v-show="isStudyFinished"
            @click="reStudy"
          >
            すべての問題をもう一度解く
          </v-btn>
        </v-card-text>
        <v-footer
          fixed
          padless
        >
          <div class="flex-grow-1" />
          <v-bottom-navigation
            height="48"
          >
            <v-btn
              v-for="color in colors"
              :key="color"
              icon
              text
            >
              <v-icon
                :color="color"
                x-large
                @click="changeIcon(color)"
              >
                {{ activeTagStatus[color] }}
              </v-icon>
            </v-btn>
            <v-btn
              disabled
            >
              {{ totalNum - this.words.length }} / {{ totalNum }}
            </v-btn>
          </v-bottom-navigation>
        </v-footer>
      </v-card>
    </v-dialog>
  </v-row>
  </v-card>
  </v-dialog>
  </v-row>
</template>

<script>
import { mapActions } from 'vuex';
import StudyCard from '@/components/word/StudyCard';
export default {
  name:'Study',
  components:{
    StudyCard
  },
  filters:{
    setPage(val){
      return this.words.length;
    }
  },
  data () {
    return {
      words: [],
      _words: [],
      mistakeWords:[],
      wordBookTitle: '',
      totalNum: 0,
      dialog: false,
      colors: ['red', 'yellow', 'green'],
      state: {
        'red': 'bookmark_border',
        'yellow': 'bookmark_border',
        'green': 'bookmark_border'
      },
      defaultState: {
        'red': 'bookmark_border',
        'yellow': 'bookmark_border',
        'green': 'bookmark_border'
      },
      isStudyFinished: false,
    };
  },
  computed: {
    activeWord() {
      if (this.getActiveWordCount() === 0) return {};
      return this.words.slice(-1)[0];
    },
    activeTagStatus() {
      if (this.getActiveWordCount() === 0) return {};
      if (this.activeWord.id in this.$store.state.words) {
        return this.$store.state.words[this.activeWord.id];
      } else {
        return {...this.defaultState, 'id': this.activeWord.id};
      }
    }
  },
  methods:{
    open(words, wordBookTitle, option) {
      // TODO:: 二回目以降の並び替えができていない。
      this.words = [...words];
      this._words = [...words];
      this.wordBookTitle = wordBookTitle;
      this.totalNum = this.getActiveWordCount();
      this.dialog = true;
    },
    changeIcon(color) {
      //一番最後の要素を取得
      const activeTag = this.activeTagStatus[color];
      const toggleTag = activeTag == 'bookmark_border' ? 'bookmark' : 'bookmark_border';
      this.activeTagStatus[color] = toggleTag;
      this.setWord(this.activeTagStatus);
    },
    mistakeWord(wordId) {
      const word = [...this._words].filter(word => word.id === wordId);
      this.mistakeWords.push(word[0]);
    },
    changeActiveCard() {
      this.words.pop();
      this.isStudyFinished = this.getActiveWordCount() === 0;
      this.incrementStudyHistory();
    },
    reStudyOnlyMistake() {
      this.words = [...this.mistakeWords];
      this.resetStudyStatus();
    },
    reStudy() {
      this.words = [...this._words];
      this.resetStudyStatus();
    },
    resetStudyStatus() {
      this.isStudyFinished = false;
      this.totalNum = this.getActiveWordCount();
      this.mistakeWords = [];
    },
    getActiveWordCount() {
      return this.words.length || Object.keys(this.words).length;
    },
    ...mapActions([
      'setWord', 'incrementStudyHistory'
    ])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.word-content {
  margin: 16px;
  width: auto !important;
}

.word-detail {
  /* 次に進む矢印と文字がかぶるので、調整 */
  padding: 0 80px;
}

.position-absolute{
  position: absolute;
}
</style>
