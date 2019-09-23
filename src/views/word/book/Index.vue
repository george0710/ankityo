<template>
  <v-card
    max-width="600"
    class="mx-auto"
  >
    <v-list
      subheader
    >
      <v-list-item
        v-for="wordBook in wordBooks"
        :key="wordBook.id"
        @click="$router.push(
          {
            name : 'WordList',
            params : {
              id : wordBook.id
            }
          }
        )"
      >
        <v-list-item-avatar>
          <v-icon
            class="blue white--text"
          >
            assignment
          </v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-text="wordBook.data().title" />
        </v-list-item-content>

        <v-list-item-action>
          <v-btn icon>
            <v-icon color="grey lighten-1">
              arrow_forward_ios
            </v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
    <v-divider inset />

    <AddIcon is-word-book />
  </v-card>
</template>

<script>
import AddIcon from '@/components/common/AddIcon.vue';
import WordBookModel from '@/model/WordBook.vue';

export default {
  name: 'WordBook',
  components:{
    AddIcon
  },
  mixins:[ WordBookModel ],
  data: () => ({
    wordBooks: [],
  }),
  created() {
    this.snapShotWordBook(p => this.wordBooks = p.docs );
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
