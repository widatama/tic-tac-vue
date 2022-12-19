<template lang="pug">
.border-gray.cursor-pointer.justify-center.items-center.flex.min-h-full.leading-3(
  :class="cellClass"
  @click="handleClick"
)
  | {{cellContent}}
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from 'vue';
import { useStore } from 'vuex';

import { displayXO } from '@/modules/display';
import type { Cell } from '@/modules/engine';

export default defineComponent({
  name: 'BoardCell',
  props: {
    cell: {
      type: Object as () => Cell,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();
    const { cell } = toRefs(props);

    const cellClass = computed(() => {
      const borders = {
        border: cell.value.pos === 5,
        'border-l': [2, 8].includes(cell.value.pos),
        'border-r': [2, 8].includes(cell.value.pos),
        'border-t': [4, 6].includes(cell.value.pos),
        'border-b': [4, 6].includes(cell.value.pos),
      };

      if (cell.value.value) {
        return {
          'text-7xl': cell.value.value === 'x',
          'text-11xl': cell.value.value === 'o',
          'font-bold': cell.value.value === 'o',
          'text-white': cell.value.value === 'o',
          'text-green': cell.value.value === 'x',
          ...borders,
        };
      }

      return borders;
    });

    const handleClick = () => {
      if (cell.value.value === '') {
        store.dispatch('playerMoves', { cellPosition: cell.value.pos });
      }
    };

    return {
      cellClass,
      cellContent: computed(() => displayXO(cell.value.value)),
      handleClick,
    };
  },
});
</script>
