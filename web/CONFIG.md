# Deep Vision 前端配置说明

本文档说明如何通过 `site-config.js` 配置文件自定义 Deep Vision 前端的各项设置。

## 配置文件位置

```
/web/site-config.js
```

## 配置项说明

### 1. 诗句轮播配置 (`quotes`)

控制页面顶部诗句轮播的行为和内容。

```javascript
quotes: {
    // 是否启用诗句轮播
    enabled: true,

    // 轮播间隔时间（毫秒）
    interval: 10000,  // 10秒

    // 诗句列表
    items: [
        {
            text: '路漫漫其修远兮，吾将上下而求索',
            source: '——屈原《离骚》'
        },
        // ... 更多诗句
    ]
}
```

**参数说明：**
- `enabled`: 布尔值，设置为 `false` 可完全禁用诗句轮播
- `interval`: 数字，单位为毫秒，控制诗句切换的时间间隔
- `items`: 数组，每个元素包含 `text`（诗句内容）和 `source`（来源）

**添加新诗句：**

在 `items` 数组中添加新对象：

```javascript
items: [
    // 现有诗句...
    {
        text: '您的诗句内容',
        source: '——诗句来源'
    }
]
```

### 2. 主题颜色配置 (`colors`)

控制页面的主题颜色。

```javascript
colors: {
    // 主强调色（鼠尾草蓝）
    primary: '#357BE2',

    // 成功状态色
    success: '#22C55E',

    // 进度条完成色（与 primary 保持一致）
    progressComplete: '#357BE2'
}
```

**参数说明：**
- `primary`: 主强调色，用于 CTA 按钮、链接等
- `success`: 成功状态色，用于成功提示、AI 可用状态等
- `progressComplete`: 进度条达到 100% 时的颜色

### 3. API 配置 (`api`)

控制前端与后端的通信设置。

```javascript
api: {
    // API 基础地址
    baseUrl: 'http://localhost:5001/api',

    // Web Search 状态轮询间隔（毫秒）
    webSearchPollInterval: 200
}
```

**参数说明：**
- `baseUrl`: 后端 API 的基础地址
- `webSearchPollInterval`: 轮询 Web Search 状态的时间间隔（用于呼吸灯效果）

## 使用示例

### 示例 1: 增加诗句轮播间隔到 15 秒

```javascript
quotes: {
    enabled: true,
    interval: 15000,  // 修改为 15 秒
    items: [
        // ... 诗句列表
    ]
}
```

### 示例 2: 添加更多诗句

```javascript
quotes: {
    enabled: true,
    interval: 10000,
    items: [
        { text: '路漫漫其修远兮，吾将上下而求索', source: '——屈原《离骚》' },
        { text: '问渠那得清如许，为有源头活水来', source: '——朱熹《观书有感》' },
        { text: '千里之行始于足下，万象之理源于细微', source: '——老子《道德经》' },
        { text: '博学之，审问之，慎思之，明辨之，笃行之', source: '——《礼记·中庸》' },
        { text: '工欲善其事，必先利其器', source: '——《论语·卫灵公》' },
        // 添加新诗句
        { text: '海纳百川，有容乃大', source: '——林则徐' },
        { text: '纸上得来终觉浅，绝知此事要躬行', source: '——陆游《冬夜读书示子聿》' }
    ]
}
```

### 示例 3: 禁用诗句轮播

```javascript
quotes: {
    enabled: false,  // 禁用轮播
    interval: 10000,
    items: []
}
```

### 示例 4: 更改主题颜色

```javascript
colors: {
    primary: '#2563EB',  // 更改为深蓝色
    success: '#10B981',  // 更改为翠绿色
    progressComplete: '#2563EB'
}
```

### 示例 5: 连接到远程服务器

```javascript
api: {
    baseUrl: 'https://your-domain.com/api',  // 远程服务器地址
    webSearchPollInterval: 200
}
```

## 注意事项

1. **修改后需要刷新页面**：配置文件的修改需要刷新浏览器才能生效
2. **保持格式正确**：确保 JavaScript 语法正确，特别注意逗号和引号
3. **颜色格式**：颜色值使用十六进制格式（如 `#357BE2`）
4. **时间单位**：所有时间配置单位均为毫秒（1秒 = 1000毫秒）
5. **备份配置**：修改前建议备份原配置文件

## 默认配置恢复

如果配置文件出现问题，可以删除 `site-config.js`，系统会使用内置的默认配置。

或者参考默认配置重新创建：

```javascript
const SITE_CONFIG = {
    quotes: {
        enabled: true,
        interval: 10000,
        items: [
            { text: '路漫漫其修远兮，吾将上下而求索', source: '——屈原《离骚》' },
            { text: '问渠那得清如许，为有源头活水来', source: '——朱熹《观书有感》' },
            { text: '千里之行始于足下，万象之理源于细微', source: '——老子《道德经》' }
        ]
    },
    colors: {
        primary: '#357BE2',
        success: '#22C55E',
        progressComplete: '#357BE2'
    },
    api: {
        baseUrl: 'http://localhost:5001/api',
        webSearchPollInterval: 200
    }
};
```
