<template lang="jade">
header.app-header
  h1.app__title
    | Tic Tac Vue
section.app-body
  Board(:cells="cells")
</template>

<script>
  import board from "./board.vue";

  export default {
    components: {
      "Board": board
    },
    data: function() {
      return {
        cells: [
          {
            pos: 1,
            value: "T"
          },
          {
            pos: 2,
            value: "o"
          },
          {
            pos: 3,
            value: "o"
          },
          {
            pos: 4,
            value: "o"
          },
          {
            pos: 5,
            value: "x"
          },
          {
            pos: 6,
            value: "o"
          },
          {
            pos: 7,
            value: "o"
          },
          {
            pos: 8,
            value: "o"
          },
          {
            pos: 9,
            value: "o"
          }
        ]
      };
    }
  }
</script>
