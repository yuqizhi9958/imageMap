/** 手机号规则 **/
// const MOBILE_PATTERN = /^((13[0-9])|(14[0-9])|(15[0-9])|(17[0-9])|(18[0-9]))(\\d{8})$/
const MOBILE_PATTERN = /^[1][3,4,5,7,8][0-9]{9}$/
/** 中国电信号码格式验证 手机段： 133,153,180,181,189,177,1700,173 **/
const CHINA_TELECOM_PATTERN = /(?:^(?:\\+86)?1(?:33|53|7[37]|8[019])\\d{8}$)|(?:^(?:\\+86)?1700\\d{7}$)/
/** 中国联通号码格式验证 手机段：130,131,132,155,156,185,186,145,176,1707,1708,1709,175 **/
const CHINA_UNICOM_PATTERN = /(?:^(?:\\+86)?1(?:3[0-2]|4[5]|5[56]|7[56]|8[56])\\d{8}$)|(?:^(?:\\+86)?170[7-9]\\d{7}$)/
/** 中国移动号码格式验证 手机段：134,135,136,137,138,139,150,151,152,157,158,159,182,183,184,187,188,147,178,1705 **/
const CHINA_MOVE_PATTERN = /(?:^(?:\\+86)?1(?:3[4-9]|4[7]|5[0-27-9]|7[8]|8[2-478])\\d{8}$)|(?:^(?:\\+86)?1705\\d{7}$)/
/** 密码规则（6-16位字母、数字）**/
const PASSWORD_PATTERN = /[0-9A-Za-z]{6,16}$/
/** 固号（座机）规则 **/
const LANDLINE_PATTERN = /^(?:\\(\\d{3,4}\\)|\\d{3,4}-)?\\d{7,8}(?:-\\d{1,4})?$/
/** 邮政编码规则 **/
const POSTCODE_PATTERN = /[1-9]\\d{5}/
/** 邮箱规则 **/
const EMAIL_PATTERN = /^([a-z0-9A-Z]+[-|_|\\.]?)+[a-z0-9A-Z]@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-zA-Z]{2,}$/
/** 年龄规则 1-120之间 **/
const AGE_PATTERN = /^(?:[1-9][0-9]?|1[01][0-9]|120)$/
/** 身份证规则 **/
// const IDCARD_PATTERN = /^\\d{15}|\\d{18}$/
const IDCARD_PATTERN = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/
/** URL规则，http、www、ftp **/
// const URL_PATTERN = /http(s)?://([\\w-]+\\.)+[\\w-]+(/[\\w- ./?%&=]*)?/
/** QQ规则 **/
const QQ_PATTERN = /^[1-9][0-9]{4,13}$/
/** 全汉字规则 **/
const CHINESE_PATTERN = /^[\u4E00-\u9FA5]+$/
/** 全字母规则 **/
const STR_ENG_PATTERN = /^[A-Za-z]+$/
/** 整数规则 **/
const INTEGER_PATTERN = /^-?[0-9]+$/
/** 正整数规则 **/
const POSITIVE_INTEGER_PATTERN = /^\\+?[1-9][0-9]*$/
/** 车牌号码格式校验 **/
const VEHICLE_PLATE_PATTERN = /([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF])|([DF]([A-HJ-NP-Z0-9])[0-9]{4}))$)|([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$)/

export {
  MOBILE_PATTERN,
  CHINA_TELECOM_PATTERN,
  CHINA_UNICOM_PATTERN,
  CHINA_MOVE_PATTERN,
  PASSWORD_PATTERN,
  LANDLINE_PATTERN,
  POSTCODE_PATTERN,
  EMAIL_PATTERN,
  AGE_PATTERN,
  IDCARD_PATTERN,
  // URL_PATTERN,
  QQ_PATTERN,
  CHINESE_PATTERN,
  STR_ENG_PATTERN,
  INTEGER_PATTERN,
  POSITIVE_INTEGER_PATTERN,
  VEHICLE_PLATE_PATTERN
}
