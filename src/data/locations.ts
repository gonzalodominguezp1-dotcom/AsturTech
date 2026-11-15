/**
 * Páginas locales. Cada zona tiene textos propios (no plantillas con el nombre
 * cambiado) para que Google las trate como contenido útil y no duplicado.
 */
import type { Faq, Feature } from './services';

export interface Location {
  path: string; name: string; title: string; description: string; h1: string; lead: string;
  intro: string[]; zones: string[]; highlights: Feature[]; faqs: Faq[]; nearby: string[];
}

const data: Record<string, Location> = {
    "villaviciosa": {
        "path": "/informatico-villaviciosa",
        "name": "Villaviciosa",
        "title": "Informático en Villaviciosa (Asturias) | Servicio técnico a domicilio",
        "description": "Informático en Villaviciosa y la comarca de la Sidra: reparación de ordenadores, wifi, ayuda a hostelería y casas rurales, y páginas web con reservas. A domicilio y en remoto.",
        "h1": "Informático en Villaviciosa",
        "lead": "Informático a domicilio en Villaviciosa y su concejo. Arreglamos ordenadores, mejoramos tu wifi y ayudamos a los negocios de la comarca a vender más por Internet.",
        "intro": [
            "Damos servicio en la villa y en todas las parroquias del concejo: Tazones, Amandi, Quintes, Quintueles, Selorio y Rodiles, Valdediós, Lugás, Peón o Venta de las Ranas. Sabemos que en la zona rural la conexión y el wifi dan guerra, y es uno de los problemas que más resolvemos.",
            "Trabajamos mucho con sidrerías, restaurantes, alojamientos rurales y comercios de Villaviciosa: TPV y facturación, wifi para clientes, webs con reservas directas para no depender tanto de las plataformas y presencia en Google Maps para atraer al turismo que visita la comarca."
        ],
        "zones": [
            "Villaviciosa (villa)",
            "Tazones",
            "Amandi",
            "Quintes",
            "Quintueles",
            "Selorio",
            "Rodiles",
            "Valdediós",
            "Lugás",
            "Peón",
            "Venta de las Ranas",
            "Careñes",
            "Oles",
            "Argüero"
        ],
        "highlights": [
            {
                "icon": "wifi",
                "title": "Wifi y conexión en zona rural",
                "text": "Repetidores, redes mesh y soluciones para casas grandes y negocios con mala cobertura."
            },
            {
                "icon": "calendar",
                "title": "Webs para turismo rural",
                "text": "Páginas con reservas directas para casas rurales, apartamentos y restaurantes."
            },
            {
                "icon": "euro",
                "title": "Hostelería y comercio",
                "text": "TPV, facturación, impresoras de tickets y adaptación a VeriFactu."
            }
        ],
        "faqs": [
            {
                "q": "¿Venís a domicilio a Villaviciosa?",
                "a": "Sí, somos de aquí y vamos a la villa y a todas las parroquias del concejo con cita previa. El desplazamiento cuesta 10 € en la villa y 15 € en el resto del concejo, y siempre te damos presupuesto antes de empezar."
            },
            {
                "q": "Tengo mala cobertura wifi en casa, ¿podéis ayudarme?",
                "a": "Sí. Medimos la cobertura, revisamos el router y te proponemos la solución más económica: reubicar el router, un sistema mesh, puntos de acceso por cable o, en zonas sin fibra, alternativas como 4G/5G o satélite."
            },
            {
                "q": "¿Hacéis webs para casas rurales de la comarca?",
                "a": "Sí. Hacemos webs con motor de reservas propio y las posicionamos para búsquedas de turismo en Villaviciosa y la costa, además de optimizar tu ficha de Google Maps."
            },
            {
                "q": "¿También atendéis Colunga, Cabranes o Sariego?",
                "a": "Sí, damos servicio en los concejos vecinos de Colunga, Cabranes, Sariego, Nava y Siero."
            }
        ],
        "nearby": [
            "gijon",
            "asturias"
        ]
    },
    "gijon": {
        "path": "/informatico-gijon",
        "name": "Gijón",
        "title": "Informático en Gijón | Reparación de ordenadores y servicio técnico",
        "description": "Informático en Gijón a domicilio y en remoto: reparación de ordenadores y portátiles, virus, redes, mantenimiento para empresas y desarrollo web. Llama o escribe por WhatsApp.",
        "h1": "Informático en Gijón",
        "lead": "Servicio técnico informático en Gijón para casas, comercios y empresas. Vamos a tu domicilio u oficina con cita previa o te atendemos en remoto.",
        "intro": [
            "Desde Villaviciosa nos movemos a Gijón con cita previa: del Centro y Cimadevilla a La Calzada, El Llano, Pumarín o Viesques, y por los polígonos de Porceyo, Roces, Tremañes y Mora Garay. Muchas incidencias las resolvemos además en remoto, sin desplazamientos.",
            "Particulares que necesitan arreglar el portátil, autónomos que dependen de su ordenador para facturar o pymes que quieren olvidarse de la informática: a todos les damos un diagnóstico claro, un presupuesto antes de empezar y seguimiento después."
        ],
        "zones": [
            "Centro",
            "Cimadevilla",
            "El Llano",
            "La Arena",
            "La Calzada",
            "Pumarín",
            "Nuevo Gijón",
            "Contrueces",
            "Montevil",
            "Viesques",
            "Somió",
            "El Coto",
            "Natahoyo",
            "Tremañes",
            "Roces",
            "Porceyo",
            "Parque Científico y Tecnológico"
        ],
        "highlights": [
            {
                "icon": "calendar",
                "title": "Visitas con cita previa",
                "text": "Nos cuentas el problema, te damos día y hora y te decimos el precio antes de ir."
            },
            {
                "icon": "headset",
                "title": "Asistencia remota",
                "text": "Muchos problemas de software se arreglan conectándonos a tu equipo, sin esperar a la visita."
            },
            {
                "icon": "building",
                "title": "Empresas y comercios",
                "text": "Mantenimiento, redes y soporte para negocios gijoneses con planes mensuales sin permanencia."
            }
        ],
        "faqs": [
            {
                "q": "¿Tenéis local en Gijón?",
                "a": "No, trabajamos a domicilio y en remoto desde Villaviciosa. Así no tienes que cargar con el equipo: vamos a tu casa u oficina en Gijón con cita previa."
            },
            {
                "q": "¿Cuánto cuesta que venga un informático a casa en Gijón?",
                "a": "El desplazamiento a Gijón cuesta 15 € y después se cobra el tiempo de trabajo (30 €/hora, IVA incluido) o el precio cerrado de la reparación. Siempre te decimos el precio antes de empezar."
            },
            {
                "q": "¿Hacéis páginas web para negocios de Gijón?",
                "a": "Sí, diseñamos webs y tiendas online para negocios de Gijón con SEO local para que aparezcan en Google cuando alguien busca su servicio en la ciudad."
            },
            {
                "q": "¿Atendéis urgencias?",
                "a": "Escríbenos por WhatsApp o llámanos a cualquier hora. Si se puede resolver en remoto lo intentamos cuanto antes; si hay que ir, te damos el primer hueco libre."
            }
        ],
        "nearby": [
            "villaviciosa",
            "asturias"
        ]
    },
    "asturias": {
        "path": "/informatico-asturias",
        "name": "Asturias",
        "title": "Servicio técnico informático en Asturias | Informáticos a domicilio y en remoto",
        "description": "Servicio técnico informático en Asturias: Gijón, Villaviciosa, Oviedo, Avilés, Siero y más. Reparación de ordenadores, soporte a empresas y desarrollo web. Asistencia remota en toda la región.",
        "h1": "Servicio técnico informático en Asturias",
        "lead": "Informáticos asturianos para particulares y empresas de toda la región. Presencial en el centro y oriente de Asturias, y en remoto en cualquier concejo.",
        "intro": [
            "Estamos en Villaviciosa y cubrimos de forma presencial el concejo, Gijón y los concejos cercanos: Colunga, Cabranes, Sariego, Nava y Siero (Pola de Siero, Lugones). En Oviedo, Avilés, Llanera, Carreño o Corvera atendemos bajo presupuesto, sobre todo a empresas con plan de mantenimiento.",
            "Para el resto de Asturias trabajamos en remoto: con una conexión segura resolvemos la mayoría de problemas de software, correo, impresoras o configuración sin desplazamientos. Si hace falta reparar el hardware, organizamos la recogida del equipo."
        ],
        "zones": [
            "Gijón",
            "Villaviciosa",
            "Oviedo",
            "Avilés",
            "Siero",
            "Lugones",
            "Pola de Siero",
            "Llanera",
            "Carreño (Candás)",
            "Corvera",
            "Colunga",
            "Nava",
            "Sariego",
            "Cabranes"
        ],
        "highlights": [
            {
                "icon": "map-pin",
                "title": "Presencial en el centro y oriente",
                "text": "Gijón, Villaviciosa y concejos cercanos, con visitas a domicilio y a empresas."
            },
            {
                "icon": "headset",
                "title": "Remoto en toda Asturias",
                "text": "Soporte seguro por conexión remota, estés en el concejo que estés."
            },
            {
                "icon": "code",
                "title": "Desarrollo web regional",
                "text": "Webs y SEO local para negocios de cualquier punto de Asturias."
            }
        ],
        "faqs": [
            {
                "q": "¿En qué zonas de Asturias dais servicio presencial?",
                "a": "Villaviciosa, Gijón, Colunga, Cabranes, Sariego, Nava y Siero. En Oviedo, Avilés y el resto del centro de Asturias, bajo presupuesto. En cualquier otro concejo trabajamos en remoto."
            },
            {
                "q": "¿Cómo funciona la asistencia remota?",
                "a": "Te enviamos un enlace para instalar un programa de conexión segura. Tú nos das el código de acceso, ves en pantalla todo lo que hacemos y la conexión se cierra al terminar. No queda ningún acceso abierto."
            },
            {
                "q": "¿Hacéis webs para negocios de toda Asturias?",
                "a": "Sí. El desarrollo web lo hacemos para negocios de cualquier concejo; las reuniones pueden ser presenciales o por videollamada."
            }
        ],
        "nearby": [
            "gijon",
            "villaviciosa"
        ]
    }
};

export const locations = data;
