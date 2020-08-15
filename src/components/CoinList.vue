<template>
  <div class="coin-list">
    <CoinItem
        v-for="coin in coinList"
        :key="coin.id"
        :coin="coin"
    >
    </CoinItem>
    <button @click="getTop"> {{ coinList.length == 0 ? "获取Top10" : "重新获取"}}</button>
    <pre>
    {{ coinList.length > 0 ? "" : "你瞅啥" }}
    </pre>
  </div>
</template>

<script lang="ts">
import {defineComponent, computed} from 'vue';
import {useStore} from "vuex";
import CoinItem from './CoinItem';

export default defineComponent({
  name: "CoinList",
  components: {
    CoinItem
  },
  setup() {
    const store = useStore();
    const coinList = computed(
        () => store.state.coinMarket.coins
    );

    async function getLatest(): Promise<void> {
      try {
        const coins = await store.state.coinMarket.getLatest();

        store.commit('setCoin', coins);
      } catch (e) {
        console.log(e);
      }
    }

    return {
      getTop: getLatest,
      coinList,
    }
  },
})
</script>

<style>

</style>
