import { sql, hasDb } from '@/lib/db';
import { LogoutButton } from '@/lib/admin-ui';

export const dynamic = 'force-dynamic';
export const metadata = { title: 'Admin | Wolfit Gym', robots: { index: false, follow: false } };

export default async function AdminPage() {
  let submissions: any[] = [];
  let error = '';

  if (hasDb) {
    try {
      submissions = await sql`
        select * from contact_submissions 
        order by created_at desc 
        limit 100
      `;
    } catch (e) {
      console.error(e);
      error = 'Failed to load submissions from database.';
    }
  }

  return (
    <div className="min-h-screen bg-background text-ink">
      <header className="bg-surface border-b border-outline-variant/10 py-4 px-6 flex items-center justify-between sticky top-0 z-20">
        <div>
          <h1 className="font-heading font-bold text-xl uppercase tracking-tight">Wolfit Gym</h1>
          <p className="text-xs text-on-surface-variant font-bold uppercase tracking-widest">Admin Panel</p>
        </div>
        <LogoutButton />
      </header>

      <main className="max-w-6xl mx-auto p-6">
        {!hasDb ? (
          <div className="bg-surface p-12 rounded-2xl border border-outline-variant/20 text-center">
            <h2 className="text-2xl font-bold mb-4">Database Not Connected</h2>
            <p className="text-on-surface-variant">Please connect your Neon Postgres database to start receiving and viewing submissions.</p>
          </div>
        ) : error ? (
          <div className="bg-red-50 border border-red-200 p-6 rounded-xl text-red-700">
            <p className="font-bold">Error</p>
            <p>{error}</p>
          </div>
        ) : (
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold uppercase tracking-tight mb-6">Contact Submissions</h2>
              {submissions.length === 0 ? (
                <p className="text-on-surface-variant italic">No submissions yet.</p>
              ) : (
                <div className="grid gap-4">
                  {submissions.map((sub) => (
                    <div key={sub.id} className="bg-surface p-6 rounded-xl border border-outline-variant/10 shadow-sm">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                        <div>
                          <h3 className="font-bold text-lg">{sub.name}</h3>
                          <p className="text-sm text-on-surface-variant">{sub.email} • {sub.phone || 'No phone'}</p>
                        </div>
                        <div className="text-right">
                          <span className="text-xs font-bold uppercase tracking-widest bg-primary/10 text-primary px-3 py-1 rounded-full">
                            {sub.status}
                          </span>
                          <p className="text-xs text-on-surface-variant mt-1">
                            {new Date(sub.created_at).toLocaleString()}
                          </p>
                        </div>
                      </div>
                      <div className="bg-background/50 p-4 rounded-lg border border-outline-variant/5">
                        <p className="whitespace-pre-wrap text-sm leading-relaxed">{sub.message}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>
          </div>
        )}
      </main>
    </div>
  );
}
