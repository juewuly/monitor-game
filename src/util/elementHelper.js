import config from '../config/config';

class elementHelper {
  static get Instance() {
    if (!this._instance) {
      this._instance = new elementHelper();
    }

    return this._instance;
  }

  constructor() {
    // 埋点信息的最大长度
    this._maxLength = 100;
  }

  getMetricData(element) {
    const attributeName = config.getMetricAttributeName();
    let result = '';

    while (element) {
      if (element.attributes && (attributeName in element.attributes || `data-${attributeName}` in element.attributes)) {
        result = element.getAttribute(attributeName) || element.getAttribute(`data-${attributeName}`);
        return result.substr(0, this._maxLength);
      }

      element = element.parentNode;
    }

    return result;
  }
}

export default elementHelper.Instance;