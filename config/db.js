import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';

const connectionString =
  process.env.NEXT_PUBLIC_DATABASE_CONNECTION_STRING ||
  process.env.NEXT_PUBLIC_DATABSE_CONNECTION_STRING ||
  'postgresql://neondb_owner:npg_Auy4zMVFtxR5@ep-holy-waterfall-a5kd6uej-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require';

const sql = neon(connectionString);
export const db = drizzle(sql);
