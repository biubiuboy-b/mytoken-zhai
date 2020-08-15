<template>
  <div>
    <CoinList></CoinList>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CoinList from '../components/CoinList';

export default defineComponent({
    name: 'Home',
    components: {
        CoinList
    }
})
</script>

<style>

</style>
