<template>
  <div style="margin-bottom:56px">
    <v-app-bar
      color="accent-4"
      fixed
    >
      <div class="flex-grow-1" />

      <v-toolbar-title>単語帳</v-toolbar-title>

      <div class="flex-grow-1" />

      <v-btn icon>
        <v-icon @click="changeEditMode">
          {{ iconName }}
        </v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>

export default {
  name: 'WordListBar',
  data() {
    return {
      isEditMode: false,
      // 歯車アイコンを探すかダウンロードする
      iconSetting: 'brightness_5',
      iconCancel: 'cancel',
    };
  },
  computed: {
    iconName: function() {
      return this.isEditMode? this.iconCancel: this.iconSetting;
    }
  },
  methods: {
    changeEditMode() {
      this.isEditMode = !this.isEditMode;
      this.$emit('changeEditMode', this.isEditMode);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
