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
    // tagsは [
    //   id : '12345678',
    //   name : 'IT'
    // ],
    // [
    //   id : '',
    //   name : '英語'
    // ]
    // みたいな感じできて、''の場合は未登録とみなす
    async addWord(id, word, tags) {
      var _tags = tags;
      var _this = this;

      //TODO:: トランザクション

      //1. 未登録のハッシュタグの登録
      await Promise.all(
        _tags.map(async function(tag, index) {
          if (tag.id !== '') return;
          const docRef = await _this.colTag.add({
            name: tag.name
          });
          tags[index].id = docRef.id;
        })
      );
      //2. 単語の新規作成
      word.tags = tags;
      // TODO:: 単語とタグを一気に追加するときにタグのコレクション化する（現状配列で登録されている）

      const docRef = await this.col.add(word);
      word.id = docRef.id;

      //3. ハッシュタグのワードコレクションに追加
      tags.map(function(tag) {
        _this.colTag.doc(tag.id).collection('words').add(word);
      });

      //4. 単語帳に登録
      this.colWoodBook.doc(id).collection('words').add(word);
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
