<template>
  <v-card
    max-width="600"
    class="mx-auto"
  >
    <WordBooksBar
      @changeEditMode="changeEditMode"
    />

    <v-list
      subheader
    >
      <v-list-item
        v-for="wordBook in wordBooks"
        :key="wordBook.id"
        @click="pushWordBookDetail(wordBook.id)"
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

        <v-list-item-action v-show="!isEditMode">
          <v-btn icon>
            <v-icon color="grey lighten-1">
              arrow_forward_ios
            </v-icon>
          </v-btn>
        </v-list-item-action>

        <v-list-item-action
          v-show="isEditMode"
        >
          <v-card-actions
            style="padding: 0px;"
          >
            <div class="flex-grow-1" />
            <v-btn
              icon
              @click="editWordBook(wordBook.id, wordBook.data())"
            >
              <v-icon color="grey lighten-1">
                edit
              </v-icon>
            </v-btn>
            <v-btn
              icon
              @click="deleteConfirmWordBook(wordBook.id, wordBook.data().title)"
            >
              <v-icon color="grey lighten-1">
                delete
              </v-icon>
            </v-btn>
          </v-card-actions>
        </v-list-item-action>
      </v-list-item>
    </v-list>
    <v-divider inset />
    <AddIcon is-word-book />
    <DeleteConfirm
      ref="deleteConfirm"
      @deleteSubmit="deleteSubmit"
    />
    <WordBookForm
      ref="wordBookForm"
    />
  </v-card>
</template>

<script>
import AddIcon from '@/components/common/AddIcon.vue';
import DeleteConfirm from '@/components/common/DeleteConfirm.vue';
import WordBookModel from '@/model/WordBook.vue';
import WordBookForm from '@/components/word/book/Form.vue';
import WordBooksBar from '@/components/word/book/Bar';

export default {
  name: 'WordBook',
  components:{
    WordBooksBar,
    AddIcon,
    DeleteConfirm,
    WordBookForm
  },
  mixins:[ WordBookModel ],
  data: () => ({
    wordBooks: [],
    isEditMode: false
  }),
  created() {
    this.snapShotWordBook(p => this.wordBooks = p.docs );
  },
  methods: {
    changeEditMode(editStatus) {
      this.isEditMode = editStatus;
    },
    pushWordBookDetail(id) {
      if (this.isEditMode) return false;
      this.$router.push(
        {
          name : 'WordList',
          params : {
            id : id
          }
        }
      );
    },
    editWordBook(id, wordBook) {
      wordBook.id = id;
      this.$refs.wordBookForm.open(wordBook);
    },
    deleteConfirmWordBook(id, title) {
      this.$refs.deleteConfirm.open(id, title);
    },
    deleteSubmit(id) {
      this.deleteWordBook(id);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
