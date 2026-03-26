# Anthropic Codex Theme

Two curated light presets for Codex:

- `Claude Desktop Light`
  Best default. Tuned to feel closer to the Claude Desktop app: whiter canvas, softer borders, lower contrast, smaller copper accent.
- `Anthropic Web Light`
  Brand-first. Tuned closer to the current Anthropic website: warmer parchment surfaces and stronger brand warmth.

## Variants

| Variant | File | Surface | Best for |
|---|---|---:|---|
| `claude-desktop-light` | `share/claude-desktop-light.txt` | `#F7F4ED` | Daily use, closest to Claude Desktop |
| `anthropic-web-light` | `share/anthropic-web-light.txt` | `#F0EEE6` | Brand feel, closer to anthropic.com |

## Import Into Codex

1. Open Codex theme settings.
2. Click `Import`.
3. Paste the full contents of either:
   - `share/claude-desktop-light.txt`
   - `share/anthropic-web-light.txt`

The import dialog expects a `codex-theme-v1:...` share string, not a VS Code theme JSON path.

## Fonts

Codex can reference local fonts in the theme, but it cannot bundle or download font files for you.

These presets are tuned for:

- UI: `AnthropicSans`
- Code: `AnthropicMono`

Fallbacks are included in the font stack, but if the Anthropic fonts are not installed locally the result will look less accurate.

The example editor font settings live in `settings/anthropic-fonts.example.json`.

## Files

```text
themes/
  anthropic-web-light.json
  claude-desktop-light.json
share/
  anthropic-web-light.txt
  claude-desktop-light.txt
settings/
  anthropic-fonts.example.json
```

## Rebuild

```bash
npm run build
```

## Validate

```bash
npm run validate
```
