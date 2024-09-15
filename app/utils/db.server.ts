import { Pool } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import { env } from '~/env.server';

// データベース接続プールの作成
const pool = new Pool({ connectionString: env.DATABASE_URL });

// Drizzle ORM インスタンスの作成
export const db = drizzle(pool);

// データベース接続を取得する関数
export async function getConnection() {
  const client = await pool.connect();
  return client;
}

// トランザクションを実行する関数
export async function withTransaction<T>(
  callback: (client: any) => Promise<T>
): Promise<T> {
  const client = await getConnection();
  try {
    await client.query('BEGIN');
    const result = await callback(client);
    await client.query('COMMIT');
    return result;
  } catch (error) {
    await client.query('ROLLBACK');
    throw error;
  } finally {
    client