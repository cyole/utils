/**
 * 整数
 * @example
 * -1231, 123, 0
 */
export const intReg = /^(?:0|(?:-?[1-9]\d*))$/

/**
 * 正整数 不包含0
 * @example
 * 123, 1231
 */
export const positiveIntReg = /^\+?[1-9]\d*$/

/**
 * 负整数 不包含0
 * @example
 * -123, -1231
 */
export const negativeIntReg = /^-[1-9]\d*$/

/**
 * 浮点数
 * @example
 * -123.1, 123.1, 0.1 0.00
 */
export const floatReg = /^(-?[1-9]\d*\.\d+|-?0\.\d*[1-9]\d*|0\.0+)$/

/**
 * 浮点数 严格
 * @example
 * -123.1, 123.1, 0.1
 */
export const floatStrictReg = /^(-?[1-9]\d*\.\d+|-?0\.\d*[1-9])$/

/**
 * 金额 最多两位小数
 * @example
 * -123.1, 123.1, 0.1 0.00
 */
export const moneyReg = /(?:^[1-9]([0-9]+)?(?:\.[0-9]{1,2})?$)|(?:^(?:0)$)|(?:^[0-9]\.[0-9](?:[0-9])?$)/

/**
 * 货币金额（支持负数、千分位分隔符）
 * @example
 * 100, -0.99, 3, 234.32, -1, 900, 235.09, '12,345,678.90'
 */
export const moneyStrictReg = /^-?\d{1,3}(,\d{3})*(\.\d{1,2})?$/

/**
 * 英文字母
 * @example
 * 'abc', 'b', 'c'
 */
export const letterReg = /^[a-zA-Z]+$/

/**
 * 大写英文字母
 * @example
 * 'ABC', 'B', 'C'
 */
export const letterUpperReg = /^[A-Z]+$/

/**
 * 小写英文字母
 * @example
 * 'abc', 'b', 'c'
 */
export const letterLowerReg = /^[a-z]+$/

/**
 * 字母和数字组合
 * @example
 * 'abc123', 'b123', 'c123'
 */
export const letterNumberReg = /^[A-Za-z0-9]+$/

/**
 * 微信号(wx)，6至20位，以字母开头，字母，数字，减号，下划线
 * @example
 * 'github666', 'kd_-666',
 */
export const wxReg = /^[a-zA-Z][-_a-zA-Z0-9]{5,19}$/

/**
 * email(支持中文邮箱)
 * @example
 * '90203918@qq.com', 'nbilly@126.com', '啦啦啦@126.com'
 */
export const emailReg = /^[A-Za-z0-9\u4E00-\u9FA5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/

/**
 * 邮政编码 中国
 * @example
 * 734500 100000
 */
export const zipCodeReg = /^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/

/**
 * 身份证号(2代,18位数字),最后一位是校验位,可能为数字或字符X
 * @example
 * 11010119900307771X
 */
export const idCardReg = /^[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$/

/**
 * 座机电话
 * @example
 * 010-12345678 0341-86091234
 */
export const telReg = /^(?:(?:\d{3}-)?\d{8}|^(?:\d{4}-)?\d{7,8})(?:-\d+)?$/

/**
 * 中国省
 * @example
 * 010-12345678 0341-86091234
 */
export const provinceReg = /^浙江|上海|北京|天津|重庆|黑龙江|吉林|辽宁|内蒙古|河北|新疆|甘肃|青海|陕西|宁夏|河南|山东|山西|安徽|湖北|湖南|江苏|四川|贵州|云南|广西|西藏|江西|广东|福建|台湾|海南|香港|澳门$/

/**
 * 手机号(mobile phone)中国(宽松), 只要是13,14,15,16,17,18,19开头即可
 * @example
 * '008618311006933', '+8617888829981', '19119255642'
 */
export const mobilePhoneReg = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/

/**
 * 统一社会信用代码(宽松匹配)(15位/18位/20位数字/字母)
 * @example
 * 91110108772551611J
 */
export const creditCodeReg = /^(([0-9A-Za-z]{15})|([0-9A-Za-z]{18})|([0-9A-Za-z]{20}))$/

/**
 * 网址URL
 * @example
 * 'www.qq.com', 'https://vuejs.org/v2/api/#v-model', 'www.qq.99', '//www.qq.com', 'www.腾讯.cs', 'ftp://baidu.qq', 'http://baidu.com'
 */
export const urlReg = /^(((ht|f)tps?):\/\/)?([^!@#$%^&*?.\s-]([^!@#$%^&*?.\s]{0,63}[^!@#$%^&*?.\s])?\.)+[a-z]{2,6}\/?/
