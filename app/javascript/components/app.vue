<template lang="jade">
header.app-header
  h1.app__title
    | Tic Tac Vue
  Stat(:stat="stat")
section.app-body
  Board(:cells="cells")
</template>

<script>
  import {getCells, getGameStat} from "../modules/store/getters";

  import stat from "./stat.vue";
  import board from "./board.vue";

  export default {
    components: {
      "Stat":  stat,
      "Board": board
    },
    vuex: {
      getters: {
        cells: getCells,
        stat:  getGameStat
      }
    }
  }
</script>
