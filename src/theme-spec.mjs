const palettes = {
  light: {
    slug: "anthropic-light",
    name: "Anthropic Light",
    type: "light",
    editorBg: "#FAF9F5",
    surface: "#F0EEE6",
    surfaceAlt: "#E8E6DC",
    surfaceRaised: "#FFFFFF",
    surfaceMuted: "#E3DACC",
    border: "#D1CFC5",
    borderStrong: "#B0AEA5",
    fg: "#141413",
    fgSoft: "#5E5D59",
    fgMuted: "#87867F",
    accent: "#D97757",
    accentStrong: "#C6613F",
    accentGlow: "#EDA100",
    accentSoft: "#D4A27F",
    blue: "#6396D6",
    blueStrong: "#146EF5",
    green: "#788C5D",
    greenBright: "#6EA100",
    red: "#ED6A5E",
    magenta: "#C46686",
    cyan: "#758696",
    cyanSoft: "#BCD1CA",
    selection: "#CC785C",
    shadow: "#141413",
    white: "#FFFFFF",
    terminalWhite: "#FAF9F5"
  },
  dark: {
    slug: "anthropic-dark",
    name: "Anthropic Dark",
    type: "dark",
    editorBg: "#141413",
    surface: "#1F1E1D",
    surfaceAlt: "#2A2927",
    surfaceRaised: "#3D3D3A",
    surfaceMuted: "#30302E",
    border: "#3D3D3A",
    borderStrong: "#5E5D59",
    fg: "#F0EEE6",
    fgSoft: "#B0AEA5",
    fgMuted: "#87867F",
    accent: "#D97757",
    accentStrong: "#C6613F",
    accentGlow: "#EDA100",
    accentSoft: "#D4A27F",
    blue: "#6A9BCC",
    blueStrong: "#6396D6",
    green: "#788C5D",
    greenBright: "#6EA100",
    red: "#ED6A5E",
    magenta: "#C46686",
    cyan: "#758696",
    cyanSoft: "#BCD1CA",
    selection: "#CC785C",
    shadow: "#000000",
    white: "#FAF9F5",
    terminalWhite: "#F0EEE6"
  }
};

function alpha(hex, opacity) {
  const normalized = Math.max(0, Math.min(1, opacity));
  const suffix = Math.round(normalized * 255)
    .toString(16)
    .padStart(2, "0")
    .toUpperCase();
  return `${hex}${suffix}`;
}

function token(name, scope, foreground, extras = {}) {
  return {
    name,
    scope,
    settings: {
      foreground,
      ...extras
    }
  };
}

