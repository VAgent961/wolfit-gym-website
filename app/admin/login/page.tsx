'use client';
// V-Agent backend template (do not edit): admin login page.
import { useState } from 'react';

export default function AdminLoginPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError('');
    try {
      const res = await fetch('/api/admin/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ password }) });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || 'Login failed.');
      const next = new URLSearchParams(window.location.search).get('next') || '/admin';
      window.location.href = next.startsWith('/admin') ? next : '/admin';
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed.');
      setBusy(false);
    }
  }

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <form onSubmit={onSubmit} className="w-full max-w-sm bg-white rounded-2xl shadow-card border border-black/5 p-8 space-y-5">
        <div>
          <h1 className="text-2xl font-bold text-ink">Admin login</h1>
          <p className="text-sm text-muted mt-1">For the business owner only.</p>
        </div>
        <div className="space-y-2">
          <label htmlFor="admin-password" className="block text-sm font-semibold text-ink">Password</label>
          <input id="admin-password" type="password" autoComplete="current-password" required value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-black/10 focus:outline-none focus:ring-2 focus:ring-primary" />
        </div>
        {error && <p role="alert" className="text-sm text-red-600">{error}</p>}
        <button type="submit" disabled={busy} className="w-full bg-primary text-white font-bold py-3 rounded-xl disabled:opacity-60">
          {busy ? 'Checking…' : 'Log in'}
        </button>
      </form>
    </div>
  );
}
