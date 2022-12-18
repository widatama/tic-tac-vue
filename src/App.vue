<template lang="pug">
header.flex.justify-between.wrap.py-5.mx-auto
  h1.text-xl.uppercase.tracking-widest
    | Tic Tac&nbsp;
    span.text-green Vue
  GameStatus.text-lg(:stat="stat")
RouterView
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { RouterView } from 'vue-router';
import { useStore } from 'vuex';

import GameStatus from '@/components/GameStatus.vue';

export default defineComponent({
  name: 'App',
  components: {
    GameStatus,
    RouterView,
  },
  setup() {
    const store = useStore();
    const stat = computed(() => store.getters.getGameStat);

    return {
      stat,
    };
  },
});
</script>
