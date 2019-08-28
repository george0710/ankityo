<template>
  <div class="search">
    <div
      @click="$router.push({ name: 'SearchDetail'})"
    >
      <v-text-field
        v-model="word"
        class="mx-4"
        flat
        single-line
        label="キーワード検索"
        prepend-inner-icon="search"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  props:['word'],
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
  })
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
