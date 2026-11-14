/**
 * Datos del negocio. Los valores entre [CORCHETES] son marcadores pendientes.
 *
 * NAP (Nombre, Dirección, Teléfono): deben coincidir EXACTAMENTE con el Perfil de
 * Empresa de Google y con cualquier directorio donde aparezca el negocio.
 */
export const site = {
  // Dominio definitivo (también en astro.config.mjs → "site").
  url: import.meta.env.SITE ?? 'https://asturtechinformatica.es',

  name: 'AsturTech',
  legalName: '', // [PENDIENTE alta de autónomo] nombre completo del titular
  taxId: '', // [PENDIENTE alta de autónomo] NIF
  tagline: 'Informático en Villaviciosa, Gijón y toda Asturias',
  phone: '+34667271021',
  phoneDisplay: '667 27 10 21',
  whatsapp: '34667271021',
  email: 'mediterranianlifestyle@gmail.com',
  // Sin calle: trabajamos a domicilio (en Google, "empresa de servicios en zona").
  street: '',
  city: 'Villaviciosa',
  postalCode: '33300',
  region: 'Asturias',
  country: 'ES',
  lat: 43.4813,
  lng: -5.4351,
  hours: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], opens: '00:00', closes: '23:59' },
  ],
  hoursDisplay: 'Teléfono y WhatsApp todos los días · Visitas con cita previa',
  priceRange: '€€',
  // Perfil de Empresa de Google y redes sociales (Schema "sameAs").
  sameAs: [] as string[],
  googleReviewsUrl: '', // enlace "Ver reseñas" del Perfil de Empresa
};

/** Municipios que aparecen como área de servicio en el Schema. */
export const areaServed = [
  'Gijón', 'Villaviciosa', 'Oviedo', 'Avilés', 'Siero', 'Llanera', 'Carreño',
  'Corvera de Asturias', 'Colunga', 'Nava', 'Sariego', 'Cabranes',
];

export const fullAddress = [site.street, `${site.postalCode} ${site.city}`, site.region].filter(Boolean).join(', ');
export const telLink = `tel:${site.phone}`;
export const whatsappLink = (text = 'Hola AsturTech, necesito ayuda con') =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
