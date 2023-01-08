<template lang="pug">
section.relative.flex.h-full
  .absolute.flex.justify-center.items-center.flex-col.w-full.h-full.bg-black.bg-opacity-70(
    v-if="isPrep"
  )
    GameStatus.flex-grow-0.text-3xl.mb-16(v-if="isEndOfGame" :stat="stat")
    button.mb-8(
      v-for="size in boardSizes"
      :class="btnClasses"
      @click="handleClick(size)"
    )
      | New {{ size }} by {{ size }}
  div.wrap.mx-auto.flex.justify-center.items-center.pb-5.pt-1.h-full
    GameBoard(:board="board")
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  ref,
} from 'vue';
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

    const btnClasses = ref([
      'bg-white',
      'border-2',
      'border-white',
      'duration-500',
      'flex-grow-0',
      'hover:bg-black',
      'hover:text-white',
      'lowercase',
      'px-4',
      'py-2',
      'text-2xl',
      'text-black',
      'transition',
    ]);

    const stat = computed(() => store.getters.getGameStat);

    const isEndOfGame = computed(() => {
      const statLabel = stat.value.label.toLowerCase();
      return ['wins', 'draw'].includes(statLabel);
    });

    const handleClick = (chosenBoardSize: number) => {
      store.dispatch('newGame', chosenBoardSize);
    };

    return {
      btnClasses,
      board: computed(() => store.getters.getBoard),
      boardSizes: computed(() => store.getters.getBoardSizes),
      isEndOfGame,
      isPrep: computed(() => store.getters.isPrep),
      stat,
      handleClick,
    };
  },
});
</script>
