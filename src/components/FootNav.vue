<template>
  <v-footer
    fixed
    padless
  >
    <div class="flex-grow-1" />
    <v-bottom-navigation
      :value="activeBtn"
      grow
      color="teal"
      height="48"
    >
      <v-btn
        @click="$router.push({name: 'Home'})"
      >
        <v-icon>home</v-icon>
      </v-btn>

      <v-btn
        @click="$router.push({name: 'ChartContainer'})"
      >
        <v-icon>timeline</v-icon>
      </v-btn>

      <v-btn
        @click="$router.push({name: 'WordBook'})"
      >
        <v-icon>book</v-icon>
      </v-btn>

      <v-btn
        @click="$router.push({name: 'User'})"
      >
        <v-icon>perm_identity</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-footer>
</template>
<script>
export default {
  name: 'FootNav',
  data () {
    return {
      activeBtn: 1
    };
  }
};
</script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped />
</template>
