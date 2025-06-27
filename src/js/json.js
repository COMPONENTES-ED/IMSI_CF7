export default {
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Arquitectura de <em>hardware</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Sistemas y componentes',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Factores de forma y compatibilidad',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Sistemas de refrigeración',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Procedimientos de mantenimiento preventivo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Protocolos de limpieza y conservación',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Lubricación de partes móviles',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Diagnóstico preliminar',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Herramientas y equipos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Instrumentos de medición',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Herramientas especializadas',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Elementos de protección personal (EPP)',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Documentación y control',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Hojas de vida de equipos',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Bitácoras de mantenimiento',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Indicadores de gestión',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Conclusiones',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/228142_CF07_DU_V2.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  global: {
    Name:
      'Mantenimiento preventivo de equipos de cómputo: técnicas y procedimiento',
    Description:
      'El programa de formación "Mantenimiento preventivo de equipos de cómputo: técnicas y procedimientos" prepara a los participantes en la revisión y conservación de equipos de cómputo mediante técnicas de limpieza, diagnóstico y documentación. Aborda temas de arquitectura de hardware, manejo de herramientas especializadas y protocolos de seguridad, promoviendo prácticas para prolongar la vida útil de los dispositivos y asegurar su rendimiento.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
    ],
  },
}
