import Env from '../util/env';
import { AxiosRequestConfig} from "axios";
const axios = require('axios');

export class CoinMarketRepo {
    // api连接入口
    public entry: string;
    // api key
    private readonly apiKey: string;
    // 币数据列表.我们暂时用any类型，但实际上我们应该用一个接口或者类来严格定义币数据的类型和元素。
    public coins: Array<any>;

    // 构建CoinMarketRepo对象时我们需要环境变量
    constructor(env: Env) {
        this.entry = env.coinMarketEntry;
        this.apiKey = env.coinMarketApiKey;
        this.coins = [];
    }

    // 请求最新记录
    getLatest (): Promise<Array<any>> {

        // api 支持链接传参，这里我们用链接传了3个参数：
        // 1. 从何处开始 2.从何处结束 3.法币单位为
        // 这些参数都是由api服务提供者设定的，我们只要根据规则填写即可。
        const start = 1;
        const limit = 10;
        const convert = 'USD'
        const url = this.entry + `cryptocurrency/listings/latest?start=${start}&limit=${limit}&convert=${convert}`;

        return _getData(url, this.apiKey);
    }
}

async function _getData(url: string, apiKey: string): Promise<Array<any>> {
    // api key 需要放在header中，不知道是什么可以先不管
    const config: AxiosRequestConfig = {
        "headers": { 'X-CMC_PRO_API_KEY': apiKey },
    }

    // 发送http请求
    const res = await axios.get(url, config);

    // 返回的请求在res.data.data中。这也是api服务提供者规定的，并没有统一的格式。要根据api提供者的文档来自己调整
    return res.data.data;
}