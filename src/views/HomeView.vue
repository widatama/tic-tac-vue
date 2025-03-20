<template lang="pug">
section(class="relative flex h-full")
  Transition(name="tr-scale")
    div(
      class="absolute flex justify-center items-center flex-col w-full h-full bg-black/70"
      v-if="isPrep"
    )
      GameStatus(class="grow-0 text-3xl mb-16" v-if="isEndOfGame" :stat="stat")
      button(
        v-for="size in boardSizes"
        class="mb-8 cursor-pointer"
        :class="btnClasses"
        @click="handleClick(size)"
      )
        | New {{ size }} by {{ size }}
  div(class="wrap mx-auto flex justify-center items-center pb-5 pt-1 h-full")
    GameBoard(:board="board")
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  ref,
} from 'vue';

import GameBoard from '@/components/GameBoard2D.vue';
import GameStatus from '@/components/GameStatus.vue';
import useMainStore from '@/stores/main';

export default defineComponent({
  components: {
    GameBoard,
    GameStatus,
  },
  setup() {
    const mainStore = useMainStore();

    const btnClasses = ref([
      'bg-white',
      'border-2',
      'border-white',
      'duration-500',
      'grow-0',
      'hover:bg-black',
      'hover:text-white',
      'lowercase',
      'px-4',
      'py-2',
      'text-2xl',
      'text-black',
      'transition',
    ]);

    const isEndOfGame = computed(() => {
      const statLabel = mainStore.getGameStat.label.toLowerCase();
      return ['wins', 'draw'].includes(statLabel);
    });

    const handleClick = (chosenBoardSize: number) => {
      mainStore.newGame(chosenBoardSize);
    };

    return {
      btnClasses,
      board: computed(() => mainStore.getBoard),
      boardSizes: computed(() => mainStore.getBoardSizes),
      isEndOfGame,
      isPrep: computed(() => mainStore.isPrep),
      stat: computed(() => mainStore.getGameStat),
      handleClick,
    };
  },
});
</script>
