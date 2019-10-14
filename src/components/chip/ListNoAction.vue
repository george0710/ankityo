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
    <div class="flex-grow-1" />

    <span v-if="wordId">
      <span
        v-for="color in colors"
        :key="color"
      >
        <v-btn
          v-if="state[color]"
          :color="color"
          icon
          text
        >
          <v-icon
            x-large
          >
            {{ state[color] }}
          </v-icon>
        </v-btn>
      </span>
    </span>
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
    },
    wordId:{
      type:String,
      require:false,
      default:null,
    },
  },
  data() {
    return {
      colors: ['red', 'yellow', 'green']
    };
  },
  computed: {
    state() {
      var returnState = {};
      if (this.wordId && this.wordId in this.$store.state.words) {
        Object.keys(this.$store.state.words[this.wordId]).map(color => {
          if (this.$store.state.words[this.wordId][color] === 'bookmark') {
            returnState[color] = 'bookmark';
          }
        });
      }
      return returnState;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
