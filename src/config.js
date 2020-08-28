export default class config {
  constructor() {
    this._config = {
      clickUrl: null,
      trackUrl: null,
      areaIds : null
    }
  }

  static Instance() {
    if (!this._instance) {
      this._instance = new config();
    }

    return this._instance;
  }

  config() {
    return this._config;
  }

  set(value) {
    this._config = value;
  }
}