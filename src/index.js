import Monitor from './monitor';

export default class MonitorNew {
  constructor() {

  }

  static get Instance() {
    if (!this._instance) {
      this._instance = Monitor.Instance;
    }

    return this._instance;
  }
}