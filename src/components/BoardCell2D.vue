<template lang="pug">
.border-gray.cursor-pointer.justify-center.items-center.flex(
  :class="cellClass"
  @click="handleClick"
)
  div.leading-0( :class="textClass")
    div( :class="animationClass") {{cellContent}}
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  ref,
  toRefs,
} from 'vue';

import { displayXO } from '@/modules/display';
import { Player } from '@/modules/engine';
import type { Cell2D } from '@/modules/engine';
import useMainStore from '@/stores/main';

export default defineComponent({
  name: 'BoardCell',
  props: {
    cell: {
      type: Object as () => Cell2D,
      required: true,
    },
  },
  setup(props) {
    const mainStore = useMainStore();
    const { cell } = toRefs(props);
    const animationClass = ref({} as Record<string, boolean>);

    const cellClass = computed(() => {
      return {
        'border-l': cell.value.pos[1] > 0,
        'border-t': cell.value.pos[0] > 0,
      };
    });

    const textClass = computed(() => {
      if (cell.value.value) {
        return {
          'text-11xl': cell.value.value === Player.o,
          'font-bold': cell.value.value === Player.o,
          'text-white': cell.value.value === Player.o,
          'text-7xl': cell.value.value === Player.x,
          'text-green': cell.value.value === Player.x,
        };
      }

      return {};
    });

    const handleClick = () => {
      if (cell.value.value === '') {
        mainStore.playerMoves2D({ cellPosition: cell.value.pos });
        const animIdx = Math.floor(Math.random() * (1 - 0 + 1) + 0);
        animationClass.value[`ani-${animIdx}`] = true;

        setTimeout(() => {
          animationClass.value = {};
        }, 200);
      }
    };

    return {
      animationClass,
      cellClass,
      textClass,
      cellContent: computed(() => displayXO(cell.value.value)),
      handleClick,
    };
  },
});
</script>