function createWorkbenchColors(palette) {
  return {
    foreground: palette.fg,
    "descriptionForeground": palette.fgSoft,
    "focusBorder": palette.accent,
    "selection.background": alpha(palette.selection, 0.28),
    "errorForeground": palette.red,
    "icon.foreground": palette.accent,
    "textLink.foreground": palette.blueStrong,
    "textLink.activeForeground": palette.accent,
    "textSeparator.foreground": palette.border,
    "textBlockQuote.background": alpha(palette.surfaceRaised, 0.7),
    "textBlockQuote.border": palette.accentSoft,
    "titleBar.activeBackground": palette.surface,
    "titleBar.activeForeground": palette.fg,
    "titleBar.inactiveBackground": palette.surfaceAlt,
    "titleBar.inactiveForeground": palette.fgSoft,
    "titleBar.border": palette.border,
    "commandCenter.foreground": palette.fg,
    "commandCenter.background": alpha(palette.surfaceRaised, 0.8),
    "commandCenter.border": palette.border,
    "activityBar.background": palette.surfaceAlt,
    "activityBar.foreground": palette.fg,
    "activityBar.inactiveForeground": palette.fgMuted,
    "activityBar.border": palette.border,
    "activityBar.activeBorder": palette.accent,
    "activityBarBadge.background": palette.accent,
    "activityBarBadge.foreground": palette.white,
    "sideBar.background": palette.surface,
    "sideBar.foreground": palette.fg,
    "sideBar.border": palette.border,
    "sideBarTitle.foreground": palette.accent,
    "sideBarSectionHeader.background": palette.surfaceAlt,
    "sideBarSectionHeader.foreground": palette.fg,
    "sideBarSectionHeader.border": palette.border,
    "editorGroup.border": palette.border,
    "editorGroupHeader.tabsBackground": palette.surfaceAlt,
    "editorGroupHeader.tabsBorder": palette.border,
    "tab.activeBackground": palette.editorBg,
    "tab.activeForeground": palette.fg,
    "tab.activeBorder": palette.accent,
    "tab.activeBorderTop": palette.accent,
    "tab.inactiveBackground": palette.surfaceAlt,
    "tab.inactiveForeground": palette.fgSoft,
    "tab.border": palette.border,
    "tab.hoverBackground": alpha(palette.surfaceRaised, 0.8),
    "tab.hoverForeground": palette.fg,
    "tab.unfocusedActiveBorder": palette.accentSoft,
    "tab.unfocusedInactiveForeground": palette.fgMuted,
    "tabBar.border": palette.border,
    "statusBar.background": palette.surfaceAlt,
    "statusBar.foreground": palette.fg,
    "statusBar.border": palette.border,
    "statusBar.debuggingBackground": palette.accentStrong,
    "statusBar.noFolderBackground": palette.surfaceAlt,
    "statusBarItem.hoverBackground": alpha(palette.surfaceRaised, 0.7),
    "statusBarItem.prominentBackground": alpha(palette.accent, 0.2),
    "breadcrumb.background": palette.editorBg,
    "breadcrumb.foreground": palette.fgMuted,
    "breadcrumb.focusForeground": palette.fg,
    "breadcrumb.activeSelectionForeground": palette.accent,
    "breadcrumbPicker.background": palette.surfaceAlt,
    "editor.background": palette.editorBg,
    "editor.foreground": palette.fg,
    "editorLineNumber.foreground": palette.fgMuted,
    "editorLineNumber.activeForeground": palette.accent,
    "editorCursor.foreground": palette.accent,
    "editor.selectionBackground": alpha(palette.selection, 0.26),
    "editor.selectionHighlightBackground": alpha(palette.selection, 0.14),
    "editor.inactiveSelectionBackground": alpha(palette.selection, 0.16),
    "editor.lineHighlightBackground": alpha(palette.surfaceRaised, 0.55),
    "editor.findMatchBackground": alpha(palette.accentGlow, 0.4),
    "editor.findMatchHighlightBackground": alpha(palette.accentGlow, 0.18),
    "editor.wordHighlightBackground": alpha(palette.accent, 0.14),
    "editor.wordHighlightStrongBackground": alpha(palette.accent, 0.22),
    "editor.hoverHighlightBackground": alpha(palette.accent, 0.16),
    "editor.rangeHighlightBackground": alpha(palette.accentGlow, 0.12),
    "editorWhitespace.foreground": alpha(palette.fgMuted, 0.45),
    "editorIndentGuide.background": alpha(palette.borderStrong, 0.5),
    "editorIndentGuide.activeBackground": palette.accentSoft,
    "editorIndentGuide.background1": alpha(palette.borderStrong, 0.5),
    "editorIndentGuide.activeBackground1": palette.accentSoft,
    "editorBracketMatch.background": alpha(palette.accent, 0.16),
    "editorBracketMatch.border": palette.accent,
    "editorBracketHighlight.foreground1": palette.accent,
    "editorBracketHighlight.foreground2": palette.accentGlow,
    "editorBracketHighlight.foreground3": palette.blue,
    "editorBracketHighlight.foreground4": palette.green,
    "editorBracketHighlight.foreground5": palette.magenta,
    "editorBracketHighlight.foreground6": palette.cyanSoft,
    "editorGutter.background": palette.editorBg,
    "editorGutter.modifiedBackground": palette.accent,
    "editorGutter.addedBackground": palette.greenBright,
    "editorGutter.deletedBackground": palette.red,
    "editorLink.activeForeground": palette.blueStrong,
    "editorWidget.background": palette.surfaceAlt,
    "editorWidget.border": palette.border,
    "editorSuggestWidget.background": palette.surfaceAlt,
    "editorSuggestWidget.border": palette.border,
    "editorSuggestWidget.foreground": palette.fg,
    "editorSuggestWidget.highlightForeground": palette.accent,
    "editorSuggestWidget.selectedBackground": alpha(palette.accent, 0.16),
    "editorHoverWidget.background": palette.surfaceAlt,
    "editorHoverWidget.foreground": palette.fg,
    "editorHoverWidget.border": palette.border,
    "editorInlayHint.foreground": palette.fgSoft,
    "editorInlayHint.background": alpha(palette.surfaceRaised, 0.85),
    "editorCodeLens.foreground": palette.fgMuted,
    "diffEditor.insertedTextBackground": alpha(palette.greenBright, 0.16),
    "diffEditor.removedTextBackground": alpha(palette.red, 0.16),
    "scrollbarSlider.background": alpha(palette.surfaceRaised, 0.7),
    "scrollbarSlider.hoverBackground": alpha(palette.accentSoft, 0.7),
    "scrollbarSlider.activeBackground": alpha(palette.accent, 0.75),
    "panel.background": palette.surface,
    "panel.border": palette.border,
    "panelTitle.activeForeground": palette.accent,
    "panelTitle.inactiveForeground": palette.fgSoft,
    "panelTitle.activeBorder": palette.accent,
    "terminal.background": palette.editorBg,
    "terminal.foreground": palette.fg,
    "terminal.border": palette.border,
    "terminal.selectionBackground": alpha(palette.selection, 0.2),
    "terminalCursor.foreground": palette.accent,
    "terminal.ansiBlack": palette.editorBg,
    "terminal.ansiRed": palette.red,
    "terminal.ansiGreen": palette.greenBright,
    "terminal.ansiYellow": palette.accentGlow,
    "terminal.ansiBlue": palette.blueStrong,
    "terminal.ansiMagenta": palette.magenta,
    "terminal.ansiCyan": palette.cyan,
    "terminal.ansiWhite": palette.terminalWhite,
    "terminal.ansiBrightBlack": palette.fgMuted,
    "terminal.ansiBrightRed": alpha(palette.red, 0.92),
    "terminal.ansiBrightGreen": alpha(palette.greenBright, 0.92),
    "terminal.ansiBrightYellow": alpha(palette.accentGlow, 0.92),
    "terminal.ansiBrightBlue": alpha(palette.blueStrong, 0.92),
    "terminal.ansiBrightMagenta": alpha(palette.magenta, 0.92),
    "terminal.ansiBrightCyan": alpha(palette.cyanSoft, 0.92),
    "terminal.ansiBrightWhite": palette.white,
    "list.activeSelectionBackground": alpha(palette.accent, 0.16),
    "list.activeSelectionForeground": palette.fg,
    "list.focusBackground": alpha(palette.accent, 0.2),
    "list.focusForeground": palette.fg,
    "list.hoverBackground": alpha(palette.accentSoft, 0.14),
    "list.hoverForeground": palette.fg,
    "list.inactiveSelectionBackground": alpha(palette.accentSoft, 0.14),
    "tree.indentGuidesStroke": palette.border,
    "input.background": palette.surfaceRaised,
    "input.foreground": palette.fg,
    "input.border": palette.border,
    "input.placeholderForeground": palette.fgMuted,
    "inputOption.activeBorder": palette.accent,
    "inputOption.activeBackground": alpha(palette.accent, 0.14),
    "dropdown.background": palette.surfaceRaised,
    "dropdown.foreground": palette.fg,
    "dropdown.border": palette.border,
    "button.background": palette.accent,
    "button.foreground": palette.white,
    "button.hoverBackground": palette.accentStrong,
    "button.secondaryBackground": palette.surfaceRaised,
    "button.secondaryForeground": palette.fg,
    "button.secondaryHoverBackground": alpha(palette.surfaceRaised, 0.8),
    "checkbox.background": palette.surfaceRaised,
    "checkbox.foreground": palette.accent,
    "checkbox.border": palette.borderStrong,
    "badge.background": palette.accent,
    "badge.foreground": palette.white,
    "progressBar.background": palette.accent,
    "quickInput.background": palette.surface,
    "quickInput.foreground": palette.fg,
    "quickInputList.focusBackground": alpha(palette.accent, 0.16),
    "pickerGroup.foreground": palette.accent,
    "pickerGroup.border": palette.border,
    "menu.background": palette.surfaceAlt,
    "menu.foreground": palette.fg,
    "menu.selectionBackground": alpha(palette.accent, 0.18),
    "menu.selectionForeground": palette.fg,
    "menu.separatorBackground": palette.border,
    "menubar.selectionBackground": alpha(palette.accent, 0.16),
    "menubar.selectionForeground": palette.fg,
    "peekView.border": palette.accent,
    "peekViewEditor.background": palette.surface,
    "peekViewEditorGutter.background": palette.surface,
    "peekViewResult.background": palette.surfaceAlt,
    "peekViewTitle.background": palette.surfaceRaised,
    "notifications.background": palette.surfaceAlt,
    "notifications.foreground": palette.fg,
    "notifications.border": palette.border,
    "notificationCenterHeader.background": palette.surfaceRaised,
    "notificationCenter.border": palette.border,
    "notificationToast.border": palette.border,
    "gitDecoration.modifiedResourceForeground": palette.accent,
    "gitDecoration.deletedResourceForeground": palette.red,
    "gitDecoration.untrackedResourceForeground": palette.greenBright,
    "gitDecoration.ignoredResourceForeground": palette.fgMuted,
    "gitDecoration.conflictingResourceForeground": palette.accentGlow,
    "settings.headerForeground": palette.accent,
    "settings.modifiedItemIndicator": palette.accent,
    "settings.dropdownBackground": palette.surfaceRaised,
    "settings.dropdownBorder": palette.border,
    "settings.textInputBackground": palette.surfaceRaised,
    "settings.textInputBorder": palette.border,
    "settings.numberInputBackground": palette.surfaceRaised,
    "settings.numberInputBorder": palette.border,
    "inputValidation.infoBackground": alpha(palette.blue, 0.12),
    "inputValidation.infoBorder": palette.blueStrong,
    "inputValidation.warningBackground": alpha(palette.accentGlow, 0.12),
    "inputValidation.warningBorder": palette.accentGlow,
    "inputValidation.errorBackground": alpha(palette.red, 0.14),
    "inputValidation.errorBorder": palette.red,
    "extensionButton.prominentBackground": palette.accent,
    "extensionButton.prominentForeground": palette.white,
    "extensionButton.prominentHoverBackground": palette.accentStrong,
    "widget.shadow": alpha(palette.shadow, 0.24)
  };
}

