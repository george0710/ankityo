<template>
  <v-chip-group
    active-class="primary--text"
    multiple
  >
    <v-chip
      v-for="(chip,index) in chips"
      :key="index"
      style="font-size: 80%;"
    >
      {{ chip.name }}
    </v-chip>
  </v-chip-group>
</template>

<script>
export default {
  name: 'ChipsNoAction',
  props:{
    chips:{
      type:Array,
      require:true,
      default:() => {[];}
    }
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
