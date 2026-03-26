# Anthropic Codex Theme

Warm light and dark Codex themes tuned to Anthropic's current visual language:

- Ivory and parchment surfaces: `#FAF9F5`, `#F0EEE6`, `#E8E6DC`
- Carbon backgrounds: `#141413`, `#1F1E1D`, `#3D3D3A`
- Copper accent: `#D97757`
- Gold highlight: `#EDA100`
- Anthropic-style selection wash: `rgba(204, 120, 92, 0.5)`

The syntax model starts from a Claude-like layout, but the palette is re-tuned against Anthropic's live site colors and typography choices.

## Files

- `themes/anthropic-light.json`
- `themes/anthropic-dark.json`
- `settings/anthropic-fonts.example.json`

## Import Into Codex

1. Open Codex theme settings.
2. Use the import button.
3. Import either `themes/anthropic-light.json` or `themes/anthropic-dark.json`.

## Font Setup

Codex color themes can control colors and token styles, but they cannot force the app UI font on their own.

To get as close as possible to Anthropic's actual typography, use these font families if you already have them installed locally:

- UI sans: `Anthropic Sans`
- Prose serif: `Anthropic Serif`
- Code font: `Anthropic Mono`

`settings/anthropic-fonts.example.json` includes a safe editor and terminal fallback stack.
The repo does not redistribute the font files themselves.

## Rebuild

```bash
npm run build
```

## Validate

```bash
npm run validate
```
