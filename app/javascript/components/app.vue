<template lang="jade">
header.app-header
  .app-header-wrap
    h1.app__title
      | Tic Tac&nbsp;
      span.vue--green
        | Vue
    Stat(:stat="stat")
section.app-body
  .board-overlay(v-if="isEndOfGame")
    button.nav-btn(href="#", @click="newGame")
      | New Game
  Board(:cells="cells")
</template>

<script>
  import {newGame} from "../modules/store/actions";
  import {getCells, getGameStat} from "../modules/store/getters";

  import stat from "./stat.vue";
  import board from "./board.vue";

  export default {
    components: {
      "Stat":  stat,
      "Board": board
    },
    computed: {
      isEndOfGame() {
        let statLabel = this.stat.label.toLowerCase();
        return ["wins", "draw"].indexOf(statLabel) !== -1;
      }
    },
    vuex: {
      actions: {
        newGame: newGame
      },
      getters: {
        cells: getCells,
        stat:  getGameStat
      }
    }
  }
</script>
