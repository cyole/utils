import { expect, it } from 'vitest'
import { hexToRGB, isHexColor, rgbToHex } from '.'

it('isHexColor', () => {
  expect(isHexColor('')).toBeFalsy()
  expect(isHexColor('fff')).toBeFalsy()
  expect(isHexColor('#ffff')).toBeFalsy()
  expect(isHexColor('#fff')).toBeTruthy()
  expect(isHexColor('#ffffff')).toBeTruthy()
})

it('rgbToHex', () => {
  expect(rgbToHex(0, 0, 0)).toBe('#000000')
  expect(rgbToHex(255, 255, 255)).toBe('#ffffff')
  expect(rgbToHex(12, 12, 12)).toBe('#0c0c0c')
})

it('hexToRGB', () => {
  expect(hexToRGB('#000000')).toBe('RGB(0,0,0)')
  expect(hexToRGB('#ffffff')).toBe('RGB(255,255,255)')
  expect(hexToRGB('#0c0c0c')).toBe('RGB(12,12,12)')
  expect(hexToRGB('#fff')).toBe('RGB(255,255,255)')
  expect(hexToRGB('abc')).toBe('abc')
})
