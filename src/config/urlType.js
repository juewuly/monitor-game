/**
 * 配置的url类型
 */

class urlType {
  static get Instance() {
    if (!this._instance) {
      this._instance = new urlType();
    }

    return this._instance;
  }

  get click() {
    return 'click';
  }

  get clickHeatMap() {
    return 'clickHeatMap';
  }
}

export default urlType.Instance;