<template lang="pug">
div.flex.items-center
  span.leading-3.mr-1(:class="playerClass")
    | {{stat.playerDisplay}}
  span
    | {{stat.label}}
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from 'vue';

import { players } from '@/modules/engine';
import type { GameStat } from '@/modules/display';

export default defineComponent({
  name: 'GameStatus',
  props: {
    stat: {
      type: Object as () => GameStat,
      required: true,
    },
  },
  setup(props) {
    const { stat } = toRefs(props);

    const playerClass = computed(() => ({
      'text-5xl': stat.value.player === players[1],
      'font-bold': stat.value.player === players[1],
      'text-green': stat.value.player === players[0],
      'text-xl': stat.value.player === players[0],
      'pt-1': stat.value.player === players[0],
    }));

    return {
      playerClass,
    };
  },
});
</script>
