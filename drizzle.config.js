import { config } from 'dotenv';
import { defineConfig } from "drizzle-kit";

config({ path: '.env' });

export default defineConfig({
  schema: ".src/db/schema.js",
  out: ".src/db/migrations",
  dialect: "sqlite",
  url: process.env.DATABASE_URL,
});
