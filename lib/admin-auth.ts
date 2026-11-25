// V-Agent backend template (do not edit): password login for the business owner's admin pages.
// Works in middleware (Edge) and in route handlers. Needs ADMIN_PASSWORD (and ideally ADMIN_SECRET).
export const ADMIN_COOKIE = 'admin_session';
const WEEK_MS = 7 * 24 * 60 * 60 * 1000;

async function sign(data: string): Promise<string> {
  const secret = process.env.ADMIN_SECRET || process.env.ADMIN_PASSWORD || '';
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey('raw', enc.encode('v-agent:' + secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const sig = await crypto.subtle.sign('HMAC', key, enc.encode(data));
  return Array.from(new Uint8Array(sig)).map((b) => b.toString(16).padStart(2, '0')).join('');
}

export async function makeSession(): Promise<string> {
  const exp = String(Date.now() + WEEK_MS);
  return exp + '.' + (await sign(exp));
}

export async function isValidSession(value?: string): Promise<boolean> {
  if (!value || !process.env.ADMIN_PASSWORD) return false;
  const [exp, sig] = value.split('.');
  if (!exp || !sig || !/^\d+$/.test(exp) || Number(exp) < Date.now()) return false;
  const good = await sign(exp);
  if (good.length !== sig.length) return false;
  let diff = 0;
  for (let i = 0; i < good.length; i++) diff |= good.charCodeAt(i) ^ sig.charCodeAt(i);
  return diff === 0;
}

export function checkPassword(input: string): boolean {
  const real = process.env.ADMIN_PASSWORD || '';
  if (!real || input.length !== real.length) return false;
  let diff = 0;
  for (let i = 0; i < real.length; i++) diff |= real.charCodeAt(i) ^ input.charCodeAt(i);
  return diff === 0;
}

export const sessionCookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'lax' as const,
  path: '/',
  maxAge: WEEK_MS / 1000,
};
