export enum FLAGS {
  UA = 'UA',
  HEADER = 'HEADER',
  HEAD = 'HEAD',
  DATA = 'DATA',
  USER = 'USER',
  METHOD = 'METHOD',
  COOKIE = 'COOKIE',
  COMPRESSED = 'COMPRESSED',
}

type FlagVariantMap = {
  [key in FLAGS]: string[];
};

const flagVariants: Partial<FlagVariantMap> = {
  [FLAGS.UA]: ['-A', '--user-agent'],
  [FLAGS.HEADER]: ['-H', '--header'],
  [FLAGS.HEAD]: ['-I', '--head'],
  [FLAGS.DATA]: [
    '-d',
    '--data',
    '--data-ascii',
    '--data-raw',
    '--data-urlencode',
  ],
  [FLAGS.USER]: ['-u', '--user'],
  [FLAGS.METHOD]: ['-X', '--request'],
  [FLAGS.COOKIE]: ['-b', '--cookie'],
  [FLAGS.COMPRESSED]: ['--compressed'],
};

export const FLAG_VARIANTS = flagVariants as FlagVariantMap;

type FlagInKeyMap = {
  [key in keyof typeof FLAGS]: string[];
};

const flagInKey: Partial<FlagInKeyMap> = {
  [FLAGS.UA]: ['headers', 'User-Agent'],
  [FLAGS.HEADER]: ['headers'],
  [FLAGS.DATA]: ['data'],
  [FLAGS.USER]: ['auth'],
  [FLAGS.METHOD]: ['method'],
  [FLAGS.COOKIE]: ['headers', 'Cookie'],
};

export const FLAG_IN_KEY = flagInKey as FlagInKeyMap;
