<template lang="pug">
.board
  Cell(v-for="(cell, index) in cells", :cell="cell", :key="cell.pos")
</template>

<script>
  import Cell from "./cell.vue";

  export default {
    name: 'Board',
    components: {
      Cell
    },
    props: {
      cells: {
        type: Array,
        default() {
          return [];
        },
      },
    },
  };
</script>
