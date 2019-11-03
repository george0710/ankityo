<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      scrollable
      max-width="400px"
    >
      <v-card>
        <v-form
          ref="form"
          v-model="valid"
        >
          <v-card-title>単語帳を選択してください</v-card-title>
          <v-divider />
          <v-card-text style="height: 300px;">
            <v-radio-group
              v-model="radioValue"
              column
              :rules="radioRules"
              required
            >
              <v-radio
                v-for="wordBook in wordBooks"
                :label="wordBook.data().title"
                :value="wordBook.id"
              />
            </v-radio-group>
          </v-card-text>
          <v-divider />
          <v-card-actions>
            <div class="flex-grow-1" />

            <v-btn
              color="blue darken-1"
              text
              @click="close"
            >
              キャンセル
            </v-btn>
            <v-btn
              color="blue darken-1"
              text
              @click="validate"
            >
              追加
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import WordBookModel from '@/model/WordBook.vue';

export default {
  mixins :[WordBookModel],
  data () {
    return {
      radioValue: '',
      dialog: false,
      wordBooks: [],
      valid: true,
      radioRules: [
        v => !!v || '単語帳を選択してください'
      ],
      word: null,
    };
  },
  async mounted() {
    this.wordBooks = await this.findAllWordBook();
  },
  methods: {
    open(word) {
      this.valid = true;
      this.dialog = true;
      this.word = word;
    },
    close() {
      this.$refs.form.reset();
      this.dialog = false;
    },
    validate () {
      if (this.$refs.form.validate()) {
        this.submit();
      }
    },
    submit() {
      this.addWordToWordBook(this.radioValue, this.word);
      this.close();
    },
  }
};
</script>
