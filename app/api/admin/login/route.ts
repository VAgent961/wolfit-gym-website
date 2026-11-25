// V-Agent backend template (do not edit)
import { NextResponse } from 'next/server';
import { ADMIN_COOKIE, checkPassword, makeSession, sessionCookieOptions } from '@/lib/admin-auth';

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({} as Record<string, unknown>));
  if (!process.env.ADMIN_PASSWORD) return NextResponse.json({ error: 'The admin password is not set up yet.' }, { status: 503 });
  // small delay makes password guessing slower
  await new Promise((r) => setTimeout(r, 400));
  if (!checkPassword(String((body as Record<string, unknown>).password || ''))) return NextResponse.json({ error: 'Wrong password.' }, { status: 401 });
  const res = NextResponse.json({ ok: true });
  res.cookies.set(ADMIN_COOKIE, await makeSession(), sessionCookieOptions);
  return res;
}
