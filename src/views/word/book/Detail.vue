<template>
  <div class="text-center">
    <v-btn
      @click="$router.push({name:'WordList',params:{id:'a'}})"
    >
      単語一覧へ
    </v-btn>

    <Checkbox :checkbox="randomCheck" />
    <Checkbox :checkbox="reverseCheck" />

    <v-btn
      rounded
      color="primary"
      dark
      @click="studyStart()"
    >
      学習する
    </v-btn>
  </div>
</template>

<script>
import Init from '@/components/Init.vue';
import Checkbox from '@/components/common/Checkbox.vue';

export default {
  name: 'WordBookDetail',
  components:{
    Checkbox
  },
  mixins:[Init],
  props:{
    id: {
      type: String,
      required: true,
      default: ''
    }
  },
  data: () => ({
    randomCheck : {
      state : false,
      label : '順番をランダムで出題',
    },
    reverseCheck : {
      state : false,
      label : 'カード裏面を先に表示',
    },
  }),
  methods:{
    studyStart(){
      console.log(this.randomCheck.state);
      this.$router.push({name:'Study',params:{'id':this.$props.id}});
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
