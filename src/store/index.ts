import { createStore } from 'vuex';

import { CoinMarketRepo } from "../repo/coin-market";
import Env from "../util/env";

// 状态管理。 增减查删vuex的state均在此集中

// 状态类型，我们给状态一个明确的类型，这样ide可以方便的推导出状态的属性和属性class所有的方法。
type State = {
    coinMarket: CoinMarketRepo
}

export function initStore() {
    // 收集环境变量
    const env = new Env();

    // 建立coin market仓库
    const coinMarket = new CoinMarketRepo(env);

    // 仓库交给state.
    const state: State = {
        coinMarket
    }

    // 改变状态的方法
    const mutations = {
        // 加入币
        setCoin(state: State, coins: Array<any>) {
            // 如果币不在我们的列表中，我们就加入。
            coins.forEach(coin => {
                if (!state.coinMarket.coins.find(c => c.id == coin.id)) {
                    state.coinMarket.coins.push(coin);
                }
            });
        },
        // 根据给定的id移除指定的币
        removeCoin(state: State, id: number) {
            state.coinMarket.coins = state.coinMarket.coins.filter(coin => coin.id != id);
        }
    };

    return createStore({ state, mutations });
}
