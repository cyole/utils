export const toString = (v: any) => Object.prototype.toString.call(v)

/**
 * 判断类型的通用方法
 * @param val
 * @param type
 * @returns
 */
export function is(val: unknown, type: string) {
  return toString(val) === `[object ${type}]`
}
