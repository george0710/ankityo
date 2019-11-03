<script>
import firebase from 'firebase';
import moment from 'moment';
import 'firebase/firestore';

export default {
  name: 'WordModel',
  data: () => ({
    colWord: firebase.firestore().collection('word'),
    colWoodBook: firebase.firestore().collection('word_book'),
    colTag: firebase.firestore().collection('tag'),
    colUser: firebase.firestore().collection('user')
  }),

  methods: {
    findAllWord() {
      return this.colWord.get();
    },
    findByIdWord(id) {
      return this.colWord.doc(id).get();
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

      const docRef = await this.colWord.add(word);
      word.id = docRef.id;

      //3. ハッシュタグのワードコレクションに追加
      tags.map(function(tag) {
        _this.colTag.doc(tag.id).collection('words').add(word);
      });

      //4. 単語帳に登録
      this.colWoodBook.doc(id).collection('words').add(word);
    },
    snapShotWord(callback) {
      return this.colWord.onSnapshot(callback);
    },
    // TODO:: 全データを取得してからあいまい検索を行っている。firebaseのupdateに期待
    async searchByWord(searchWord) {
      var allWord = await this.colWord.get();
      // allWord = allWord.docs;
      return allWord.docs.filter(function(word) {
        return word.data().title.indexOf(searchWord) !== -1;
      });
    },
    addGoodToWord(userId, wordId) {
      //1. 単語コレクションのお気に入りユーザコレクションにユーザIDを追加
      this.colWord.doc(wordId).collection('goods').doc(userId).set({userId: userId});
      //2. ユーザコレクション(お気に入りしたユーザ自身)のお気に入りコレクションに単語情報を追加
      const word = {
        wordId: wordId,
        createdAt: moment().format('YYYY/MM/DD HH:mm:ss')
      };
      this.colUser.doc(userId).collection('goods').doc(wordId).set(word);
    },
    removeGoodToWord(userId, wordId) {
      //1. 単語コレクションのお気に入りユーザコレクションにユーザIDを削除
      this.colWord.doc(wordId).collection('goods').doc(userId).delete();
      //2. ユーザコレクション(お気に入りしたユーザ自身)のお気に入りコレクションに単語IDを削除
      this.colUser.doc(userId).collection('goods').doc(wordId).delete();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
