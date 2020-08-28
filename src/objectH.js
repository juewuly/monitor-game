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
   * 将源对象的属性并入到目标对象
   * @param  {Object} des      目标对象
   * @param  {Object} src      源对象，如果是数组，则依次并入
   * @param  {Boolean} override 是否覆盖已有属性
   * @return {Object}          des
   */
  static mix(des, src, override) {
    for (var i in src) {
      //这里要加一个des[i]，是因为要照顾一些不可枚举的属性
      if (override || !(des[i] || (i in des))) { 
        des[i] = src[i];
      }
    }
    return des;
  }

  /**
   * 将Object序列化为key=val键值对字符串，不处理val为数组的情况]
   * @param  {Object} json 需要序列化的对象
   * @return {String}      序列化后的字符串
   */
  static encodeURIJson(obj) {
    var result = [];
    for (var p in obj) {
      if(obj[p] == null) {
        continue;
      }
      result.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
    }
    return result.join('&');
  }
}