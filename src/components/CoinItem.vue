<template>
  <div class="coin-item">
    <div class="coin-item__title">{{ coin.name }}</div>
    <div class="coin-item__title">{{ "总量: " + coin.max_supply }}</div>
    <div class="coin-item__title">{{ "价格: " + coin.quote.USD.price + 'USD' }}</div>
    <button @click="removeCoin(coin.id)">X</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from "vuex";

export default defineComponent({
  name: "CoinItem",
  props: {
    coin: {
      type: Object,
      require: true
    }
  },
  setup(props: any) {
    const store = useStore();

    function removeCoin(id: number) {
      store.commit('removeCoin', id);
    }

    return {
      removeCoin
    }
  }
});
</script>

<style>
.coin-item {
  max-width: 300px;
  margin: 6px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
