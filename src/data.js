import eventHelper from './util/eventHelper';
import elementHelper from './util/elementHelper';

class data {
  static get Instance() {
    if (!this._instance) {
      this._instance = new data();
    }

    return this._instance;
  }

  constructor() {
    // 发送打点信息时传递的基础参数
    this._baseData = {};
  }

  setBaseData(params) {
    const type = typeof params;
    if (type !== 'function' && type !== 'object') {
      console.error('参数类型错误，应该对象或方法。');
    }

    this._baseData = params;
  }

  getBaseData() {
    if (typeof this._baseData === 'function') {
      return this._baseData();
    }

    return this._baseData;
  }

  getCurrentTime() {
    const dtCur = new Date();
    const yearCur = dtCur.getFullYear();
    const monCur = dtCur.getMonth() + 1;
    const dayCur = dtCur.getDate();
    const hCur = dtCur.getHours();
    const mCur = dtCur.getMinutes();
    const sCur = dtCur.getSeconds();
    const timeCur = yearCur + "-" + (monCur < 10 ? "0" + monCur : monCur) + "-"
        + (dayCur < 10 ? "0" + dayCur : dayCur) + " " + (hCur < 10 ? "0" + hCur : hCur)
        + ":" + (mCur < 10 ? "0" + mCur : mCur) + ":" + (sCur < 10 ? "0" + sCur : sCur);
    return timeCur;
  }

  getClickData(e) {
    e = eventHelper.fix(e);
    const target = e.target;
    const metricData = elementHelper.getMetricData(target);

    if (!metricData) {
      return false;
    }

    return { event_key: metricData };
  }

  getKeydownData(e) {
    e = eventHelper.fix(e);
    if (e.keyCode != 13) {
      return false;
    }

    const target = e.target;
    const metricData = elementHelper.getMetricData(target);

    if (!metricData) {
      return false;
    }

    return { event_key: metricData };
  }
}

export default data.Instance;