<template>
  <div style="margin-bottom:56px">
    <v-app-bar
      color="accent-4"
      fixed
    >
      <v-btn
        icon
        @click="$router.push({name:'WordBook',params:{id:id}})"
      >
        <v-icon>arrow_back_ios</v-icon>
      </v-btn>

      <v-toolbar-title>{{ title }}</v-toolbar-title>

      <div class="flex-grow-1" />

      <!-- <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn> -->
    </v-app-bar>
  </div>
</template>

<script>

export default {
  name: 'WordListBar',
  props:{
    title: {
      type: String,
      required: true,
      default: ''
    },
    id: {
      type: String,
      required: true,
      default: ''
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
