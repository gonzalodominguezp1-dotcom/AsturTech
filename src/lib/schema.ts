import { site, areaServed } from '../config/site';
import type { Faq } from '../data/services';

const abs = (path: string) => new URL(path, site.url).href;
export const businessId = abs('/') + '#negocio';

/** LocalBusiness principal: el bloque más importante para el SEO local. */
export function localBusiness() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService'],
    '@id': businessId,
    name: site.name,
    description:
      'Servicio técnico informático, mantenimiento para empresas y desarrollo web para negocios en Gijón, Villaviciosa y toda Asturias.',
    url: abs('/'),
    telephone: site.phone,
    email: site.email,
    image: abs('/img/og-image.png'),
    logo: abs('/img/logo.svg'),
    priceRange: site.priceRange,
    address: {
      '@type': 'PostalAddress',
      ...(site.street ? { streetAddress: site.street } : {}),
      addressLocality: site.city,
      postalCode: site.postalCode,
      addressRegion: site.region,
      addressCountry: site.country,
    },
    geo: { '@type': 'GeoCoordinates', latitude: site.lat, longitude: site.lng },
    openingHoursSpecification: site.hours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    areaServed: [
      ...areaServed.map((name) => ({ '@type': 'City', name })),
      { '@type': 'AdministrativeArea', name: 'Asturias' },
    ],
    knowsAbout: [
      'Reparación de ordenadores', 'Servicio técnico informático', 'Recuperación de datos',
      'Redes y wifi', 'Ciberseguridad', 'Diseño web', 'Desarrollo web', 'SEO local',
    ],
    ...(site.sameAs.length ? { sameAs: site.sameAs } : {}),
  };
}

export type Crumb = [name: string, path: string];

export function breadcrumbs(crumbs: Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map(([name, path], i) => ({
      '@type': 'ListItem', position: i + 1, name, item: abs(path),
    })),
  };
}

export function faqPage(faqs: Faq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function service(name: string, description: string, path: string, areas: string[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: abs(path),
    provider: { '@id': businessId },
    areaServed: areas.map((name) => ({ '@type': 'Place', name })),
  };
}

export function website() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': abs('/') + '#web',
    url: abs('/'),
    name: site.name,
    inLanguage: 'es-ES',
    publisher: { '@id': businessId },
  };
}
