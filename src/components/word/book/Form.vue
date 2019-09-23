<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <v-card>
        <v-card-title>
          <span class="headline">単語帳作成</span>
        </v-card-title>
        <v-card-text style="padding-bottom: 0px;">
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  v-model="wordBook.title"
                  label="単語帳の名前"
                  required
                />
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <div class="flex-grow-1" />
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            キャンセル
          </v-btn>
          <v-btn
            color="primary"
            text
            @click="submit()"
          >
            作成
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import WordBookModel from '@/model/WordBook.vue';
import { mapGetters } from 'vuex';

export default {
  name:'FormWordBook',
  mixins:[ WordBookModel ],
  data: () => ({
    dialog: false,
    wordBook: {
      title: '',
      userId: '',
    }
  }),
  computed: {
    ...mapGetters(['uid'])
  },
  methods: {
    open() {
      this.dialog = true;
    },
    submit() {
      this.wordBook.userId = this.uid;
      this.addWordBook(this.wordBook);
      //作成成功アラート
      this.dialog = false;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
