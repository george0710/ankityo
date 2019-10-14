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
          color="primary"
        >
          <v-btn
            icon
            dark
            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>{{ wordBookTitle }}</v-toolbar-title>
          <div class="flex-grow-1" />
          <v-toolbar-items>
            <v-btn
              dark
              text
              @click="dialog = false"
            >
              Save
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>

        <v-carousel
          v-model="number"
          :show-arrows="true"
          :continuous="false"
          hide-delimiters
          class="word-content"
        >
          <div
            v-for="word in words"
            :key="word.id"
          >
            <v-carousel-item
              v-if="isReverse"
            >
              <v-sheet
                color="secondary"
                height="100%"
                tile
              >
                <v-row
                  class="fill-height word-detail"
                  align="center"
                  justify="center"
                >
                  {{ word.data().description }}
                </v-row>
              </v-sheet>
            </v-carousel-item>
            <v-carousel-item>
              <v-sheet
                color="primary"
                height="100%"
                tile
              >
                <v-row
                  class="fill-height word-detail"
                  align="center"
                  justify="center"
                >
                  {{ word.data().title }}
                </v-row>
              </v-sheet>
            </v-carousel-item>
            <v-carousel-item
              v-if="!isReverse"
            >
              <v-sheet
                color="secondary"
                height="100%"
                tile
              >
                <v-row
                  class="fill-height word-detail"
                  align="center"
                  justify="center"
                >
                  {{ word.data().description }}
                </v-row>
              </v-sheet>
            </v-carousel-item>
          </div>
        </v-carousel>
        <v-row
          align="center"
          justify="space-around"
          style="
              margin-right: 0px;
              margin-left: 0px;
          "
        >
          <span
            v-for="color in colors"
            :key="color"
          >
            <v-btn
              :color="color"
              icon
              text
            >
              <v-icon
                x-large
                @click="changeIcon(color)"
              >
                {{ state[color] }}
              </v-icon>
            </v-btn>
          </span>
          {{ number | setPage }} / {{ totalNum }}
        </v-row>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name:'Study',
  filters:{
    setPage(val){
      return parseInt((val+2)/2);
    }
  },
  data () {
    return {
      words: [],
      wordBookTitle: '',
      number: 0,
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
  watch:{
    words(){
      this.totalNum = this.words.length || Object.keys(this.words).length;
    },
    // ページがめくられたとき発火
    number(newNumber, oldNumber) {
      const activeWordId = this.words[parseInt(this.number/2)].id;
      if (activeWordId in this.$store.state.words) {
        Object.assign(this.state, this.$store.state.words[activeWordId]);
      } else {
        //オブジェクトのコピー
        Object.assign(this.state , this.defaultState);
      }

      // 単語名=>回答を開いたときに学習単語数をインクリメント
      if (newNumber%2 == 1 && oldNumber < newNumber)
        this.incrementStudyHistory();
    }
  },
  methods:{
    open(words, wordBookTitle, option) {
      // TODO:: 二回目以降の並び替えができていない。
      console.log(words[0].data().title);
      this.words = words;
      this.wordBookTitle = wordBookTitle;
      // 最初から学習
      this.number = 0;
      // 最初の単語の覚えたかステータスを設定
      const activeWordId = this.words[parseInt(this.number/2)].id;
      if (activeWordId in this.$store.state.words) {
        Object.assign(this.state, this.$store.state.words[activeWordId]);
      }

      this.isReverse = option.isReverse;
      this.dialog = true;
    },
    changeIcon(color) {
      const activeWordId = this.words[parseInt(this.number/2)].id;
      var style = {};
      if ((activeWordId in this.$store.state.words)) {
        Object.assign(style, this.$store.state.words[activeWordId]);
      } else {
        Object.assign(style, this.defaultState);
      }
      const activeColor = style[color];
      const changeColor = activeColor=='bookmark_border'?'bookmark':'bookmark_border';
      style.id = activeWordId;
      style[color] = changeColor;
      this.state[color] = changeColor;
      this.setWord(style);
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
</style>
