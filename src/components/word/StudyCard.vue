<template>
  <div
    class="d-flex justify-center"
    style="height: 5px;"
  >
    <vue-swing
      class="pa-2"
      :config="config"
      @dragmove="dragmove"
      @throwoutend="throwoutend"
    >
      <vue-flip
        active-click
        width="400px"
        height="200px"
        class="default-card-color"
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
      config: {
        allowedDirections: [
          VueSwing.Direction.LEFT,
          VueSwing.Direction.RIGHT,
        ],
        throwOutConfidence:function (offset) {
          // スワイプして、OK,NGの判断の領域を縮めている
          return (offset < -150 || 150 < offset)? 1 : 0;
        }
      }
    };
  },
  methods:{
    dragmove(e) {
      if (VueSwing.Direction.RIGHT === e.throwDirection && e.throwOutConfidence === 1){
        e.target.classList.add('ok-card-color');
      } else if (VueSwing.Direction.LEFT === e.throwDirection && e.throwOutConfidence === 1) {
        e.target.classList.add('ng-card-color');
      } else if (e.throwOutConfidence != 1) {
        e.target.classList.remove('ok-card-color');
        e.target.classList.remove('ng-card-color');
      }
    },
    throwoutend(e) {
      this.$emit('changeActiveCard', this.word.id);
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.card {
  display: flex;
  align-items: center;
  justify-content: center;
  border: ridge;
  border-radius: 10px;
  width: 400px;
  height: 200px;
}

.ok-card-color {
  background-color: rgba(147, 228, 114, 0.5) !important;
  border-radius: 10px;
}

.default-card-color {
  background-color: #f9f9f9;
  border-radius: 10px;
}

.ng-card-color{
  background-color: rgba(245, 82, 87, 0.5) !important;
  border-radius: 10px;
}
</style>
