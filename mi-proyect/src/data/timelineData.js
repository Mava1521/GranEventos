import History1 from '../assets/History1.jpg';
import History2 from '../assets/History2.jpg';
import History3 from '../assets/History3.jpg';
import History5 from '../assets/History5.jpg';
import History6 from '../assets/History6.jpg';
import History7 from '../assets/History7.jpg';

const timelineData = [
  {
    id: '1987',
    year: '1987',
    tag: 'EL INICIO',
    title: 'Nace Gran Eventos',
    description: 'Nace Gran Eventos con la pasión de crear experiencias inolvidables a través de la producción de eventos.',
    fullDesc: 'En 1987, dos visionarios sentaron las bases de lo que se convertiría en el referente técnico y logístico para grandes eventos en el país. Con un primer tráiler equipado y planos dibujados a mano, la empresa inició su camino impulsada por la pasión por el trabajo impecable y la excelencia operativa.',
    image: History1,
    stats: [
      { label: 'Proyectos Año 1', value: '12' },
      { label: 'Equipo Inicial', value: '5 personas' },
      { label: 'Potencia Inicial', value: '50 kVA' }
    ],
    highlights: [
      'Primer camión de asistencia móvil GE',
      'Diseño artesanal de redes temporales de energía',
      'Atención a los primeros festivales locales'
    ]
  },
  {
    id: '1995',
    year: '1995',
    tag: 'CRECIMIENTO',
    title: 'Primeros Grandes Conciertos',
    description: 'Ampliamos nuestra capacidad técnica y acompañamos los primeros grandes conciertos del país.',
    fullDesc: 'Durante la década de los 90, la industria del entretenimiento despegó en la región. Gran Eventos expandió drásticamente su estructura de truss y sistemas de distribución eléctrica, participando en las giras nacionales de artistas internacionales icónicos.',
    image: History3,
    stats: [
      { label: 'Capacidad Técnica', value: '+300%' },
      { label: 'Conciertos/Año', value: '45+' },
      { label: 'Ciudades Cubiertas', value: '6' }
    ],
    highlights: [
      'Adquisición de estructuras truss de alta resistencia',
      'Especialización en sonorización masiva y soporte',
      'Primeros contratos de gran escala en estadios'
    ]
  },
  {
    id: '2000',
    year: '2000',
    tag: 'ENERGÍA EN ESCENA',
    title: 'Especialización Energética',
    description: 'Nos especializamos en la generación de energía para eventos masivos, garantizando confiabilidad y seguridad.',
    fullDesc: 'Con la llegada del nuevo milenio, el enfoque estratégico se centró en la confiabilidad energética crítica. Se implementaron plantas generadoras insonorizadas de última generación y sistemas redundantes tipo N+1 para evitar interrupciones en espectáculos en vivo.',
    image: History2,
    stats: [
      { label: 'MW Instalados', value: '15 MW' },
      { label: 'Confiabilidad', value: '99.9%' },
      { label: 'Eventos Masivos', value: '80+' }
    ],
    highlights: [
      'Implementación de transferencia automática de energía',
      'Personal técnico certificado en alta tensión temporal',
      'Creación del protocolo GE Zero Interruption'
    ]
  },
  {
    id: '2005',
    year: '2005',
    tag: 'NUEVOS HORIZONTES',
    title: 'Expansión Nacional',
    description: 'Llevamos nuestra experiencia a más ciudades de Colombia, consolidándonos como un aliado estratégico del entretenimiento.',
    fullDesc: 'Gran Eventos expandió sus operaciones a lo largo y ancho del territorio colombiano, desde la Costa Caribe hasta el Suroccidente. La empresa se convirtió en el socio técnico clave para festivales itinerantes y macroeventos institucionales.',
    image: History5,
    stats: [
      { label: 'Cobertura', value: 'Nacional' },
      { label: 'Departamentos', value: '18' },
      { label: 'Asistentes/Año', value: '1.2M+' }
    ],
    highlights: [
      'Presencia en los principales festivales de Colombia',
      'Logística de transporte propia para zonas complejas',
      'Alianzas con los más grandes promotores del país'
    ]
  },
  {
    id: '2010',
    year: '2010',
    tag: 'GRANDES ALIANZAS',
    title: 'Líderes de la Industria',
    description: 'Hacemos parte de los eventos más importantes del país, trabajando con artistas, marcas y productores de talla internacional.',
    fullDesc: 'Para 2010, la marca GE era sinónimo de garantía absoluta. Grandes giras mundiales de pop y rock exigían la infraestructura de Gran Eventos para sus paradas en el país, consolidando estándares técnicos de nivel mundial.',
    image: History6,
    stats: [
      { label: 'Artistas TOP Global', value: '50+' },
      { label: 'Staff Operativo', value: '120+' },
      { label: 'Satisfacción', value: '100%' }
    ],
    highlights: [
      'Suministro integral para estadios completos',
      'Cumplimiento de riders internacionales exigentes',
      'Modernización de flota de módulos insonorizados GE'
    ]
  },
  {
    id: '2015',
    year: '2015',
    tag: 'INNOVACIÓN CON PROPÓSITO',
    title: 'Eficiencia Tecnológica',
    description: 'Incorporamos nuevas tecnologías y soluciones eficientes para optimizar el consumo de energía en eventos.',
    fullDesc: 'Iniciamos una profunda reingeniería tecnológica orientada al consumo inteligente. Integrando telemetría en tiempo real y monitoreo remoto de cargas, logramos reducir significativamente el consumo de combustible diésel por kilovatio generado.',
    image: History7,
    stats: [
      { label: 'Ahorro Diésel', value: '25%' },
      { label: 'Monitoreo', value: 'IoT Real-Time' },
      { label: 'Giras Simultáneas', value: '5' }
    ],
    highlights: [
      'Sistemas de gestión de carga dinámicos',
      'Reducción de huella acústica en entornos urbanos',
      'Certificaciones de seguridad industrial ISO 45001'
    ]
  },
  {
    id: '2020',
    year: '2020',
    tag: 'RESILIENCIA Y EVOLUCIÓN',
    title: 'Adaptación y Futuro',
    description: 'Nos adaptamos a nuevos formatos y desafíos, fortaleciendo nuestra infraestructura y talento para seguir conectando personas.',
    fullDesc: 'Frente a los retos globales sin precedentes de 2020, Gran Eventos diversificó sus capacidades hacia centros de respuesta rápida, transmisiones por streaming de alta demanda energética e infraestructura temporal para sectores estratégicos.',
    image: History2,
    stats: [
      { label: 'Proyectos Especiales', value: '35+' },
      { label: 'Formatos Híbridos', value: '100%' },
      { label: 'Continuidad', value: '100%' }
    ],
    highlights: [
      'Respuesta técnica y logística en tiempo récord',
      'Desarrollo de centros de comando híbridos',
      'Planificación de la transición energética sostenible'
    ]
  },
  {
    id: '2023',
    year: '2023',
    tag: 'INICIA LA TRANSFORMACIÓN',
    title: 'Alianza Estratégica SETIE',
    description: 'Junto a SETIE, comenzamos un nuevo capítulo hacia la energía renovable, integrando soluciones sostenibles.',
    fullDesc: 'Nace la unión con SETIE (Soluciones Energéticas Temporales). Esta alianza revolucionaria introdujo bancos de baterías a gran escala, microredes solares fotovoltaicas móviles y generadores híbridos para la industria del entretenimiento.',
    image: History7,
    stats: [
      { label: 'Paneles Móviles', value: '500+ kW' },
      { label: 'Baterías BESS', value: '1.2 MWh' },
      { label: 'Reducción CO2', value: '-40%' }
    ],
    highlights: [
      'Lanzamiento oficial de la marca conjunta SETIE',
      'Primer concierto masivo alimentado por energía solar acumulada',
      'Integración de economía circular en la producción'
    ]
  },
  {
    id: '2026',
    year: '2026',
    tag: 'UN FUTURO MÁS LIMPIO',
    title: 'Same Passion Greener Tomorrow',
    description: 'Seguimos innovando para eventos más sostenibles, conectando tecnología, personas y planeta.',
    fullDesc: 'En 2026 nos consolidamos como pioneros absolutos de eventos 100% net-zero en la región. Combinando la misma pasión técnica con tecnología eólica, solar e hidrógeno verde, garantizamos la energía de los grandes escenarios sin dejar huella.',
    image: History1,
    stats: [
      { label: 'Sostenibilidad', value: 'Net-Zero' },
      { label: 'Energía Verde', value: '85%' },
      { label: 'Compromiso 2030', value: '100% Eco' }
    ],
    highlights: [
      'Sistemas eólicos y solares portátiles de alto rendimiento',
      'Certificación Verde para producciones internacionales',
      'La misma pasión de 1987 con la tecnología más limpia del mañana'
    ]
  }
];

export default timelineData;