<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      width="600px"
    >
      <v-card>
        <v-card-title>
          <span class="headline">title</span>
        </v-card-title>
        <v-card-text>
          {{ msg }}
        </v-card-text>
        <v-card-actions>
          <div class="flex-grow-1" />
          <v-btn
            color="green darken-1"
            text
            @click="close()"
          >
            Disagree
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="close()"
          >
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
  name : 'ModalTest',
  data () {
    return {
      dialog: false,
      msg: ''
    };
  },
  methods: {
    open(msg) {
      this.dialog = true;
      this.msg = msg;
    },
    close() {
      this.dialog = false;
      this.msg = '';
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
