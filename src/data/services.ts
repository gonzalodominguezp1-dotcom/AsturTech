/**
 * Servicios. Cada uno genera su propia página con contenido único.
 * Precios fijados en nov. 2026 a partir de la competencia en Asturias (algo por debajo de la media).
 */
import type { IconName } from '../lib/icons';

export interface Feature { icon: IconName; title: string; text: string }
export interface Price { name: string; price: string; note: string }
export interface Faq { q: string; a: string }
export interface Service {
  path: string; icon: IconName; nav: string; card_title: string; card_text: string;
  title: string; description: string; h1: string; lead: string; intro: string[];
  features: Feature[]; prices: Price[]; faqs: Faq[];
}

export const services: Record<string, Service> = {
    "servicio-tecnico": {
        "path": "/servicio-tecnico-informatico",
        "icon": "wrench",
        "nav": "Servicio técnico",
        "card_title": "Servicio técnico informático",
        "card_text": "Reparamos ordenadores y portátiles, eliminamos virus, recuperamos datos y dejamos tu equipo como nuevo.",
        "title": "Servicio técnico informático en Villaviciosa, Gijón y Asturias | Reparación de ordenadores",
        "description": "Reparación de ordenadores y portátiles a domicilio en Villaviciosa, Gijón y toda Asturias. Diagnóstico claro, presupuesto antes de empezar y asistencia remota.",
        "h1": "Servicio técnico informático en Asturias",
        "lead": "Tu ordenador va lento, no arranca o ha cogido un virus. Te lo solucionamos a domicilio o en remoto, con un presupuesto claro antes de tocar nada.",
        "intro": [
            "Somos informáticos de Asturias y trabajamos con particulares, autónomos y pequeñas empresas de Villaviciosa, Gijón y alrededores. Hablamos claro, sin tecnicismos, y te explicamos qué le pasa a tu equipo y cuánto cuesta arreglarlo antes de empezar.",
            "Si el problema es de software (lentitud, virus, actualizaciones, correo, impresoras), a menudo podemos arreglarlo por asistencia remota, sin que tengas que moverte de casa. Si hace falta ir, te damos cita en cuanto haya hueco en la agenda."
        ],
        "features": [
            {
                "icon": "laptop",
                "title": "Reparación de ordenadores y portátiles",
                "text": "Pantallas, teclados, bisagras, baterías, conectores de carga, placas y fuentes de alimentación. Todas las marcas."
            },
            {
                "icon": "zap",
                "title": "Ordenador lento",
                "text": "Limpieza interna y de software, cambio a disco SSD y ampliación de memoria RAM. La diferencia se nota desde el primer arranque."
            },
            {
                "icon": "bug",
                "title": "Virus y malware",
                "text": "Eliminamos virus, publicidad invasiva y programas espía, y dejamos el equipo protegido para que no vuelva a pasar."
            },
            {
                "icon": "database",
                "title": "Recuperación de datos",
                "text": "Fotos, documentos y facturas de discos dañados, pendrives, tarjetas o equipos que no arrancan."
            },
            {
                "icon": "monitor",
                "title": "Instalación y configuración",
                "text": "Windows, macOS, impresoras, wifi, correo electrónico, antivirus y traspaso de datos a un equipo nuevo."
            },
            {
                "icon": "headset",
                "title": "Asistencia remota",
                "text": "Te conectamos de forma segura a tu ordenador y lo arreglamos mientras lo ves en pantalla. Sin desplazamientos."
            }
        ],
        "prices": [
            {
                "name": "Diagnóstico",
                "price": "20 €",
                "note": "Se descuenta si aceptas la reparación"
            },
            {
                "name": "Hora de trabajo a domicilio",
                "price": "27 €/hora",
                "note": "Más desplazamiento"
            },
            {
                "name": "Asistencia remota",
                "price": "25 €/hora",
                "note": "Fracciones de 30 minutos (12,50 €)"
            },
            {
                "name": "Formateo e instalación de Windows",
                "price": "40 €",
                "note": "Con copia de tus datos"
            },
            {
                "name": "Cambio a disco SSD",
                "price": "35 € + disco",
                "note": "Clonamos tu sistema, sin perder nada"
            },
            {
                "name": "Eliminación de virus",
                "price": "35 €",
                "note": "Incluye revisión de seguridad"
            },
            {
                "name": "Pasar datos a un equipo nuevo",
                "price": "25 €",
                "note": "Documentos, fotos, correo y programas"
            },
            {
                "name": "Recuperación de datos",
                "price": "desde 55 €",
                "note": "Discos y pendrives con fallos lógicos"
            },
            {
                "name": "Desplazamiento",
                "price": "10 € / 15 €",
                "note": "Villaviciosa (villa) / resto del concejo y Gijón"
            }
        ],
        "faqs": [
            {
                "q": "¿Cuánto cuesta reparar un ordenador?",
                "a": "Depende de la avería. El diagnóstico cuesta 20 € y se descuenta si aceptas la reparación. Las reparaciones más habituales tienen precio fijo: formateo 40 €, eliminación de virus 35 € o cambio a SSD por 35 € más el disco. Siempre te damos el precio antes de empezar."
            },
            {
                "q": "¿Vais a domicilio?",
                "a": "Sí. Vamos a domicilio y a empresas en Villaviciosa, Gijón y concejos cercanos como Colunga, Cabranes, Sariego o Siero. El desplazamiento cuesta 10 € en la villa de Villaviciosa y 15 € en el resto del concejo y en Gijón. Para el resto de Asturias ofrecemos asistencia remota."
            },
            {
                "q": "¿Cuánto tarda una reparación?",
                "a": "Las reparaciones de software suelen quedar listas en una visita o una sesión remota. Si hay que pedir una pieza, normalmente en 2 a 5 días laborables. Te decimos el plazo antes de empezar."
            },
            {
                "q": "¿Perderé mis archivos?",
                "a": "No si podemos evitarlo. Antes de formatear o cambiar un disco hacemos copia de seguridad de tus documentos, fotos y correo, y lo restauramos al terminar."
            },
            {
                "q": "¿Reparáis Mac?",
                "a": "Sí, trabajamos con Windows, macOS y Linux: instalación, lentitud, cambio a SSD, recuperación de datos y configuración."
            }
        ]
    },
    "desarrollo-web": {
        "path": "/desarrollo-web-negocios",
        "icon": "code",
        "nav": "Desarrollo web",
        "card_title": "Diseño y desarrollo web",
        "card_text": "Webs rápidas y modernas para negocios, tiendas online y SEO local para que te encuentren en Google.",
        "title": "Diseño y desarrollo web para negocios en Asturias | Webs con SEO local",
        "description": "Desarrollador web en Gijón y Asturias: páginas web para negocios, tiendas online, reservas y SEO local para aparecer en Google. Presupuesto sin compromiso.",
        "h1": "Desarrollo web para negocios en Asturias",
        "lead": "Una web rápida, bonita y pensada para que los clientes de tu zona te encuentren en Google y te llamen. Sin plantillas genéricas ni cuotas sorpresa.",
        "intro": [
            "Diseñamos y programamos páginas web para negocios asturianos: talleres, clínicas, sidrerías, casas rurales, comercios, despachos y autónomos. Cada proyecto se hace a medida, con un diseño moderno que transmite confianza y un código limpio que carga rápido en el móvil.",
            "Todas nuestras webs incluyen SEO local de base: estructura correcta, datos de empresa para Google, páginas por zona y servicio y configuración del Perfil de Empresa de Google. Es la forma más efectiva de que te encuentren cuando alguien busca lo que haces \"en Gijón\" o \"cerca de mí\"."
        ],
        "features": [
            {
                "icon": "monitor",
                "title": "Webs corporativas",
                "text": "Presenta tu negocio con una web profesional, adaptada a móvil y fácil de actualizar."
            },
            {
                "icon": "cart",
                "title": "Tiendas online",
                "text": "Vende tus productos en Internet con pagos seguros, gestión de stock y envíos."
            },
            {
                "icon": "search",
                "title": "SEO local",
                "text": "Optimización para aparecer en Google y Google Maps en tu ciudad, más Perfil de Empresa de Google."
            },
            {
                "icon": "calendar",
                "title": "Reservas y citas",
                "text": "Sistemas de reserva para restaurantes, alojamientos rurales, clínicas y peluquerías."
            },
            {
                "icon": "cloud",
                "title": "Hosting y mantenimiento",
                "text": "Nos ocupamos del alojamiento, copias de seguridad, actualizaciones y certificados SSL."
            },
            {
                "icon": "code",
                "title": "Aplicaciones a medida",
                "text": "Paneles de gestión, presupuestadores, áreas de clientes e integraciones con tu software."
            }
        ],
        "prices": [
            {
                "name": "Web profesional (hasta 5 secciones)",
                "price": "desde 550 €",
                "note": "Diseño a medida + SEO local básico"
            },
            {
                "name": "Tienda online",
                "price": "desde 1.600 €",
                "note": "Catálogo, pagos y envíos"
            },
            {
                "name": "Perfil de Empresa de Google",
                "price": "60 €",
                "note": "Creación u optimización, pago único"
            },
            {
                "name": "Mantenimiento web",
                "price": "49 €/mes",
                "note": "Hosting, copias, actualizaciones y pequeños cambios"
            }
        ],
        "faqs": [
            {
                "q": "¿Cuánto cuesta una página web para un negocio en Asturias?",
                "a": "Una web profesional de presentación parte de 550 € y una tienda online de 1.600 €. Te damos un presupuesto cerrado después de una primera reunión gratuita en la que vemos qué necesitas."
            },
            {
                "q": "¿Cuánto se tarda en tener la web lista?",
                "a": "Una web de presentación suele estar publicada en 2 a 4 semanas, dependiendo de lo rápido que tengamos textos y fotos. Una tienda online, entre 4 y 8 semanas."
            },
            {
                "q": "¿Me ayudáis a salir en Google Maps?",
                "a": "Sí. Creamos o revisamos tu Perfil de Empresa de Google, lo conectamos con la web y te explicamos cómo conseguir reseñas. Es lo que más influye en aparecer en el mapa cuando alguien busca cerca de ti."
            },
            {
                "q": "¿Podré modificar yo la web?",
                "a": "Sí. Te dejamos un panel sencillo para cambiar textos, fotos, precios o productos, y te enseñamos a usarlo. Si prefieres no tocar nada, el plan de mantenimiento incluye cambios pequeños."
            },
            {
                "q": "¿La web será mía?",
                "a": "Sí. El dominio, los contenidos y la web son tuyos. Si algún día quieres cambiar de proveedor, te entregamos todo."
            }
        ]
    },
    "empresas": {
        "path": "/informatica-para-empresas",
        "icon": "building",
        "nav": "Empresas",
        "card_title": "Informática para empresas",
        "card_text": "Mantenimiento, redes, copias de seguridad y ciberseguridad para pymes y autónomos. Tu departamento informático externo.",
        "title": "Mantenimiento informático para empresas en Gijón y Asturias",
        "description": "Mantenimiento informático para pymes y autónomos en Gijón, Villaviciosa y Asturias: redes, wifi, copias de seguridad, ciberseguridad y soporte con planes mensuales.",
        "h1": "Mantenimiento informático para empresas",
        "lead": "Somos tu departamento informático externo. Prevenimos averías, protegemos tus datos y te atendemos rápido cuando algo falla, con una cuota mensual clara.",
        "intro": [
            "Una avería en el ordenador de facturación o un ataque que cifra tus archivos puede parar tu negocio varios días. Con un plan de mantenimiento revisamos tus equipos de forma periódica, vigilamos las copias de seguridad y tenemos todo documentado para actuar rápido.",
            "Trabajamos con oficinas, comercios, talleres, despachos y hostelería de Gijón, Villaviciosa y el resto de Asturias, adaptándonos a su tamaño: desde un autónomo con un portátil hasta oficinas con varios puestos, servidor y red propia."
        ],
        "features": [
            {
                "icon": "shield",
                "title": "Ciberseguridad",
                "text": "Antivirus gestionado, cortafuegos, contraseñas seguras, doble factor y formación básica para tu equipo."
            },
            {
                "icon": "database",
                "title": "Copias de seguridad",
                "text": "Copias automáticas en local y en la nube, con pruebas periódicas de restauración."
            },
            {
                "icon": "wifi",
                "title": "Redes y wifi",
                "text": "Instalación y mejora de redes, wifi profesional, wifi para clientes separado y VPN para teletrabajo."
            },
            {
                "icon": "mail",
                "title": "Correo y ofimática",
                "text": "Correo profesional con tu dominio, Microsoft 365 y Google Workspace, migraciones sin pérdidas."
            },
            {
                "icon": "euro",
                "title": "Facturación y TPV",
                "text": "Instalación y soporte de software de facturación y TPV, y ayuda para adaptarte a VeriFactu."
            },
            {
                "icon": "headset",
                "title": "Soporte prioritario",
                "text": "Atención remota y visitas presenciales con prioridad para clientes con plan."
            }
        ],
        "prices": [
            {
                "name": "Plan Autónomo (1–2 equipos)",
                "price": "35 €/mes",
                "note": "Mantenimiento, copias y soporte remoto"
            },
            {
                "name": "Plan Pyme (hasta 10 equipos)",
                "price": "75 €/mes",
                "note": "Incluye visitas programadas"
            },
            {
                "name": "Auditoría inicial de seguridad",
                "price": "50 €",
                "note": "Gratis al contratar un plan"
            },
            {
                "name": "Instalación de red/wifi",
                "price": "presupuesto",
                "note": "Según metros y puestos"
            }
        ],
        "faqs": [
            {
                "q": "¿Qué incluye el mantenimiento informático para empresas?",
                "a": "Revisión periódica de equipos y actualizaciones, antivirus gestionado, supervisión de copias de seguridad, soporte remoto y visitas presenciales con prioridad. Lo concretamos por escrito según tu negocio."
            },
            {
                "q": "¿Hay permanencia?",
                "a": "No. Los planes son mensuales y puedes darte de baja cuando quieras avisando con 30 días."
            },
            {
                "q": "¿Cuánto tardáis en atender una incidencia?",
                "a": "Los clientes con plan tienen prioridad: les atendemos en remoto en cuanto podemos y, si hace falta ir, son los primeros en la agenda en Villaviciosa y Gijón."
            },
            {
                "q": "¿Nos ayudáis con VeriFactu?",
                "a": "Sí. Revisamos tu programa de facturación o TPV, te recomendamos una solución compatible si hace falta y la dejamos instalada y configurada."
            }
        ]
    }
};
