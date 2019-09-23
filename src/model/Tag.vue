<script>
import firebase from 'firebase';
import 'firebase/firestore';

export default {
  name: 'TagModel',
  data: () => ({
    col: firebase.firestore().collection('tag')
  }),

  methods: {
    findAllTag() {
      return this.col.get();
    },
    findByIdTag(id) {
      return this.col.doc(id).get();
    },
    addTag(wordBook) {
      this.col.add(wordBook);
    },
    snapShotTag(callback){
      return this.col.onSnapshot(callback);
    },
    snapShotWordsInTag(id, callback){
      return this.col.doc(id).collection('words').onSnapshot(callback);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
