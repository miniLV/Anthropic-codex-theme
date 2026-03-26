# Anthropic Codex Theme

**中文** | [English](./README_EN.md)

为 Codex 打造的 Light / Dark 主题，风格对齐 Claude Desktop。

## 预览

| Codex 默认 | Anthropic 主题 |
|:---:|:---:|
| ![default](./screenshots/codex_default.jpg) | ![anthropic](./screenshots/codex_anthropic.jpg) |

## 导入

1. 复制下面的 share string（或打开 `share/claude-desktop-light.txt`）：

```
codex-theme-v1:{"codeThemeId":"codex","variant":"light","theme":{"accent":"#CA7554","contrast":25,"fonts":{"code":"\"JetBrains Mono\", ui-monospace, \"SFMono-Regular\", \"Cascadia Mono\", Menlo, Consolas, monospace","ui":"\"DM Sans\", system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif"},"ink":"#38342E","opaqueWindows":true,"semanticColors":{"diffAdded":"#739245","diffRemoved":"#C37967","skill":"#CA7554"},"surface":"#F8F6F1"}}
```

2. 打开 Codex → Settings → Themes → **Import**。
3. 粘贴，完成。

**Dark 模式：**

```
codex-theme-v1:{"codeThemeId":"codex","variant":"dark","theme":{"accent":"#CA7554","contrast":55,"fonts":{"code":"\"JetBrains Mono\", ui-monospace, \"SFMono-Regular\", \"Cascadia Mono\", Menlo, Consolas, monospace","ui":"\"DM Sans\", system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif"},"ink":"#E8E4DC","opaqueWindows":true,"semanticColors":{"diffAdded":"#7FA84A","diffRemoved":"#C37967","skill":"#CA7554"},"surface":"#1E1D1B"}}
```

## 字体（可选）

主题开箱即用，不装字体也能正常显示。如果想更接近 Anthropic 的感觉，可以安装：

| 字体 | 下载 |
|---|---|
| **DM Sans** | [Google Fonts](https://fonts.google.com/specimen/DM+Sans) |
| **JetBrains Mono** | [JetBrains](https://www.jetbrains.com/lp/mono/) |

<details>
<summary>安装方式</summary>

**macOS (Homebrew)**
```bash
brew install --cask font-jetbrains-mono font-dm-sans
```

**Windows** — 下载后全选 `.ttf` → 右键 → 为所有用户安装。

**Linux**
```bash
mkdir -p ~/.local/share/fonts
# 把 .ttf 文件复制到该目录
fc-cache -fv
```

</details>

## 主题参数

| 属性 | Light | Dark |
|---|---|---|
| 背景 | `#F8F6F1` 暖白 | `#1E1D1B` 碳黑 |
| 文字 | `#38342E` 暖黑 | `#E8E4DC` 暖白 |
| 强调色 | `#CA7554` 铜色 | `#CA7554` 铜色 |
| 对比度 | 25 | 55 |
| 字体 | DM Sans + JetBrains Mono | DM Sans + JetBrains Mono |

## 限制

Codex 的 import 只支持：`surface`、`ink`、`accent`、`contrast`、`fonts`、`opaqueWindows`、`semanticColors`。侧边栏和主内容区无法分别配色，`contrast` 是唯一能调节面板层次感的参数。

## 文件

```text
share/
  claude-desktop-light.txt      导入字符串 (light)
  claude-desktop-dark.txt       导入字符串 (dark)
themes/
  claude-desktop-light.json     完整 VS Code 主题
  claude-desktop-dark.json      完整 VS Code 主题
src/
  theme-spec.mjs                主题源定义
```

## 构建

```bash
npm run build      # 重新生成 themes/ 和 share/
npm run validate   # 构建 + 校验 JSON + share string 格式
```
