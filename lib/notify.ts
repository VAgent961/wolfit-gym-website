// V-Agent backend template (do not edit): tell the business owner about a new request.
// Every channel is optional and switched on by its environment variables.
export type Field = { label: string; value: string };

export function clean(value: unknown, max = 500): string {
  return String(value ?? '').replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, ' ').trim().slice(0, max);
}

export function isEmail(v: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
}

export function asText(subject: string, fields: Field[]): string {
  return subject + '\n\n' + fields.filter((f) => f.value).map((f) => f.label + ': ' + f.value).join('\n');
}

// Link that opens WhatsApp to the business with the message filled in ('' if WHATSAPP_NUMBER is not set)
export function whatsappLink(text: string): string {
  const n = (process.env.WHATSAPP_NUMBER || '').replace(/[^0-9]/g, '');
  return n ? 'https://wa.me/' + n + '?text=' + encodeURIComponent(text.slice(0, 1500)) : '';
}

export async function notifyOwner(subject: string, fields: Field[]): Promise<void> {
  const text = asText(subject, fields);
  const jobs: Promise<unknown>[] = [];
  const tgToken = process.env.TELEGRAM_BOT_TOKEN;
  const tgChat = process.env.TELEGRAM_CHAT_ID;
  if (tgToken && tgChat) {
    jobs.push(fetch('https://api.telegram.org/bot' + tgToken + '/sendMessage', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: tgChat, text: text.slice(0, 4000) }),
    }));
  }
  const resendKey = process.env.RESEND_API_KEY;
  const to = process.env.NOTIFY_EMAIL;
  if (resendKey && to) {
    jobs.push(fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: 'Bearer ' + resendKey, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: process.env.NOTIFY_FROM || 'Website <onboarding@resend.dev>',
        to: to.split(',').map((s) => s.trim()).filter(Boolean),
        subject,
        text,
      }),
    }));
  }
  // never let a notification problem break the visitor's request
  await Promise.allSettled(jobs);
}