function createTokenColors(palette) {
  return [
    token(
      "Comment",
      ["comment", "punctuation.definition.comment"],
      palette.fgMuted,
      { fontStyle: "italic" }
    ),
    token(
      "Keyword and storage",
      [
        "keyword",
        "storage",
        "storage.type",
        "storage.modifier",
        "keyword.control",
        "keyword.operator.new",
        "keyword.operator.expression"
      ],
      palette.accent,
      { fontStyle: "bold" }
    ),
    token(
      "Operator and punctuation",
      [
        "keyword.operator",
        "punctuation",
        "meta.brace",
        "meta.delimiter"
      ],
      palette.accentSoft
    ),
    token(
      "Variable",
      [
        "variable",
        "meta.definition.variable.name",
        "support.variable",
        "entity.name.variable"
      ],
      palette.fg
    ),
    token(
      "Parameter",
      ["variable.parameter", "meta.parameter.object-binding-pattern"],
      palette.accentSoft
    ),
    token(
      "Property and attribute",
      [
        "variable.other.property",
        "support.type.property-name",
        "entity.other.attribute-name",
        "meta.object-literal.key"
      ],
      palette.fgSoft
    ),
    token(
      "String",
      ["string", "markup.inline.raw.string"],
      palette.green
    ),
    token(
      "String escape and placeholders",
      [
        "constant.character.escape",
        "constant.other.placeholder",
        "string.interpolated",
        "string.regexp.character-class"
      ],
      palette.accentGlow
    ),
    token(
      "Number and constants",
      [
        "constant.numeric",
        "constant.language",
        "constant.character",
        "support.constant"
      ],
      palette.accentGlow
    ),
    token(
      "Enum members and atoms",
      ["constant.other", "variable.other.enummember"],
      palette.magenta
    ),
    token(
      "Functions and methods",
      [
        "entity.name.function",
        "entity.name.method",
        "meta.function-call",
        "variable.function",
        "support.function"
      ],
      palette.blueStrong
    ),
    token(
      "Types and classes",
      [
        "entity.name.type",
        "entity.name.class",
        "support.type",
        "support.class",
        "storage.type.annotation"
      ],
      palette.accentSoft,
      { fontStyle: "bold" }
    ),
    token(
      "Namespaces and modules",
      [
        "entity.name.namespace",
        "entity.name.module",
        "support.module",
        "support.namespace"
      ],
      palette.blue
    ),
    token(
      "Tags and selectors",
      [
        "entity.name.tag",
        "source.css entity.name.tag",
        "meta.selector.css",
        "meta.selector.scss"
      ],
      palette.accent
    ),
    token(
      "Attribute values",
      ["string.quoted.attribute-value", "meta.attribute-with-value"],
      palette.green
    ),
    token(
      "Regular expressions",
      ["string.regexp", "constant.other.character-class.regexp"],
      palette.magenta
    ),
    token(
      "JSON key",
      ["support.type.property-name.json", "meta.structure.dictionary.json string.quoted.double"],
      palette.accentSoft
    ),
    token(
      "Markdown heading",
      ["markup.heading", "punctuation.definition.heading"],
      palette.accent,
      { fontStyle: "bold" }
    ),
    token(
      "Markdown emphasis",
      [
        "markup.bold",
        "markup.italic",
        "markup.quote",
        "markup.list"
      ],
      palette.accentSoft
    ),
    token(
      "Link",
      [
        "string.other.link",
        "markup.underline.link",
        "markup.link",
        "markup.url"
      ],
      palette.blueStrong,
      { fontStyle: "underline" }
    ),
    token(
      "Inserted diff",
      ["markup.inserted", "meta.diff.header.to-file"],
      palette.greenBright
    ),
    token(
      "Deleted diff",
      ["markup.deleted", "meta.diff.header.from-file"],
      palette.red
    ),
    token(
      "Changed diff",
      ["markup.changed", "meta.diff.range"],
      palette.accentGlow
    ),
    token(
      "Invalid",
      ["invalid", "invalid.illegal"],
      palette.red
    )
  ];
}

