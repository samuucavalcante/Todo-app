// @ts-nocheck
type Primitive = string | number | boolean | undefined | null;

type DeepMerge<T, U> = U extends Primitive
  ? T | U
  : T extends Primitive
  ? T
  : T & U extends object
  ? {
      [K in Extract<keyof (T & U), string>]: K extends keyof U
        ? K extends keyof T
          ? DeepMerge<T[K], U[K]>
          : U[K]
        : K extends keyof T
        ? T[K]
        : never;
    }
  : T & U;

function deepMerge<T extends object, U extends object>(target: T, source: U): DeepMerge<T, U> {
  if (typeof target !== 'object' || target === null) {
    return source as DeepMerge<T, U>;
  }

  if (typeof source !== 'object' || source === null) {
    return target as DeepMerge<T, U>;
  }

  const merged: any = { ...target };

  for (const key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (key in target) {
        // @ts-ignore
        merged[key] = deepMerge(target[key], source[key]);
      } else {
        merged[key] = source[key];
      }
    }
  }

  return merged as DeepMerge<T, U>;
}
