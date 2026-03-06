declare module "fzy.js" {
	export const SCORE_MIN: number;
	export const SCORE_MAX: number;
	export const SCORE_GAP_LEADING: number;
	export const SCORE_GAP_TRAILING: number;
	export const SCORE_GAP_INNER: number;
	export const SCORE_MATCH_CONSECUTIVE: number;
	export const SCORE_MATCH_SLASH: number;
	export const SCORE_MATCH_WORD: number;
	export const SCORE_MATCH_CAPITAL: number;
	export const SCORE_MATCH_DOT: number;

	export function score(needle: string, haystack: string): number;
	export function positions(needle: string, haystack: string): number[];
	export function hasMatch(needle: string, haystack: string): boolean;
}
