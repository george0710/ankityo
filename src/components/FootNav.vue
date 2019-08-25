<template>
  <v-app id="foot-nav">
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
        <v-btn>
          <v-icon>home</v-icon>
        </v-btn>

        <v-btn>
          <v-icon>search</v-icon>
        </v-btn>

        <v-btn>
          <v-icon>timeline</v-icon>
        </v-btn>

        <v-btn>
          <v-icon>settings_applications</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </v-footer>
  </v-app>
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
<style scoped>
</style>
