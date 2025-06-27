<template>
  <div class="curso-main-container glosario">
    <BannerInterno icono="fas fa-atlas" titulo="Glosario"></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div
        v-for="letra in orderedData"
        :key="'letra-' + letra.letra"
        class="glosario__letra-item mb-2"
      >
        <div class="glosario__letra-item__letra me-4">
          <div class="glosario__letra-item__letra__icono">
            <span>{{ letra.letra }}</span>
          </div>
        </div>
        <div class="glosario__letra-item__texto">
          <p
            v-for="termino in letra.terminos"
            :key="termino.termino"
            class="mb-3"
          >
            <strong><i class="lista-ul__vineta"></i></strong
            ><strong v-html="termino.terminoHtml || termino.termino"> </strong
            ><strong>: </strong><span v-html="termino.significado"></span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import plantillaMixins from '@/js/plantillaMixins'
export default {
  name: 'Glosario',
  mixins: [plantillaMixins],
  data() {
    return {
      glosarioData: [
        {
          termino: 'Arquitectura de <em>hardware</em>',
          significado:
            'Conjunto de componentes físicos y sus interconexiones que forman un equipo de cómputo, incluyendo procesador, memoria, tarjeta madre y otros dispositivos.',
        },
        {
          termino: 'Bitácora de mantenimiento',
          significado:
            'Registro detallado de cada intervención realizada en un equipo, indicando fechas, procedimientos y resultados.',
        },
        {
          termino: 'Compatibilidad',
          significado:
            'Capacidad de los componentes para trabajar juntos sin conflictos o problemas de funcionamiento.',
        },
        {
          termino: 'Diagnóstico',
          significado:
            'Proceso de evaluación para identificar el estado y posibles problemas en los componentes del equipo.',
        },
        {
          termino: 'ESD',
          significado:
            'Descarga electrostática que puede dañar los componentes electrónicos; se controla mediante protección adecuada.',
        },
        {
          termino: 'Factor de forma',
          significado:
            'Tamaño y diseño físico de un componente, que determina su compatibilidad y disposición en el equipo.',
        },
        {
          termino: '<em>Firmware</em>',
          significado:
            'Programa instalado en componentes de <em>hardware</em> que permite su control y operación; puede actualizarse para mejorar el rendimiento.',
        },
        {
          termino: 'Fuente de poder',
          significado:
            'Dispositivo que convierte la energía eléctrica y la distribuye a los diferentes componentes del equipo.',
        },
        {
          termino: 'Hoja de vida del equipo',
          significado:
            'Documento que registra el historial de uso y mantenimiento realizado a un equipo de cómputo.',
        },
        {
          termino: 'Indicador de gestión',
          significado:
            'Métrica utilizada para evaluar el desempeño y la efectividad de los procesos de mantenimiento.',
        },
        {
          termino: 'Lubricación',
          significado:
            'Aplicación de lubricantes a partes móviles para reducir el desgaste y mejorar el funcionamiento.',
        },
        {
          termino: '<em>Mainboard</em>',
          significado:
            'Tarjeta principal de un equipo de cómputo donde se conectan todos los componentes y dispositivos internos.',
        },
        {
          termino: 'Mantenimiento preventivo',
          significado:
            'Proceso periódico de revisión y limpieza que busca mantener en buen estado los equipos y reducir la posibilidad de fallas.',
        },
        {
          termino: 'Memoria RAM',
          significado:
            'Memoria de acceso aleatorio que permite el almacenamiento temporal de datos para ser procesados por el sistema.',
        },
        {
          termino: 'Procesador',
          significado:
            'Componente que realiza operaciones aritméticas y lógicas, ejecutando instrucciones para el funcionamiento del sistema.',
        },
        {
          termino: 'Puertos',
          significado:
            'Puntos de conexión que permiten conectar dispositivos externos o periféricos al equipo de cómputo.',
        },
        {
          termino: 'Ranuras de expansión',
          significado:
            'Espacios en la <em>mainboard</em> donde se pueden instalar tarjetas de expansión como las de video o sonido.',
        },
        {
          termino: 'Sistema de refrigeración',
          significado:
            'Mecanismo que ayuda a mantener la temperatura adecuada en los componentes del equipo para evitar sobrecalentamientos.',
        },
        {
          termino: 'Tarjeta de expansión',
          significado:
            'Tarjeta adicional que se conecta a la <em>mainboard</em> para aumentar o mejorar las capacidades del equipo.',
        },
        {
          termino: '<em>Tester</em>',
          significado:
            'Instrumento de medición utilizado para verificar el estado de funcionamiento de componentes eléctricos y electrónicos',
        },
      ],
    }
  },
  computed: {
    orderedData() {
      const newGlosarioData = [...this.glosarioData]
      newGlosarioData.forEach(element => {
        element.significado =
          element.significado.charAt(0).toLowerCase() +
          element.significado.slice(1)
      })

      const sortedData = [...newGlosarioData].reduce((r, e) => {
        const letra = this.quitarAcentos(e.termino.toLowerCase())[0]
        if (!r[letra]) r[letra] = { letra, terminos: [e] }
        else r[letra].terminos.push(e)
        return r
      }, {})

      const soloLetras = Object.keys(sortedData).sort()
      const newSortedData = []

      soloLetras.forEach(element => {
        const letraObj = sortedData[element]
        let terminos = letraObj.terminos

        if (terminos.length > 1) {
          const terminosOrdenados = []
          const soloTerminos = letraObj.terminos
            .map(termObj => termObj.termino)
            .sort((a, b) => {
              const an = this.quitarAcentos(a).toLowerCase()
              const bn = this.quitarAcentos(b).toLowerCase()
              if (an < bn) return -1
              if (bn < an) return 1
              return 0
            })
          soloTerminos.forEach(term => {
            terminosOrdenados.push(
              terminos.find(termino => termino.termino === term),
            )
          })
          terminos = terminosOrdenados
        }
        newSortedData.push({
          letra: letraObj.letra.toUpperCase(),
          terminos: terminos,
        })
      })
      return newSortedData
    },
  },
}
</script>

<style lang="sass">
.glosario
  &__letra-item
    display: flex
    &__texto
      padding-top: 5px
    &__letra
      &__icono
        width: 32px
        height: 32px
        position: relative
        line-height: 1em
        border-radius: 50%
        background-color: $color-sistema-d

        span
          position: absolute
          left: 50%
          top: 50%
          transform: translate(-50%,-50%)
          font-size: 1.1em
          font-weight: $base-black-font-weight
</style>
