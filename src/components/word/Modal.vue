<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      width="600px"
      persistent
    >
      <v-card>
        <v-card-title>
          <span class="headline">{{ word.title }}</span>
        </v-card-title>
        <v-card-text>
          {{ word.description }}
        </v-card-text>
        <v-card-actions>
          <div class="flex-grow-1" />
          <v-btn
            color="green darken-1"
            text
            @click="close()"
          >
            close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: 'WordDetail',
  data() {
    return {
      dialog: false,
      word: ''
    };
  },
  methods:{
    open(word){
      this.word = word;
      this.dialog = true;
    },
    close(){
      this.dialog = false;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
