<template>
  <v-checkbox
    v-model="checkbox.state"
    :label="checkbox.label"
    color="indigo"
    hide-details
  />
</template>

<script>
export default {
  name: 'Checkbox',
  props:{
    checkbox : {
      type : Object,
      required : true,
      default : () => {null;}
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
