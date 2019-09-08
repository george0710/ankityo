<template>
  <div class="search">
    <div
      @click="goToSearchBar()"
    >
      <v-text-field
        v-model="searchWord"
        class="mx-4"
        flat
        single-line
        label="キーワード検索"
        prepend-inner-icon="search"
        readonly
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  props:{
    searchWord: {
      type: String,
      default: ''
    },
    selectedChips: {
      type: Array,
      required: false,
      default: () => ([])
    }
  },
  data: () => ({
    tags: [
      'Work',
      'Home Improvement',
      'Vacation',
      'Food',
      'Drawers',
      'Shopping',
      'Art',
      'Tech',
      'Creative Writing',
    ],
  }),
  methods:{
    goToSearchBar(){
      this.$router.push(
        {
          name: 'SearchDetail',
          params:{
            searchWord:this.searchWord,
            selectedChips:this.selectedChips
          }
        }
      );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
