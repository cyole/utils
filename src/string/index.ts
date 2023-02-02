// port from nanoid
// https://github.com/ai/nanoid
const urlAlphabet = 'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict'

/**
 * 生成随机字符串
 * @param size 字符串长度
 * @param dict 字符串字典
 * @returns {string}
 * @category String
 * @example
 * ```typescript
 * randomStr(16) // 'b8f7f8f8f8f8f8f8'
 * ```
 */
export function randomStr(size = 16, dict = urlAlphabet) {
  let id = ''
  let i = size
  const len = dict.length
  while (i--)
    id += dict[(Math.random() * len) | 0]
  return id
}

/**
 * 替换字符串中的所有匹配项
 *
 * @param str 原字符串
 * @param search 要替换的字符串
 * @param replacement 替换的内容
 * @returns {string}
 * @category String
 * @example
 * ```typescript
 * replaceAll('hello world', 'l', 'L') // 'heLLo worLd'
 * ```
 */
export function replaceAll(str: string, search: string, replacement: string) {
  const regexp = new RegExp(search, 'g')
  return str.replace(regexp, replacement)
}
