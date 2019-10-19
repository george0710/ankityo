<template>
  <div class="search-detail">
    <v-row>
      <v-col
        align-self="end"
        cols="2"
      >
        <v-icon
          large
          @click="$router.push({ name: 'Home' })"
        >
          arrow_back_ios
        </v-icon>
      </v-col>
      <v-col cols="10">
        <v-text-field
          v-model="inputSearchWord"
          class="mx-4"
          flat
          hide-details
          label="キーワード検索"
          prepend-inner-icon="search"
          autofocus
          clearable
          @keyup.enter="search"
        />
      </v-col>
    </v-row>
    <v-layout class="justify-start">
      <h3>
        選択中のタグ
      </h3>
    </v-layout>
    <v-layout class="justify-start">
      <v-chip
        @click="toggleInput"
      >
        <v-btn
          icon
        >
          <v-icon>
            {{ inputIconName }}
          </v-icon>
        </v-btn>
      </v-chip>
      <Chips
        :chips="selectedChips"
        close
        @chip-close="closeChip"
      />
    </v-layout>
    <v-layout
      v-show="isShowInput"
      class="justify-start"
    >
      <v-combobox
        v-model="select"
        :items="items"
        label="タグ名を入力してください"
        item-text="name"
        @change="addChip"
      />
    </v-layout>

    <v-layout class="justify-start">
      <h3>
        直近で検索されたタグ
      </h3>
    </v-layout>
    <Chips
      :chips="searchedChips"
      @chip-click="addChip"
    />

    <v-layout class="justify-start">
      <h3>
        検索履歴
      </h3>
    </v-layout>
    <v-row>
      <v-col cols="12">
        <SearchHistory
          @chip-click="addChip"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import SearchHistory from '@/components/search/History.vue';
import Chips from '@/components/chip/List.vue';

export default {
  name: 'SearchDetail',
  components: {
    SearchHistory,
    Chips
  },
  props:{
    searchWord: {
      type: String,
      default: ''
    },
    selectedChips: {
      type: Array,
      required: false,
      default: () => {[];}
    },
  },
  data: () => ({
    tags: [
      'Work',
      'Home Improvement',
      'Vacation',
      'Food',
      'Drawers',
      'Shopping',
      'Art',
      'Tech',
      'Creative Writing',
    ],
    inputSearchWord: '',
    searchedChips:[],
    isShowInput: false,
    items: [
      {
        name: 'Programming',
      },{
        name: 'Design',
      },{
        name: 'Vue',
      },{
        name: 'Vuetify',
      }
    ],
    select:''
  }),
  computed : {
    inputIconName() {
      return this.isShowInput ? 'remove' : 'add';
    }
  },
  created() {
    this.inputSearchWord = this.searchWord;

    //
    this.searchedChips.push({name:'tag1'});
    this.searchedChips.push({name:'tag2'});
    this.searchedChips.push({name:'tag3'});
    this.searchedChips.push({name:'tag4'});
  },
  methods: {
    search() {
      this.$router.push(
        {
          name: 'SearchResult',
          params : {
            searchWord: this.inputSearchWord,
            selectedChips:this.selectedChips
          }
        }
      );
    },
    addChip(chip) {
      this.selectedChips.push(chip);
    },
    closeChip(index) {
      this.selectedChips.splice(index,1);
    },
    toggleInput() {
      this.isShowInput = !this.isShowInput;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
