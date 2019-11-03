<template>
  <v-card>
    <v-list-item
      three-line
      @click="$emit('set',word)"
    >
      <v-list-item-content
        style="padding-top: 0px;"
      >
        <div class="overline">
          <ChipsNoAction
            v-if="wordId"
            :chips="word.tags"
            :word-id="wordId"
          />
          <ChipsNoAction
            v-if="!wordId"
            :chips="word.tags"
          />
        </div>
        <v-list-item-title
          class="headline mb-1"
          v-text="word.title"
        />
        <v-list-item-subtitle
          v-text="word.description"
        />
      </v-list-item-content>
    </v-list-item>

    <v-card-actions v-if="isAction">
      <div class="flex-grow-1" />
      <v-btn
        icon
        @click="$emit('addWordBook',wordId)"
      >
        <v-icon>save_alt</v-icon>
      </v-btn>
      <v-btn
        icon
        :class="{isGood: 'blue'}"
        @click="toggleGood"
      >
        <v-icon>thumb_up_alt</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import ChipsNoAction from '@/components/chip/ListNoAction.vue';

export default {
  name: 'Word',
  components:{
    ChipsNoAction
  },
  props:{
    word:{
      type: Object,
      required: true,
      value: ''
    },
    isAction: {
      type: Boolean,
      required: false,
      value: false
    },
    isGoodProp: {
      type: Boolean,
      required: false,
      value: false
    },
    wordId: {
      type: String,
      required: false,
      value: ''
    },
  },
  data() {
    return {
      dialog: false,
      isGood: false,
    };
  },
  created() {
    this.isGood = this.isGoodProp;
  },
  methods: {
    toggleGood() {
      this.isGood = !this.isGood;
      if (this.isGood) {
        this.$emit('addGood',this.wordId);
      } else {
        this.$emit('removeGood',this.worId);
      }
    }
  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
