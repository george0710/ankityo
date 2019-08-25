<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a
        href="https://cli.vuejs.org"
        target="_blank"
        rel="noopener"
      >vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
          target="_blank"
          rel="noopener"
        >babel</a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
          target="_blank"
          rel="noopener"
        >eslint</a>
      </li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
          rel="noopener"
        >Core Docs</a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
          rel="noopener"
        >Forum</a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
          rel="noopener"
        >Community Chat</a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
          rel="noopener"
        >Twitter</a>
      </li>
      <li>
        <a
          href="https://news.vuejs.org"
          target="_blank"
          rel="noopener"
        >News</a>
      </li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li>
        <a
          href="https://router.vuejs.org"
          target="_blank"
          rel="noopener"
        >vue-router</a>
      </li>
      <li>
        <a
          href="https://vuex.vuejs.org"
          target="_blank"
          rel="noopener"
        >vuex</a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-devtools#vue-devtools"
          target="_blank"
          rel="noopener"
        >vue-devtools</a>
      </li>
      <li>
        <a
          href="https://vue-loader.vuejs.org"
          target="_blank"
          rel="noopener"
        >vue-loader</a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
          rel="noopener"
        >awesome-vue</a>
      </li>
    </ul>
    <v-container fluid>
      <v-row
        justify="space-around"
        class="mb-2"
      >
        <span class="group pa-2">
          <v-icon>home</v-icon>
          <v-icon>event</v-icon>
          <v-icon>info</v-icon>
        </span>

        <span class="group pa-2 teal">
          <v-icon dark>folder_open</v-icon>
          <v-icon dark>widgets</v-icon>
          <v-icon dark>gavel</v-icon>
        </span>
      </v-row>

      <v-row
        justify="space-around"
        class="mb-2"
      >
        <span class="group pa-2">
          <v-icon medium>home</v-icon>
          <v-icon medium>event</v-icon>
          <v-icon medium>info</v-icon>
        </span>

        <span class="group pa-2 teal">
          <v-icon
            medium
            dark
          >folder_open</v-icon>
          <v-icon
            medium
            dark
          >widgets</v-icon>
          <v-icon
            medium
            dark
          >gavel</v-icon>
        </span>
      </v-row>

      <v-row
        justify="space-around"
        class="mb-2"
      >
        <span class="group pa-2">
          <v-icon large>home</v-icon>
          <v-icon large>event</v-icon>
          <v-icon large>info</v-icon>
        </span>

        <span class="group pa-2 teal">
          <v-icon
            large
            dark
          >folder_open</v-icon>
          <v-icon
            large
            dark
          >widgets</v-icon>
          <v-icon
            large
            dark
          >gavel</v-icon>
        </span>
      </v-row>

      <v-row justify="space-around">
        <span class="group pa-2">
          <v-icon x-large>home</v-icon>
          <v-icon x-large>event</v-icon>
          <v-icon x-large>info</v-icon>
        </span>

        <span class="group pa-2 teal">
          <v-icon
            x-large
            dark
          >folder_open</v-icon>
          <v-icon
            x-large
            dark
          >widgets</v-icon>
          <v-icon
            x-large
            dark
          >gavel</v-icon>
        </span>
      </v-row>
    </v-container>

    <v-row

      justify="space-around"
    >
      <v-switch
        v-model="sticky"
        label="Sticky"
      />
      <v-switch
        v-model="singleLine"
        label="Single-line"
      />
      <v-select
        v-model="icon"
        :items="icons"
        label="Icon"
        style="max-width: 250px;"
        clearable
      />
      <v-select
        v-model="color"
        :items="colors"
        label="Color"
        style="max-width: 250px;"
        clearable
      />
      <v-select
        v-model="iconColor"
        :items="colors"
        label="Icon color"
        style="max-width: 250px;"
        clearable
      />
      <v-slider
        v-model="elevation"
        label="Elevation"
        min="0"
        max="24"
        style="width: 100%;"
        clearable
      />
    </v-row>

    <v-sheet
      class="overflow-y-auto"
      max-height="600"
    >
      <v-container style="height: 1500px;">
        <v-banner
          :sticky="sticky"
          :single-line="singleLine"
          :icon="icon"
          :color="color"
          :icon-color="iconColor"
          :elevation="elevation"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis magnam necessitatibus possimus sapiente laboriosam ducimus atque maxime quibusdam, facilis velit assumenda, quod nisi aliquid corrupti maiores doloribus soluta optio blanditiis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis magnam necessitatibus possimus sapiente laboriosam ducimus atque maxime quibusdam, facilis velit assumenda, quod nisi aliquid corrupti maiores doloribus soluta optio blanditiis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis magnam necessitatibus possimus sapiente laboriosam ducimus atque maxime quibusdam, facilis velit assumenda, quod nisi aliquid corrupti maiores doloribus soluta optio blanditiis.

          <template v-slot:actions>
            <v-btn
              text
              color="deep-purple accent-4"
            >
              Action
            </v-btn>
          </template>
        </v-banner>
      </v-container>
    </v-sheet>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: () => ({
    sticky: false,
    singleLine: true,
    icon: 'mdi-plus',
    color: undefined,
    iconColor: undefined,
    elevation: 4,
    colors: ['red', 'blue', 'teal lighten-2', 'warning lighten-1', 'orange'],
    icons: ['mdi-access-point-network', 'mdi-plus', 'mdi-minus', 'mdi-network-strength-2-alert', 'mdi-earth'],
  }),
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
