import { FLAGS, FLAG_VARIANTS } from '../flags/flags';

/**
 * Checks if the argument matches the flag variants.
 * @param {keyof typeof FLAGS} flagKey - The flag key.
 * @param {string} arg - The argument to check.
 * @returns {boolean} True if the argument matches the flag variants, otherwise false.
 */
export function isMatchingFlag(
  flagKey: keyof typeof FLAGS,
  arg: string,
): boolean {
  return FLAG_VARIANTS[flagKey]?.includes(arg) ?? false;
}

/**
 * Checks if the argument is a data-urlencode flag.
 * @param {string} arg - The argument to check.
 * @returns {boolean} True if the argument is a data-urlencode flag, otherwise false.
 */
export function isDataURLEncodeFlag(arg: string): boolean {
  return arg === '--data-urlencode';
}
