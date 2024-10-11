import 'dotenv/config'
import postgres from 'postgres';

export const sql = postgres(process.env.DATABASE_URL, { ssl: 'require' })

const requestHandler = async (req, res) => {
  const result = await sql`SELECT version()`;
  const { version } = result[0];
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(version);
};

