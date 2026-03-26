# Anthropic Codex Theme

Two curated light presets for Codex:

- `Claude Desktop Light`
  Best default. Tuned to feel closer to the Claude Desktop app: whiter canvas, softer borders, lower contrast, smaller copper accent.
- `Anthropic Web Light`
  Brand-first. Tuned closer to the current Anthropic website: warmer parchment surfaces and stronger brand warmth.

## Variants

| Variant | File | Surface | Best for |
|---|---|---:|---|
| `claude-desktop-light` | `share/claude-desktop-light.txt` | `#F8F5EF` | Daily use, closest to Claude Desktop |
| `anthropic-web-light` | `share/anthropic-web-light.txt` | `#F0EEE6` | Brand feel, closer to anthropic.com |

## Import Into Codex

1. Open Codex theme settings.
2. Click `Import`.
3. Paste the full contents of either:
   - `share/claude-desktop-light.txt`
   - `share/anthropic-web-light.txt`

The import dialog expects a `codex-theme-v1:...` share string, not a VS Code theme JSON path.

## Fonts

These presets are designed to be directly importable in Codex with no extra setup.

The share strings use a public-font-first stack with system fallbacks:

- UI: `DM Sans`, then platform UI fonts
- Code: `JetBrains Mono`, then platform monospace fonts

That means:

- anyone can paste the share string and get a usable result immediately
- users who already have `DM Sans` and `JetBrains Mono` installed will get a closer Claude-like feel automatically
- no private Anthropic fonts are required

Codex still cannot bundle or download font files for you, so perfectly identical typography across every machine is not possible with import strings alone.

The example editor font settings live in `settings/public-fonts.example.json`.

## Files

```text
themes/
  anthropic-web-light.json
  claude-desktop-light.json
share/
  anthropic-web-light.txt
  claude-desktop-light.txt
settings/
  public-fonts.example.json
```

## Rebuild

```bash
npm run build
```

## Validate

```bash
npm run validate
```
