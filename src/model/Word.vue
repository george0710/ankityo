<script>
import firebase from 'firebase';
import 'firebase/firestore';

export default {
  name: 'WordModel',
  data: () => ({
    col: firebase.firestore().collection('word'),
    colWoodBook: firebase.firestore().collection('word_book'),
    colTag: firebase.firestore().collection('tag')
  }),

  methods: {
    findAllWord() {
      return this.col.get();
    },
    findByIdWord(id) {
      return this.col.doc(id).get();
    },
    // tagsは ['IT' => '12345678', '英語' => '']みたいな感じで、''の場合は未登録とみなす
    addWord(id, word, tags) {
      console.log(tags);
      var _tags = tags;
      var _this = this;

      _tags.filter(tag => tag.id === '').map(
        function(tag) {
          _this.colTag.add({
            name: tag.name
          })
            .then(function(docRef) {
              console.log('Document written with ID: ', docRef.id);
            })
            .catch(function(error) {
              console.error('Error adding document: ', error);
            });
        }
      );

      //1. 登録済みタグかどうか調べる
      //1. 登録済みだったら、単語、タグID　タグ名を登録
      //1. 登録済みだったら、単語帳に登録

      //1. 未登録だったら、タグを登録
      //1. 未登録だったら、タグIDを取得
      //1. 単語、タグID　タグ名を登録
      //1. 単語帳に登録


      //TODO:: トランザクション
      // this.col.add(word);

      // this.colWoodBook.doc(id).collection('words').add(word);
    },
    snapShotWord(callback){
      return this.col.onSnapshot(callback);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
