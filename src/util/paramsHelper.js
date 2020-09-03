class paramsHelper {
  static get Instance() {
    if (!this._instance) {
      this._instance = new paramsHelper();
    }

    return this._instance;
  }

  /**
   * 将Object序列化为key=val键值对字符串，不处理val为数组的情况]
   * @param  {Object} json 需要序列化的对象
   * @return {String}      序列化后的字符串
   */
  encodeParams(obj) {
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

export default paramsHelper.Instance;