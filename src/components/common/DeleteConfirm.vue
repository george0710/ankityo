<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">
          確認
        </v-card-title>
        <v-card-text>
          {{ targetName }} を本当に削除してもよろしいですか
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            キャンセル
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="submit"
          >
            削除する
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data () {
    return {
      dialog: false,
      targetId: '',
      targetName: '',
    };
  },
  methods: {
    open(id, targetName) {
      this.dialog = true;
      this.targetId = id;
      this.targetName = targetName;
    },
    submit() {
      this.$emit('deleteSubmit', this.targetId);
      //作成成功アラート
      this.dialog = false;
    }
  }
};
</script>
