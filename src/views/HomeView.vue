<template lang="pug">
section.relative.flex.h-full
  .absolute.flex.justify-center.items-center.flex-col.w-full.h-full.bg-black.bg-opacity-70(
    v-if="isEndOfGame"
  )
    GameStatus(:stat="stat", class="flex-grow-0 text-2xl")
    button.flex-grow-0.text-2xl.mt-8.border-2.border-white.py-2.px-4.bg-white.text-black.lowercase(
      class="hover:text-white hover:bg-black transition duration-500"
      @click="handleClick"
    )
      | New Game
  div.wrap.mx-auto.flex.justify-center.items-center.pb-5.pt-1.h-full
    GameBoard(:board="board")
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue';
import { useStore } from 'vuex';

import GameBoard from '@/components/GameBoard2D.vue';
import GameStatus from '@/components/GameStatus.vue';

export default defineComponent({
  components: {
    GameBoard,
    GameStatus,
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

    onMounted(() => {
      store.dispatch('newGame');
    });

    return {
      board: computed(() => store.getters.getBoard),
      cells: computed(() => store.getters.getCells),
      stat,
      isEndOfGame,
      handleClick,
    };
  },
});
</script>
