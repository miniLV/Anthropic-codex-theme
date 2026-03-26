# Anthropic Codex Theme

Warm light and dark Codex themes tuned to Anthropic's current visual language:

- Ivory and parchment surfaces: `#FAF9F5`, `#F0EEE6`, `#E8E6DC`
- Carbon backgrounds: `#141413`, `#1F1E1D`, `#3D3D3A`
- Copper accent: `#D97757`
- Gold highlight: `#EDA100`
- Anthropic-style selection wash: `rgba(204, 120, 92, 0.5)`

## Prerequisites: Install Fonts

Codex themes reference font families by name but **cannot bundle font files**. You must install fonts locally first, otherwise Codex falls back to system defaults and the theme will look noticeably different.

### Required (free, open-source)

| Font | Purpose | Download |
|------|---------|----------|
| **JetBrains Mono** | Code font | https://www.jetbrains.com/lp/mono/ |
| **DM Sans** | UI font | https://fonts.google.com/specimen/DM+Sans |

### Install on macOS

**Option A: Manual**

1. Download both fonts from the links above.
2. Unzip the downloaded files.
3. Copy all `.ttf` files to `~/Library/Fonts/`:

```bash
cp ~/Downloads/JetBrainsMono-*/fonts/ttf/*.ttf ~/Library/Fonts/
cp ~/Downloads/DM_Sans/static/*.ttf ~/Library/Fonts/
```

4. Restart Codex.

**Option B: Homebrew**

```bash
brew install --cask font-jetbrains-mono font-dm-sans
```

### Install on Windows

1. Download both fonts.
2. Select all `.ttf` files, right-click, and choose **Install for all users**.
3. Restart Codex.

### Install on Linux

```bash
# JetBrains Mono
mkdir -p ~/.local/share/fonts
cd ~/.local/share/fonts
curl -fLO https://github.com/JetBrains/JetBrainsMono/releases/latest/download/JetBrainsMono-2.304.zip
unzip JetBrainsMono-2.304.zip -d JetBrainsMono && rm JetBrainsMono-2.304.zip

# DM Sans - download from Google Fonts, then:
cp ~/Downloads/DM_Sans/static/*.ttf ~/.local/share/fonts/

fc-cache -fv
```

### Verify installation

```bash
# macOS
ls ~/Library/Fonts/ | grep -iE "JetBrains|DMSans"

# Linux
fc-list | grep -iE "JetBrains|DM Sans"
```

You should see font files listed. If not, Codex will fall back to system fonts.

## Theme Variants

| Variant | File | Fonts | Notes |
|---------|------|-------|-------|
| **Anthropic Light** | `anthropic-light` | AnthropicSans + AnthropicMono | Full brand fidelity (requires proprietary fonts) |
| **Anthropic Dark** | `anthropic-dark` | AnthropicSans + AnthropicMono | Full brand fidelity (requires proprietary fonts) |
| **System Light** | `anthropic-system-light` | DM Sans + JetBrains Mono | Same colors, free/open fonts (recommended) |
| **System Dark** | `anthropic-system-dark` | DM Sans + JetBrains Mono | Same colors, free/open fonts (recommended) |
| **Claude Desktop Light** | `claude-desktop-light` | AnthropicSans + AnthropicMono | Tuned to Claude Desktop's softer UI palette |
| **Streamlit Light** | `anthropic-streamlit-light` | Styrene B + Fira Code | Based on the Streamlit Anthropic example by `jrieke` |

**Recommended for most users**: Use the **System** variants. They use the same Anthropic color palette with free fonts that closely approximate the brand look.

## Import Into Codex

1. Open Codex theme settings.
2. Use the import button.
3. Paste the full contents of any `share/<variant>.txt` file.

The Codex import dialog expects a `codex-theme-v1:...` share string, not a VS Code theme JSON file path.

## Font Stack Details

Each variant embeds a CSS font stack. Codex uses the first available font.

**Brand** (anthropic-light / anthropic-dark / claude-desktop-light):
1. `AnthropicSans` / `AnthropicMono` (Anthropic proprietary)
2. `Styrene B` / `JetBrains Mono` (Anthropic's secondary web fonts)
3. `DM Sans` / `SF Mono` (free fallback)
4. System defaults

**System** (anthropic-system-light / anthropic-system-dark):
1. `DM Sans` / `JetBrains Mono` (free, open-source)
2. `Inter` / `Fira Code` (alternative free fonts)
3. System defaults

**Streamlit** (anthropic-streamlit-light):
1. `Styrene B` / `Fira Code`
2. `DM Sans` / `JetBrains Mono`
3. System defaults

## Files

```
themes/
  anthropic-light.json
  anthropic-dark.json
  anthropic-system-light.json
  anthropic-system-dark.json
  anthropic-streamlit-light.json
  claude-desktop-light.json
share/
  anthropic-light.txt
  anthropic-dark.txt
  anthropic-system-light.txt
  anthropic-system-dark.txt
  anthropic-streamlit-light.txt
  claude-desktop-light.txt
settings/
  anthropic-fonts.example.json
```

`settings/anthropic-fonts.example.json` provides VS Code / editor settings for the full Anthropic font stack. The repo does not redistribute font files.

## Rebuild

```bash
npm run build
```

## Validate

```bash
npm run validate
```
