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

    <v-btn @click="login">
      ログイン
    </v-btn>
    <v-btn @click="logout">
      ログアウト
    </v-btn>
  </div>
</template>

<script>
import SearchBar from '@/components/search/Bar.vue';
import CardSlideGroups from '@/components/word/CardSlideGroups.vue';
import {mapActions} from 'vuex';


export default {
  name: 'Home',
  components: {
    SearchBar,
    CardSlideGroups
  },
  created() {
    // FastClick.attach(document.body);
  },
  methods: {
    ...mapActions(['login','logout'])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html{
  touch-action: manipulation;
}
</style>
