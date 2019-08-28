<template>
  <v-row justify="space-around">
    <v-col
      cols="12"
      sm="6"
      md="4"
    >
      <v-sheet>
        <v-chip-group
          mandatory
          active-class="primary--text"
        >
          <v-chip
            v-for="tag in tags"
            :key="tag"
            pill
            label
          >
            {{ tag }}
          </v-chip>
        </v-chip-group>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
export default {
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
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
