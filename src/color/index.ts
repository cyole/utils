/**
 * 判断是否 十六进制颜色值.
 * 输入形式可为 #fff000 #f00
 *
 * @param color string   十六进制颜色值
 * @return boolean
 * @example
 * ``` typescript
 * isHexColor('#fff')
 * ```
 */
export function isHexColor(color: string) {
  const reg = /^#([0-9a-fA-F]{3}|[0-9a-fA-f]{6})$/

  return reg.test(color)
}

/**
 * RGB 颜色值转换为 十六进制颜色值.
 * r, g, 和 b 需要在 [0, 255] 范围内
 *
 * @param r 0-255 之间的数值
 * @param g 0-255 之间的数值
 * @param b 0-255 之间的数值
 * @return string 类似#ff00ff
 * @example
 * ``` typescript
 * rgbToHex(23, 46, 176)
 * ```
 */
export function rgbToHex(r: number, g: number, b: number) {
  const hex = ((r << 16) | (g << 8) | b).toString(16)

  return `#${new Array(Math.abs(hex.length - 7)).join('0')}${hex}`
}

/**
 * 十六进制颜色值转RGB颜色值
 * @param hex 十六进制颜色值
 * @param opacity 透明度 0 - 1之间的值
 * @category Color
 * @example
 * ``` typescript
 * hexToRGB('#fff', 0.5)
 * ```
 */
export function hexToRGB(hex: string) {
  let sHex = hex.toLowerCase()

  if (isHexColor(hex)) {
    if (sHex.length === 4) {
      let sColorNew = '#'

      for (let i = 1; i < 4; i += 1)
        sColorNew += sHex.slice(i, i + 1).concat(sHex.slice(i, i + 1))

      sHex = sColorNew
    }
    const sColorChange: number[] = []

    for (let i = 1; i < 7; i += 2)
      sColorChange.push(parseInt(`0x${sHex.slice(i, i + 2)}`))

    return `RGB(${sColorChange.join(',')})`
  }
  return sHex
}