function buildTheme(palette) {
  return {
    name: palette.name,
    type: palette.type,
    colors: createWorkbenchColors(palette),
    tokenColors: createTokenColors(palette)
  };
}

export const themes = Object.values(palettes).map((palette) => ({
  slug: palette.slug,
  data: buildTheme(palette)
}));

export const shareThemes = [
  {
    slug: "anthropic-light",
    data: {
      codeThemeId: "codex",
      variant: "light",
      theme: {
        accent: "#D97757",
        contrast: 42,
        fonts: {
          code: "Anthropic Mono, ui-monospace, \"SFMono-Regular\", Menlo, Consolas, monospace",
          ui: "Anthropic Sans, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif"
        },
        ink: "#141413",
        opaqueWindows: true,
        semanticColors: {
          diffAdded: "#6EA100",
          diffRemoved: "#ED6A5E",
          skill: "#D97757"
        },
        surface: "#F0EEE6"
      }
    }
  },
  {
    slug: "anthropic-dark",
    data: {
      codeThemeId: "codex",
      variant: "dark",
      theme: {
        accent: "#D97757",
        contrast: 68,
        fonts: {
          code: "Anthropic Mono, ui-monospace, \"SFMono-Regular\", Menlo, Consolas, monospace",
          ui: "Anthropic Sans, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif"
        },
        ink: "#F0EEE6",
        opaqueWindows: true,
        semanticColors: {
          diffAdded: "#6EA100",
          diffRemoved: "#ED6A5E",
          skill: "#D97757"
        },
        surface: "#1F1E1D"
      }
    }
  }
];
