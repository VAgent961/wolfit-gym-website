'use client';
// V-Agent backend template (do not edit): small admin helpers.
export function LogoutButton() {
  return (
    <button
      type="button"
      onClick={async () => { await fetch('/api/admin/logout', { method: 'POST' }); window.location.href = '/admin/login'; }}
      className="px-4 py-2 rounded-xl border border-black/10 text-sm font-semibold text-ink hover:bg-black/5"
    >
      Log out
    </button>
  );
}
