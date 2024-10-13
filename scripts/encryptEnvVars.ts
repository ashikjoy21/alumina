import { encrypt } from '../lib/encryptEnv';
import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config({ path: '.env.local' });

const encryptedVars = Object.entries(process.env).reduce((acc, [key, value]) => {
  if (key.startsWith('NEXT_PUBLIC_FIREBASE_')) {
    acc[key] = encrypt(value || '');
  }
  return acc;
}, {} as Record<string, string>);

fs.writeFileSync('.env.production', Object.entries(encryptedVars).map(([key, value]) => `${key}=${value}`).join('\n'));

console.log('Encrypted environment variables have been written to .env.production');
