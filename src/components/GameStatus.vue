<template lang="pug">
div(class="flex items-center")
  template(v-if="stat.player")
    span(class="leading-3 mr-1 font-bold" :class="playerClass")
      | {{stat.playerDisplay}}
    span
      | {{stat.label}}
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from 'vue';

import { Player } from '@/modules/engine';
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
      'text-2xl': stat.value.player === Player.x,
      'text-green': stat.value.player === Player.x,
      'text-4xl': stat.value.player === Player.o,
    }));

    return {
      playerClass,
    };
  },
});
</script>
