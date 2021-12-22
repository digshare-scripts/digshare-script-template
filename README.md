（WIP... 收到上线通知前请勿使用哦 😁）
## 脚本模版使用说明

1. 在 `src/index.ts` 中完成逻辑开发
2. 运行 `yarn dev-run` 模拟执行
3. 访问 [https://script.dingshao.cn/](https://script.dingshao.cn/) 使用盯梢客户端扫码登陆
4. 选中左侧发包地址，将 `registry string` 复制待用
5. 发布方式（任选其一）

- 1. 本地发布
  - 粘贴 `registry string` 至 `.npmrc`
  - 运行 `node publish` 发布脚本
- 2. GitHub action 发布 (适用于公开仓库)
  - 将 `registry string` 配置到 settings -> secrets 中，name 为 `DIGSHARE_REGISTRY`
  - 提交代码，提交信息中包含 `*publish` 即可自动发布

## 其他说明

### package.json

`package.json` 脚本定义相关释义
`digshare` 中的字段未标注情况下都是可选的

```json
{
  "main": "执行入口，默认已填上打包后的文件，无需修改",
  "digshare": {
    "runtime": "脚本运行环境（nodejs10 | nodejs12 | nodejs14）",
    "cron": "定期执行表达式（6 位，第一位秒固定为 0，第二位分钟需大于 1，其他正常）",
    "timeout": "脚本超时时间（数字，ms）",
    "disabled": "发布到线上但禁用脚本（boolean）"
  }
}
```
