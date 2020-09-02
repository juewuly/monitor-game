export default class objectH {
  constructor() {

  }

  static getConstructorName(o) { 
    //加o.constructor是因为IE下的window和document
    if (o != null && o.constructor != null) {
      return  Object.prototype.toString.call(o).slice(8, -1);
    } else {
      return '';
    }
  }

  /**
   * 判断一个变量是否Array对象
   * @param  {Object}  obj 目标变量
   * @return {Boolean}
   */
  static isArray(obj) {
    return this.getConstructorName(obj) == 'Array';
  }
    
  /**
   * 判断一个变量是否typeof object
   * @param  {Object}  obj 目标变量
   * @return {Boolean}
   */
  static isObject(obj) {
    return obj !== null && typeof obj == 'object';
  }

  /**
   * 将Object序列化为key=val键值对字符串，不处理val为数组的情况]
   * @param  {Object} json 需要序列化的对象
   * @return {String}      序列化后的字符串
   */
  static encodeURIJson(obj) {
    let result = [];
    for (let key in obj) {
      if (obj[key] == null) {
        continue;
      }
      result.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
    }
    return result.join('&');
  }
}