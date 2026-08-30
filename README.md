# Anthropic Codex Theme

**中文** | [English](./README_EN.md)

为 Codex 打造的零安装主题集合：复制一行 share string，即可在 Codex 里导入 Anthropic、Catppuccin、Nord、Tokyo Night、Gruvbox、One Dark 等主题。

## 主题画廊

| Codex 默认 | Anthropic | Catppuccin Mocha |
|:---:|:---:|:---:|
| ![default](./screenshots/codex_default.jpg) | ![anthropic](./screenshots/codex_anthropic.jpg) | ![catppuccin](./screenshots/codex_catppuccin.jpg) |

| Nord | Tokyo Night | Gruvbox | One Dark |
|:---:|:---:|:---:|:---:|
| ![nord](./screenshots/codex_nord.jpg) | ![tokyo-night](./screenshots/codex_tokyo-night.jpg) | ![gruvbox](./screenshots/codex_gruvbox.jpg) | ![one-dark](./screenshots/codex_one-dark.jpg) |

## 导入

1. 复制下面任意一个 share string（也可打开 `share/<slug>.txt` 复制）。
2. 打开 Codex → Settings → Themes → **Import**。
3. 粘贴，完成。

| 主题 | Light | Dark |
|---|---|---|
| Anthropic | `share/claude-desktop-light.txt` | `share/claude-desktop-dark.txt` |
| Catppuccin | `share/catppuccin-latte.txt` | `share/catppuccin-mocha.txt` |
| Nord | `share/nord-light.txt` | `share/nord-dark.txt` |
| Tokyo Night | `share/tokyo-night-light.txt` | `share/tokyo-night-dark.txt` |
| Gruvbox | `share/gruvbox-light.txt` | `share/gruvbox-dark.txt` |
| One Dark / One Light | `share/one-light.txt` | `share/one-dark.txt` |

**Anthropic Light：**

```
codex-theme-v1:{"codeThemeId":"codex","variant":"light","theme":{"accent":"#CA7554","contrast":25,"fonts":{"code":"\"JetBrains Mono\", ui-monospace, \"SFMono-Regular\", \"Cascadia Mono\", Menlo, Consolas, monospace","ui":"\"DM Sans\", system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif"},"ink":"#38342E","opaqueWindows":true,"semanticColors":{"diffAdded":"#739245","diffRemoved":"#C37967","skill":"#CA7554"},"surface":"#F8F6F1"}}
```

**Anthropic Dark：**

```
codex-theme-v1:{"codeThemeId":"codex","variant":"dark","theme":{"accent":"#CA7554","contrast":55,"fonts":{"code":"\"JetBrains Mono\", ui-monospace, \"SFMono-Regular\", \"Cascadia Mono\", Menlo, Consolas, monospace","ui":"\"DM Sans\", system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif"},"ink":"#E8E4DC","opaqueWindows":true,"semanticColors":{"diffAdded":"#7FA84A","diffRemoved":"#C37967","skill":"#CA7554"},"surface":"#1E1D1B"}}
```

其余主题的 share string 见 `share/` 目录，每个主题一行即可导入。

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

| 主题 | 背景 (surface) | 文字 (ink) | 强调色 (accent) | 对比度 |
|---|---|---|---|---|
| Anthropic Light | `#F8F6F1` 暖白 | `#38342E` 暖黑 | `#CA7554` 铜色 | 25 |
| Anthropic Dark | `#1E1D1B` 碳黑 | `#E8E4DC` 暖白 | `#CA7554` 铜色 | 55 |
| Catppuccin Latte | `#EFF1F5` | `#4C4F69` | `#FE640B` 橙 | 20 |
| Catppuccin Mocha | `#1E1E2E` | `#CDD6F4` | `#FAB387` 桃 | 45 |
| Nord Light | `#ECEFF4` | `#2E3440` | `#5E81AC` 蓝 | 18 |
| Nord Dark | `#2E3440` | `#D8DEE9` | `#88C0D0` 冰蓝 | 40 |
| Tokyo Night Light | `#E1E2E7` | `#343B59` | `#2E7DE9` 蓝 | 20 |
| Tokyo Night | `#1A1B26` | `#C0CAF5` | `#7AA2F7` 蓝紫 | 50 |
| Gruvbox Light | `#FBF1C7` | `#3C3836` | `#D65D0E` 橙 | 22 |
| Gruvbox Dark | `#282828` | `#EBDBB2` | `#FE8019` 橙 | 45 |
| One Light | `#FAFAFA` | `#383A42` | `#4078F2` 蓝 | 15 |
| One Dark | `#282C34` | `#ABB2BF` | `#61AFEF` 蓝 | 45 |

## 限制

Codex 的 import 只支持：`surface`、`ink`、`accent`、`contrast`、`fonts`、`opaqueWindows`、`semanticColors`。侧边栏和主内容区无法分别配色，`contrast` 是唯一能调节面板层次感的参数。

## 文件

```text
share/
  claude-desktop-light.txt      导入字符串 (light)
  claude-desktop-dark.txt       导入字符串 (dark)
  catppuccin-latte.txt          Catppuccin Latte
  catppuccin-mocha.txt          Catppuccin Mocha
  nord-light.txt                Nord Light
  nord-dark.txt                 Nord Dark
  tokyo-night-light.txt         Tokyo Night Light
  tokyo-night-dark.txt          Tokyo Night
  gruvbox-light.txt             Gruvbox Light
  gruvbox-dark.txt              Gruvbox Dark
  one-light.txt                 One Light
  one-dark.txt                  One Dark
themes/
  *.json                        对应完整 VS Code 主题
src/
  theme-spec.mjs                主题源定义
```

## 构建

```bash
npm run build      # 重新生成 themes/ 和 share/
npm run validate   # 构建 + 校验 JSON + share string 格式
```
