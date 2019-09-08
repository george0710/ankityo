<template>
  <div>
    <v-layout class="justify-start">
      <h3>
        選択中のタグ
      </h3>
    </v-layout>
    <Chips
      :chips="selectedChips"
      close
      @chip-close="closeChip"
    />
  </div>
</template>

<script>
import Chips from '@/components/chip/List.vue';

export default {
  name: 'SelectedChips',
  components: {
    Chips
  },
  props:{
    selectedChips:{
      type: Array,
      required: false,
      default: () => {[];}
    },
  },
  methods: {
    addChip(chip) {
      this.selectedChips.push(chip);
    },
    closeChip(index) {
      this.selectedChips.splice(index,1);
    }

  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
