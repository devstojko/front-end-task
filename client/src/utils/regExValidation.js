export const isNormalInteger = str => 0 === str % (!isNaN(parseFloat(str)) && 0 <= ~~str)
export const isDecimalNumber = str => /^\d*\.\d{1,4}$/gm.test(str)
export const isValidUrl = str => /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(str)
