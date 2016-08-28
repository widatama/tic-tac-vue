<template lang="pug">
div.cell.vue--green( :class="cellValueClass", @click="handleClick")
  | {{cellDisplay}}
</template>

<script>
  import {playerMoves} from "../modules/store/actions";
  import {displayXO} from "../modules/helper/display";

  export default {
    props: ["cell"],
    computed: {
      cellValueClass() {
        return "cell--" + this.cell.value;
      },
      cellDisplay() {
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
