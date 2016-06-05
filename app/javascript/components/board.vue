<template lang="jade">
.board
  Cell(v-for="cell in cells", :cell="cell")
</template>

<script>
  import cell from "./cell.vue";

  export default {
    components: {
      "Cell": cell
    },
    props: ["cells"]
  }
</script>
