<template>
  <div class="search-history">
    <v-card
      class="mx-auto"
    >
      <v-list two-line>
        <v-list-item-group
          multiple
          active-class="pink--text"
        >
          <template v-for="(item, index) in items">
            <v-list-item :key="item.title">
              <template v-slot:default="{ active, toggle }">
                <v-list-item-content>
                  <v-list-item-title
                    class="text-left"
                    v-text="item.title"
                  />
                  <v-list-item-subtitle>
                    <Chips />
                  </v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-action>
                  <v-list-item-action-text v-text="item.action" />
                </v-list-item-action>
              </template>
            </v-list-item>

            <v-divider
              v-if="index + 1 < items.length"
              :key="index"
            />
          </template>
        </v-list-item-group>
      </v-list>
    </v-card>
  </div>
</template>

<script>
import Chips from '@/components/common/Chips.vue';

export default {
  name: 'SearchHistory',
  components: {
    Chips
  },
  data: () => ({
    items: [
      {
        action: '15 min',
        headline: 'Brunch this weekend?',
        title: 'Ali Connors',
        subtitle: 'I\'ll be in your neighborhood doing errands this weekend. Do you want to hang out?',
      },
      {
        action: '2 hr',
        headline: 'Summer BBQ',
        title: 'me, Scrott, Jennifer',
        subtitle: 'Wish I could come, but I\'m out of town this weekend.',
      },
      {
        action: '6 hr',
        headline: 'Oui oui',
        title: 'Sandra Adams',
        subtitle: 'Do you have Paris recommendations? Have you ever been?',
      },
      {
        action: '12 hr',
        headline: 'Birthday gift',
        title: 'Trevor Hansen',
        subtitle: 'Have any ideas about what we should get Heidi for her birthday?',
      },
      {
        action: '18hr',
        headline: 'Recipe to try',
        title: 'Britta Holt',
        subtitle: 'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
      },
    ],
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
