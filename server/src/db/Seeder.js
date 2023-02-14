/* eslint-disable no-console */
import { connection } from "../boot.js"

import RegularSeeder from "../db/seeders/RegularSeeder.js"

class Seeder {
  static async seed() {
    console.log("Seeding regulars...")
    await RegularSeeder.seed()

    console.log("Done!")
    await connection.destroy()
  }
}

export default Seeder