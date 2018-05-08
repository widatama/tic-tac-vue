<template lang="pug">
.app
  header.app-header
    .app-header-wrap
      h1.app__title
        | Tic Tac&nbsp;
        span.vue--green
          | Vue
      Stat( :stat="stat", size="normal")
  section.app-body
    .board-overlay(v-if="isEndOfGame")
      Stat( :stat="stat", size="large")
      button.nav-btn( @click="newGame")
        | New Game
    Board( :cells="cells")
</template>

<script>
  import { mapGetters } from 'vuex';

  import Stat from './stat.vue';
  import Board from './board.vue';

  export default {
    name: 'App',
    components: {
      Stat,
      Board,
    },
    computed: {
      isEndOfGame() {
        let statLabel = this.stat.label.toLowerCase();
        return ["wins", "draw"].includes(statLabel);
      },
      ...mapGetters({
        cells: 'getCells',
        stat: 'getGameStat',
      }),
    },
    methods: {
      newGame() {
        this.$store.dispatch('newGame');
      },
    },
  };
</script>
