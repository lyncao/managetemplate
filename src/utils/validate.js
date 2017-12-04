/**
 * Created by caoliying on 16/11/18.
 */

export function isvalidUsername (str) {
  const validMap = ['admin', 'editor']
  return validMap.indexOf(str.trim()) >= 0
}

/* 合法url */
export function validateURL (textval) {
  const urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return urlregex.test(textval)
}

/* 小写字母 */
export function validateLowerCase (str) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

/* 大写字母 */
export function validateUpperCase (str) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

/* 大小写字母 */
export function validatAlphabets (str) {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}

// 数字
export function isNumber (str) {
  const reg = /^[0-9]*$/
  return reg.test(str)
}
// 有两位小数的正实数：
export function isDecimal (str) {
  const reg = /^[0-9]+(.[0-9]{2})?$/
  return reg.test(str)
}
// 汉字
export function isZhcn (str) {
  const reg = /^[\u4e00-\u9fa5]{0,}$/
  return reg.test(str)
}
// 中文、英文、数字包括下划线
export function isCharacter (str) {
  const reg = /^[\u4E00-\u9FA5A-Za-z0-9_]+$/
  return reg.test(str)
}
