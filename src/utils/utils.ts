import { RequestObject } from '../types';
import { ARGS_PATTERN, QUOTES_PATTERN, URL_PATTERN } from './patterns';

/**
 * Splits a string into an array of trimmed arguments, removing single quotes.
 * @param {string} str - The string to split into arguments.
 * @returns {string[]} An array of trimmed arguments.
 */
export function splitArguments(str: string): string[] {
  if (!str) return [];
  return (
    str
      .match(ARGS_PATTERN)
      ?.map((arg) => arg.trim().replace(QUOTES_PATTERN, '')) || []
  );
}

/**
 * Finds and returns the URL from the given array of arguments.
 * Throws an error if no URL is found.
 * @param {string[]} args - The command line arguments.
 * @returns {string} The URL.
 */
export function getUrl(args: string[]): string {
  const url = args.find((arg) => URL_PATTERN.test(arg));
  if (!url) throw new Error('No URL found in the arguments');
  return url;
}

/**
 * Removes empty values from a given object.
 * @template T - The type of parsed flag values.
 * @param {RequestObject<T>} obj - The object from which to remove empty values.
 * @returns {RequestObject<T>} An object with empty values removed.
 */

export const removeEmptyValues = <T>(obj: RequestObject<T>) => {
  const filteredEntries = Object.entries(obj).filter(
    ([_key, value]) => value !== '',
  );
  return Object.fromEntries(filteredEntries);
};
