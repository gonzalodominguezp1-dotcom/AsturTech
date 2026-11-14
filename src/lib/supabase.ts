/**
 * Acceso a Supabase por su API REST (sin SDK, para no cargar JavaScript extra).
 *
 * - La web es estática: las reseñas se leen al compilar (build) y quedan en el HTML.
 * - El formulario inserta en "leads" desde el navegador con la clave publicable.
 *   RLS solo permite INSERT con datos válidos; nadie puede leer los contactos
 *   salvo desde el panel de Supabase.
 */
export const SUPABASE_URL = import.meta.env.PUBLIC_SUPABASE_URL ?? '';
export const SUPABASE_KEY = import.meta.env.PUBLIC_SUPABASE_PUBLISHABLE_KEY ?? '';

export interface Testimonial {
  author: string;
  location: string | null;
  rating: number;
  body: string;
}

let cache: Promise<Testimonial[]> | undefined;

/** Reseñas reales publicadas (tabla testimonials, published = true). */
export function getTestimonials(): Promise<Testimonial[]> {
  if (!SUPABASE_URL || !SUPABASE_KEY) return Promise.resolve([]);
  cache ??= fetch(
    `${SUPABASE_URL}/rest/v1/testimonials?select=author,location,rating,body&published=eq.true&order=created_at.desc&limit=6`,
    { headers: { apikey: SUPABASE_KEY } },
  )
    .then((r) => (r.ok ? r.json() : []))
    .catch((err) => {
      console.warn('[supabase] no se pudieron cargar las reseñas:', err);
      return [];
    });
  return cache;
}
