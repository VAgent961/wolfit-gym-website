create table if not exists contact_submissions (
  id bigserial primary key,
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  phone text,
  message text not null,
  status text not null default 'new'
);

create index if not exists contact_submissions_created_at_idx on contact_submissions (created_at);
