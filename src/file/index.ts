/**
 * 格式化文件大小
 * @param fileSize 文件大小
 * @param idx 单位索引
 * @returns {string|*}
 * @example
 * ```typescript
 * formatFileSize(1024) // '1.00KB'
 * formatFileSize(1024 * 1024) // '1.00MB'
 * formatFileSize(1024 * 1024 * 1024) // '1.00GB'
 * ```
 */
export function formatFileSize(fileSize: number, idx = 0): string {
  if (!fileSize)
    return '0B'

  const units = ['B', 'KB', 'MB', 'GB']

  if (fileSize < 1024 || idx === units.length - 1)
    return fileSize.toFixed(2) + units[idx]

  return formatFileSize(fileSize / 1024, ++idx)
}
