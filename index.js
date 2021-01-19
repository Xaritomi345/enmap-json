const fs = require('fs');
const { promisify } = require('util');
const readfile = promisify(fs.readFile);

class EnmapJSON {
  constructor(path) {
    this.client = new Map();
    this.path = path;
  }

  async get(key) {
    return this.client.get(key);
  }

  async has(key) {
    return this.client.has(key);
  }

  async set(key, data) {
    this.client.set(key, data);
    this.syncData();
  }

  async update(key, path, value) {
    const obj = await this.get(key);
    obj[path] = value;
    this.syncData();
  }

  async delete(key) {
    this.client.delete(key);
    this.syncData();
  }

  async keys() {
    return [...this.client.keys()];
  }

  async syncData() {
    const convertedMap = Array.from(this.client);
    const loadedJson = JSON.parse(await readfile(this.path));
    loadedJson.maps = convertedMap;
    fs.writeFileSync(this.path, JSON.stringify(loadedJson, null, 2));
  }

  async loadFromJSON() {
    if (fs.existsSync(this.path)) {
      const loadedJson = JSON.parse(await readfile(this.path));
      this.client = new Map(Array.from(loadedJson.maps));
    } else {
      console.log("The file path you provided doesn't seem to exist. Please make sure the file exists!");
    }
  }
}

module.exports = EnmapJSON;
