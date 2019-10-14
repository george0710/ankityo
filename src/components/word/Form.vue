<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <v-card>
        <v-card-title>
          <span class="headline">単語作成</span>
        </v-card-title>
        <v-card-text style="padding-bottom: 0px;">
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-form
                  ref="form"
                  v-model="valid"
                >
                  <v-text-field
                    v-model="word.title"
                    :rules="titleRules"
                    label="単語名"
                    required
                  />
                  <v-textarea
                    v-model="word.description"
                    :rules="descriptionRules"
                    label="説明"
                    required
                  />
                  <Tag
                    v-model="tags"
                    :rules="tagsRules"
                    required
                  />

                  <v-btn
                    color="darken-1"
                    text
                    @click="cancel"
                  >
                    キャンセル
                  </v-btn>

                  <v-btn
                    :disabled="!valid"
                    color="success"
                    class="mr-4"
                    @click="validate"
                  >
                    作成
                  </v-btn>
                </v-form>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>

import WordModel from '@/model/Word.vue';
import Tag from '@/components/common/InputTags.vue';
import { mapGetters } from 'vuex';


export default {
  name:'FormWord',
  components:{
    Tag
  },
  mixins:[ WordModel ],

  data: () => ({
    dialog: false,
    word: {
      userId: '',
      title: '',
      description:''
    },
    tags: [],
    valid: true,
    titleRules: [
      v => !!v || '単語名を入力してください',
      v => (v && v.length <= 20) || '単語名は20文字以内で入力してください',
    ],
    descriptionRules: [
      v => !!v || '説明を入力してください'
    ],
    tagsRules: [
      v => (v && v.length >= 1) || 'タグを選択してください'
    ],
  }),
  computed: {
    ...mapGetters(['uid'])
  },
  methods: {
    open() {
      this.dialog = true;
      word = {
        title: '',
        description:''
      };
      tags = [];
    },
    submit() {
      this.word.userId = this.uid;
      // TODO:: なんかおかしい
      this.addWord(this.$store.state.wordBookId, this.word, this.tags.tags);
      //作成成功アラート
      this.dialog = false;
    },
    validate () {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
        this.submit();
      }
    },
    cancel() {
      this.dialog = false;
      this.$refs.form.reset();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
