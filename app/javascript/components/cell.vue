<template lang="jade">
div.cell.vue--green(class="cell--{{cell.value}}", @click="handleClick")
  | {{cellDisplay()}}
</template>

<script>
  import {playerMoves} from "../modules/store/actions";
  import {displayXO} from "../modules/helper/display";

  export default {
    props: ["cell"],
    methods: {
      cellDisplay: function() {
        return displayXO(this.cell.value);
      }
    },
    vuex: {
      actions: {
        handleClick: playerMoves
      }
    }
  }
</script>
