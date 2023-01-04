<template lang="pug">
.w-full.grid.grid-cols-3.grid-rows-3.justify-items-stretch(class="h-full md:h-full lg:h-3/5")
  template(v-for="(row, rowIdx) in cells")
    BoardCell(
      v-for="(cell, colIdx) in row"
      :cell="cell"
      :key="`${rowIdx}-${colIdx}`"
    )
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import BoardCell from './BoardCell2D.vue';

export default defineComponent({
  name: 'GameBoard',
  components: {
    BoardCell,
  },
  props: {
    cells: {
      type: Array,
      default() {
        return [];
      },
    },
  },
});
</script>
