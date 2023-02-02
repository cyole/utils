import { expect, it } from 'vitest'
import { randomStr, replaceAll } from '.'

it('replaceAll', () => {
  expect(replaceAll('hello world', 'l', 'L')).toBe('heLLo worLd')
  expect(replaceAll('hello world', 'l', '')).toBe('heo word')
})

it('randomStr', () => {
  expect(randomStr(16)).toHaveLength(16)
  expect(randomStr(16, 'abc')).toHaveLength(16)
  expect(randomStr(10)).toHaveLength(10)
  expect(randomStr(0)).toBe('')
})
