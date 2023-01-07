<template lang="pug">
.w-full.grid.justify-items-stretch(
  :class="[gridColClasses[board.size], gridRowClasses[board.size], 'h-full', 'md:h-full', 'lg:h-3/5']"
  )
  template(v-for="(row, rowIdx) in board.cells")
    BoardCell(
      v-for="(cell, colIdx) in row"
      :borderClasses="cellBorderClasses(cell.pos)"
      :cell="cell"
      :key="`${rowIdx}-${colIdx}`"
    )
</template>

<script lang="ts">
import { defineComponent, ref, toRefs } from 'vue';

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
    // Have to hardcode grid class names because tailwind cannot catch dynamically generated ones
    // i.e `grid-cols-${board.value.size}`
    const gridColClasses = ref({
      3: 'grid-cols-3',
      4: 'grid-cols-4',
      5: 'grid-cols-5',
    });
    const gridRowClasses = ref({
      3: 'grid-rows-3',
      4: 'grid-rows-4',
      5: 'grid-rows-5',
    });

    function cellBorderClasses(cellPos: [number, number]) {
      const { size } = board.value;

      return {
        'border-b': cellPos[0] < size - 1,
        'border-r': cellPos[1] < size - 1,
      };
    }

    return {
      cellBorderClasses,
      gridColClasses,
      gridRowClasses,
    };
  },
});
</script>
