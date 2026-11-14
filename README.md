# AsturTech · Web

Web de AsturTech (informático en Gijón, Villaviciosa y Asturias) hecha con **Astro** y **pnpm**, con **Supabase** para el formulario de contacto y las reseñas.

La web se genera como HTML estático: carga muy rápido, apenas lleva JavaScript y se puede alojar gratis en Cloudflare Pages, Netlify o Vercel.

## Puesta en marcha

Requisitos: Node.js 22.23 o superior y pnpm.

```bash
pnpm install
cp .env.example .env      # rellena la URL y la clave publicable de Supabase
pnpm dev                  # http://localhost:4321
pnpm build                # genera la web en dist/
pnpm preview              # sirve dist/ en local
```

## Qué hay que rellenar antes de publicar

Busca `[PENDIENTE]`, `[XX]` y `[XXX]` en el código.

| Qué | Dónde |
|---|---|
| Nombre, teléfono, WhatsApp, email, dirección, coordenadas, horario | `src/config/site.ts` |
| Dominio definitivo | `astro.config.mjs` (`site`) |
| Precios | `src/data/services.ts` (`prices`) y los precios de desplazamiento en `src/data/locations.ts` |
| Razón social y NIF | `src/config/site.ts` (aparecen en las páginas legales) |
| Perfil de Empresa de Google y redes | `src/config/site.ts` (`sameAs`, `googleReviewsUrl`) |

**Importante para el SEO local:** el nombre, la dirección y el teléfono (NAP) tienen que ser exactamente iguales en la web, en el Perfil de Empresa de Google y en cualquier directorio (Páginas Amarillas, Cylex, etc.).

## Estructura

```
src/
  config/site.ts        Datos del negocio (NAP, horario, zonas)
  data/services.ts      Servicios: textos, precios y preguntas frecuentes
  data/locations.ts     Páginas locales: Gijón, Villaviciosa, Asturias
  lib/schema.ts         Datos estructurados (LocalBusiness, Service, FAQ, Breadcrumbs)
  lib/supabase.ts       Acceso a Supabase por la API REST
  layouts/Base.astro    Plantilla: <head> SEO, cabecera, pie, botones de llamada y WhatsApp
  components/           Bloques reutilizables
  pages/                Rutas (index, [slug] para servicios y zonas, contacto, legales)
supabase/migrations/    Tablas leads y testimonials con RLS
```

Para añadir una zona nueva (por ejemplo Oviedo), añade una entrada en `src/data/locations.ts` **con textos propios**; la página, el menú, el pie y el sitemap se actualizan solos. Evita copiar la misma página cambiando solo el nombre de la ciudad: Google lo trata como contenido duplicado.

## Supabase

1. Proyecto de Supabase: **asturtech** (`wdnilvvzdjnmywptylnn`, región París). La migración ya está aplicada. En un proyecto nuevo, aplica `supabase/migrations/20261021000000_init.sql` (desde el SQL Editor o con `supabase db push`).
2. Copia la **Project URL** y la **publishable key** en `.env` y en las variables de entorno del hosting.

- **leads**: cada mensaje del formulario. Desde la web solo se puede insertar; se leen en el panel de Supabase (Table Editor). Puedes usar la columna `status` para seguirlos (`nuevo`, `contactado`, `presupuestado`, `ganado`, `perdido`).
- **testimonials**: reseñas reales de clientes. Solo se muestran las que tienen `published = true`. Se leen al compilar, así que hay que volver a desplegar para que aparezcan las nuevas (en el hosting se puede programar un despliegue diario con un *deploy hook*).

> No publiques reseñas inventadas: Google penaliza las reseñas falsas y en España además puede ser una práctica desleal.

## SEO incluido

- Una página por servicio y por zona, con title, description, H1 y textos únicos orientados a búsquedas como «informático Gijón», «informático Villaviciosa», «servicio técnico informático Asturias» o «desarrollo web para negocios Asturias».
- Datos estructurados: `LocalBusiness` con dirección, coordenadas, horario y zonas atendidas, `Service`, `FAQPage` y `BreadcrumbList`.
- URL canónicas sin barra final, `sitemap-index.xml` automático y `robots.txt`.
- Open Graph para que se vea bien al compartir en WhatsApp o redes.
- Llamada y WhatsApp a un toque en el móvil.
- Sin cookies de seguimiento, así que no hace falta banner de cookies.

## Después de publicar (lo que más pesa en el SEO local)

1. Crear o verificar el **Perfil de Empresa de Google** con la misma NAP, categoría principal «Servicio de reparación de ordenadores» y secundarias «Diseñador de sitios web» y «Servicio de asistencia informática». Enlazarlo a la web.
2. Dar de alta la web en **Google Search Console** y enviar `https://TU-DOMINIO/sitemap-index.xml`.
3. Pedir **reseñas en Google** a cada cliente satisfecho (es el factor que más ayuda en Maps).
4. Darse de alta en directorios locales con la misma NAP.
5. Publicar en el Perfil de Google y, más adelante, añadir un blog con guías útiles («cómo acelerar un portátil», «wifi en casas de pueblo», etc.).

## Despliegue

En Cloudflare Pages, Netlify o Vercel: comando de build `pnpm build`, carpeta de salida `dist`, y las variables `PUBLIC_SUPABASE_URL` y `PUBLIC_SUPABASE_PUBLISHABLE_KEY`.
