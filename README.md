<h1 align="center">Anthropic Codex Theme</h1>

<p align="center"><strong>让 OpenAI Codex 换上 Claude 的样子：象牙白底色，柔和铜色点缀，对比不刺眼。</strong></p>
<p align="center">复制一行，粘进 Codex，就好了。什么都不用装。顺带还有 Catppuccin、Nord、Tokyo Night、Gruvbox、One Dark。</p>

<p align="center">
  <a href="https://minilv.github.io/Anthropic-codex-theme/zh/">主页 · 一键复制</a> ·
  <strong>简体中文</strong> · <a href="./README.en.md">English</a>
</p>

<p align="center">
  <img alt="stars" src="https://img.shields.io/github/stars/miniLV/Anthropic-codex-theme?style=flat-square&color=CA7554">
  <img alt="themes" src="https://img.shields.io/badge/themes-12-CA7554?style=flat-square">
  <img alt="license" src="https://img.shields.io/badge/license-MIT-739245?style=flat-square">
</p>

<p align="center"><img src="./screenshots/codex_anthropic.jpg" alt="换上 Anthropic 主题的 Codex" width="860"></p>

## 为什么用它

- **十秒搞定。** Codex 自带主题导入框，这里给你的就是要粘进去的那一行。
- **就是 Claude 的感觉。** 象牙白 `#F8F6F1` 底，铜色 `#CA7554` 强调，暖色文字，DM Sans + JetBrains Mono。
- **浅色深色都有。** 每个主题都是成对的。
- **不会弄坏东西。** 不改安装包，不动任何文件。想换回去，在设置里点一下。

## 主题画廊

| Codex 默认 | Anthropic | Catppuccin Mocha |
|:---:|:---:|:---:|
| ![default](./screenshots/codex_default.jpg) | ![anthropic](./screenshots/codex_anthropic.jpg) | ![catppuccin](./screenshots/codex_catppuccin.jpg) |

| Nord | Tokyo Night | Gruvbox | One Dark |
|:---:|:---:|:---:|:---:|
| ![nord](./screenshots/codex_nord.jpg) | ![tokyo-night](./screenshots/codex_tokyo-night.jpg) | ![gruvbox](./screenshots/codex_gruvbox.jpg) | ![one-dark](./screenshots/codex_one-dark.jpg) |

## 导入

1. 复制下面任意一个 share string（也可打开 `share/<slug>.txt` 复制）。
2. 打开 Codex → Settings → **Appearance** → 在 Light Theme 或 Dark Theme 卡片里点 **Import**。
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
