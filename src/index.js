import Monitor from './monitor';

export default class MonitorNew {
  constructor() {

  }

  static Instance() {
    if (!this._instance) {
      this._instance = Monitor.Instance();
    }

    return this._instance;
  }

  static test() {
    return 'test123';
  }

}