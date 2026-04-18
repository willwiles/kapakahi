/**
 * Seed script for service checklist items.
 * Run: node seed-checklists.mjs
 */
import 'dotenv/config';
import mysql from 'mysql2/promise';

const DATABASE_URL = process.env.DATABASE_URL;
if (!DATABASE_URL) {
  console.error("DATABASE_URL not set");
  process.exit(1);
}

const checklists = {
  premium: [
    // Exterior
    { item: "Full hand wash with pH-neutral shampoo", category: "Exterior", sortOrder: 1 },
    { item: "Wheels & tires cleaned and dressed", category: "Exterior", sortOrder: 2 },
    { item: "Wheel wells degreased", category: "Exterior", sortOrder: 3 },
    { item: "Clay bar decontamination (full body)", category: "Exterior", sortOrder: 4 },
    { item: "Iron fallout removal", category: "Exterior", sortOrder: 5 },
    { item: "Single-stage machine polish", category: "Exterior", sortOrder: 6 },
    { item: "Paint sealant / ceramic boost applied", category: "Exterior", sortOrder: 7 },
    { item: "Trim restored and protected", category: "Exterior", sortOrder: 8 },
    { item: "Glass cleaned and sealed", category: "Exterior", sortOrder: 9 },
    { item: "Door jambs cleaned", category: "Exterior", sortOrder: 10 },
    { item: "Exhaust tips polished", category: "Exterior", sortOrder: 11 },
    // Interior
    { item: "Full interior vacuum (seats, carpets, mats)", category: "Interior", sortOrder: 12 },
    { item: "Leather cleaned and conditioned", category: "Interior", sortOrder: 13 },
    { item: "Dashboard and console deep cleaned", category: "Interior", sortOrder: 14 },
    { item: "Door panels and pockets cleaned", category: "Interior", sortOrder: 15 },
    { item: "Center console and cup holders detailed", category: "Interior", sortOrder: 16 },
    { item: "Steering wheel sanitized and conditioned", category: "Interior", sortOrder: 17 },
    { item: "Air vents cleaned with detailing brush", category: "Interior", sortOrder: 18 },
    { item: "Interior glass cleaned (streak-free)", category: "Interior", sortOrder: 19 },
    { item: "Headliner spot cleaned", category: "Interior", sortOrder: 20 },
    { item: "Trunk / cargo area vacuumed", category: "Interior", sortOrder: 21 },
    // Engine
    { item: "Engine bay degreased and dressed", category: "Engine Bay", sortOrder: 22 },
    { item: "Engine plastics UV-protected", category: "Engine Bay", sortOrder: 23 },
    // Final
    { item: "Final walk-around inspection", category: "Final Inspection", sortOrder: 24 },
    { item: "Before/after photos taken", category: "Final Inspection", sortOrder: 25 },
    { item: "Air freshener applied", category: "Final Inspection", sortOrder: 26 },
  ],
  full: [
    // Exterior
    { item: "Full hand wash with pH-neutral shampoo", category: "Exterior", sortOrder: 1 },
    { item: "Wheels & tires cleaned and dressed", category: "Exterior", sortOrder: 2 },
    { item: "Wheel wells degreased", category: "Exterior", sortOrder: 3 },
    { item: "Clay bar decontamination", category: "Exterior", sortOrder: 4 },
    { item: "Paint sealant applied", category: "Exterior", sortOrder: 5 },
    { item: "Trim restored and protected", category: "Exterior", sortOrder: 6 },
    { item: "Glass cleaned", category: "Exterior", sortOrder: 7 },
    { item: "Door jambs cleaned", category: "Exterior", sortOrder: 8 },
    // Interior
    { item: "Full interior vacuum", category: "Interior", sortOrder: 9 },
    { item: "Leather/fabric seats cleaned", category: "Interior", sortOrder: 10 },
    { item: "Dashboard and console wiped", category: "Interior", sortOrder: 11 },
    { item: "Door panels cleaned", category: "Interior", sortOrder: 12 },
    { item: "Cup holders and storage cleaned", category: "Interior", sortOrder: 13 },
    { item: "Steering wheel sanitized", category: "Interior", sortOrder: 14 },
    { item: "Air vents cleaned", category: "Interior", sortOrder: 15 },
    { item: "Interior glass cleaned", category: "Interior", sortOrder: 16 },
    { item: "Trunk vacuumed", category: "Interior", sortOrder: 17 },
    // Final
    { item: "Final walk-around inspection", category: "Final Inspection", sortOrder: 18 },
    { item: "Before/after photos taken", category: "Final Inspection", sortOrder: 19 },
    { item: "Air freshener applied", category: "Final Inspection", sortOrder: 20 },
  ],
  basic: [
    // Exterior
    { item: "Hand wash with pH-neutral shampoo", category: "Exterior", sortOrder: 1 },
    { item: "Wheels & tires cleaned", category: "Exterior", sortOrder: 2 },
    { item: "Tires dressed", category: "Exterior", sortOrder: 3 },
    { item: "Quick spray sealant", category: "Exterior", sortOrder: 4 },
    { item: "Glass cleaned", category: "Exterior", sortOrder: 5 },
    { item: "Door jambs wiped", category: "Exterior", sortOrder: 6 },
    // Interior
    { item: "Interior vacuum (seats, carpets)", category: "Interior", sortOrder: 7 },
    { item: "Dashboard and console wiped", category: "Interior", sortOrder: 8 },
    { item: "Cup holders cleaned", category: "Interior", sortOrder: 9 },
    { item: "Interior glass cleaned", category: "Interior", sortOrder: 10 },
    // Final
    { item: "Final walk-around inspection", category: "Final Inspection", sortOrder: 11 },
    { item: "Air freshener applied", category: "Final Inspection", sortOrder: 12 },
  ],
  membership: [
    // Exterior
    { item: "Full hand wash with pH-neutral shampoo", category: "Exterior", sortOrder: 1 },
    { item: "Wheels & tires cleaned and dressed", category: "Exterior", sortOrder: 2 },
    { item: "Wheel wells degreased", category: "Exterior", sortOrder: 3 },
    { item: "Clay bar decontamination", category: "Exterior", sortOrder: 4 },
    { item: "Ceramic boost / sealant top-up", category: "Exterior", sortOrder: 5 },
    { item: "Trim protected", category: "Exterior", sortOrder: 6 },
    { item: "Glass cleaned and sealed", category: "Exterior", sortOrder: 7 },
    { item: "Door jambs cleaned", category: "Exterior", sortOrder: 8 },
    // Interior
    { item: "Full interior vacuum", category: "Interior", sortOrder: 9 },
    { item: "Leather cleaned and conditioned", category: "Interior", sortOrder: 10 },
    { item: "Dashboard and console deep cleaned", category: "Interior", sortOrder: 11 },
    { item: "Door panels cleaned", category: "Interior", sortOrder: 12 },
    { item: "Cup holders and storage cleaned", category: "Interior", sortOrder: 13 },
    { item: "Steering wheel sanitized", category: "Interior", sortOrder: 14 },
    { item: "Air vents cleaned", category: "Interior", sortOrder: 15 },
    { item: "Interior glass cleaned", category: "Interior", sortOrder: 16 },
    { item: "Trunk vacuumed", category: "Interior", sortOrder: 17 },
    // Final
    { item: "Final walk-around inspection", category: "Final Inspection", sortOrder: 18 },
    { item: "Before/after photos taken", category: "Final Inspection", sortOrder: 19 },
    { item: "Air freshener applied", category: "Final Inspection", sortOrder: 20 },
  ],
  military: [
    // Exterior
    { item: "Full hand wash with pH-neutral shampoo", category: "Exterior", sortOrder: 1 },
    { item: "Wheels & tires cleaned and dressed", category: "Exterior", sortOrder: 2 },
    { item: "Clay bar decontamination", category: "Exterior", sortOrder: 3 },
    { item: "Paint sealant applied", category: "Exterior", sortOrder: 4 },
    { item: "Glass cleaned", category: "Exterior", sortOrder: 5 },
    { item: "Door jambs cleaned", category: "Exterior", sortOrder: 6 },
    // Interior
    { item: "Full interior vacuum", category: "Interior", sortOrder: 7 },
    { item: "Seats cleaned", category: "Interior", sortOrder: 8 },
    { item: "Dashboard and console wiped", category: "Interior", sortOrder: 9 },
    { item: "Cup holders cleaned", category: "Interior", sortOrder: 10 },
    { item: "Interior glass cleaned", category: "Interior", sortOrder: 11 },
    { item: "Trunk vacuumed", category: "Interior", sortOrder: 12 },
    // Final
    { item: "Final walk-around inspection", category: "Final Inspection", sortOrder: 13 },
    { item: "Before/after photos taken", category: "Final Inspection", sortOrder: 14 },
    { item: "Air freshener applied", category: "Final Inspection", sortOrder: 15 },
  ],
};

async function seed() {
  const connection = await mysql.createConnection(DATABASE_URL);
  
  try {
    // Check if items already exist
    const [rows] = await connection.execute("SELECT COUNT(*) as cnt FROM serviceChecklistItems");
    const count = rows[0].cnt;
    
    if (count > 0) {
      console.log(`Already have ${count} checklist items. Skipping seed.`);
      await connection.end();
      return;
    }

    let total = 0;
    for (const [serviceSlug, items] of Object.entries(checklists)) {
      for (const item of items) {
        await connection.execute(
          "INSERT INTO serviceChecklistItems (serviceSlug, item, sortOrder, category, active) VALUES (?, ?, ?, ?, ?)",
          [serviceSlug, item.item, item.sortOrder, item.category, true]
        );
        total++;
      }
    }
    
    console.log(`Seeded ${total} checklist items across ${Object.keys(checklists).length} services.`);
  } catch (err) {
    console.error("Error seeding:", err);
  } finally {
    await connection.end();
  }
}

seed();
