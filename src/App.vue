<template lang="pug">
header.flex.justify-between.wrap.py-5.mx-auto
  h1.text-xl.uppercase.font-thin.tracking-widest
    | Tic Tac&nbsp;
    span.text-green Vue
  Stat.text-lg(:stat="stat")
section.relative.flex.h-full
  .absolute.flex.justify-center.items-center.flex-col.w-full.h-full.bg-black.bg-opacity-70(
    v-if="isEndOfGame"
  )
    Stat(:stat="stat", class="flex-grow-0 text-xl")
    button.flex-grow-0.text-2xl.font-thin.mt-8.border-2.border-white.py-2.px-4.lowercase(
      class="hover:bg-white hover:text-black transition duration-500"
      @click="handleClick"
    )
      | New Game
  div.wrap.mx-auto.flex.justify-center.items-center.pb-5.pt-1.h-full
    Board(:cells="cells")
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';

import Board from '@/components/board.vue';
import Stat from '@/components/stat.vue';

export default defineComponent({
  name: 'App',
  components: {
    Board,
    Stat,
  },
  setup() {
    const store = useStore();

    const stat = computed(() => store.getters.getGameStat);
    const isEndOfGame = computed(() => {
      const statLabel = stat.value.label.toLowerCase();
      return ['wins', 'draw'].includes(statLabel);
    });

    const handleClick = () => {
      store.dispatch('newGame');
    };

    return {
      cells: computed(() => store.getters.getCells),
      stat,
      isEndOfGame,
      handleClick,
    };
  },
});
</script>
