import fs from 'fs';

class Historical {
  places = [];
  dbPath = './database/db.json';

  async addHistorical({ name }) {
    if (this.places.includes(name)) {
      return;
    }
    this.places.unshift(name);

    this.storeCity();
  }

  storeCity() {
    const payload = {
      historial: this.places
    };
    fs.writeFileSync(this.dbPath, JSON.stringify(payload));
  }

  readCity() {
    if (!fs.existsSync(this.dbPath)) return;

    const info = fs.readFileSync(this.dbPath, { encoding: 'utf-8' });
    const data = JSON.parse(info);

    this.places = data.historial;
  }
}

export { Historical };
