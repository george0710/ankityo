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
          dark
        >
          <v-btn
            icon
            dark
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
              @changeActiveCard="changeActiveCard"
            />
          </template>
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
                {{ state[color] }}
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
      isReverse: false
    };
  },
  methods:{
    open(words, wordBookTitle, option) {
      // TODO:: 二回目以降の並び替えができていない。
      this.words = words;
      this.wordBookTitle = wordBookTitle;
      // 最初の単語の覚えたかステータスを設定
      const activeWord= this.words.slice(-1)[0];
      if (activeWord.id in this.$store.state.words) {
        Object.assign(this.state, this.$store.state.words[activeWord.id]);
      }
      this.isReverse = option.isReverse;
      this.dialog = true;
      this.totalNum = words.length || Object.keys(words).length;
    },
    changeIcon(color) {
      const activeWord= this.words.slice(-1)[0];
      var style = {};
      if ((activeWord.id in this.$store.state.words)) {
        Object.assign(style, this.$store.state.words[activeWord.id]);
      } else {
        Object.assign(style, this.defaultState);
      }
      const activeColor = style[color];
      const changeColor = activeColor=='bookmark_border'?'bookmark':'bookmark_border';
      style.id = activeWord.id;
      style[color] = changeColor;
      this.state[color] = changeColor;
      this.setWord(style);
    },
    changeActiveCard() {
      this.words.pop();
      this.incrementStudyHistory();
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
