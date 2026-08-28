const fonts = {
  open: {
    ui: '"DM Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    code: '"JetBrains Mono", ui-monospace, "SFMono-Regular", "Cascadia Mono", Menlo, Consolas, monospace',
    prose: '"DM Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
  }
};

const palettes = {
  claudeDesktopLight: {
    slug: "claude-desktop-light",
    name: "Claude Desktop Light",
    type: "light",
    shareSurface: "#F8F6F1",
    shareContrast: 25,
    fonts: fonts.open,
    editorBg: "#F8F6F1",
    surface: "#F3EFE7",
    surfaceAlt: "#ECE8E0",
    surfaceRaised: "#FBF9F4",
    surfaceMuted: "#E8E2D8",
    border: "#D8D1C6",
    borderStrong: "#C4BDAF",
    fg: "#38342E",
    fgSoft: "#605B54",
    fgMuted: "#8D877B",
    accent: "#CA7554",
    accentStrong: "#C16E4F",
    accentGlow: "#D89D73",
    accentSoft: "#D9A990",
    blue: "#7A92A5",
    blueStrong: "#5B7993",
    green: "#7D8D69",
    greenBright: "#739245",
    red: "#C37967",
    magenta: "#A37A90",
    cyan: "#85948F",
    cyanSoft: "#C0CBC4",
    selection: "#CA7554",
    shadow: "#2D2924",
    white: "#FFFFFF",
    terminalWhite: "#FBF9F4"
  },
  claudeDesktopDark: {
    slug: "claude-desktop-dark",
    name: "Claude Desktop Dark",
    type: "dark",
    shareSurface: "#1E1D1B",
    shareContrast: 55,
    fonts: fonts.open,
    editorBg: "#1A1918",
    surface: "#222120",
    surfaceAlt: "#2C2B29",
    surfaceRaised: "#383634",
    surfaceMuted: "#302F2D",
    border: "#3A3836",
    borderStrong: "#504E4B",
    fg: "#E8E4DC",
    fgSoft: "#A8A49C",
    fgMuted: "#827E76",
    accent: "#CA7554",
    accentStrong: "#D98262",
    accentGlow: "#D89D73",
    accentSoft: "#C49A84",
    blue: "#7A9AB5",
    blueStrong: "#6B8FAE",
    green: "#8A9E6E",
    greenBright: "#7FA84A",
    red: "#C37967",
    magenta: "#B07A94",
    cyan: "#85948F",
    cyanSoft: "#A8B8B2",
    selection: "#CA7554",
    shadow: "#000000",
    white: "#F5F2EC",
    terminalWhite: "#E8E4DC"
  },
  // Catppuccin Mocha — https://github.com/catppuccin/catppuccin (MIT)
  catppuccinMocha: {
    slug: "catppuccin-mocha",
    name: "Catppuccin Mocha",
    type: "dark",
    shareSurface: "#1E1E2E",
    shareContrast: 45,
    fonts: fonts.open,
    editorBg: "#181825",
    surface: "#1E1E2E",
    surfaceAlt: "#313244",
    surfaceRaised: "#45475A",
    surfaceMuted: "#2A2A3C",
    border: "#45475A",
    borderStrong: "#585B70",
    fg: "#CDD6F4",
    fgSoft: "#A6ADC8",
    fgMuted: "#7F849C",
    accent: "#FAB387",
    accentStrong: "#F5C2E7",
    accentGlow: "#F9E2AF",
    accentSoft: "#F2CDCD",
    blue: "#89B4FA",
    blueStrong: "#89B4FA",
    green: "#A6E3A1",
    greenBright: "#A6E3A1",
    red: "#F38BA8",
    magenta: "#CBA6F7",
    cyan: "#94E2D5",
    cyanSoft: "#89DCEB",
    selection: "#FAB387",
    shadow: "#000000",
    white: "#CDD6F4",
    terminalWhite: "#BAC2DE"
  },
  // Catppuccin Latte — https://github.com/catppuccin/catppuccin (MIT)
  catppuccinLatte: {
    slug: "catppuccin-latte",
    name: "Catppuccin Latte",
    type: "light",
    shareSurface: "#EFF1F5",
    shareContrast: 20,
    fonts: fonts.open,
    editorBg: "#EFF1F5",
    surface: "#E6E9EF",
    surfaceAlt: "#DCE0E8",
    surfaceRaised: "#F5F7FA",
    surfaceMuted: "#CCD0DA",
    border: "#BCC0CC",
    borderStrong: "#9CA0B0",
    fg: "#4C4F69",
    fgSoft: "#5C5F77",
    fgMuted: "#8C8FA1",
    accent: "#FE640B",
    accentStrong: "#EA76CB",
    accentGlow: "#DF8E1D",
    accentSoft: "#DD7878",
    blue: "#1E66F5",
    blueStrong: "#1E66F5",
    green: "#40A02B",
    greenBright: "#40A02B",
    red: "#D20F39",
    magenta: "#8839EF",
    cyan: "#179299",
    cyanSoft: "#04A5E5",
    selection: "#FE640B",
    shadow: "#4C4F69",
    white: "#FFFFFF",
    terminalWhite: "#EFF1F5"
  },
  // Nord dark — https://www.nordtheme.com (MIT)
  nordDark: {
    slug: "nord-dark",
    name: "Nord Dark",
    type: "dark",
    shareSurface: "#2E3440",
    shareContrast: 40,
    fonts: fonts.open,
    editorBg: "#2E3440",
    surface: "#3B4252",
    surfaceAlt: "#434C5E",
    surfaceRaised: "#4C566A",
    surfaceMuted: "#373E4C",
    border: "#4C566A",
    borderStrong: "#5A6378",
    fg: "#D8DEE9",
    fgSoft: "#C3CBD9",
    fgMuted: "#7B88A1",
    accent: "#88C0D0",
    accentStrong: "#81A1C1",
    accentGlow: "#EBCB8B",
    accentSoft: "#8FBCBB",
    blue: "#81A1C1",
    blueStrong: "#5E81AC",
    green: "#A3BE8C",
    greenBright: "#A3BE8C",
    red: "#BF616A",
    magenta: "#B48EAD",
    cyan: "#8FBCBB",
    cyanSoft: "#88C0D0",
    selection: "#88C0D0",
    shadow: "#000000",
    white: "#ECEFF4",
    terminalWhite: "#E5E9F0"
  },
  // Nord light — snow storm palette
  nordLight: {
    slug: "nord-light",
    name: "Nord Light",
    type: "light",
    shareSurface: "#ECEFF4",
    shareContrast: 18,
    fonts: fonts.open,
    editorBg: "#ECEFF4",
    surface: "#E5E9F0",
    surfaceAlt: "#D8DEE9",
    surfaceRaised: "#F4F6F9",
    surfaceMuted: "#CBD3E0",
    border: "#C3CBD9",
    borderStrong: "#A7B1C5",
    fg: "#2E3440",
    fgSoft: "#3B4252",
    fgMuted: "#7B88A1",
    accent: "#5E81AC",
    accentStrong: "#81A1C1",
    accentGlow: "#D08770",
    accentSoft: "#8FBCBB",
    blue: "#5E81AC",
    blueStrong: "#81A1C1",
    green: "#7A9E5E",
    greenBright: "#A3BE8C",
    red: "#BF616A",
    magenta: "#B48EAD",
    cyan: "#719E9C",
    cyanSoft: "#88C0D0",
    selection: "#5E81AC",
    shadow: "#2E3440",
    white: "#FFFFFF",
    terminalWhite: "#ECEFF4"
  },
  // Tokyo Night — https://github.com/tokyo-night/tokyo-night-vscode-theme (MIT)
  tokyoNightDark: {
    slug: "tokyo-night-dark",
    name: "Tokyo Night",
    type: "dark",
    shareSurface: "#1A1B26",
    shareContrast: 50,
    fonts: fonts.open,
    editorBg: "#1A1B26",
    surface: "#16161E",
    surfaceAlt: "#1F2335",
    surfaceRaised: "#292E42",
    surfaceMuted: "#1D1F2B",
    border: "#292E42",
    borderStrong: "#3B4261",
    fg: "#C0CAF5",
    fgSoft: "#A9B1D6",
    fgMuted: "#565F89",
    accent: "#7AA2F7",
    accentStrong: "#7DCFFF",
    accentGlow: "#E0AF68",
    accentSoft: "#BB9AF7",
    blue: "#7AA2F7",
    blueStrong: "#7AA2F7",
    green: "#9ECE6A",
    greenBright: "#9ECE6A",
    red: "#F7768E",
    magenta: "#BB9AF7",
    cyan: "#7DCFFF",
    cyanSoft: "#B4F9F8",
    selection: "#7AA2F7",
    shadow: "#000000",
    white: "#C0CAF5",
    terminalWhite: "#A9B1D6"
  },
  // Tokyo Night Light
  tokyoNightLight: {
    slug: "tokyo-night-light",
    name: "Tokyo Night Light",
    type: "light",
    shareSurface: "#E1E2E7",
    shareContrast: 20,
    fonts: fonts.open,
    editorBg: "#E1E2E7",
    surface: "#D5D6DB",
    surfaceAlt: "#CBCCD1",
    surfaceRaised: "#EBECF0",
    surfaceMuted: "#C4C5CA",
    border: "#B7B9C2",
    borderStrong: "#9699A3",
    fg: "#343B59",
    fgSoft: "#4C505E",
    fgMuted: "#848CB5",
    accent: "#2E7DE9",
    accentStrong: "#007197",
    accentGlow: "#8F5E15",
    accentSoft: "#9854F1",
    blue: "#2E7DE9",
    blueStrong: "#2E7DE9",
    green: "#587539",
    greenBright: "#587539",
    red: "#F52A65",
    magenta: "#9854F1",
    cyan: "#007197",
    cyanSoft: "#006A83",
    selection: "#2E7DE9",
    shadow: "#343B59",
    white: "#FFFFFF",
    terminalWhite: "#E1E2E7"
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

// ---------------------------------------------------------------------------
// Codex share-string builder
// ---------------------------------------------------------------------------
function buildShareTheme(palette) {
  return {
    slug: palette.slug,
    data: {
      codeThemeId: "codex",
      variant: palette.type,
      theme: {
        accent: palette.accent,
        contrast: palette.shareContrast,
        fonts: {
          code: palette.fonts.code,
          ui: palette.fonts.ui,
        },
        ink: palette.fg,
        opaqueWindows: true,
        semanticColors: {
          diffAdded: palette.greenBright,
          diffRemoved: palette.red,
          skill: palette.accent,
        },
        surface: palette.shareSurface,
      },
    },
  };
}

export const shareThemes = Object.values(palettes).map(buildShareTheme);
