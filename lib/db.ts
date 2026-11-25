// V-Agent backend template (do not edit): Neon Postgres connection.
import { neon } from '@neondatabase/serverless';

const url = process.env.DATABASE_URL;

// true when the database is connected (DATABASE_URL is set on the server)
export const hasDb = Boolean(url);

// Use as a tagged template, values are sent safely as parameters:
//   const rows = await sql`select * from bookings where id = ${id}`;
export const sql = neon(url || 'postgresql://user:password@localhost:5432/not-configured');
