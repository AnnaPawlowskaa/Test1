import {Client} from "pg";

const client = new Client({
  user: process.env.USER_DB,
  host: process.env.DB_HOST,
  port: 5432,
  database: process.env.DB_NAME,
  password: process.env.PASSWORD_DB,
  ssl: { rejectUnauthorized: false },
});

export async function dbConnect() {
try {

  await client.connect();
  console.log("Connected to the database");
} catch (error) {
  console.error("Error connecting to the database:", error);
} finally {
  await client.end();
  console.log("Database connection closed");
}
}
