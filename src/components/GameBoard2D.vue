<template lang="pug">
.w-full.grid.justify-items-stretch(
  :class="[gridColClass, gridRowClass, 'h-full', 'md:h-full', 'lg:h-3/5']"
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
import { computed, defineComponent, toRefs } from 'vue';

import { generateBoard2D } from '@/modules/engine';
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
      default() {
        return generateBoard2D();
      },
    },
  },
  setup(props) {
    const { board } = toRefs(props);
    const gridColClass = computed(() => `grid-cols-${board.value.size}`);
    const gridRowClass = computed(() => `grid-rows-${board.value.size}`);

    function cellBorderClasses(cellPos: [number, number]) {
      const { size } = board.value;

      return {
        'border-b': cellPos[0] < size - 1,
        'border-r': cellPos[1] < size - 1,
      };
    }

    return {
      cellBorderClasses,
      gridColClass,
      gridRowClass,
    };
  },
});
</script>
