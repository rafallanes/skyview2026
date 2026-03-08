export const tocSections = [
  { id: "introduccion", label: "1. Introducción y propósito" },
  { id: "descripcion", label: "2. Descripción del proyecto" },
  { id: "fases", label: "3. Fases de trabajo" },
  { id: "entregables", label: "4. Entregables" },
  { id: "raci", label: "5. Matriz RACI" },
  { id: "economicas", label: "6. Condiciones económicas" },
  { id: "propiedad", label: "7. Propiedad intelectual" },
  { id: "confidencialidad", label: "8. Confidencialidad" },
  { id: "advertencia-ia", label: "9. Advertencia sobre inteligencia artificial" },
  { id: "supervision", label: "10. Supervisión y responsabilidad operativa" },
  { id: "cambios", label: "11. Gestión de cambios" },
  { id: "relacion", label: "12. Naturaleza de la relación" },
  { id: "vigencia", label: "13. Vigencia y terminación" },
  { id: "jurisdiccion", label: "14. Jurisdicción y ley aplicable" },
];

export const entregablesTable = [
  { fase: "START", entregables: "Informe de Diagnóstico IA, Mapa de Procesos, Roadmap 90 días" },
  { fase: "SPRINT", entregables: "Solución en producción, Documentación, Dashboard KPIs, Informe de impacto" },
  { fase: "Oficina de IA", entregables: "Informes trimestrales, Soporte continuo, Formación mensual" },
];

export const raciMatrix = [
  { actividad: "Definición de alcance y objetivos del proyecto", skyview: "R / A", direccion: "A / C", equipo: "I", it: "I" },
  { actividad: "Auditoría de procesos y entrevistas (Fase START)", skyview: "R", direccion: "C", equipo: "C", it: "C" },
  { actividad: "Elaboración del Informe de Diagnóstico", skyview: "R / A", direccion: "C", equipo: "I", it: "I" },
  { actividad: "Validación y aprobación del Roadmap", skyview: "C", direccion: "R / A", equipo: "I", it: "I" },
  { actividad: "Diseño de arquitectura de soluciones IA", skyview: "R / A", direccion: "C", equipo: "I", it: "C" },
  { actividad: "Acceso y configuración de plataformas del Cliente", skyview: "C", direccion: "A", equipo: "I", it: "R" },
  { actividad: "Contratación y pago de licencias de terceros (APIs, SaaS)", skyview: "I", direccion: "A / R", equipo: "I", it: "R" },
  { actividad: "Desarrollo y configuración de automatizaciones", skyview: "R / A", direccion: "I", equipo: "C", it: "C" },
  { actividad: "Pruebas en entorno controlado", skyview: "R", direccion: "C", equipo: "R", it: "C" },
  { actividad: "Validación y aprobación de soluciones antes de producción", skyview: "C", direccion: "R / A", equipo: "C", it: "C" },
  { actividad: "Despliegue en producción", skyview: "R", direccion: "A", equipo: "I", it: "C / R" },
  { actividad: "Formación del equipo usuario", skyview: "R / A", direccion: "C", equipo: "R", it: "I" },
  { actividad: "Supervisión de uso y validación en producción", skyview: "I", direccion: "A", equipo: "R", it: "I" },
  { actividad: "Seguimiento de KPIs e impacto", skyview: "R", direccion: "C", equipo: "C", it: "I" },
  { actividad: "Aprobación de cambios de alcance", skyview: "C", direccion: "R / A", equipo: "I", it: "I" },
  { actividad: "Gestión de incidencias técnicas en plataformas del Cliente", skyview: "I", direccion: "A", equipo: "I", it: "R" },
];
