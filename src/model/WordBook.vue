<script>
import firebase from 'firebase';
import 'firebase/firestore';

export default {
  name: 'WordBookModel',
  data: () => ({
    col: firebase.firestore().collection('word_book')
  }),

  methods: {
    async findAllWordBook() {
      const wordBooks = await this.col.get();
      return wordBooks.docs;
    },
    findByIdWordBook(id) {
      return this.col.doc(id).get();
    },
    insertOrUpdate(wordBook) {
      if (wordBook.id) {
        this.col.doc(wordBook.id).update(wordBook);
      } else {
        this.col.add(wordBook);
      }
    },
    snapShotWordBook(callback){
      return this.col.onSnapshot(callback);
    },
    snapShotWordsInWordBook(id, callback){
      return this.col.doc(id).collection('words').onSnapshot(callback);
    },
    deleteWordBook(id) {
      return this.col.doc(id).delete();
    },
    addWordToWordBook(wordBookId, word) {
      this.col.doc(wordBookId).collection('words').add(word);
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
