<template>
  <v-card
    max-width="600"
    class="mx-auto"
  >
    <v-list
      subheader
    >
      <v-list-item
        v-for="item in items2"
        :key="item.title"
        @click="$router.push({name:'WordBookDetail',params:{id:item.id}})"
      >
        <v-list-item-avatar>
          <v-icon
            :class="[item.iconClass]"
            v-text="item.icon"
          />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
          <v-list-item-subtitle v-text="item.subtitle" />
        </v-list-item-content>

        <v-list-item-action>
          <v-btn icon>
            <v-icon color="grey lighten-1">
              info
            </v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
    <v-divider inset />

    <AddIcon is-word-book />
  </v-card>
</template>

<script>
import AddIcon from '@/components/common/AddIcon.vue';

export default {
  name: 'WordBook',
  components:{
    AddIcon
  },
  data: () => ({
    items2: [
      { id:'1', icon: 'assignment', iconClass: 'blue white--text', title: 'Vacation itinerary', subtitle: 'Jan 20, 2014' },
      { id:'2', icon: 'call_to_action', iconClass: 'amber white--text', title: 'Kitchen remodel', subtitle: 'Jan 10, 2014' },
    ],
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
