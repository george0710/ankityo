<template>
  <div
    class="d-flex justify-center"
    style="height: 5px;"
  >
    <vue-swing
      class="pa-2"
      @throwout="throwout"
      @throwin="throwin"
    >
      <vue-flip
        active-click
        width="400px"
        height="200px"
      >
        <div slot="front">
          <div
            class="card"
          >
            {{ word.title }}
          </div>
        </div>
        <div slot="back">
          <div
            class="card"
          >
            {{ word.description }}
          </div>
        </div>
      </vue-flip>
    </vue-swing>
  </div>
  </vue-flip>
  </vue-swing>
  </div>
</template>
<script>
import VueSwing from 'vue-swing';
import VueFlip from 'vue-flip';

export default {
  name: 'StudyCard',
  components: {
    'vue-swing': VueSwing,
    'vue-flip': VueFlip
  },
  props:{
    word:{
      type: Object,
      required: true,
      value: ''
    },
  },
  data() {
    return {
    };
  },
  methods:{
    throwout(){
      console.log(this.word);
      console.log('throwout');
    },
    throwin(){
      console.log('throwin');
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.card {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #6cc4d7;
  color: white;
  border: double;
  width: 400px;
  height: 200px;
}
</style>
