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
import { Player } from '@/modules/engine';
import type { Cell2D } from '@/modules/engine';

export default defineComponent({
  name: 'BoardCell',
  props: {
    borderClasses: {
      type: Object,
      default() {
        return {};
      },
    },
    cell: {
      type: Object as () => Cell2D,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();
    const { borderClasses, cell } = toRefs(props);

    const cellClass = computed(() => {
      if (cell.value.value) {
        return {
          ...borderClasses.value,
          'text-11xl': cell.value.value === Player.o,
          'font-bold': cell.value.value === Player.o,
          'text-white': cell.value.value === Player.o,
          'text-7xl': cell.value.value === Player.x,
          'text-green': cell.value.value === Player.x,
        };
      }

      return borderClasses.value;
    });

    const handleClick = () => {
      if (cell.value.value === '') {
        store.dispatch('playerMoves2D', { cellPosition: cell.value.pos });
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
