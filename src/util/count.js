export default class count {
  constructor() {

  }

  static Instance() {
    if (!this._instance) {
      this._instance = new count();
    }
    
    return this._instance;
  }

  getCount() {
    const countKey = 'monitor_count';
    let count = Cookie.get(countKey);

    count = (parseInt(count) || 0) + 1;

    Cookie.set(countKey, count, { expires : 24 * 3600 * 1000, path : '/' });

    return count;
  }

  count() {
    if (!this._count) {
      this._count = this.getCount();
    }

    return this._count;
  }
    
}