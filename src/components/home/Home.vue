<template>
  <div class="hello">
    <SearchBar />
    <v-layout class="justify-start">
      <h3>
        閲覧履歴
      </h3>
    </v-layout>
    <CardSlideGroups />
    <v-layout class="justify-start">
      <h3>
        今週の閲覧ランキング
      </h3>
    </v-layout>
    <CardSlideGroups />
    </p>
  </div>
</template>

<script>
import SearchBar from '@/components/home/SearchBar.vue';
import CardSlideGroups from '@/components/common/CardSlideGroups.vue';


export default {
  name: 'Home',
  components: {
    SearchBar,
    CardSlideGroups
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
