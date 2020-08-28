export default class config {
  constructor() {
    this._config = {
      clickUrl: null,
      trackUrl: null,
      areaIds : null
    }
  }

  static get Instance() {
    if (!this._instance) {
      this._instance = new config();
    }

    return this._instance;
  }

  get config() {
    return this._config;
  }

  set(value) {
    this._config = value;
  }
}