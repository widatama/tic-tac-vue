<template lang="pug">
div(
  class="w-full grid justify-items-stretch"
  :class="[gridColClass, gridRowClass, 'h-full', 'md:h-full', 'lg:h-3/5']"
  )
  template(v-for="(row, rowIdx) in board.cells")
    BoardCell(
      v-for="(cell, colIdx) in row"
      :cell="cell"
      :key="`${rowIdx}-${colIdx}`"
    )
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from 'vue';

import type { Board2D } from '@/modules/engine';
import BoardCell from './BoardCell2D.vue';

export default defineComponent({
  name: 'GameBoard',
  components: {
    BoardCell,
  },
  props: {
    board: {
      type: Object as () => Board2D | object,
      default() {
        return {};
      },
    },
  },
  setup(props) {
    const { board } = toRefs(props);

    const gridColClass = computed(() => {
      const { size } = board.value as Board2D;
      return `grid-cols-${size}`;
    });

    const gridRowClass = computed(() => {
      const { size } = board.value as Board2D;
      return `grid-rows-${size}`;
    });

    return {
      gridColClass,
      gridRowClass,
    };
  },
});
</script>
