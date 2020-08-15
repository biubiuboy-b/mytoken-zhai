// 收集环境变量。我们把环境变量收集独立出来，这样便于我们远程推送或者请求新的变量。
// 本地环境变量存放在项目根目录.env中
export default class Env {
    coinMarketEntry: string;
    coinMarketApiKey: string;

    constructor() {
        this.coinMarketApiKey = process.env.VUE_APP_CMC_APIKEY || "not provided";
        // 这不安全，但开发的时候可以使用
        this.coinMarketEntry = process.env.VUE_APP_CMC_ENTRY || "not provided";
    }
}