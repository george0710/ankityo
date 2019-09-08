<template>
  <v-row justify="center">
    <ModalTest ref="modal" />

    <v-btn
      color="primary"
      dark
      @click="modalOpen('1')"
    >
      Open Dialog
    </v-btn>

    <v-btn
      color="primary"
      dark
      @click="modalOpen('2')"
    >
      Open Dialog
    </v-btn>
  </v-row>
</template>
<script>
import ModalTest from '@/components/ModalTest.vue';
export default {
  components: {
    ModalTest
  },
  data () {
    return {
    };
  },
  methods: {
    modalOpen(msg) {
      this.$refs.modal.open(msg);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
