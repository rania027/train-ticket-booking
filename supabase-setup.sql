create table bookings (
  id bigint generated always as identity primary key,
  name text not null,
  tickets int not null,
  stand text not null,
  venue text not null,
  created_at timestamptz default now()
);

alter table bookings enable row level security;

-- Demo-only policies: allow anyone to insert and read
create policy "Allow public insert" on bookings for insert with check (true);
create policy "Allow public read" on bookings for select using (true);
