/**
 * Deep Vision 前端配置文件
 *
 * 此文件包含前端可配置的选项，方便后期维护和修改。
 */

const SITE_CONFIG = {
    // ============ 诗句轮播配置 ============
    quotes: {
        // 是否启用诗句轮播
        enabled: true,

        // 轮播间隔时间（毫秒）
        interval: 5000,  // 3秒

        // 诗句列表
        items: [
            {
                text: '路漫漫其修远兮，吾将上下而求索',
                source: '——屈原《离骚》'
            },
            {
                text: '问渠那得清如许，为有源头活水来',
                source: '——朱熹《观书有感》'
            },
            {
                text: '千里之行始于足下，万象之理源于细微',
                source: '——老子《道德经》'
            },
            {
                text: '博学之，审问之，慎思之，明辨之，笃行之',
                source: '——《礼记·中庸》'
            },
            {
                text: '工欲善其事，必先利其器',
                source: '——《论语·卫灵公》'
            }
        ]
    },

    // ============ 主题颜色配置 ============
    colors: {
        // 主强调色（鼠尾草蓝）
        primary: '#357BE2',

        // 成功状态色
        success: '#22C55E',

        // 进度条完成色（与 primary 保持一致）
        progressComplete: '#357BE2'
    },

    // ============ API 配置 ============
    api: {
        // API 基础地址
        baseUrl: 'http://localhost:5001/api',

        // Web Search 状态轮询间隔（毫秒）
        webSearchPollInterval: 200
    }
};

// 如果在 Node.js 环境中，导出配置
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SITE_CONFIG;
}
