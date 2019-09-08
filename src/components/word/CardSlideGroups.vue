<template>
  <v-sheet
    class="mx-auto"
    max-width="800"
    color="grey"
  >
    <v-slide-group
      v-model="model"
    >
      <v-slide-item
        v-for="n in 15"
        :key="n"
        v-slot:default="{ active }"
      >
        <v-card
          color="primary"
          class="ma-4"
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <v-scale-transition>
              <Word
                :word="word"
                @set="openModal"
              />
            </v-scale-transition>
          </v-row>
        </v-card>
      </v-slide-item>
    </v-slide-group>
    <WordModal ref="wordModal" />
  </v-sheet>
</template>

<script>
import Word from '@/components/word/Card.vue';
import WordModal from '@/components/word/Modal.vue';

export default {
  name:'CardSlideGroups',
  components:{
    Word,
    WordModal
  },
  data: () => ({
    model: null,
    word: {title:'test',content:'content'}
  }),
  methods:{
    openModal(word){
      this.$refs.wordModal.open(word);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
