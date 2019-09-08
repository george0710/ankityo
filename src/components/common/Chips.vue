<template>
  <v-chip-group
    active-class="primary--text"
    multiple
  >
    <v-chip
      v-for="(chip,index) in chips"
      :close="close"
      @click:close="$emit('chip-close',index)"
      @click="$emit('chip-click',chip)"
    >
      {{ chip.name }}
    </v-chip>
  </v-chip-group>
</template>

<script>
export default {
  name: 'Chips',
  props:{
    chips:{
      require:true,
      value:[]
    },
    close:{
      type:Boolean,
      require:false,
      value:false
    },
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
