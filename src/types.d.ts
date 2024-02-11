export enum HeaderTitle {
  UserAgent = 'User-Agent',
  Accept = 'Accept',
  AcceptEncoding = 'Accept-Encoding',
  AcceptLanguage = 'Accept-Language',
  CacheControl = 'Cache-Control',
  Connection = 'Connection',
  ContentLength = 'Content-Length',
  ContentType = 'Content-Type',
  Cookie = 'Cookie',
  Host = 'Host',
  Origin = 'Origin',
  Referer = 'Referer',
  UpgradeInsecureRequests = 'Upgrade-Insecure-Requests',
  XRequestedWith = 'X-Requested-With',
  Authorization = 'Authorization',
  IfMatch = 'If-Match',
  IfNoneMatch = 'If-None-Match',
  IfModifiedSince = 'If-Modified-Since',
  IfUnmodifiedSince = 'If-Unmodified-Since',
  LastModified = 'Last-Modified',
  ETag = 'ETag',
  Pragma = 'Pragma',
  Expires = 'Expires',
  Date = 'Date',
  KeepAlive = 'Keep-Alive',
  Server = 'Server',
  SetCookie = 'Set-Cookie',
  ContentEncoding = 'Content-Encoding',
  ContentDisposition = 'Content-Disposition',
  ContentLanguage = 'Content-Language',
}

export type Headers = Record<HeaderTitle | string, string>;

export type Method =
  | 'GET'
  | 'DELETE'
  | 'HEAD'
  | 'OPTIONS'
  | 'POST'
  | 'PUT'
  | 'PATCH'
  | 'PURGE'
  | 'LINK'
  | 'UNLINK';

export type UrlObject = {
  href?: string;
  url?: string;
  baseURL?: string;
  params?: Record<string, string>;
};

export type RequestObject<T> = {
  method?: Method;
  headers?: Headers;
  data?: T;
};

export type Output<T> = RequestObject<T> & UrlObject;

//   export type HeaderTitle =
//     | 'User-Agent'
//     | 'Accept'
//     | 'Accept-Encoding'
//     | 'Accept-Language'
//     | 'Cache-Control'
//     | 'Connection'
//     | 'Content-Length'
//     | 'Content-Type'
//     | 'Cookie'
//     | 'Host'
//     | 'Origin'
//     | 'Referer'
//     | 'Upgrade-Insecure-Requests'
//     | 'X-Requested-With';

//   export type Method =
//     | 'GET'
//     | 'DELETE'
//     | 'HEAD'
//     | 'OPTIONS'
//     | 'POST'
//     | 'PUT'
//     | 'PATCH'
//     | 'PURGE'
//     | 'LINK'
//     | 'UNLINK';

//   export type Headers = Record<HeaderTitle | string, string>;

//   export interface ICredentials {
//     username: string;
//     password: string;
//   }

//   export interface IProxy {
//     host: string;
//     port: number;
//     auth?: {
//       username: string;
//       password: string;
//     };
//     protocol?: string;
//   }

//   export type UrlObject = {
//     href?: string;
//     url?: string;
//     baseURL?: string;
//     params?: { [k: string]: any };
//   };

//   export type RequestObject<T> = {
//     method?: Method;
//     headers?: Headers;
//     data?: T;
//     timeout?: number;
//     auth?: ICredentials;
//     proxy?: IProxy | false;
//   };

//   export type Output<T> = RequestObject<T> & UrlObject;
