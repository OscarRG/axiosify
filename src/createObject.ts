import { getMethod, parseRequestObject } from './parsers/parsers';
import { Output, RequestObject } from './types';
import { getUrl, removeEmptyValues, splitArguments } from './utils/utils';

export const curlToObject = <T>(curl: string): Output<T> => {
  const args = splitArguments(curl);
  const url = getUrl(args);
  const requestMethod = getMethod(args);

  const requestObj = parseRequestObject(args);
  requestObj.method = requestMethod;

  const axiosObject = removeEmptyValues({
    url,
    ...requestObj,
  } as RequestObject<T>);
  return axiosObject;
};
