<template>
  <v-combobox
    v-model="tagsName"
    :items="items.map(item => item.data().name)"
    :search-input.sync="search"
    hide-selected
    label="タグ"
    multiple
    small-chips
    deletable-chips
    required
    dense
    :rules="rules"
    @change="resetSearch"
    @update:search-input="inputUpdate"
  />
</template>

<script>
import TagModel from '@/model/Tag.vue';

export default {
  mixins:[TagModel],
  // props:{
  //   rules:{
  //     type:Function,
  //     require:true,
  //     default:() => {null;}
  //   }
  // },
  props:['rules'],
  data: () => ({
    items: [],
    tmpItems: [],
    tagsName: [],
    tags: [],
    search: null
  }),
  watch: {
    tagsName() {
      this.tags = [];
      var _this = this;
      this.tagsName.map(
        function(tagName) {
          var tag = _this.tmpItems.find(item => item.data().name === tagName);
          if (tag) {
            _this.tags.push({
              id: tag.id,
              name: tag.data().name,
            });
          } else {
            _this.tags.push({
              id: '',
              name: tagName,
            });
          }
        }
      );
      this.$emit('input', {
        tags: this.tags
      });
    }
  },
  created(){
    var _this = this;
    this.findAllTag().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        _this.tmpItems.push(doc);
      });
    });
  },
  methods:{
    resetSearch() {
      this.search = '';
      this.items = [];
    },
    inputUpdate() {
      if (!(this.search == '' || this.search == null)) {
        Object.assign(this.items, this.tmpItems);
      } else {
        this.items = [];
      }
    }
  }

};

</script>
