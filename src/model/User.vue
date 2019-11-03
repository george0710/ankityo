<script>
import firebase from 'firebase';
import 'firebase/firestore';

export default {
  name: 'User',
  data: () => ({
    col: firebase.firestore().collection('user')
  }),

  methods: {
    insertOrUpdate(user) {
      this.col.doc(user.uid).set(user);
    },
    async getGoods(userId) {
      return await this.col.doc(userId).collection('goods').get();
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
