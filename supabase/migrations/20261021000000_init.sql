-- AsturTech: contactos del formulario y reseñas de clientes.
--
-- Seguridad: la web usa la clave publicable (rol "anon").
--   * leads:        anon solo puede INSERTAR con datos válidos; nadie puede leerlos
--                   desde la web (se consultan en el panel de Supabase).
--   * testimonials: anon solo puede LEER las reseñas marcadas como publicadas.

create table public.leads (
  id          bigint generated always as identity primary key,
  created_at  timestamptz not null default now(),
  name        text not null check (char_length(name) between 2 and 120),
  phone       text check (phone is null or char_length(phone) <= 30),
  email       text check (email is null or (char_length(email) <= 160 and email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$')),
  service     text check (service is null or char_length(service) <= 60),
  location    text check (location is null or char_length(location) <= 60),
  message     text not null check (char_length(message) between 10 and 5000),
  source_page text check (source_page is null or char_length(source_page) <= 200),
  consent     boolean not null check (consent),
  status      text not null default 'nuevo'
              check (status in ('nuevo', 'contactado', 'presupuestado', 'ganado', 'perdido')),
  notes       text,
  constraint leads_contact_required check (phone is not null or email is not null)
);

comment on table public.leads is 'Mensajes del formulario de contacto de la web.';
create index leads_created_at_idx on public.leads (created_at desc);

alter table public.leads enable row level security;

create policy "La web puede crear contactos"
  on public.leads for insert
  to anon
  with check (status = 'nuevo' and notes is null);

-- El rol anon solo necesita INSERT sobre las columnas que envía el formulario.
revoke all on public.leads from anon, authenticated;
grant insert (name, phone, email, service, location, message, source_page, consent)
  on public.leads to anon;


create table public.testimonials (
  id         bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  author     text not null check (char_length(author) between 2 and 80),
  location   text check (location is null or char_length(location) <= 60),
  rating     smallint not null check (rating between 1 and 5),
  body       text not null check (char_length(body) between 10 and 1000),
  source     text not null default 'google' check (source in ('google', 'directo')),
  published  boolean not null default false
);

comment on table public.testimonials is 'Reseñas reales de clientes. Solo se muestran en la web las que tienen published = true.';

alter table public.testimonials enable row level security;

create policy "Reseñas publicadas visibles"
  on public.testimonials for select
  to anon
  using (published);

revoke all on public.testimonials from anon, authenticated;
grant select (author, location, rating, body, created_at, published) on public.testimonials to anon;
