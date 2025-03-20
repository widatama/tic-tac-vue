<template lang="pug">
header(class="flex justify-between wrap py-5 mx-auto")
  h1(class="text-xl uppercase tracking-widest")
    | Tic Tac&nbsp;
    span(class="text-green") Vue
  GameStatus(class="text-lg" :stat="stat")
RouterView
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { RouterView } from 'vue-router';

import useMainStore from '@/stores/main';
import GameStatus from '@/components/GameStatus.vue';

export default defineComponent({
  name: 'App',
  components: {
    GameStatus,
    RouterView,
  },
  setup() {
    const mainStore = useMainStore();

    return {
      mainStore,
      stat: computed(() => mainStore.getGameStat),
    };
  },
});
</script>
