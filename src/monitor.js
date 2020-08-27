export default class Monitor {
  constructor() {

  }

  static get Instance() {
    if (!this._instance) {
      this._instance = new Monitor();
    }

    return this._instance;
  }

  test() {
    return 'test monitor';
  }
}