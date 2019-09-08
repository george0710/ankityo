<template>
  <div>
    <FormWordBook
      v-if="isWordBook"
      ref="modal"
    />
    <FormWord
      v-if="isWord"
      ref="modal"
    />
    <v-btn
      dark
      fab
      right
      color="pink"
      fixed
      bottom
      style="bottom: 56px;"
      @click="openModal()"
    >
      <v-icon>add</v-icon>
    </v-btn>
  </div>
</template>

<script>
//TODO; モーダルで表示するコンポーネントを切り離す。
import FormWordBook from '@/components/wordbook/FormWordBook.vue';
import FormWord from '@/components/wordbook/FormWord.vue';
export default {
  name: 'AddIcon',
  components: {
    FormWordBook,
    FormWord
  },
  props:{
    isWordBook:{
      type:Boolean,
      required: false,
      value:false
    },
    isWord:{
      type:Boolean,
      required: false,
      value:false
    }
  },
  methods:{
    openModal() {
      this.$refs.modal.open();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
