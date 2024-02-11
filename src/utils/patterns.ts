/**
 * Regular expression pattern for detecting single quotes.
 * @type {RegExp}
 */
export const QUOTES_PATTERN = /'/g;

/**
 * Regular expression pattern for parsing arguments.
 * Matches:
 *   - Unquoted strings
 *   - Single quoted strings, including escape sequences
 *   - Double quoted strings, including escape sequences
 *   - Whitespace separating arguments
 * @type {RegExp}
 */
export const ARGS_PATTERN =
  /\s*(?:(?:(?:[^\s'"]+)|'(?:[^\\']|\\.)*'|"(?:[^\\"]|\\.)*")(?:\s+|$))/g;

/**
 * Regular expression pattern for validating URLs.
 * Matches URLs starting with ftp, http, or https protocols.
 * @type {RegExp}
 */
export const URL_PATTERN =
  /^(ftp|http|https)?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}(\.|:)[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;
