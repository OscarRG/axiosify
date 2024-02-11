import querystring from 'querystring';
import { FLAGS, FLAG_IN_KEY } from '../flags/flags';
import { isDataURLEncodeFlag, isMatchingFlag } from './parserUtils';
import { Method } from '../types';

/**
 * Parses the value based on the flag.
 * @template T - The type of parsed flag values.
 * @param {string} flag - The flag.
 * @param {string} value - The value to parse.
 * @param {boolean} isDataURLEncode - Indicates whether data is URL encoded.
 * @returns {T} The parsed value.
 */
export function parseValue<T>(
  flag: string,
  value: string,
  isDataURLEncode: boolean,
): T {
  const key = FLAG_IN_KEY[flag as keyof typeof FLAGS]?.[0];

  if (!key) return value as unknown as T;

  switch (flag) {
    case FLAGS.HEADER:
      const [headerKey, headerValue] = value.split(': ');
      return { [headerKey]: headerValue } as unknown as T;
    case FLAGS.DATA:
      if (isDataURLEncode) {
        const [dataKey, dataValue] = value.split('=');
        return { [dataKey]: dataValue } as unknown as T;
      } else if (value.includes('xml')) {
        return value as unknown as T;
      } else if (value.includes('=')) {
        const [dataKey, dataValue] = value.split('=');
        return { [dataKey]: dataValue } as unknown as T;
      } else {
        return JSON.parse(value) as T;
      }
    default:
      return value as unknown as T;
  }
}

export function parseFlagValues<T>(
  flag: string,
  args: string[],
): Record<string, T> {
  const result: Record<string, T> = {};
  const headers: Record<string, string> = {};
  const urlSearchParams: Record<string, string> = {};
  let isDataURLEncode = false;

  args.forEach((arg, index) => {
    const flagKey = flag as keyof typeof FLAGS;

    if (isDataURLEncodeFlag(arg)) {
      isDataURLEncode = true;
    }

    if (isMatchingFlag(flagKey, arg)) {
      const value = args[index + 1];
      const key = FLAG_IN_KEY?.[flagKey]?.[0];

      if (key) {
        if (flag === FLAGS.HEADER) {
          const [headerKey, headerValue] = value.split(': ');
          headers[headerKey] = headerValue;
        }
        result[key] = parseValue<T>(flag, value, isDataURLEncode) as T;
        if (flag === FLAGS.DATA && isDataURLEncode) {
          const [dataKey, dataValue] = value.split('=');
          urlSearchParams[dataKey] = dataValue;
        }
      }
    }
  });

  if (Object.keys(headers).length > 0) {
    result[FLAG_IN_KEY?.[flag as keyof typeof FLAGS]?.[0] ?? ''] =
      headers as unknown as T;
  }

  if (isDataURLEncode) {
    const flagKey = flag as FLAGS;
    result[FLAG_IN_KEY?.[flagKey]?.[0] ?? ''] = querystring.stringify(
      urlSearchParams,
    ) as unknown as T;
  }

  return result;
}

/**
 * Parses request object from command line arguments.
 * @template T - The type of parsed flag values.
 * @param {string[]} args - The command line arguments.
 * @returns {Record<string, T>} The parsed request object.
 */
export function parseRequestObject<T>(args: string[]): Record<string, T> {
  let requestObj: Record<string, T> = {};

  for (const flag of Object.values(FLAGS)) {
    requestObj = { ...requestObj, ...parseFlagValues<T>(flag, args) };
  }

  return requestObj;
}

/**
 * Parses command-line arguments to determine the HTTP method.
 * @param {string[]} args - The command-line arguments.
 * @returns {Method} The determined HTTP method.
 */
export const getMethod = (args: string[]): Method => {
  const methods: Method[] = [
    'GET',
    'DELETE',
    'HEAD',
    'OPTIONS',
    'POST',
    'PUT',
    'PATCH',
    'PURGE',
    'LINK',
    'UNLINK',
  ];

  const isPost = args.some((arg) =>
    ['<?xml', 'application/x-www-form-urlencoded', '--data'].some((post) =>
      arg.includes(post),
    ),
  );

  return isPost
    ? 'POST'
    : methods.find((method) => args.includes(method)) || 'GET';
};
