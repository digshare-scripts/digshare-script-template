# 盯梢脚本模板

[脚本文档](https://docs.dingshao.cn/script/getting-started.html)

## 安装依赖

```bash
npm install
```

## 本地测试

```bash
npx dss local-run
```

本地测试状态默认保存在 `.local` 文件夹中，可以使用参数 `--reset-state` 在本地运行时重置状态。

## 调试环境测试

```bash
# 部署到调试环境
npx dss deploy --debug
# 执行（不实际发送消息和更新状态）
npx dss run --debug --dry-run

# 或者部署后直接执行
npx dss deploy --debug --dry-run
```

也可使用 `--run` 代替 `--dry-run`，此时即使是在调试环境（`--debug`）也会发送消息和更新状态。

## 调整定时执行

在正式部署前，请根据需要在 `package.json` 中调整定时执行计划，如 4 小时执行一次：

```json
{
  "dss": {
    "schedule": "rate(4h)"
  }
}
```

> 定时执行间隔不能低于 5 分钟。

> 调试环境定时执行不会生效。

## 部署到线上环境

```bash
# 部署
npx dss deploy
# 手动执行
npx dss run

# 或者部署后直接执行
npx dss deploy --run
```
