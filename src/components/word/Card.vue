<template>
  <v-card @click="$emit('set',word)">
    <v-card-title
      class="fill-height align-end"
      v-text="word.title"
    />
    <v-card-text
      v-text="word.description"
    />
    <v-card-actions v-if="isAction">
      <div class="flex-grow-1" />
      <v-btn icon>
        <v-icon>thumb_up_alt</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>save_alt</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'Word',
  props:{
    word:{
      type: Object,
      required: true,
      value: ''
    },
    isAction:{
      type: Boolean,
      required: false,
      value: false
    },
  },
  data() {
    return {
      dialog: false
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
