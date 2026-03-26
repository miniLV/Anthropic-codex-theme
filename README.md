# Anthropic Codex Theme

Light and dark presets for Codex, tuned to match Claude Desktop's look and feel.

## Before & After

| Codex Default | Claude Desktop Light |
|:---:|:---:|
| ![before](./screenshots/before.png) | ![after](./screenshots/after-claude-desktop-light.png) |

> Replace the placeholder images above with your own screenshots.
> Save them in `screenshots/` as `before.png` and `after-claude-desktop-light.png`.

## Quick Start

1. Copy the share string from either:
   - `share/claude-desktop-light.txt`
   - `share/claude-desktop-dark.txt`
2. Open Codex → Settings → Themes → **Import**.
3. Paste the full `codex-theme-v1:...` string.
4. Done.

## What Changes

| Property | Light | Dark |
|---|---|---|
| Surface | `#F8F6F1` warm ivory | `#1E1D1B` carbon |
| Ink | `#38342E` warm dark | `#E8E4DC` warm ivory |
| Accent | `#CA7554` muted copper | `#CA7554` muted copper |
| Contrast | 25 (softer layers) | 55 (moderate separation) |
| UI font | DM Sans → system fallbacks | DM Sans → system fallbacks |
| Code font | JetBrains Mono → system fallbacks | JetBrains Mono → system fallbacks |

## Fonts

These presets work immediately with no extra setup — the share strings use public fonts with system fallbacks.

For the best result, install both free fonts:

| Font | Purpose | Download |
|---|---|---|
| **DM Sans** | UI font | [Google Fonts](https://fonts.google.com/specimen/DM+Sans) |
| **JetBrains Mono** | Code font | [JetBrains](https://www.jetbrains.com/lp/mono/) |

<details>
<summary>macOS install</summary>

**Homebrew (easiest)**
```bash
brew install --cask font-jetbrains-mono font-dm-sans
```

**Manual**
1. Download both fonts from the links above.
2. Unzip and copy `.ttf` files to `~/Library/Fonts/`.
3. Restart Codex.

</details>

<details>
<summary>Windows install</summary>

1. Download both fonts.
2. Select all `.ttf` files → right-click → **Install for all users**.
3. Restart Codex.

</details>

<details>
<summary>Linux install</summary>

```bash
mkdir -p ~/.local/share/fonts
# copy .ttf files to ~/.local/share/fonts/
fc-cache -fv
```

</details>

Without these fonts installed, Codex falls back to system defaults — it still looks fine, just not as close to the Anthropic feel.

## Codex Theme Limitations

Codex's `codex-theme-v1` import string only supports these parameters:

| Parameter | Controls |
|---|---|
| `surface` | Single background color for the entire app |
| `ink` | Text color |
| `accent` | Accent / highlight color |
| `contrast` | Layer separation intensity (higher = more distinct panels) |
| `fonts.ui` | UI font stack |
| `fonts.code` | Code font stack |
| `opaqueWindows` | Window opacity toggle |
| `semanticColors` | Diff added/removed and skill badge colors |

**What you cannot control via import:**

- Sidebar and main canvas colors independently (both use `surface`)
- Font size, weight, or line height
- Individual panel colors
- Border colors
- Remote web font loading

The entire app shares one `surface` color. `contrast` is the only lever to make panels feel more or less distinct from each other.

## Files

```text
themes/
  claude-desktop-light.json     VS Code theme JSON (full palette)
  claude-desktop-dark.json      VS Code theme JSON (full palette)
share/
  claude-desktop-light.txt      Codex import share string
  claude-desktop-dark.txt       Codex import share string
settings/
  public-fonts.example.json     Editor font settings (optional)
src/
  theme-spec.mjs                Source of truth for all palettes
```

## Rebuild

```bash
npm run build      # regenerate themes/ and share/
npm run validate   # build + check JSON validity + share string format
```
