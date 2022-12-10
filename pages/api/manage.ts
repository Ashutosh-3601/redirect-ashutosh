import type { NextApiRequest, NextApiResponse } from 'next'
import { Low, JSONFile } from 'lowdb'
import { IDBData } from '../../types/IDbData'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, '..', '..', 'db.json')
const adapter = new JSONFile<IDBData>(file)
const db = new Low(adapter)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IDBData | {success: boolean}>
) {
  await db.read();
  db.data ||= { redirects: [], keys: [] };
  if(req.method === 'POST') {
    const { name, url } = JSON.parse(req.body);
    db.data.redirects.push({ name: name, url: url });
    db.data.keys.push(name);
    await db.write();
    return res.status(201).json({ success: true })
  }
  else res.status(200).json({ redirects: db.data.redirects, keys: db.data.keys })
}
