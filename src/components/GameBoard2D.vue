<template lang="pug">
.w-full.grid.grid-cols-3.grid-rows-3.justify-items-stretch(class="h-full md:h-full lg:h-3/5")
  template(v-for="(row, rowIdx) in board.cells")
    BoardCell(
      v-for="(cell, colIdx) in row"
      :borderClasses="borderClasses(cell.pos)"
      :cell="cell"
      :key="`${rowIdx}-${colIdx}`"
    )
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue';

import type { Board2D } from '@/modules/engine';
import BoardCell from './BoardCell2D.vue';

export default defineComponent({
  name: 'GameBoard',
  components: {
    BoardCell,
  },
  props: {
    board: {
      type: Object as () => Board2D,
      required: true,
    },
  },
  setup(props) {
    const { board } = toRefs(props);

    function borderClasses(cellPos: [number, number]) {
      const { size } = board.value;

      return {
        'border-b': cellPos[0] < size - 1,
        'border-r': cellPos[1] < size - 1,
      };
    }

    return {
      borderClasses,
    };
  },
});
</script>
