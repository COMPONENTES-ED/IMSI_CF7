<template>
  <div class="curso-main-container referencias">
    <BannerInterno
      icono="fas fa-book"
      titulo="Referencias bibliográficas"
    ></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div v-for="ref in orderedData" :key="ref.link" class="referencias__item">
        <span v-html="ref.referencia"></span
        ><a v-if="ref.link" class="ms-1" :href="ref.link" target="_blank"
          ><span v-html="ref.link"></span
          ><i class="ms-1 fas fa-external-link-alt"></i
        ></a>
        <hr class="my-3" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Referencias',
  data: () => ({
    referencias: [
      {
        referencia:
          'Díaz Martínez, O. I., & Suárez Hernández, D. L. (2012). Desarrollo e implementación de un Software de Control para los servicios de la oficina de soporte tecnológico en la Dirección Ejecutiva Seccional de Administración Judicial – Consejo Superior de la Judicatura de Bogotá [Trabajo de grado de pregrado, Universidad Cooperativa de Colombia]. Repositorio UCC. ',
        link: 'https://hdl.handle.net/20.500.12494/12378',
      },
      {
        referencia:
          'Escandon Cardenas, J. S. (2020). Mantenimiento preventivo y correctivo a los equipos del laboratorio de electrónica avanzada de la Facultad de Ingeniería Universidad de los Andes [Trabajo de grado de pregrado, Universidad Distrital Francisco José de Caldas]. Repositorio Institucional RIUD.',
        link: 'http://hdl.handle.net/11349/24314',
      },
      {
        referencia:
          'Gil Jiménez, N. D. (2019). Realización de mantenimiento preventivo y correctivo de dispositivos médicos e industriales en las E.S.E donde ARKYMED EQUIPOS S.A.S presta sus servicios [Trabajo de grado, Universidad Santo Tomás]. Repositorio Institucional USTA. ',
        link: 'http://hdl.handle.net/11634/19391',
      },
      {
        referencia:
          'Quintero Cubillos, J.  (2016).  Plan de mantenimiento correctivo y preventivo de hardware y software e instalación de redes informáticas.    Universidad Cooperativa de Colombia, Facultad de Ingenierías, Ingeniería de Sistemas, Neiva.  Disponible en: ',
        link: 'https://hdl.handle.net/20.500.12494/45522 ',
      },
      {
        referencia:
          'Restrepo Cataño, J. A. (2021). Soporte técnico a equipos de cómputo en la compañía NUTRESA. Tecnológico de Antioquia. Repositorio Tdea. ',
        link: 'https://dspace.tdea.edu.co/handle/tdea/2033',
      },
      {
        referencia:
          'Vargas Tovar, A. M. (2014). <em>Prestar los servicios de apoyo a la gestión de mantenimiento de impresoras, soporte a las instalaciones de equipos de oficina así como el mantenimiento del hardware</em> [Trabajo de grado de pregrado, Universidad Cooperativa de Colombia]. Repositorio UCC.',
        link: 'https://hdl.handle.net/20.500.12494/43966',
      },
      {
        referencia:
          'Urbano Figueroa, A. S., & Nagles Gutierrez, J. S. (2021). Diseño e implementación de un plan de mantenimiento preventivo y correctivo para la empresa Ingeniería MYM S.A.S [Trabajo de grado de pregrado, Universidad Distrital Francisco José de Caldas]. Repositorio Institucional RIUD.',
        link: 'http://hdl.handle.net/11349/26703',
      },
    ],
  }),
  computed: {
    orderedData() {
      return [...this.referencias].sort((a, b) => {
        const afl = this.quitarAcentos(a.referencia.split(' ')[0].toLowerCase())
        const bfl = this.quitarAcentos(b.referencia.split(' ')[0].toLowerCase())
        if (afl < bfl) return -1
        if (afl > bfl) return 1
        return 0
      })
    },
  },
  methods: {
    quitarAcentos(str) {
      return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    },
  },
}
</script>

<style lang="sass">
.referencias
  &__item
    &:last-child
      hr
        display: none
    a
      color: $blue
      text-decoration: underline
      overflow-wrap: break-word
</style>
