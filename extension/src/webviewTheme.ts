import * as vscode from "vscode";

const DARK_VARS: string = [
	"--vscode-foreground:#cccccc",
	"--vscode-sideBar-foreground:#cccccc",
	"--vscode-sideBar-background:#252526",
	"--vscode-sideBar-border:#454545",
	"--vscode-editor-foreground:#d4d4d4",
	"--vscode-editor-background:#1e1e1e",
	"--vscode-input-foreground:#cccccc",
	"--vscode-input-background:#3c3c3c",
	"--vscode-input-placeholderForeground:#a6a6a6",
	"--vscode-input-border:#454545",
	"--vscode-focusBorder:#007acc",
	"--vscode-list-activeSelectionForeground:#ffffff",
	"--vscode-list-activeSelectionBackground:rgba(14,99,156,0.4)",
	"--vscode-list-hoverBackground:rgba(255,255,255,0.1)",
	"--vscode-menu-foreground:#cccccc",
	"--vscode-menu-background:#252526",
	"--vscode-menu-selectionForeground:#ffffff",
	"--vscode-menu-selectionBackground:rgba(14,99,156,0.4)",
	"--vscode-menu-border:#454545",
	"--vscode-menu-separatorBackground:#454545",
	"--vscode-widget-border:#454545",
	"--vscode-button-secondaryBackground:#3c3c3c",
	"--vscode-button-secondaryForeground:#cccccc",
	"--vscode-button-secondaryHoverBackground:#505050",
	"--vscode-descriptionForeground:#989898",
	"--vscode-textLink-foreground:#3794ff",
	"--vscode-dropdown-foreground:#cccccc",
	"--vscode-dropdown-background:#3c3c3c",
	"--vscode-badge-foreground:#ffffff",
	"--vscode-button-foreground:#ffffff",
	"--vscode-button-background:#0e639c",
	"--vscode-font-size:13px",
].join(";");

const LIGHT_VARS: string = [
	"--vscode-foreground:#333333",
	"--vscode-sideBar-foreground:#333333",
	"--vscode-sideBar-background:#f3f3f3",
	"--vscode-sideBar-border:#e5e5e5",
	"--vscode-editor-foreground:#333333",
	"--vscode-editor-background:#ffffff",
	"--vscode-input-foreground:#333333",
	"--vscode-input-background:#ffffff",
	"--vscode-input-placeholderForeground:#a6a6a6",
	"--vscode-input-border:#cecece",
	"--vscode-focusBorder:#007acc",
	"--vscode-list-activeSelectionForeground:#ffffff",
	"--vscode-list-activeSelectionBackground:rgba(14,99,156,0.4)",
	"--vscode-list-hoverBackground:rgba(0,0,0,0.06)",
	"--vscode-menu-foreground:#333333",
	"--vscode-menu-background:#ffffff",
	"--vscode-menu-selectionForeground:#ffffff",
	"--vscode-menu-selectionBackground:rgba(14,99,156,0.4)",
	"--vscode-menu-border:#cecece",
	"--vscode-menu-separatorBackground:#e5e5e5",
	"--vscode-widget-border:#e5e5e5",
	"--vscode-button-secondaryBackground:#e5e5e5",
	"--vscode-button-secondaryForeground:#333333",
	"--vscode-button-secondaryHoverBackground:#d4d4d4",
	"--vscode-descriptionForeground:#6e6e6e",
	"--vscode-textLink-foreground:#006ab1",
	"--vscode-dropdown-foreground:#333333",
	"--vscode-dropdown-background:#ffffff",
	"--vscode-badge-foreground:#ffffff",
	"--vscode-button-foreground:#ffffff",
	"--vscode-button-background:#0e639c",
	"--vscode-font-size:13px",
].join(";");

export function getThemeCssVars(): string {
	const kind = vscode.window.activeColorTheme.kind;
	const isDark =
		kind === vscode.ColorThemeKind.Dark ||
		kind === vscode.ColorThemeKind.HighContrast;
	return isDark ? DARK_VARS : LIGHT_VARS;
}

/** Inline style for &lt;html style="..."&gt; (may be stripped by host) */
export function getThemeStyleAttribute(): string {
	return getThemeCssVars();
}

/** CSS :root + body.vscode-dark / body.vscode-light so theme works when host adds body class or we inject. */
export function getThemeCssBlock(): string {
	return `:root{${getThemeCssVars()}}
body.vscode-dark{${DARK_VARS}}
body.vscode-light{${LIGHT_VARS}}
`;
}
