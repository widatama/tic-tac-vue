<template lang="jade">
div(class="cell cell--{{cell.value}}")
  | {{cell.display}}
</template>

<script>
  export default {
    props: {
      "cell": {
        coerce: (cell) => {
          let display = "";
          let returnCell = cell;

          if (cell.value === "x") {
            display = "✖";
          }
          else if (cell.value === "o") {
            display = "●";
          }
          else {
            display = cell.value
          }

          returnCell.display = display;

          return returnCell;
        }
      }
    },
  }
</script>
